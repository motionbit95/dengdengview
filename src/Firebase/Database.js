//#############################################################
import { setDoc, doc } from "firebase/firestore";
import { db } from "./Config";
import { debug } from "./Util";
//#############################################################
// 전체적인 데이터 베이스 CRUD를 담당합니다.
/* 아래는 간략한 함수 설명입니다.
createDoc : 문서를 추가합니다.
getDoc : 문서의 id로 문서를 검색합니다.
searchDoc : 특정 조건의 문서를 검색합니다.
updateDoc : id 문서를 수정합니다.
deleteDoc : id 문서를 삭제합니다.
*/

export const createDoc = async (collectionName, data) => {
  await setDoc(doc(db, collectionName, data.id), data).then(() => {
    debug("문서 저장 성공 : ", collectionName, " > ", data.id);
  });
};

export const updateDoc = async (collectionName, id, data) => {
  console.log(data);
  await setDoc(doc(db, collectionName, id), data).then(() => {
    debug("문서 수정 성공 : ", collectionName, " > ", id);
  });
};

//#############################################################
/*
                    DB 설명(데이터 베이스 구조)
 */
//#############################################################

/**
 * 콜렉션 이름 : User(유저정보)
 * 문서 id : 자동 생성
 * 문서 파라미터
 * {
  name: "홍길동", // 유저이름 - 회원가입 혹은 네이버 로그인 시
  email: "test@---", // 유저 이메일 - 회원가입 혹은 네이버 로그인 시
  password: "*****", // 유저 패스워드 - 네이버 로그인 시 제외
  channel: "naver", // 유저 로그인 채널 - 네이버 : naver / 회원가입 : password

  image: "", // 유저 프로필 이미지
  nickname: "", // 유저 닉네임
  gender: "남", // 유저 성별
  birthyear: "2000", // 유저 출생연도
  phone: "01012341234", // 유저 전화번호
  blog: "motionbit", // 블로그(네이버) 아이디
  zonecode: "05015", // 우편번호
  street: "서울 광진구 아차산로 27길 57-4", // 도로명 주소
  address: "102호", // 상세주소
  marketing: true, // 마케팅 수신 동의 여부
 }
 */

export const demoUser = {
  id: "Tu1nbFqUs_7EhpwlOiYxStmwTbj9FvtPGYUKqvYffsE", // 유저 UID
  name: "박수정", // 유저이름 - 회원가입 혹은 네이버 로그인 시
  email: "test@example.com", // 유저 이메일 - 회원가입 혹은 네이버 로그인 시
  password: "1q2w3e4r!", // 유저 패스워드 - 네이버 로그인 시 제외
  channel: "naver", // 유저 로그인 채널 - 네이버 : naver / 회원가입 : password

  image: "https://bit.ly/kent-c-dodd", // 유저 프로필 이미지
  nickname: "모션빛", // 유저 닉네임
  gender: "남", // 유저 성별
  birthyear: "2000", // 유저 출생연도
  phone: "01012341234", // 유저 전화번호
  blog: "motionbit", // 블로그(네이버) 아이디
  zonecode: "05015", // 우편번호
  street: "서울 광진구 아차산로 27길 57-4", // 도로명 주소
  address: "102호", // 상세주소
  marketing: true, // 마케팅 수신 동의 여부
};
