//#############################################################
import {
  setDoc,
  doc,
  getDocs,
  collection,
  limit,
  endBefore,
  startAfter,
  orderBy,
  query,
  serverTimestamp,
  addDoc,
  deleteDoc,
  getDoc,
  where,
} from "firebase/firestore";
import { db } from "./Config";
import { debug, formattedDateTime, isExist } from "./Util";
//#############################################################
// 전체적인 데이터 베이스 CRUD를 담당합니다.
/* 아래는 간략한 함수 설명입니다.
createDoc : 문서를 추가합니다.
getCollection : 콜렉션 내 문서를 모두 반환합니다.
getDoc : 문서의 id로 문서를 검색합니다.
searchDoc : 특정 조건의 문서를 검색합니다.
updateDoc : id 문서를 수정합니다.
deleteDoc : id 문서를 삭제합니다.
*/

export const createDoc = async (collectionName, data) => {
  if (isExist("id", data)) {
    await setDoc(doc(db, collectionName, data.id), {
      ...data,
      createdAt: formattedDateTime(new Date()),
    }).then(() => {
      debug("문서 저장 성공 : ", collectionName, " > ", data.id);
    });
  } else {
    addDoc(collection(db, collectionName), {
      ...data,
      createdAt: formattedDateTime(new Date()),
    }).then(() => {
      debug("문서 저장 성공 : ", collectionName);
    });
  }
};

export const getCollection = async (collectionName) => {
  const q = query(collection(db, collectionName));
  const querySnapshot = await getDocs(q);

  const docList = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    docList.push({ ...doc.data(), doc_id: doc.id });
  });
  return docList;
};

export const getDocument = async (collectionName, docId) => {
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

export const searchDoc = async (collectionName, condition) => {
  const q = query(collection(db, collectionName), condition);
  const querySnapshot = await getDocs(q);
  const docList = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    docList.push({ ...doc.data(), doc_id: doc.id });
  });
  return docList;
};

export const multiQuery = async (collectionName, uid, condition) => {
  console.log(collectionName, condition);
  const q = query(
    collection(db, collectionName),
    where("uid", "==", uid),
    condition
  );
  const querySnapshot = await getDocs(q);
  const docList = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    docList.push({ ...doc.data(), doc_id: doc.id });
  });
  return docList;
};

export const tableCount = 6;

// 현재 페이지의 마지막 문서를 기준으로 이전 10개 또는 다음 10개 문서를 가져오는 함수 - 테이블 데이터는 이걸 사용해야합니다.
export async function fetchDocuments(
  collectionName,
  order,
  lastVisible,
  direction
) {
  // 반환할 데이터입니다.
  let _lastVisible = lastVisible;
  let _list = [];

  // 콜렉션에 대한 쿼리를 하나 작성합니다.
  let queryCollection = collection(db, collectionName);

  // 페이지네이션에 대한 쿼리를 작성합니다.
  let queryOrder = orderBy(order, "desc");
  let queryPagination = null;
  if (direction === "previous") {
    queryPagination = endBefore(lastVisible);
  }
  // 다음 버튼을 눌렀을 때
  else if (direction === "next") {
    queryPagination = startAfter(lastVisible);
  }

  // 쿼리를 수행합니다.
  let q = query(queryCollection, queryOrder, limit(tableCount));
  if (queryPagination !== null) {
    q = query(queryCollection, queryOrder, queryPagination, limit(tableCount));
  }

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(async (doc) => {
    // doc.data() is never undefined for query doc snapshots
    _list.push({ ...doc.data(), doc_id: doc.id });
  });
  _lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

  return {
    list: _list,
    lastVisible: _lastVisible,
  };
}

export const updateDoc = async (collectionName, id, data) => {
  console.log(data);
  await setDoc(
    doc(db, collectionName, id),
    {
      ...data,
      updatedAt: new Date().toISOString(),
    },
    { merge: true }
  ).then(() => {
    debug("문서 수정 성공 : ", collectionName, " > ", id);
  });
};

export const deleteDocument = async (collectionName, id) => {
  await deleteDoc(doc(db, collectionName, id)).then(() => {
    debug("문서 삭제 성공 : ", collectionName, " > ", id);
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
  agree: true, // 마케팅 수신 동의 여부
 }
 */

export const demoUser = {
  id: "Tu1nbFqUs_7EhpwlOiYxStmwTbj9FvtPGYUKqvYffsE", // 유저 UID
  name: "박수정", // 유저이름 - 회원가입 혹은 네이버 로그인 시
  email: "test@example.com", // 유저 이메일 - 회원가입 혹은 네이버 로그인 시
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
  agree: true, // 마케팅 수신 동의 여부
};
