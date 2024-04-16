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
*/

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
