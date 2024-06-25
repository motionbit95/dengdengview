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
import { PageHeader2 } from "../Application/PageHeader/PageHeader2";
import { RegisterTable } from "../Application/Tables/TesterTable/App";

export function SelectModal(props) {
  const [campains, setCampains] = useState([]);
  const [selectedCampain, setSelectedCampain] = useState("");

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_URL + "/campain/list/totalviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCampains(data);
      })
      .catch((err) => {
        console.log(err);
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
          {campains?.map((campain) => {
            return (
              <option value={campain.id} key={campain.id}>
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
  const [cid, setCid] = useState("");
  useEffect(() => {
    let cid = props.cid;
    setCid(cid);
    fetch(process.env.REACT_APP_SERVER_URL + "/campain/get/" + cid)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCampain(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(cid);
    let campainId = cid.split("/").pop();
    fetch(process.env.REACT_APP_SERVER_URL + "/tester/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conditions: [{ field: "cid", operator: "==", value: campainId }],
      }),
    })
      .then(async (res) => {
        return await res.json();
      })
      .then((data) => {
        // console.log(data);
        let tempUser = [];
        data.forEach((doc) => {
          fetch(process.env.REACT_APP_SERVER_URL + "/auth/get/" + doc.uid)
            .then(async (res) => {
              return await res.json();
            })
            .then(async (user) => {
              tempUser.push({ ...user, ...doc });
              if (tempUser.length == data.length) {
                console.log(tempUser);
                setUserList(tempUser);
              }
            })
            .catch(async (err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cid]);

  const sendAligo = () => {
    if (userList.length == 0) {
      alert("선정된 회원이 존재하지 않습니다.");
      return;
    }

    // let tempuser = [
    //   { name: "박수정", phone: "01091789973" },
    //   { name: "박진영", phone: "01051917145" },
    // ];

    if (window.confirm("선정된 유저에게 알림톡을 전송하시겠습니까?")) {
      userList.forEach((user) => {
        fetch(process.env.REACT_APP_SERVER_URL + "/alimtalk/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recvname_1: user.name,
            receiver_1: user.phone,
            /*** 필수값입니다 ***/
            senderkey: "a5a471eb7434d96c3025fad1069eb0e52ad19af1",
            tpl_code: "TT_1336",
            sender: "01065807727",
            subject_1: "체험단 선정 확인",
            message_1: `안녕하세요. 댕댕뷰입니다.

신청하신 캠페인 당첨되신 것을 축하드립니다!

[필수-금일 자정(24시)까지 
당첨확인을 클릭해주세요]

[시간내 당첨자확인 미클릭시
통보없이 자동취소 됩니다]

[캠페인명]
${campain.name}

[필수]
알림톡을 받으신후 댕댕뷰 홈페이지
마이페이지에서 금일 자정(24시까지)
당첨자 확인 클릭 꼭 해주세요!

[문의]
캠페인 문의사항은 댕댕뷰 카카오 채널
1:1문의하기 로 문의 해주세요`,
            /*** 필수값입니다 ***/
            failover: "Y", // Y or N
            fsubject: "체험단 선정 확인",
            fmessage: `안녕하세요. 댕댕뷰입니다.

신청하신 캠페인 당첨되신 것을 축하드립니다!

[필수-금일 자정(24시)까지 
당첨확인을 클릭해주세요]

[시간내 당첨자확인 미클릭시
통보없이 자동취소 됩니다]

[캠페인명]
${campain.name}

[필수]
알림톡을 받으신후 댕댕뷰 홈페이지
마이페이지에서 금일 자정(24시까지)
당첨자 확인 클릭 꼭 해주세요!

[문의]
캠페인 문의사항은 댕댕뷰 카카오 채널
1:1문의하기 로 문의 해주세요`,
            button_1: {
              button: [
                {
                  name: "당첨 확인(바로가기 클릭)",
                  linkType: "WL",
                  linkTypeName: "웹링크",
                  linkPc: "https://댕댕뷰.com",
                  linkMo: "https://댕댕뷰.com",
                },
              ],
            },
          }),
        })
          .then((data) => data.json())
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      });
    }
  };

  return (
    <Stack alignItems={"start"}>
      <HStack w={"full"} justifyContent={"space-between"}>
        <PageHeader2 title="선정자 목록" discription={campain?.name} />
        <Button mr={{ base: "0", md: "4" }} onClick={sendAligo}>
          알림톡 전송
        </Button>
      </HStack>
      <RegisterTable
        members={userList.filter((user) => user.step > 0)}
        title={`총 ${userList.length}명 / ${
          campain?.targetCnt ? campain?.targetCnt : 0
        }명`}
      />
    </Stack>
  );
}

export default SelectUser;
