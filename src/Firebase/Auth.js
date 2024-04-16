//#############################################################
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./Config";
import { createDoc } from "./Database";
import { debug, trError } from "./Util";
import { doc, getDoc } from "firebase/firestore";
//#############################################################
// 전체적인 계정 CRUD를 담당합니다.
/* 아래는 간략한 함수 설명입니다.
createUser : 유저를 추가합니다.
deleteUser: 유저를 삭제합니다.
signInUser : 로그인 합니다.
signOutUser: 로그아웃 합니다.
getUserInfo: 유저 정보를 가지고 옵니다.

adminLogin : 관리자 계정 로그인입니다.
adminLogout : 관리자 계정 로그아웃입니다.
*/

export const supervisor = {
  email: "admin@dangdangview.com",
  password: "dengdeng1234!",
};

export const createUser = async (data) => {
  debug(data);
  let response = { code: "error", message: "error" };
  await createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...

      // 유저 정보를 저장합니다.
      createDoc("User", { ...data, ...{ id: user.uid, channel: "password" } });

      response.code = "success";
      response.message = "회원가입에 성공하였습니다. 로그인을 진행해주세요.";
    })
    .catch(async (error) => {
      response.code = "error";
      response.message = trError(error.message);
    });

  return response;
};

export const signInUser = async (data) => {
  debug(data);
  let response = { code: "error", message: "error" };
  await signInWithEmailAndPassword(auth, data.email, data.password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...

      response.code = "success";
      response.message = "로그인에 성공하였습니다.";
    })
    .catch(async (error) => {
      response.code = "error";
      response.message = trError(error.message);
    });

  return response;
};

export const getUserInfo = async (uid) => {
  let response = { code: "error", message: "error", data: null };
  const user = await getDoc(doc(db, "User", uid));
  if (user.exists()) {
    response.code = "success";
    response.message = "success";
    response.data = user.data();
  } else {
    response.code = "error";
    response.message = "data not found";
  }
  return response;
};

export const adminLogin = async (data) => {
  debug(data);
  let response = { code: "error", message: "error" };
  if (
    data.email === supervisor.email &&
    data.password === supervisor.password
  ) {
    response.code = "success";
    response.message = "success";
    // 페이지에 응답을 전달하고 로컬 변수에 로그인 정보를 저장합니다.
    localStorage.setItem("dang_admin_id", data.email);
    localStorage.setItem("dang_admin_pw", data.password);
  } else {
    response.code = "error";
    response.message = "계정을 다시 확인해주세요.";
  }
  return response;
};

export const adminLogout = () => {
  // 로컬 데이터를 지우고 로그인 화면으로 이동
  // 테스트용 #TODO 나중에 지워야함
  // localStorage.removeItem("dang_admin_id");
  // localStorage.removeItem("dang_admin_pw");
  window.location.href = "/admin/login";
};
