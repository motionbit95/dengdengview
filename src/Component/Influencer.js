import {
  Box,
  Button,
  Circle,
  Container,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdAdd, MdKeyboardArrowRight } from "react-icons/md";

const Influencer = () => {
  return (
    <Container pt={{ base: "16", md: "24" }} pb={6}>
      <Stack align={"center"} spacing={8}>
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          댕댕뷰 인플루언서
        </Text>
        <Stack w={"full"} py={16} spacing={8} borderRadius={"xl"}>
          <Box
            fontSize={{ base: "xs", md: "md" }}
            fontWeight={"500"}
            whiteSpace={"pre-line"}
            textAlign={"center"}
            pb={8}
          >
            <Text display={{ base: "none", md: "block" }}>
              {`댕댕뷰를 사랑해주시는 인플루언서 여러분, 환영합니다!
              이 서비스는 현재 활발히 활동하고 있는 인플루언서 분들을 위해 마련된 특별한 공간입니다.
              네이버 인플루언서로 활동 중인 분들이라면 누구나 승인되며, 인플루언서 여러분께는
              댕댕뷰에서만 누릴 수 있는 독점 캠페인 참여 기회와 다양한 혜택이 제공됩니다.`}
            </Text>
            <Box display={{ base: "block", md: "none" }} px={4}>
              <Text textAlign={"start"}>
                {`댕댕뷰를 사랑해주시는 인플루언서 여러분, 환영합니다!
              이 서비스는 현재 활발히 활동하고 있는
              인플루언서 분들을 위해 마련된 특별한 공간입니다.
              네이버 인플루언서로 활동 중인 분들이라면 누구나 승인되며,
              인플루언서 여러분께는 댕댕뷰에서만 누릴 수 있는
              독점 캠페인 참여 기회와 다양한 혜택이 제공됩니다.`}
              </Text>
            </Box>
          </Box>
          <Stack
            direction={{ base: "column", md: "row" }}
            align={"center"}
            justify={"center"}
          >
            <Circle
              bgColor={"#F1F4F8"}
              fontSize={"sm"}
              flexDirection={"column"}
              gap={2}
              p={8}
              whiteSpace={"pre-line"}
              textAlign={"center"}
              sx={{
                boxSize: "56",
                fontSize: "14px",
                "@media (max-width: 1000px)": {
                  boxSize: "48",
                  fontSize: "12px",
                },
              }}
            >
              <Text
                fontSize={"md"}
                fontWeight={"bold"}
                sx={{
                  "@media (max-width: 1000px)": {
                    fontSize: "14px",
                  },
                }}
              >{`인플루언서
              전용 캠페인`}</Text>
              <Text>{`인플루언서만 이용 가능한
              캠페인에 마음껏
              참여해보세요!`}</Text>
            </Circle>
            <Icon as={MdAdd} color={"black"} boxSize={"6"} />
            <Circle
              bgColor={"#F1F4F8"}
              size={"56"}
              fontSize={"sm"}
              flexDirection={"column"}
              gap={2}
              p={8}
              whiteSpace={"pre-line"}
              textAlign={"center"}
              sx={{
                boxSize: "56",
                fontSize: "14px",
                "@media (max-width: 1000px)": {
                  boxSize: "48",
                  fontSize: "12px",
                },
              }}
            >
              <Text
                fontSize={"md"}
                fontWeight={"bold"}
                sx={{
                  "@media (max-width: 1000px)": {
                    fontSize: "14px",
                  },
                }}
              >{`제품 제공 및 원고료`}</Text>
              <Text>
                {`각 브랜드의 특별한 제품은
                물론 원고료도
                지급 받으실 수 있습니다.`}
              </Text>
            </Circle>
            <Icon as={MdAdd} boxSize={"6"} />
            <Circle
              whiteSpace={"pre-line"}
              bgColor={"#F1F4F8"}
              size={"56"}
              fontSize={"sm"}
              flexDirection={"column"}
              gap={2}
              p={8}
              textAlign={"center"}
              sx={{
                boxSize: "56",
                fontSize: "14px",
                "@media (max-width: 1000px)": {
                  boxSize: "48",
                  fontSize: "12px",
                },
              }}
            >
              <Text
                fontSize={"md"}
                fontWeight={"bold"}
                sx={{
                  "@media (max-width: 1000px)": {
                    fontSize: "14px",
                  },
                }}
              >{`체험단 선정확률 UP`}</Text>
              <Text>
                {`댕댕뷰 인플루언서
                전용 혜택으로, 
                모든 캠페인에서 체험단에 
                선정될 확률이 높아져요!`}
              </Text>
            </Circle>
          </Stack>
          <Box w={"full"} display={"flex"} justifyContent={"center"}>
            <Button
              rightIcon={<MdKeyboardArrowRight />}
              px={{ base: 8, md: 16 }}
              size={"lg"}
            >
              인플루언서 신청하러 가기
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Influencer;
