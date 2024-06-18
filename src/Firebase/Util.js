export const debug = (...args) => {
  if (process.env.NODE_ENV === "development") {
    console.log(...args);
  }
};

export const trError = (errorCode) => {
  let errorMessage = "로그인에 실패하였습니다.";

  console.log(errorCode);

  switch (errorCode) {
    case "auth/email-already-exists":
      errorMessage = "이미 가입되어있는 이메일 주소입니다.";
      break;
    case "auth/invalid-email":
      errorMessage = "이메일 주소를 올바르게 입력해주세요.";
      break;
    case "auth/invalid-password":
      errorMessage = "잘못된 비밀번호 입니다.";
      break;
    case "auth/user-not-found":
      errorMessage = "회원가입이 되어있지 않은 이메일 주소입니다.";
      break;
    default:
      errorMessage = "로그인에 실패하였습니다.";
      break;
  }

  return errorMessage;
};

// 현재 페이지를 계산하는 함수
export function getCurrentPageNumber(startIndex, pageSize) {
  return Math.floor(startIndex / pageSize) + 1;
}

export function formattedDate(date) {
  // 현재 날짜와 시간을 나타내는 Date 객체 생성
  var currentDate = date ? date : new Date();

  // 연도, 월, 일 추출
  var year = currentDate.getFullYear();
  var month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // 월은 0부터 시작하므로 1을 더하고 두 자리로 표시
  var day = ("0" + currentDate.getDate()).slice(-2); // 일도 두 자리로 표시

  // YYYY-MM-DD 형식으로 조합
  var formattedDate = year + "-" + month + "-" + day;

  return formattedDate; // 예시 출력: "2024-04-29"
}

export function formattedDateTime(date) {
  date.setHours(date.getHours() + 9); // 오늘 날짜의 시간을 00:00:00으로 설정
  return date.toISOString(); // 예시 출력: "2024-04-29"
}

export function isExist(property, object) {
  return property in object;
}
// 날짜를 yyyy-mm-dd 형식의 문자열로 변환하는 함수
function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 +1 필요
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}
// Firebase Firestore의 Timestamp를 변환하는 예제
export function convertDate(timestamp) {
  // Timestamp 객체를 JavaScript Date 객체로 변환
  // 타임스탬프 데이터를 Date 객체로 변환
  const date = new Date(timestamp._seconds * 1000);

  // 변환된 날짜를 포맷팅하여 출력
  var formattedDate = formatDate(date);
  console.log(formattedDate); // yyyy-mm-dd 형식으로 출력

  return formattedDate;
}
