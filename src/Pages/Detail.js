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
  Flex,
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
import "../Component/Calendar.css";
import moment from "moment";
import { CardContent } from "../Application/Users/UserCardWithBackground/CardContent";
import { BsCalendar, BsEye, BsEyeFill } from "react-icons/bs";
import { updateDoc } from "../Firebase/Database";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
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
    <Container
      maxW={{ base: "container.sm", lg: "container.xl" }}
      px={{ base: "4", sm: "8" }}
      py={{ base: "4", sm: "8" }}
    >
      <HStack alignItems={"start"}>
        <Stack w={"full"}>
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
              colorScheme={calculateDday(campain?.endDate) < 0 ? "gray" : "red"}
            >
              {calculateDday(campain?.endDate) < 0
                ? "신청마감"
                : `D-${calculateDday(campain?.endDate)}`}
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
                  <Text>{campain?.endDate}</Text>
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

          <Button isDisabled={calculateDday(campain?.endDate) < 0}>
            {calculateDday(campain?.endDate) < 0
              ? "신청이 마감되었습니다."
              : "체험 신청하기"}
          </Button>
          <Stack overflow={"hidden"} spacing={0}>
            {isOpen ? (
              <>
                {campain?.images?.map((value, index) => (
                  // <Text pb={2}>{value}</Text>
                  <Image src={value} />
                ))}
              </>
            ) : (
              <>
                {/* <Text pb={2}>{campain?.images?.[0]}</Text> */}
                <Image src={campain?.images?.[0]} />
              </>
            )}
          </Stack>
          <Button
            colorScheme="gray"
            variant="outline"
            onClick={() => onToggle(!isOpen)}
            rightIcon={isOpen ? <FiChevronUp /> : <FiChevronDown />}
          >
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
                          <Text
                            style={{ color: "#3182CE", fontWeight: "bold" }}
                          >
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
                  {/* <AccordionItem>
                  <AccordionButton {...accordionButtonStyle}>
                    <HStack as="span" flex="1" textAlign="left">
                      <Text>필수 키워드</Text>
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
                </AccordionItem> */}
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
                  {/* <AccordionItem>
                  <AccordionButton {...accordionButtonStyle}>
                    <Box as="span" flex="1" textAlign="left">
                      추가 안내사항
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel {...accordionPanelStyle}>
                    <Text whiteSpace={"pre-line"}>{campain?.etc}</Text>
                  </AccordionPanel>
                </AccordionItem> */}
                </Accordion>
              </TabPanel>
              <TabPanel>
                <p>to be continue</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
        <Box
          w={"50%"}
          pointerEvents={"none"}
          display={{ base: "none", lg: "block" }}
        >
          <Calendar
            formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
            value={[new Date(campain?.startDate), new Date(campain?.endDate)]}
            selectRange={true}
            navigationLabel={null}
            nextLabel={null}
            prevLabel={null}
            prev2Label={null}
            next2Label={null}
            showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
            style={{
              width: "100%",
              marginX: "auto",
              fontSize: "12px",
            }}
            calendarType="gregory"
          />
        </Box>
      </HStack>
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
