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
