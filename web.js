const admin = require("firebase-admin");
// const serviceAccount = require("./path/to/serviceAccountKey.json");
const serviceAccount = require("/home/hosting_users/dnsjxn/apps/dnsjxn_dengdengview/path/to/serviceAccountKey.json");
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

const aligoapi = require("aligoapi");
// 해당 예제는 npm에서도 확인하실 수 있습니다
// npm i aligoapi
// https://www.npmjs.com/package/aligoapi

var AuthData = {
  apikey: "p0220saahdexbkpnnynrgtt2kk9h2r2p",
  // 이곳에 발급받으신 api key를 입력하세요
  userid: "dnsjxn",
  // 이곳에 userid를 입력하세요
};
// 인증용 데이터는 모든 API 호출시 필수값입니다.

const profileAuth = (req, res) => {
  // 플러스친구 - 인증요청

  // req.body = {
  /*** 필수값입니다 ***/
  // plusid: 플러스친구 아이디(@포함)
  // phonenumber: 관리자 핸드폰 번호
  /*** 필수값입니다 ***/
  // }
  // req.body 요청값 예시입니다.
  // phonenumber로 인증번호가 발송됩니다

  aligoapi
    .profileAuth(req, AuthData)
    .then((r) => {
      res.send(r);
    })
    .catch((e) => {
      res.send(e);
    });
};

const profileCategory = (req, res) => {
  // 플러스친구 - 카테고리 조회

  aligoapi
    .profileCategory(req, AuthData)
    .then((r) => {
      res.send(r);
    })
    .catch((e) => {
      res.send(e);
    });
};

const profileAdd = (req, res) => {
  // 플러스친구 - 친구등록 심사요청

  // req.body = {
  /*** 필수값입니다 ***/
  // plusid: 플러스친구 아이디(@포함)
  // authnum: 인증번호
  // phonenumber: 관리자 핸드폰 번호
  // categorycode: 카테고리 코드
  /*** 필수값입니다 ***/
  // }
  // req.body 요청값 예시입니다.
  // 플러스친구 - 인증요청의 phonenumber로 발송된 인증번호를 authnum값으로 보내세요
  // 플러스친구 - 카테고리 조회의 thirdBusinessType 값을 categorycode값으로 보내세요

  aligoapi
    .profileAdd(req, AuthData)
    .then((r) => {
      res.send(r);
    })
    .catch((e) => {
      res.send(e);
    });
};

const friendList = (req, res) => {
  // 플러스친구 - 등록된 플러스친구 리스트

  // req.body = {
  // plusid: 플러스친구 아이디(@ 포함)
  // senderkey: 발신프로필 키
  // }
  // req.body 요청값 예시입니다.

  aligoapi
    .friendList(req, AuthData)
    .then((r) => {
      res.send(r);
    })
    .catch((e) => {
      res.send(e);
    });
};

const templateList = (req, res) => {
  // 템플릿관리 - 템플릿 리스트

  // req.body = {
  /*** 필수값입니다 ***/
  // senderkey: 발신프로필 키
  /*** 필수값입니다 ***/
  // tpl_code: 템플릿 코드
  // }
  // req.body 요청값 예시입니다.

  aligoapi
    .templateList(req, AuthData)
    .then((r) => {
      res.send(r);
    })
    .catch((e) => {
      res.send(e);
    });
};

const templateAdd = (req, res) => {
  // 템플릿관리 - 템플릿 등록

  // req.body = {
  /*** 필수값입니다 ***/
  // senderkey: 발신프로필 키
  // tpl_name: 템플릿 이름
  // tpl_content: 템플릿 내용 // (최대 1,000자)
  /*** 필수값입니다 ***/
  // tpl_button: 템플릿 버튼
  // }
  // req.body 요청값 예시입니다.

  aligoapi
    .templateAdd(req, AuthData)
    .then((r) => {
      res.send(r);
    })
    .catch((e) => {
      res.send(e);
    });
};

const templateModify = (req, res) => {
  // 템플릿관리 - 템플릿 수정

  // req.body = {
  /*** 필수값입니다 ***/
  // senderkey: 발신프로필 키
  // tpl_code: 템플릿 코드
  // tpl_name: 템플릿 이름
  // tpl_content: 템플릿 내용 // (최대 1,000자)
  /*** 필수값입니다 ***/
  // tpl_button: 템플릿 버튼
  // }
  // req.body 요청값 예시입니다.

  aligoapi
    .templateModify(req, AuthData)
    .then((r) => {
      res.send(r);
    })
    .catch((e) => {
      res.send(e);
    });
};

const templateDel = (req, res) => {
  // 템플릿관리 - 템플릿 삭제

  // req.body = {
  /*** 필수값입니다 ***/
  // senderkey: 발신프로필 키
  // tpl_code: 템플릿 코드
  /*** 필수값입니다 ***/
  // }
  // req.body 요청값 예시입니다.

  aligoapi
    .templateDel(req, AuthData)
    .then((r) => {
      res.send(r);
    })
    .catch((e) => {
      res.send(e);
    });
};

