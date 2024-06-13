// src/PhoneAuth.js
import React, { useState, useEffect } from "react";
import {
  auth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "../Firebase/Config";
import { getAuth, signOut } from "firebase/auth";
import {
  Button,
  Container,
  HStack,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { signInUser } from "../Firebase/Auth";
import { useNavigate } from "react-router-dom";

const PhoneAuth = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  const [currentUser, setCurrentUser] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setCurrentUser(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
          setIsVerified(true);
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      }
    );
  }, []);

  const handleSendVerificationCode = () => {
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, "+82" + phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
        console.log("SMS sent");
      })
      .catch((error) => {
        console.error("Error during signInWithPhoneNumber", error);
      });
  };

  const handleVerifyCode = () => {
    if (confirmationResult) {
      confirmationResult
        .confirm(verificationCode)
        .then((result) => {
          const user = result.user;
          console.log(
            "기존 회원 ID : ",
            currentUser.uid,
            "휴대폰 인증된 id : ",
            user.uid
          );

          fetch(
            process.env.REACT_APP_SERVER_URL +
              "/auth/update/" +
              currentUser.uid,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                phone: phoneNumber,
              }),
            }
          )
            .then(async (res) => {
              console.log(res);
              signOut(auth).catch((error) => {
                console.log(error);
              });

              toast({
                title:
                  "전화번호 변경이 완료되었습니다. 재로그인을 진행해주세요.",
                status: "success",
                duration: 2000,
                isClosable: true,
              });

              navigate("/login");
            })
            .catch((error) => {
              console.error("Failed to fetch:", error.message);
            });

          //   props.setPhoneVerify(user.uid);
        })
        .catch((error) => {
          console.error("Error during confirmationResult.confirm", error);
        });
    }
  };

  return (
    <Stack w={"100%"}>
      <HStack>
        <Input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="전화번호를 입력하세요."
        />
        <Button onClick={handleSendVerificationCode}>인증코드전송</Button>
      </HStack>
      <div
        style={{ display: isVerified ? "none" : "block" }}
        id="recaptcha-container"
      ></div>
      {isVerified && (
        <HStack>
          <Input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="인증코드를 입력하세요."
          />
          <Button onClick={handleVerifyCode}>인증하기</Button>
        </HStack>
      )}
    </Stack>
  );
};

export default PhoneAuth;
