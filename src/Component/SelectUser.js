import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Select,
  HStack,
  Stack,
  Text,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { getCollection, getDocument, searchDoc } from "../Firebase/Database";
import { where } from "firebase/firestore";
import { PageHeader2 } from "../Application/PageHeader/PageHeader2";
import { RegisterTable } from "../Application/Tables/TesterTable/App";

export function SelectModal(props) {
  const [campains, setCampains] = useState([]);
  const [selectedCampain, setSelectedCampain] = useState("");

  useEffect(() => {
    getCollection("Campain").then((data) => {
      setCampains(data);
    });
  }, []);

  return (
    <Stack>
      <FormControl>
        {/* <FormLabel>리포트 할 체험단을 선택하세요.</FormLabel> */}
        <Select
          value={selectedCampain}
          onChange={(e) => setSelectedCampain(e.target.value)}
        >
          <option value="">리포트 할 체험단를 선택하세요.</option>
          {campains.map((campain) => {
            return (
              <option value={campain.doc_id} key={campain.id}>
                {campain.name}
              </option>
            );
          })}
        </Select>
      </FormControl>

      <Button
        colorScheme="blue"
        onClick={() => {
          if (selectedCampain)
            window.location.href = `/admin/dashboard/${selectedCampain}`;
          else alert("리포트 할 체험단를 선택하세요.");
        }}
      >
        분석하기
      </Button>
    </Stack>
  );
}

function SelectUser(props) {
  const [campain, setCampain] = useState({});
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    if (window.location.pathname.replaceAll("/admin/dashboard", "")) {
      let cid = window.location.pathname.replaceAll("/admin/dashboard/", "");
      console.log(cid);
      getDocument("Campain", cid).then(async (data) => {
        setCampain(data);
      });
    }
  }, []);

  useEffect(() => {
    if (campain?.doc_id) {
      let userList = [];
      console.log(campain?.doc_id);
      searchDoc("Tester", where("cid", "==", campain?.doc_id)).then((data) => {
        data.forEach((doc) => {
          if (doc.step > 0) {
            getDocument("User", doc.uid).then((user) => {
              userList.push({ ...user, ...doc });
              setUserList(userList);
            });
          }
        });
      });
    }
  }, [campain]);

  const sendKakao = () => {
    if (userList.length == 0) {
      alert("선정된 회원이 존재하지 않습니다.");
      return;
    }
    console.log(userList);
    let receiver = {};
    userList.forEach((user, i) => {
      receiver = { ...receiver, ["receiver_" + i + 1]: user.phone };
    });

    console.log(receiver);

    console.log(process.env.REACT_APP_SERVER_URL + "/alimtalk/send");
    fetch(process.env.REACT_APP_SERVER_URL + "/alimtalk/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...receiver,
        /*** 필수값입니다 ***/
        senderkey: "a5a471eb7434d96c3025fad1069eb0e52ad19af1",
        tpl_code: "TS_8890",
        sender: "01065807727",
        subject_1: "체험단 선정 확인",
        message_1: `안녕하세요. 댕댕뷰입니다.

신청하신 캠페인 당첨되신 것을 축하드립니다!

[필수-금일 자정(24시)까지 
당첨확인을 클릭해주세요]

[시간내 당첨자확인 미클릭시
통보없이 자동취소 됩니다]

[캠페인명]
${campain}

[필수]
알림톡을 받으신후 댕댕뷰 홈페이지
마이페이지에서 금일 자정(24시까지)
당첨자 확인 클릭 꼭 해주세요!

[문의]
캠페인 문의사항은 댕댕뷰 카카오 채널
1:1문의하기 로 문의 해주세요`,
        /*** 필수값입니다 ***/
        // senddate: "예약일", // YYYYMMDDHHMMSS
        recvname: "",
        // button: "당첨 확인(바로가기 클릭)", // JSON string
        failover: "N", // Y or N
        // fsubject: "실패시 대체문자 제목",
        // fmessage: "실패시 대체문자 내용",
        button_1: {
          button: [
            {
              name: "당첨 확인(바로가기 클릭)",
              linkType: "WL",
              linkTypeName: "웹링크",
              linkPc: "https://댕댕뷰.com/mypage",
              linkMo: "https://댕댕뷰.com/mypage",
            },
          ],
        },
      }),
    })
      .then((data) => data.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <Stack alignItems={"start"}>
      <HStack w={"full"} justifyContent={"space-between"}>
        <PageHeader2 title="선정자 목록" discription={campain?.name} />
        <Button mr={{ base: "0", md: "4" }} onClick={sendKakao}>
          알림톡 전송
        </Button>
      </HStack>
      <RegisterTable
        members={userList}
        title={`총 ${userList.length}명 / ${
          campain?.targetCnt ? campain?.targetCnt : 0
        }명`}
      />
    </Stack>
  );
}

export default SelectUser;
