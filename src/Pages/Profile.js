import React, { useEffect } from "react";
import { SidebarWithCollapsable } from "../Application/Sidebars/SidebarWithCollapsable/App";
import { HStack, Container } from "@chakra-ui/react";
import Campain from "./Campain";
import Mypage from "./Mypage";
import { debug } from "../Firebase/Util";
import { auth, db } from "../Firebase/Config";
import { getUserInfo } from "../Firebase/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
function Profile(props) {
  const [breadcrumb, setBreadcrumb] = React.useState({
    title: "나의 체험단",
    description: "신청한 체험단",
  });

  const [uid, setUid] = React.useState(null);
  const [userInfo, setUserInfo] = React.useState({});

  useEffect(() => {
    let uid;
    // 유저 정보를 가지고 옵니다.
    if (localStorage.getItem("naver_id")) {
      // 네이버 로그인인 경우
      setUid(localStorage.getItem("naver_id"));
    } else {
      // 간편 회원가입의 경우
      // uid = auth.currentUser?.uid;
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUid(user.uid);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (uid) {
      getUserInfo(uid).then((response) => {
        console.log(response);
        setUserInfo(response.data);
      });
    }
  }, [uid]);

  useEffect(() => {
    if (uid) {
      onSnapshot(doc(db, "User", uid), (doc) => {
        setUserInfo(doc.data());
      });
    }
  }, []);

  const handleMenu = (item) => {
    if (item.includes("체험단")) {
      setBreadcrumb({ title: "나의 체험단", description: item });
      debug(breadcrumb);
    } else setBreadcrumb({ title: "내정보 수정", description: item });
  };

  return (
    <Container>
      <HStack alignItems={"flex-start"}>
        <SidebarWithCollapsable
          userInfo={userInfo}
          display={{ base: "none", md: "block" }}
          setItem={handleMenu}
        />
        {breadcrumb?.title?.includes("체험단") && (
          <Campain
            title={breadcrumb?.title}
            description={breadcrumb?.description}
            setItem={handleMenu}
          />
        )}

        {breadcrumb?.title?.includes("내정보") && (
          <Mypage
            title={breadcrumb?.title}
            description={breadcrumb?.description}
            userInfo={userInfo}
          />
        )}
      </HStack>
    </Container>
  );
}

export default Profile;