const templateRequest = (req, res) => {
  // 템플릿관리 - 템플릿 검수요청

  // req.body = {
  /*** 필수값입니다 ***/
  // senderkey: 발신프로필 키
  // tpl_code: 템플릿 코드
  /*** 필수값입니다 ***/
  // }
  // req.body 요청값 예시입니다.

  aligoapi
    .templateRequest(req, AuthData)
    .then((r) => {
      res.send(r);
    })
    .catch((e) => {
      res.send(e);
    });
};

// const axios = require("axios");
const qs = require("qs");
const alimtalkSend = (req, res) => {
  // 알림톡 전송

  // req.body = {
  /*** 필수값입니다 ***/
  // senderkey: 발신프로필 키
  // tpl_code: 템플릿 코드
  // sender: 발신자 연락처
  // receiver_1: 수신자 연락처
  // subject_1: 알림톡 제목
  // message_1: 알림톡 내용
  /*** 필수값입니다 ***/
  // senddate: 예약일 // YYYYMMDDHHMMSS
  // recvname: 수신자 이름
  // button: 버튼 정보 // JSON string
  // failover: 실패시 대체문자 전송기능 // Y or N
  // fsubject: 실패시 대체문자 제목
  // fmessage: 실패시 대체문자 내용
  // }
  // req.body 요청값 예시입니다.
  // _로 넘버링된 최대 500개의 receiver, subject, message, button, fsubject, fmessage 값을 보내실 수 있습니다
  // failover값이 Y일때 fsubject와 fmessage값은 필수입니다.

  console.log(req, AuthData);

  let data = qs.stringify({
    apikey: AuthData.apikey,
    userid: AuthData.userid,
    senderkey: req.body.senderkey,
    tpl_code: req.body.tpl_code,
    sender: req.body.sender,
    receiver_1: req.body.receiver_1,
    recvname_1: req.body.recvname_1,
    subject_1: req.body.subject_1,
    message_1: req.body.message_1,
    button_1: JSON.stringify(req.body.button_1),
  });
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://kakaoapi.aligo.in/akv10/alimtalk/send/",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  // aligoapi
  //   .alimtalkSend(req, AuthData)
  //   .then((r) => {
  //     console.log(r);
  //     res.send(r);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //     res.send(e);
  //   });
};

const historyList = (req, res) => {
  // 전송결과보기

  // req.body = {
  // page: 페이지번호 // 기본1
  // limit: 페이지당 출력 갯수 // (기본 50) 최대 500
  // start_date: 조회시작일자 // 기본 최근일자 // YYYYMMDD
  // enddate: 조회마감일자 // YYYYMMDD
  // }
  // req.body 요청값 예시입니다.

  aligoapi
    .historyList(req, AuthData)
    .then((r) => {
      res.send(r);
    })
    .catch((e) => {
      res.send(e);
    });
};

const historyDetail = (req, res) => {
  // 전송결과보기 상세

  // req.body = {
  /*** 필수값입니다 ***/
  // mid: 메세지 고유ID
  /*** 필수값입니다 ***/
  // page: 페이지번호 // 기본1
  // limit: 페이지당 출력 갯수 // (기본 50) 최대 500
  // start_date: 조회시작일자 // 기본 최근일자 // YYYYMMDD
  // enddate: 조회마감일자 // YYYYMMDD
  // }
  // req.body 요청값 예시입니다.

  aligoapi
    .historyDetail(req, AuthData)
    .then((r) => {
      res.send(r);
    })
    .catch((e) => {
      res.send(e);
    });
};

const kakaoRemain = (req, res) => {
  // 발송가능건수

  aligoapi
    .kakaoRemain(req, AuthData)
    .then((r) => {
      res.send(r);
    })
    .catch((e) => {
      res.send(e);
    });
};

const kakaoCancel = (req, res) => {
  // 예약취소

  // req.body = {
  /*** 필수값입니다 ***/
  // mid: 메세지 고유ID
  /*** 필수값입니다 ***/
  // }
  // req.body 요청값 예시입니다.

  aligoapi
    .kakaoCancel(req, AuthData)
    .then((r) => {
      res.send(r);
    })
    .catch((e) => {
      res.send(e);
    });
};

app.post("/alimtalk/send", (req, res) => {
  console.log(req.body);
  alimtalkSend(req, res);
});

module.exports = {
  friendList,
  profileAuth,
  profileCategory,
  profileAdd,
  templateList,
  templateAdd,
  templateModify,
  templateDel,
  templateRequest,
  alimtalkSend,
  historyList,
  historyDetail,
  kakaoRemain,
  kakaoCancel,
};

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
