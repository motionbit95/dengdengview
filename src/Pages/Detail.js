import React, { useEffect } from "react";
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
  TagLeftIcon,
  Card,
  CardBody,
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
import { BsCalendar, BsEye, BsEyeFill } from "react-icons/bs";
import { getImage } from "../Firebase/Util";
import { updateDoc } from "../Firebase/Database";
function Detail(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const campain = location.state;

  const [isOpen, onToggle] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // 조회수 업데이트

    updateDoc("Campain", campain?.doc_id, {
      ...campain,
      views: campain?.views + 1,
    });
  }, []);
  return (
    <Container maxW={"3xl"} px={{ base: "4", sm: "8" }}>
      <Stack>
        <Tag w={"fit-content"} size={{ base: "sm", md: "md" }}>
          {campain?.doc_id.substring(0, 8)}
        </Tag>
        <Text pb={2} fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
          {campain?.name}
        </Text>
        <HStack>
          <Tag
            w={"fit-content"}
            size={{ base: "sm", md: "md" }}
            colorScheme={"teal"}
          >
            {campain?.type}
          </Tag>
          <Tag colorScheme="yellow">
            <TagLeftIcon boxSize="12px" as={BsEyeFill} />
            {campain?.views}
          </Tag>
          <Tag
            colorScheme={
              calculateDday(campain?.expireDate) < 0 ? "gray" : "red"
            }
          >
            {calculateDday(campain?.expireDate) < 0
              ? "신청마감"
              : `D-${calculateDday(campain?.expireDate)}`}
          </Tag>
        </HStack>
        <Card>
          <CardBody>
            <Stack>
              <HStack spacing={"6"}>
                <Text fontWeight={"bold"}>모집기간</Text>
                <HStack>
                  <Text>{campain?.startDate}</Text>
                  <Text>{"~"}</Text>
                  <Text>{campain?.endDate}</Text>
                </HStack>
              </HStack>
              <HStack spacing={"6"}>
                <Text fontWeight={"bold"}>발표기간</Text>
                <Text>{campain?.expireDate}</Text>
              </HStack>
              <HStack spacing={"6"}>
                <Text fontWeight={"bold"}>리뷰기간</Text>
                <HStack>
                  <Text>{campain?.reviewStart}</Text>
                  <Text>{"~"}</Text>
                  <Text>{campain?.reviewEnd}</Text>
                </HStack>
              </HStack>
            </Stack>
          </CardBody>
        </Card>

        <Button isDisabled={calculateDday(campain?.expireDate) < 0}>
          {calculateDday(campain?.expireDate) < 0
            ? "신청이 마감되었습니다."
            : "체험 신청하기"}
        </Button>
        <Stack overflow={"hidden"} spacing={0}>
          {isOpen ? (
            <>
              {campain?.images?.map((value, index) => (
                // <Text pb={2}>{value}</Text>
                <Image src={getImage(value)} />
              ))}
            </>
          ) : (
            <>
              {/* <Text pb={2}>{campain?.images?.[0]}</Text> */}
              <Image src={getImage(campain?.images?.[0])} />
            </>
          )}
        </Stack>
        <Button onClick={() => onToggle(!isOpen)}>
          {isOpen ? "내용 접기" : "펼쳐보기"}
        </Button>

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
                    <Stack>
                      <HStack spacing={1}>
                        <Text>총</Text>
                        <Text style={{ color: "#3182CE", fontWeight: "bold" }}>
                          {campain?.targetCnt}명
                        </Text>
                        <Text> 모집</Text>
                      </HStack>
                      <Stack spacing={1}>
                        {campain?.product.split("\n").map((value) => (
                          <Text>- {value}</Text>
                        ))}
                      </Stack>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton {...accordionButtonStyle}>
                    <HStack as="span" flex="1" textAlign="left">
                      <Text>필수 키워드</Text>
                      {/* <Button>키워드 복사</Button> */}
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
  // borderTopColor: "gray.500",
  borderTopWidth: 2,
  fontSize: "lg",
  fontWeight: "bold",
  bgColor: "gray.50",
};

export const accordionPanelStyle = {
  py: { base: "4", md: "8" },
};

export default Detail;
