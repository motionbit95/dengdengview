const admin = require("firebase-admin");
const serviceAccount = require("./path/to/serviceAccountKey.json");
const fs = require("fs");
const puppeteer = require("puppeteer");
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const CryptoJS = require("crypto-js");

app.use(express.json());

app.use(cors());

const port = 3001;

// Firebase 초기화
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "dangdangview.appspot.com",
});

const cname = "Campain";

// // JSON 파일 읽기
// fs.readFile(`./path/to/${cname}.json`, "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading JSON file:", err);
//     return;
//   }

//   try {
//     // JSON 파싱
//     const jsonData = JSON.parse(data);

//     // Firestore에 데이터 업로드
//     const db = admin.firestore();
//     const collectionRef = db.collection(cname); // 업로드할 컬렉션 이름

//     jsonData.forEach((data) => {
//       collectionRef
//         .add(data)
//         .then((docRef) => {
//           console.log("Document written with ID:", docRef.id);
//         })
//         .catch((error) => {
//           console.error("Error adding document:", error);
//         });
//     });
//   } catch (error) {
//     console.error("Error parsing JSON:", error);
//   }
// });

const axios = require("axios");
const cheerio = require("cheerio");

const https = require("https");

const bucket = admin.storage().bucket();

// 다운로드할 파일 경로 및 이름
const downloadFolderPath = "downloads"; // 이미지를 저장할 폴더 경로

// // 이미지를 다운로드할 URL
// const imageUrl = "https://example.com/image.jpg";

// // 다운로드할 파일 경로 및 이름
// const filePath = "downloaded_image.jpg";
// 이미지를 다운로드하고 Firebase Storage에 업로드하는 함수
async function downloadAndUploadImage(imageUrl, filePath) {
  // 다운로드할 폴더가 없으면 생성
  if (!fs.existsSync(downloadFolderPath)) {
    fs.mkdirSync(downloadFolderPath);
  }

  // HTTP GET 요청을 사용하여 이미지를 다운로드
  const file = fs.createWriteStream(filePath);
  await new Promise((resolve, reject) => {
    const request = https.get(imageUrl, (response) => {
      response.pipe(file);
      file.on("finish", () => {
        file.close(resolve);
      });
    });
    request.on("error", (err) => {
      fs.unlink(filePath, () => {
        reject(err.message);
      });
    });
  });

  // Firebase Storage에 파일 업로드
  await bucket.upload(filePath, {
    destination: filePath,
  });

  console.log("이미지가 Firebase Storage에 업로드되었습니다.");

  // 다운로드한 파일 삭제
  fs.unlinkSync(filePath);
  console.log("다운로드한 이미지 파일이 삭제되었습니다.");
}

// axios를 활용해 AJAX로 HTML 문서를 가져오는 함수 구현
async function getHTML(blogId, logNo) {
  try {
    return await axios.get(
      // "https://blog.naver.com/vkfksskfk7257/223376535368"
      `https://blog.naver.com/PostView.naver?blogId=${blogId}&logNo=${logNo}&redirect=Dlog&widgetTypeCall=true&noTrackingCode=true&directAccess=false`
    );
  } catch (error) {
    console.error(error);
  }
}

// getHTML 함수 실행 후 데이터에서
// body > main > div > section > ul > li > article > h2 > a
// 에 속하는 제목을 titleList에 저장

// getHTML()
//   .then((html) => {
//     let titleList = [];
//     const $ = cheerio.load(html.data);
//     // console.log(html.data);

//     // 블로그 제목 가져오기
//     const blogTitle = $("title").map((i, el) => {
//       console.log("[제목] ", $(el).text());
//     });

//     const div = $("div.blog2_container > span.writer > span.nick > a").map(
//       (i, el) => {
//         console.log("[작성자] ", $(el).text());
//       }
//     );

//     const article = $("div.blog2_container > span.se_publishDate.pcol2").map(
//       (i, el) => {
//         console.log("[시간] ", $(el).text());
//       }
//     );

//     const image = $("div > div > div > a > img").each(function (idx) {
//       var src = $(this).attr("src");
//       if (src.includes("type=w80_blur")) {
//         console.log("[이미지] ", src.replace("type=w80_blur", "type=w966"));
//       }
//     });
//   })
//   .then((res) => console.log(res)); // 저장된 결과를 출력

