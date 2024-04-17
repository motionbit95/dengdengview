const admin = require("firebase-admin");
const serviceAccount = require("./path/to/serviceAccountKey.json");
const fs = require("fs");

// Firebase 초기화
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const cname = "User";

// JSON 파일 읽기
fs.readFile(`./path/to/${cname}.json`, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading JSON file:", err);
    return;
  }

  try {
    // JSON 파싱
    const jsonData = JSON.parse(data);

    // Firestore에 데이터 업로드
    const db = admin.firestore();
    const collectionRef = db.collection(cname); // 업로드할 컬렉션 이름

    jsonData.forEach((data) => {
      collectionRef
        .add(data)
        .then((docRef) => {
          console.log("Document written with ID:", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document:", error);
        });
    });
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
});
