const admin = require("firebase-admin");
const serviceAccount = require("./path/to/serviceAccountKey.json");
const fs = require("fs");
const puppeteer = require("puppeteer");
const express = require("express");
const app = express();

const port = 3001;

// Firebase 초기화
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const cname = "Campain";

// JSON 파일 읽기
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
  console.log(req.body);
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
