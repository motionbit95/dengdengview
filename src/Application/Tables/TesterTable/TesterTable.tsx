import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { IoArrowDown } from "react-icons/io5";
import { updateDoc } from "../../../Firebase/Database";
import { BsCheckCircleFill } from "react-icons/bs";

export const TesterTable = ({ ...props }) => {
  const { members } = props;
  console.log(members);
  const campain = "테스트 캠페인";
  const phone = "01091789973";
  const name = "박수정";

  const handleSelectUser = (member: any) => {
    console.log(member);

    updateDoc("Tester", member.doc_id, { ...member, step: 1 }).then(
      async () => {
        window.location.reload();
      }
    );

    // sendKakao();
  };

  const sendKakao = () => {
    console.log(process.env.REACT_APP_SERVER_URL + "/alimtalk/send");
    fetch(process.env.REACT_APP_SERVER_URL + "/alimtalk/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        /*** 필수값입니다 ***/
        senderkey: "a5a471eb7434d96c3025fad1069eb0e52ad19af1",
        tpl_code: "TS_8890",
        sender: "01065807727",
        receiver_1: phone,
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
        recvname: name,
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
              linkPc: "http://댕댕뷰.com/mypage",
              linkMo: "http://댕댕뷰.com/mypage",
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
    <Table {...props}>
      {/* <Button onClick={() => sendKakao()}>테스트</Button> */}
      <Thead>
        <Tr>
          <Th>
            <HStack spacing="3">
              {/* <Checkbox /> */}
              <HStack spacing="1">
                <Text>이름</Text>
                <Icon as={IoArrowDown} color="fg.muted" boxSize="4" />
              </HStack>
            </HStack>
          </Th>
          <Th>주소</Th>
          <Th>휴대폰번호</Th>
          <Th>블로그아이디</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {members.map((member: any) => (
          <Tr key={member.id}>
            <Td>
              <HStack spacing="3">
                {/* <Checkbox /> */}
                {/* <Avatar
                  src={member.avatarUrl}
                  boxSize="10"
                  cursor={"pointer"}
                  onClick={() =>
                    window.open("https://m.blog.naver.com/" + member.blog)
                  }
                /> */}
                <Box>
                  <Text fontWeight="medium">{member.name}</Text>
                </Box>
              </HStack>
            </Td>
            <Td>
              <Text color="fg.muted">
                {"[" +
                  member.zonecode +
                  "] " +
                  member.street +
                  " " +
                  (member.address ? member.address : "")}
              </Text>
            </Td>
            <Td>
              <Text color="fg.muted">{member.phone}</Text>
            </Td>
            <Td>
              <Text color="fg.muted">{member.blog}</Text>
            </Td>
            <Td>
              {member.step === 0 ? (
                <Button onClick={() => handleSelectUser(member)}>
                  선정하기
                </Button>
              ) : (
                <VStack spacing={4}>
                  <HStack>
                    {member.step > 1 && (
                      <BsCheckCircleFill style={{ color: "green" }} size={20} />
                    )}
                    <Text
                      opacity={member.step > 1 ? 1 : 0.5}
                      color={member.step > 1 ? "green.500" : "gray.500"}
                      fontSize={"xl"}
                      fontWeight="bold"
                    >
                      {member.step > 1 ? "사용완료" : "사용완료전"}{" "}
                      {member.step > 1 ? member.useDate : ""}
                    </Text>
                  </HStack>
                  <HStack>
                    {member.step > 2 && (
                      <BsCheckCircleFill style={{ color: "green" }} size={20} />
                    )}
                    <Text
                      opacity={member.step > 2 ? 1 : 0.5}
                      color={member.step > 1 ? "green.500" : "gray.500"}
                      fontSize={"xl"}
                      fontWeight="bold"
                    >
                      {member.step > 2 ? "리뷰완료" : "리뷰작성전"}{" "}
                      {member.step > 2 ? member.reviewDate : ""}
                    </Text>
                  </HStack>
                </VStack>
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
