import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Stack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Text,
  HStack,
} from "@chakra-ui/react";
import { PageHeader2 } from "../Application/PageHeader/PageHeader2";
import { StatWithLabel } from "../Application/Stats/StateWithLabel/App";
import { campains } from "../E-Commerce/ProductGrid/GridQuiteMinimalistic/_data";
import Calendar from "react-calendar";
import moment from "moment";
import { CardContent } from "../Application/Users/UserCardWithBackground/CardContent";
import { BsCalendar } from "react-icons/bs";

function Dashboard(props) {
  const stats = [
    { label: "전체 회원", value: "71,887" },
    { label: "전체 체험단", value: "108" },
    { label: "전체 리뷰", value: "2,359" },
  ];

  const analytics = [
    { label: "신규모집 체험단", value: "10" },
    { label: "모집중인 체험단", value: "52" },
    { label: "발표예정 체험단", value: "12" },
    { label: "전체 조회수", value: "2,430" },
    { label: "전체 신청수", value: "294" },
    { label: "전체 리뷰수", value: "187" },
  ];

  return (
    <Box as="section">
      <PageHeader2
        title="Dashboard"
        discription="댕댕뷰의 전체 체험단 현황을 한눈에 확인해보세요!🔥"
      />
      <Box py={{ base: "4", md: "8" }}>
        <Container>
          <StatWithLabel stats={stats} />
        </Container>
      </Box>
      <Container pb={{ base: "4", md: "8" }}>
        <Stack direction={{ base: "column", lg: "row" }} spacing="5">
          <Ranking />
          <Card width={{ base: "full", lg: "50%" }}>
            <CardHeader flexDirection={"column"} alignItems={"start"} pb={4}>
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>
                날짜별 체험단 현황
              </Text>
              {/* <Text fontSize={{ base: "sm", md: "md" }} color="fg.muted">
                날짜별 체험단 현황을 알 수 있습니다.
              </Text> */}
            </CardHeader>
            <CardBody px={4} py={0}>
              <Plan />
              <Stack py={{ base: "2", md: "4" }}>
                <StatWithLabel stats={analytics} />
              </Stack>
            </CardBody>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}

export const Ranking = () => {
  const ranking = campains.sort((a, b) => b.views - a.views);
  return (
    <Card width={{ base: "full", lg: "50%" }}>
      <CardHeader flexDirection={"column"} alignItems={"start"} pb={4}>
        <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>
          주간 체험단 랭킹
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }} color="fg.muted">
          한 주간 조회수가 많았던 체험단입니다.
        </Text>
      </CardHeader>
      <CardBody py={0}>
        <Stack spacing={1}>
          {ranking.map((item, index) => (
            <Stack rounded={"lg"} spacing={0} key={index}>
              <HStack spacing={4} justify="space-between" p={3}>
                <Text noOfLines={1}>
                  {index + 1}. {item.name}
                </Text>
                <Text minW={"60px"} textAlign={"right"} noOfLines={1}>
                  {item.views}회
                </Text>
              </HStack>
            </Stack>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export const Plan = () => {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <Stack>
      <HStack>
        <BsCalendar />
        <Text>
          {value[0].getFullYear()}. {value[0].getMonth() + 1}.{" "}
          {value[0].getDate()}
        </Text>
        <Text> ~ </Text>
        <Text>
          {value[1].getFullYear()}. {value[1].getMonth() + 1}.{" "}
          {value[1].getDate()}
        </Text>
      </HStack>
      <Calendar
        onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
        formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
        value={value}
        selectRange={true}
        navigationLabel={null}
        showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
        style={{ width: "100%", marginX: "auto", fontSize: "12px" }}
        calendarType="gregory"
      />
    </Stack>
  );
};

export default Dashboard;
