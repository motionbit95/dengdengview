import React, { useEffect } from "react";
import { SidebarWithCollapsable } from "../Application/Sidebars/SidebarWithCollapsable/App";
import {
  HStack,
  Container,
  Stack,
  Text,
  Image,
  Center,
  Button,
} from "@chakra-ui/react";
import Campain from "./Campain";
import Mypage from "./Mypage";
import { debug } from "../Firebase/Util";
import { auth, db } from "../Firebase/Config";
import { getUserInfo } from "../Firebase/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { PageHeader1 } from "../Application/PageHeader/PageHeader1";
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
    console.log(item);
    if (item.includes("체험단")) {
      setBreadcrumb({ title: "나의 체험단", description: item });
      debug(breadcrumb);
    } else if (item.includes("기본정보"))
      setBreadcrumb({ title: "내정보 수정", description: item });
    else {
      setBreadcrumb({ title: "블로그 위젯 등록", description: item });
    }
  };

  function clip() {
    var url = "";
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url =
      "https://firebasestorage.googleapis.com/v0/b/motionbit-dangdangview.appspot.com/o/widget.png?alt=media&token=923c0928-cb9e-43bc-8adb-07d89c24fd4a";
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("코드가 복사되었습니다.");
  }

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

        {breadcrumb?.title?.includes("위젯") && (
          <Stack p={{ base: "4", md: "8", lg: "12" }}>
            <Stack spacing={0}>
              <Text fontSize={"2xl"}>지금, 블로그 위젯을</Text>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                등록해보세요!
              </Text>
            </Stack>
            <Stack spacing={0}>
              <Text>블로그 위젯을 등록하면</Text>
              <Text>
                <strong style={{ color: "red" }}>캠페인 신청확률</strong>이 더
                올라가요!
              </Text>
            </Stack>
            <Stack spacing={8} mt={8}>
              <Stack borderTop={"3px solid"} borderColor={"gray.800"} p={2}>
                <Text fontSize={"xl"} fontWeight={"bold"}>
                  01. 위젯 링크 복사
                </Text>
                <Text>아래의 위젯 코드를 복사해주세요!</Text>
                <Image
                  w={"100px"}
                  h={"auto"}
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/motionbit-dangdangview.appspot.com/o/widget.png?alt=media&token=923c0928-cb9e-43bc-8adb-07d89c24fd4a"
                  }
                  alt={"image"}
                />
                <Button w={"100px"} onClick={clip}>
                  코드복사
                </Button>
              </Stack>
              <Stack borderTop={"3px solid"} borderColor={"gray.800"} p={2}>
                <Text fontSize={"xl"} fontWeight={"bold"}>
                  02. 블로그에 등록하기
                </Text>
                <Text>
                  아래 가이드를 따라서 차근차근 진행해주시면 블로그 위젯 설치
                  끝!
                </Text>
                <Center>
                  <Image src={require("../Assets/guide/g3.png")} />
                </Center>
                <Text>
                  1. 네이버 블로그 관리화면에서{" "}
                  <strong style={{ color: "red" }}>
                    {"꾸미기 설정 > 레이아웃, 위젯 설정"}
                  </strong>
                  으로 들어갑니다
                </Text>
                <Image src={require("../Assets/guide/g4.png")} />
                <Text>
                  2. 왼쪽 하단의{" "}
                  <strong style={{ color: "red" }}>{"위젯직접등록 "}</strong>
                  버튼을 눌러주세요.
                </Text>
                <Text>
                  3. 위젯명에서 원하시는 저장명을 쓰시고, 위젯코드입력에
                  <strong style={{ color: "red" }}>
                    {" 복사한 위젯 코드를 붙여넣기"}
                  </strong>
                  해주세요.
                </Text>
                <Image src={require("../Assets/guide/g5.png")} />
                <Text>4. 미리 보기에서 위젯 이미지를 미리 볼 수 있습니다.</Text>
                <Text>
                  5. 이제 블로그에{" "}
                  <strong style={{ color: "red" }}>위젯이 생성</strong>되었어요!
                </Text>
                <Text opacity={0.5}>
                  본인 블로그 디자인에 맞게 위치를 변경하세요 :)
                </Text>
              </Stack>
            </Stack>
          </Stack>
        )}
      </HStack>
    </Container>
  );
}

export default Profile;
