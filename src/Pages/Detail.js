import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Stack,
  Text,
  HStack,
  Button,
  Image,
  Tag,
  Wrap,
  WrapItem,
  Box,
  Container,
} from "@chakra-ui/react";
import { calculateDday } from "../E-Commerce/ProductGrid/GridQuiteMinimalistic/_data";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Calendar from "react-calendar";
import moment from "moment";
import { CardContent } from "../Application/Users/UserCardWithBackground/CardContent";
import { BsCalendar } from "react-icons/bs";
function Detail(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const campain = location.state;

  const [isOpen, onToggle] = React.useState(false);

  console.log(campain);

  return (
    <Container maxW={"3xl"} px={{ base: "4", sm: "8" }}>
      <Stack>
        <Text pb={2}>{campain?.id}</Text>
        <Text pb={2}>{campain?.name}</Text>
        <Text pb={2}>{campain?.type}</Text>
        <Text pb={2}>{campain?.views}</Text>
        <HStack>
          <Text pb={2}>{campain?.startDate}</Text>
          <Text pb={2}>{campain?.endDate}</Text>
        </HStack>
        <Text pb={2}>{campain?.expireDate}</Text>
        <HStack>
          <Text pb={2}>{campain?.reviewStart}</Text>
          <Text pb={2}>{campain?.reviewEnd}</Text>
        </HStack>

        <Button>배송 체험 신청하기</Button>
        <Text pb={2}>
          신청 마감까지 {calculateDday(campain?.expireDate)}일 남았습니다.
        </Text>
        <Stack overflow={"hidden"} spacing={0}>
          {isOpen ? (
            <>
              {campain?.images?.map((value, index) => (
                //   <Text pb={2}>{value}</Text>
                <Image src={value} />
              ))}
            </>
          ) : (
            <>
              <Image src={campain?.images?.[0]} />
            </>
          )}
        </Stack>
        <Button onClick={() => onToggle(!isOpen)}>
          {isOpen ? "내용 접기" : "펼쳐보기"}
        </Button>
        <Stack direction={{ base: "column", md: "row" }}>
          <Stack>
            <Text pb={2}>배송형 체험단이예요</Text>
            <Text pb={2}>
              업체 배송한 상품에 대한 SNS 리뷰를 작성하는 체험단이예요
            </Text>
          </Stack>
          <Stack>
            <Text pb={2}>업체 배송 시 전달받은 송장번호를 확인한다.</Text>
            <Text pb={2}>송장번호를 통해 배송현황을 파악한다.</Text>
            <Text pb={2}>배송받은 상품을 체험하고 리뷰를 쓴다.</Text>
          </Stack>
        </Stack>
        <Tabs>
          <TabList pb={2}>
            <Tab>리뷰정보</Tab>
            <Tab>신청현황</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={0}>
              <Accordion defaultIndex={[0, 1, 2, 3]} allowMultiple>
                <AccordionItem>
                  <AccordionButton {...accordionButtonStyle}>
                    <Box as="span" flex="1" textAlign="left">
                      리뷰어 제공
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel {...accordionPanelStyle}>
                    <Text pb={2}>
                      총{" "}
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        {campain?.targetCnt}
                      </span>
                      명 모집
                    </Text>
                    <Text whiteSpace={"pre-wrap"}>{campain?.product}</Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton {...accordionButtonStyle}>
                    <HStack as="span" flex="1" textAlign="left">
                      <Text pb={2}>필수 키워드</Text>
                      <Button>키워드 복사</Button>
                    </HStack>

                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel {...accordionPanelStyle}>
                    <Wrap>
                      {campain?.must_keyword?.map((value) => (
                        <WrapItem>
                          <Tag>{value}</Tag>
                        </WrapItem>
                      ))}
                    </Wrap>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton {...accordionButtonStyle}>
                    <Box as="span" flex="1" textAlign="left">
                      리뷰어 미션
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel {...accordionPanelStyle}>
                    <HStack>
                      {campain?.mission?.map((value) => (
                        <Text pb={2}>{value}</Text>
                      ))}
                    </HStack>
                    <Text whiteSpace={"pre-line"}>
                      {campain?.mission_description}
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton {...accordionButtonStyle}>
                    <Box as="span" flex="1" textAlign="left">
                      추가 안내사항
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel {...accordionPanelStyle}>
                    <Text whiteSpace={"pre-line"}>{campain?.etc}</Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
            <TabPanel>
              <p>to be continue</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Container>
  );
}
export const accordionButtonStyle = {
  borderTopColor: "gray.800",
  borderTopWidth: 3,
  fontSize: "lg",
  fontWeight: "bold",
};

export const accordionPanelStyle = {
  py: 8,
};

export default Detail;