app.post("/crawl", (req, res) => {
  try {
    const strList = req.body.url.split("/");
    const blogId = strList[strList.length - 2];
    const logNo = strList[strList.length - 1];
    console.log(blogId, logNo);

    if (!blogId || !logNo) {
      res.send({ code: "error", message: "URL을 다시 확인해주세요." });
    } else {
      getHTML(blogId, logNo)
        .then((html) => {
          let data = {
            titleList: [],
            writerList: [],
            dateList: [],
            imageList: [],
            contentList: [],
            commentCnt: 0,
          };
          console.log(html.data);
          const $ = cheerio.load(html.data);

          // 블로그 제목 가져오기
          $("title").map((i, el) => {
            data.titleList.push($(el).text());
          });

          console.log("[제목]", data.titleList);

          $("div.blog2_container > span.writer > span.nick > a").map(
            (i, el) => {
              data.writerList.push($(el).text());
            }
          );

          console.log("[작성자]", data.writerList);

          $("div.blog2_container > span.se_publishDate.pcol2").map((i, el) => {
            data.dateList.push($(el).text());
          });

          console.log("[시간]", data.dateList);

          $("div > div > div > a > img").each(function (idx) {
            var src = $(this).attr("src");
            if (src.includes("type=w80_blur")) {
              data.imageList.push(src.replace("type=w80_blur", "type=w966"));
            }
          });

          console.log("[이미지]", data.imageList);

          data.imageList.forEach((image) => {
            // 이미지를 다운로드할 URL
            const imageUrl = image;

            const filePath = path.join(
              downloadFolderPath,
              image.split("/").pop().split("?")[0]
            );

            // 이미지 다운로드 및 업로드 함수 호출
            downloadAndUploadImage(imageUrl, filePath).catch((error) => {
              console.error("오류 발생:", error);
            });
          });

          $("div.se-module > p.se-text-paragraph > span").map((i, el) => {
            data.contentList.push($(el).text());
          });

          console.log("[내용]", data.contentList);

          $("#commentCount").map((i, el) => {
            data.commentCnt = $(el).text().trim();
          });

          $("em").map((i, el) => {
            console.log($(el).text());
          });

          console.log("[댓글수]", data.commentCnt);

          res.json(data);
        })
        .then((res) => console.log(res)); // 저장된 결과를 출력
    }
  } catch (error) {
    console.log(error);
    res.send({ code: "error", message: error.message });
  }

  // getHTML()
  //   .then((html) => {
  //     let titleList = [];
  //     const $ = cheerio.load(html.data);
  //     // console.log(html.data);

  //     // 블로그 제목 가져오기
  //     const blogTitle = $("title").map((i, el) => {
  //       console.log("[제목] ", $(el).text());
  //     });

  //     const div = $("div.blog2_container > span.writer > span.nick > a").map(
  //       (i, el) => {
  //         console.log("[작성자] ", $(el).text());
  //       }
  //     );

  //     const article = $("div.blog2_container > span.se_publishDate.pcol2").map(
  //       (i, el) => {
  //         console.log("[시간] ", $(el).text());
  //       }
  //     );

  //     const image = $("div > div > div > a > img").each(function (idx) {
  //       var src = $(this).attr("src");
  //       if (src.includes("type=w80_blur")) {
  //         console.log("[이미지] ", src.replace("type=w80_blur", "type=w966"));
  //       }
  //     });
  //   })
  //   .then((res) => console.log(res)); // 저장된 결과를 출력
});

app.get("/keywordstool", function (req, res) {
  console.log(req.query.hintKeywords);
  var method = "GET";
  var api_url = "/keywordstool";
  var timestamp = Date.now() + "";
  var accessKey =
    "0100000000891248005b4721a7ed3230150ea1c3d44a09a84da051980d7443565b543fc46f";
  var secretKey = "AQAAAACJEkgAW0chp+0yMBUOocPU62EHZEt4N5WKOmlcvc9x9Q==";

  var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
  hmac.update(timestamp + "." + method + "." + api_url);

  var hash = hmac.finalize();
  hash.toString(CryptoJS.enc.Base64);

  const request = require("request");
  const options = {
    url:
      "https://api.naver.com/keywordstool?hintKeywords=" +
      encodeURI(req.query.hintKeywords) +
      "&showDetail=1",
    headers: {
      "X-Timestamp": timestamp,
      "X-API-KEY": accessKey,
      "X-API-SECRET": secretKey,
      "X-CUSTOMER": 3159667,
      "X-Signature": hash.toString(CryptoJS.enc.Base64),
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      // console.log(body);
      // res.end(body);
      res.send({ data: body, code: "success", message: "success" });
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
      console.log(error);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
