import { useToast, Box, Image, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../Firebase/Auth";
import { debug } from "../Firebase/Util";
import { createDoc } from "../Firebase/Database";
import { serverTimestamp } from "firebase/firestore";

export const naverBtnImg = require("../Assets/img/btnG.png");

export const NaverLogin = (props) => {
  const { naver } = window;
  const navigate = useNavigate();
  const toast = useToast();
  const btnRef = React.useRef(null);

  useEffect(() => {
    const initializeNaverLogin = () => {
      const naverLogin = new naver.LoginWithNaverId({
        clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
        callbackUrl: process.env.REACT_APP_NAVER_CALLBACK_URL,
        // 팝업창으로 로그인을 진행할 것인지?
        isPopup: false,
        // 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
        loginButton: { color: "green", type: 3, height: 60 },
        callbackHandle: true,
      });
      naverLogin.init();

      naverLogin.getLoginStatus((status) => {
        if (status) {
          naverLogin.getLoginStatus(async function (status) {
            console.log(status);
            if (status) {
              // 아래처럼 선택하여 추출이 가능하고,
              // const userid = naverLogin.user.getEmail();
              // const username = naverLogin.user.getName();
              // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다.
              // setUserInfo(naverLogin.user);
              console.log(naverLogin.user);

              // 유저 id로 해당 정보가 있는지 파악하고,
              // 없으면 회원가입 화면으로 이동하여 가입을 진행,
              // 있으면 홈으로 이동

              getUserInfo(naverLogin.user.id).then((data) => {
                if (data.code === "error") {
                  createDoc("User", {
                    id: naverLogin.user.id,
                    channel: "naver",
                    email: naverLogin.user.email ? naverLogin.user.email : "",
                    name: naverLogin.user.name ? naverLogin.user.name : "",
                    createdAt: new Date().toISOString(),
                  });
                }
              });

              localStorage.setItem("naver_id", naverLogin.user.id);
              navigate("/");
            }
          });
        }
      });
    };
    initializeNaverLogin();

    const userAccessToken = () => {
      window.location.href.includes("access_token") && getToken();
    };

    const getToken = () => {
      const token = window.location.href.split("=")[1].split("&")[0];
      // console.log, alert 창을 통해 어스코드가 잘 추출 되는지 확인하자!
      console.log(token);
      // 이후 로컬 스토리지 또는 state에 저장하여 사용하자!
      localStorage.setItem("access_token", token);
    };

    userAccessToken();
  }, []);

  return (
    <>
      {/* <div ref={btnRef} style={{ display: "none" }} id="naverIdLogin" /> */}
      <Button id="naverIdLogin" display={"none"} ref={btnRef} />
      <Image
        onClick={() => btnRef.current.children[0].click()}
        src={naverBtnImg}
        height={"48px"}
        borderRadius={"lg"}
      />
    </>
  );
};
