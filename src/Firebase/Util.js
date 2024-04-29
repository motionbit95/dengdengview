export const bucketAddress =
  "https://firebasestorage.googleapis.com/v0/b/motionbit-dangdangview.appspot.com/o";

export const debug = (...args) => {
  if (process.env.NODE_ENV === "development") {
    console.log(...args);
  }
};

export const trError = (errorCode) => {
  let errorMessage = "";

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
      errorMessage = errorCode;
      break;
  }
};

// 현재 페이지를 계산하는 함수
export function getCurrentPageNumber(startIndex, pageSize) {
  return Math.floor(startIndex / pageSize) + 1;
}

export function getImage(url) {
  return bucketAddress + url + "?alt=media";
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
