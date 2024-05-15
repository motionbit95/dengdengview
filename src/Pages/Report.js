import {
  Stack,
  Text,
  Button,
  Icon,
  Box,
  Circle,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  HStack,
  Input,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import {
  BsClipboardCheck,
  BsPersonCheck,
  BsCalendarCheck,
  BsCheck2Square,
} from "react-icons/bs";
import { colorScheme } from "../App";

const Report = () => (
  <Stack align="center" background="#d9d9d9" minW="1024px" spacing="30px">
    <HStack
      w="100%"
      padding={"10px 40px"}
      justify="space-between"
      bgColor={"white"}
      borderColor="#D9D9D9"
      borderBottomWidth="1px"
    >
      <Text fontWeight="bold" fontSize="2xl" color="black">
        댕댕뷰
      </Text>
      <Text fontWeight="regular" fontSize="lg" color="black">
        서비스 리포트 페이지
      </Text>
    </HStack>
    <Stack
      paddingX="40px"
      paddingTop="30px"
      paddingBottom="80px"
      spacing="30px"
      alignSelf="stretch"
      background="linear-gradient(180deg, #ffffff00 0%, #ffffff 100%)"
    >
      <Stack align="flex-start" spacing="10px">
        <Text lineHeight="1.2" fontWeight="bold" fontSize="30px" color="black">
          [경기 수원]
        </Text>
        <Text lineHeight="1.2" fontWeight="bold" fontSize="36px" color="black">
          한우갑 광교점
        </Text>
        <Button size="lg">모집글 보기</Button>
      </Stack>
      {/* 캠페인 현황 */}
      <Stack
        padding={"30px 20px"}
        borderRadius="10px"
        spacing="20px"
        background="white"
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      >
        <HStack justify="space-between" align="center">
          <Text fontWeight="bold" fontSize="3xl">
            전체 캠페인 현황
          </Text>
          <Text fontWeight="bold" fontSize="xl">
            2023.05.25~2024.01.31
          </Text>
        </HStack>
        <HStack
          padding="20px"
          borderRadius="10px"
          border="1px solid #D9D9D9"
          spacing="0"
        >
          <HStack justify="space-around" flex="1">
            <Stack align="center">
              <Icon as={BsClipboardCheck} />
              <Text fontWeight="bold" fontSize="md">
                신청
              </Text>
              <Text fontWeight="bold" fontSize="lg" color="#ECC94B">
                2,169
              </Text>
            </Stack>
            <Stack align="center">
              <Icon as={BsPersonCheck} />
              <Text fontWeight="bold" fontSize="md">
                선정
              </Text>
              <Text fontWeight="bold" fontSize="lg" color="#ECC94B">
                67
              </Text>
            </Stack>
            <Stack align="center">
              <Icon as={BsCalendarCheck} />
              <Text fontWeight="bold" fontSize="md">
                체험완료
              </Text>
              <Text fontWeight="bold" fontSize="lg" color="#ECC94B">
                54
              </Text>
            </Stack>
            <Stack align="center">
              <Icon as={BsCheck2Square} />
              <Text fontWeight="bold" fontSize="md">
                리뷰완료
              </Text>
              <Text fontWeight="bold" fontSize="lg" color="#ECC94B">
                54
              </Text>
            </Stack>
          </HStack>
          <Box w="1px" h="40px" border={"1px solid #D9D9D9"} />
          <Stack flex="1">
            <HStack justify="space-around" spacing="10px">
              <Text fontWeight="bold" fontSize="lg">
                최근 30일 조회
              </Text>
              <HStack>
                <Text fontWeight="bold" fontSize="md" color="#ECC94B">
                  6,133
                </Text>
                <Text fontWeight="regular" fontSize="md" color="#000000">
                  회
                </Text>
              </HStack>
            </HStack>
            <HStack justify="space-around" spacing="10px">
              <Text fontWeight="bold" fontSize="lg">
                총 조회 수
              </Text>
              <HStack>
                <Text
                  lineHeight="1.5"
                  fontWeight="bold"
                  fontSize="16px"
                  color="#ECC94B"
                >
                  208,998
                </Text>
                <Text
                  lineHeight="1.5"
                  fontWeight="regular"
                  fontSize="16px"
                  color="#000000"
                >
                  회
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </HStack>
        <HStack h={"240px"}>
          <Stack spacing="10px" flex="1" alignSelf="stretch">
            <HStack fontWeight="bold" fontSize="16px">
              <Text>지난</Text>
              <Text color="#ECC94B">30일</Text>
              <Text>조회 그래프</Text>
            </HStack>
            <Stack borderRadius="10px" border={"1px solid #D9D9D9"} flex="1" />
          </Stack>
          <Stack spacing="10px" flex="1" alignSelf="stretch">
            <HStack fontWeight="bold" fontSize="16px">
              <Text>전체</Text>
              <Text color="#ECC94B">총 조회</Text>
              <Text>그래프</Text>
            </HStack>
            <Stack
              borderRadius="10px"
              border={"1px solid #D9D9D9"}
              flex="1"
              alignSelf="stretch"
            />
          </Stack>
        </HStack>
        <Button
          size="lg"
          // colorScheme={colorScheme}
          height="48px"
          alignSelf="stretch"
        >
          종합 상세 리포트 보기
        </Button>
      </Stack>
      {/* 네이버 노출 키워드 */}
      <Stack
        borderRadius="10px"
        overflow="hidden"
        border={"1px solid #4FC671"}
        height="449px"
        background="white"
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      >
        <HStack
          padding={"4px 10px"}
          align="center"
          spacing="10px"
          background="#4FC671"
        >
          <Text fontWeight="bold" fontSize="xl" color="white">
            네이버 노출 키워드
          </Text>
        </HStack>
        <HStack padding="10px" spacing="10px" flex="1">
          <Stack paddingX="20px" spacing="25px" flex="1" alignSelf="stretch">
            <Text
              lineHeight="1.5"
              fontWeight="bold"
              fontSize="18px"
              color="#000000"
            >
              네이버 키워드 노출 순위
            </Text>
            <Stack align="center" spacing="12px" flex="1" alignSelf="stretch">
              <HStack
                justify="space-between"
                align="center"
                alignSelf="stretch"
              >
                <HStack justify="flex-start" align="center" spacing="10px">
                  <Text
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    color="#000000"
                  >
                    광교한우
                  </Text>
                  <Circle size="20px" background="#D96083" />
                </HStack>
                <HStack gap={"0px"}>
                  <Text
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    color="#ECC94B"
                  >
                    186
                  </Text>
                  <Text
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    color="#000000"
                  >
                    건
                  </Text>
                </HStack>
              </HStack>
              <HStack
                justify="space-between"
                align="center"
                alignSelf="stretch"
              >
                <HStack justify="flex-start" align="center" spacing="10px">
                  <Text
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    color="#000000"
                  >
                    광교룸 식당
                  </Text>
                  <Circle size="20px" background="#5082D0" />
                </HStack>
                <HStack gap={"0px"}>
                  <Text
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    color="#ECC94B"
                  >
                    186
                  </Text>
                  <Text
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    color="#000000"
                  >
                    건
                  </Text>
                </HStack>
              </HStack>
              <HStack
                justify="space-between"
                align="center"
                alignSelf="stretch"
              >
                <HStack justify="flex-start" align="center" spacing="10px">
                  <Text
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    color="#000000"
                  >
                    광교 한우
                  </Text>
                  <Circle size="20px" background="#66DD7D" />
                </HStack>
                <HStack gap={"0px"}>
                  <Text
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    color="#ECC94B"
                  >
                    186
                  </Text>
                  <Text
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    color="#000000"
                  >
                    건
                  </Text>
                </HStack>
              </HStack>
              <HStack
                justify="space-between"
                align="center"
                alignSelf="stretch"
              >
                <HStack justify="flex-start" align="center" spacing="10px">
                  <Text
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    color="#000000"
                  >
                    수원광교맛집
                  </Text>
                  <Circle size="20px" background="#E5D279" />
                </HStack>
                <HStack gap={"0px"}>
                  <Text
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    color="#ECC94B"
                  >
                    186
                  </Text>
                  <Text
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    color="#000000"
                  >
                    건
                  </Text>
                </HStack>
              </HStack>
              <HStack
                justify="space-between"
                align="center"
                alignSelf="stretch"
              >
                <HStack justify="flex-start" align="center" spacing="10px">
                  <Text
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    color="#000000"
                  >
                    수원광교한우맛집
                  </Text>
                  <Circle size="20px" background="#88CEC3" />
                </HStack>
                <HStack gap={"0px"}>
                  <Text
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    color="#ECC94B"
                  >
                    186
                  </Text>
                  <Text
                    lineHeight="1.5"
                    fontWeight="bold"
                    fontSize="16px"
                    color="#000000"
                  >
                    건
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Stack>
          <Stack
            flex="1"
            alignSelf="stretch"
            background="rgba(0, 0, 0, 0.04)"
          />
        </HStack>
      </Stack>
    </Stack>
    <Stack
      paddingX="40px"
      paddingTop="30px"
      paddingBottom="80px"
      spacing="30px"
      w="100%"
      background="white"
    >
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Stack marginBottom="20px">
              <Text fontWeight="bold" fontSize="3xl">
                진행별 캠페인
              </Text>
              <Text
                fontWeight="medium"
                fontSize="md"
                color="rgba(0, 0, 0, 0.5)"
              >
                각 차수별로 자세한 내용을 들어가 볼 수 있습니다.
              </Text>
            </Stack>
          </Thead>
          <Tbody borderY={"1px solid black"}>
            <Tr>
              <Td>
                <HStack>
                  <Stack
                    borderRadius="10px"
                    width="64px"
                    height="64px"
                    background="#203E59"
                    justify="center"
                  >
                    <Stack align="center" spacing={"0px"} color="white">
                      <Text fontWeight="bold" fontSize="xl">
                        전체
                      </Text>
                      <Text fontWeight="medium" fontSize="sm">
                        종합
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack justify="center" spacing="4px">
                    <Text fontWeight="bold" fontSize="xl">
                      전체 종합지수
                    </Text>
                    <Text
                      fontWeight="bold"
                      fontSize="sm"
                      color="rgba(0, 0, 0, 0.5)"
                    >
                      2023.05.25~2024.01.31
                    </Text>
                  </Stack>
                </HStack>
              </Td>
              <Td>
                <HStack flex="1" justify="flex-end" spacing="30px">
                  <HStack w="350px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        신청자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">2,169</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        선정자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">67</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        사용완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">54</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        리뷰완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">54</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                  <HStack w="250px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        최근 30일 조회
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">6,133</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        총 조회 수
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">208,998</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                </HStack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <HStack>
                  <Stack
                    borderRadius="10px"
                    width="64px"
                    height="64px"
                    background="linear-gradient(270deg, #228d58 0%, #4585bf 100%)"
                    justify="center"
                  >
                    <Stack align="center" spacing={"0px"} color="white">
                      <Text fontWeight="bold" fontSize="xl">
                        8차
                      </Text>
                      <Text fontWeight="medium" fontSize="sm">
                        마감
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack justify="center" spacing="4px">
                    <Text fontWeight="bold" fontSize="xl">
                      [경기 수원] 한우갑 광교점
                    </Text>
                    <Text
                      fontWeight="bold"
                      fontSize="sm"
                      color="rgba(0, 0, 0, 0.5)"
                    >
                      2023.01.09~2024.01.31
                    </Text>
                  </Stack>
                </HStack>
              </Td>
              <Td>
                <HStack flex="1" justify="flex-end" spacing="30px">
                  <HStack w="350px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        신청자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">117</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        선정자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">18</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        사용완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">17</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        리뷰완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">17</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                  <HStack w="250px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        최근 30일 조회
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">3,061</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        총 조회 수
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">11,379</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                </HStack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <HStack>
                  <Stack
                    borderRadius="10px"
                    width="64px"
                    height="64px"
                    background="linear-gradient(270deg, #228d58 0%, #4585bf 100%)"
                    justify="center"
                  >
                    <Stack align="center" spacing={"0px"} color="white">
                      <Text fontWeight="bold" fontSize="xl">
                        7차
                      </Text>
                      <Text fontWeight="medium" fontSize="sm">
                        마감
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack justify="center" spacing="4px">
                    <Text fontWeight="bold" fontSize="xl">
                      [경기 수원] 한우갑 광교점
                    </Text>
                    <Text
                      fontWeight="bold"
                      fontSize="sm"
                      color="rgba(0, 0, 0, 0.5)"
                    >
                      2023.01.09~2024.01.31
                    </Text>
                  </Stack>
                </HStack>
              </Td>
              <Td>
                <HStack flex="1" justify="flex-end" spacing="30px">
                  <HStack w="350px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        신청자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">117</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        선정자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">18</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        사용완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">17</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        리뷰완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">17</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                  <HStack w="250px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        최근 30일 조회
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">3,061</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        총 조회 수
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">11,379</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                </HStack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <HStack>
                  <Stack
                    borderRadius="10px"
                    width="64px"
                    height="64px"
                    background="linear-gradient(270deg, #228d58 0%, #4585bf 100%)"
                    justify="center"
                  >
                    <Stack align="center" spacing={"0px"} color="white">
                      <Text fontWeight="bold" fontSize="xl">
                        6차
                      </Text>
                      <Text fontWeight="medium" fontSize="sm">
                        마감
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack justify="center" spacing="4px">
                    <Text fontWeight="bold" fontSize="xl">
                      [경기 수원] 한우갑 광교점
                    </Text>
                    <Text
                      fontWeight="bold"
                      fontSize="sm"
                      color="rgba(0, 0, 0, 0.5)"
                    >
                      2023.01.09~2024.01.31
                    </Text>
                  </Stack>
                </HStack>
              </Td>
              <Td>
                <HStack flex="1" justify="flex-end" spacing="30px">
                  <HStack w="350px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        신청자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">117</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        선정자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">18</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        사용완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">17</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        리뷰완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">17</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                  <HStack w="250px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        최근 30일 조회
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">3,061</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        총 조회 수
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">11,379</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                </HStack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <HStack>
                  <Stack
                    borderRadius="10px"
                    width="64px"
                    height="64px"
                    background="linear-gradient(270deg, #228d58 0%, #4585bf 100%)"
                    justify="center"
                  >
                    <Stack align="center" spacing={"0px"} color="white">
                      <Text fontWeight="bold" fontSize="xl">
                        5차
                      </Text>
                      <Text fontWeight="medium" fontSize="sm">
                        마감
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack justify="center" spacing="4px">
                    <Text fontWeight="bold" fontSize="xl">
                      [경기 수원] 한우갑 광교점
                    </Text>
                    <Text
                      fontWeight="bold"
                      fontSize="sm"
                      color="rgba(0, 0, 0, 0.5)"
                    >
                      2023.01.09~2024.01.31
                    </Text>
                  </Stack>
                </HStack>
              </Td>
              <Td>
                <HStack flex="1" justify="flex-end" spacing="30px">
                  <HStack w="350px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        신청자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">117</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        선정자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">18</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        사용완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">17</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        리뷰완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">17</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                  <HStack w="250px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        최근 30일 조회
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">3,061</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        총 조회 수
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">11,379</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                </HStack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <HStack>
                  <Stack
                    borderRadius="10px"
                    width="64px"
                    height="64px"
                    background="linear-gradient(270deg, #228d58 0%, #4585bf 100%)"
                    justify="center"
                  >
                    <Stack align="center" spacing={"0px"} color="white">
                      <Text fontWeight="bold" fontSize="xl">
                        4차
                      </Text>
                      <Text fontWeight="medium" fontSize="sm">
                        마감
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack justify="center" spacing="4px">
                    <Text fontWeight="bold" fontSize="xl">
                      [경기 수원] 한우갑 광교점
                    </Text>
                    <Text
                      fontWeight="bold"
                      fontSize="sm"
                      color="rgba(0, 0, 0, 0.5)"
                    >
                      2023.01.09~2024.01.31
                    </Text>
                  </Stack>
                </HStack>
              </Td>
              <Td>
                <HStack flex="1" justify="flex-end" spacing="30px">
                  <HStack w="350px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        신청자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">117</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        선정자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">18</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        사용완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">17</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        리뷰완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">17</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                  <HStack w="250px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        최근 30일 조회
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">3,061</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        총 조회 수
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">11,379</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                </HStack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <HStack>
                  <Stack
                    borderRadius="10px"
                    width="64px"
                    height="64px"
                    background="linear-gradient(270deg, #228d58 0%, #4585bf 100%)"
                    justify="center"
                  >
                    <Stack align="center" spacing={"0px"} color="white">
                      <Text fontWeight="bold" fontSize="xl">
                        3차
                      </Text>
                      <Text fontWeight="medium" fontSize="sm">
                        마감
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack justify="center" spacing="4px">
                    <Text fontWeight="bold" fontSize="xl">
                      [경기 수원] 한우갑 광교점
                    </Text>
                    <Text
                      fontWeight="bold"
                      fontSize="sm"
                      color="rgba(0, 0, 0, 0.5)"
                    >
                      2023.01.09~2024.01.31
                    </Text>
                  </Stack>
                </HStack>
              </Td>
              <Td>
                <HStack flex="1" justify="flex-end" spacing="30px">
                  <HStack w="350px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        신청자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">117</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        선정자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">18</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        사용완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">17</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        리뷰완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">17</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                  <HStack w="250px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        최근 30일 조회
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">3,061</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        총 조회 수
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">11,379</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                </HStack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <HStack>
                  <Stack
                    borderRadius="10px"
                    width="64px"
                    height="64px"
                    background="linear-gradient(270deg, #228d58 0%, #4585bf 100%)"
                    justify="center"
                  >
                    <Stack align="center" spacing={"0px"} color="white">
                      <Text fontWeight="bold" fontSize="xl">
                        2차
                      </Text>
                      <Text fontWeight="medium" fontSize="sm">
                        마감
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack justify="center" spacing="4px">
                    <Text fontWeight="bold" fontSize="xl">
                      [경기 수원] 한우갑 광교점
                    </Text>
                    <Text
                      fontWeight="bold"
                      fontSize="sm"
                      color="rgba(0, 0, 0, 0.5)"
                    >
                      2023.01.09~2024.01.31
                    </Text>
                  </Stack>
                </HStack>
              </Td>
              <Td>
                <HStack flex="1" justify="flex-end" spacing="30px">
                  <HStack w="350px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        신청자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">117</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        선정자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">18</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        사용완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">17</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        리뷰완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">17</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                  <HStack w="250px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        최근 30일 조회
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">3,061</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        총 조회 수
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">11,379</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                </HStack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <HStack>
                  <Stack
                    borderRadius="10px"
                    width="64px"
                    height="64px"
                    background="linear-gradient(270deg, #228d58 0%, #4585bf 100%)"
                    justify="center"
                  >
                    <Stack align="center" spacing={"0px"} color="white">
                      <Text fontWeight="bold" fontSize="xl">
                        1차
                      </Text>
                      <Text fontWeight="medium" fontSize="sm">
                        마감
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack justify="center" spacing="4px">
                    <Text fontWeight="bold" fontSize="xl">
                      [경기 수원] 한우갑 광교점
                    </Text>
                    <Text
                      fontWeight="bold"
                      fontSize="sm"
                      color="rgba(0, 0, 0, 0.5)"
                    >
                      2023.01.09~2024.01.31
                    </Text>
                  </Stack>
                </HStack>
              </Td>
              <Td>
                <HStack flex="1" justify="flex-end" spacing="30px">
                  <HStack w="350px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        신청자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">117</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        선정자
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">18</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        사용완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">17</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        리뷰완료
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">17</Text>
                        <Text>명</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                  <HStack w="250px" justify="space-around">
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        최근 30일 조회
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">3,061</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                    <Stack align="center" spacing="0px">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        color="rgba(0, 0, 0, 0.6)"
                      >
                        총 조회 수
                      </Text>
                      <HStack spacing="0px" fontWeight="bold" fontSize="xl">
                        <Text color="#ECC94B">11,379</Text>
                        <Text>회</Text>
                      </HStack>
                    </Stack>
                  </HStack>
                </HStack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
    <Stack
      padding="30px"
      justify="flex-start"
      spacing="30px"
      alignSelf="stretch"
      background="#FFFFFF"
    >
      <Stack spacing="4px">
        <Text
          lineHeight="1.5"
          fontWeight="bold"
          fontSize="30px"
          color="#000000"
        >
          안내사항
        </Text>
        <Text
          lineHeight="1.5"
          fontWeight="medium"
          fontSize="16px"
          color="rgba(0, 0, 0, 0.5)"
        >
          전체 종합 조회 그래프를 보실 수 있습니다.
        </Text>
      </Stack>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton height="44px" alignSelf="stretch">
            <Text
              lineHeight="1.2"
              fontWeight="bold"
              fontSize="20px"
              color="rgba(0, 0, 0, 0.8)"
              flex="1"
            >
              캠페인 리포트 간단 안내
            </Text>
            <Icon />
          </AccordionButton>
          <AccordionPanel>
            <Box
              flex="1"
              lineHeight="1.5"
              fontWeight="regular"
              fontSize="18px"
              color="rgba(0, 0, 0, 0.7)"
            >
              <Text>
                ・ 각 회차별 세부 지표를 누르시면 당첨자 / 후기보기 / 리뷰분석 /
                리뷰사진 / 검색점유율 / 유입키워드 / 모짐글보기를 확인하실 수
                있습니다.
              </Text>
              <Text>
                ・ 결과리포트는 회차별 체험기간이 완료 후 자동업데이트 됩니다.
              </Text>
              <Text>
                ・ 리뷰작성은 초대권 체험기간에서 최대 7일이후까지 작성될 수
                있습니다.
              </Text>
              <Text>
                ・ 체험단 선정기준은 신청자 계정의 영향력에 따라 선정이 되며,
                기준에 적합하지 않을 경우 해당 부족인원수는 재모집을 하여 보다
                영향력있는 체험단으로 구성하여 진행하고 있습니다.
              </Text>
            </Box>
          </AccordionPanel>
          <AccordionButton height="44px" alignSelf="stretch">
            <Text
              lineHeight="1.2"
              fontWeight="bold"
              fontSize="20px"
              color="#000000"
              flex="1"
            >
              캠페인 QnA
            </Text>
            <Icon />
          </AccordionButton>
          <AccordionPanel>
            <Stack
              lineHeight="1.33"
              fontWeight="bold"
              fontSize="18px"
              color="rgba(0, 0, 0, 0.8)"
              flex="1"
              gap="20px"
            >
              <Stack>
                <Text>
                  Q. 사실과 다른 리뷰가 올라왔습니다 어떻게 해야되나요?
                </Text>
                <Text fontWeight="regular" color="rgba(0, 0, 0, 0.5)">
                  A. 해당 블로거의 닉네임 + 전화번호 뒷자리(4자리)를 댕댕뷰로
                  전화 주시면 해당 블로거와의 문제를 해결해드리겠습니다.
                </Text>
              </Stack>
              <Stack>
                <Text>Q. 리뷰에 스폰서배너가 꼭 들어가야 되나요?</Text>
                <Text fontWeight="regular" color="rgba(0, 0, 0, 0.5)">
                  A. 네, 반드시 들어가야합니다. 스폰서 배너를 게시하지 않거나
                  리뷰 작성 후 임의로 스폰서 배너를 삭제하는 경우, 관련 법규에
                  저촉되어 댕댕뷰, 광고주, 체험단에 참여한 회원 모두에게 법적인
                  제제가 가해질 수 있습니다. (공정위 심사지침 개정 2014.07)
                </Text>
              </Stack>
              <Stack>
                <Text>
                  Q. 제공되는 메뉴 이외 음식을 주문했는데 나머지 차액은 어떻게
                  해야되나요?
                </Text>
                <Text fontWeight="regular" color="rgba(0, 0, 0, 0.5)">
                  A. 체험시 제공 내용(비용) 외 추가 비용 발생한 경우, 추가
                  비용은 체험단(블로거) 부담입니다. 추가 비용 요청하시면 됩니다.
                </Text>
              </Stack>
              <Stack>
                <Text>
                  Q. 체험 기간 내 블로거 방문이 어려운 경우, 체험 기간
                  연장해줘도 되나요?
                </Text>
                <Text fontWeight="regular" color="rgba(0, 0, 0, 0.5)">
                  A. 네, 가능합니다. 업체(광고주) 권한으로 가능합니다. 단, 기간
                  연장은 최대 7일까지 가능합니다. . 연장일정은 블로거와 업체
                  사장님께서 조율 후 카카오톡 댕댕뷰로 알려주세요.
                </Text>
              </Stack>
              <Stack>
                <Text>
                  Q. 블로거 리뷰 등록이 늦어지고 있어요. 언제까지 기다려야
                  되나요?
                </Text>
                <Text fontWeight="regular" color="rgba(0, 0, 0, 0.5)">
                  A. 리뷰 마감일 이후, 최대 7일 이내, 리뷰가 게시되지 않을 경우,
                  해당 블로거에 패널티 및 음식비용 청구 등을 철저하게 관리하고
                  있습니다. (리뷰 마감일 이후 7일)
                </Text>
              </Stack>
              <Stack>
                <Text>
                  Q. 체험기간 중 체험신청 블로거가 정원에 차지 않는 경우?
                </Text>
                <Text fontWeight="regular" color="rgba(0, 0, 0, 0.5)">
                  A. 간혹 블로거들이 개인 사정으로 방문하지 않을 경우가
                  있습니다. 결원은 다음 회차 모집 인원에 포함(이월) 진행되거나
                  마지막 회차 혹은 추가 회차를 진행해서라도 계약된 인원수는
                  보장해드리니 걱정 안 하셔도 됩니다.
                </Text>
              </Stack>
            </Stack>
          </AccordionPanel>
          <AccordionButton height="44px" alignSelf="stretch">
            <Text
              lineHeight="1.2"
              fontWeight="bold"
              fontSize="20px"
              color="#000000"
              flex="1"
            >
              광고주 의견 쓰기
            </Text>
            <Icon />
          </AccordionButton>
          <AccordionPanel>
            <Stack spacing="30px" flex="1">
              <Text
                lineHeight="1.5"
                fontWeight="regular"
                fontSize="16px"
                color="#8C8C8C"
              >
                체험단 진행하면서 겪으셨던 불편사항이나 다음 체험에서 바라는
                점을 적어주세요. 광고주 의견을 반영해서 더 나은 캠페인이 진행될
                수 있도록 노력하겠습니다.
              </Text>
              <Input
                placeholder="메모를 입력하세요"
                isInvalid={false}
                isDisabled="Default"
                height="80px"
                alignSelf="stretch"
                borderColor="gray.200"
                borderStartWidth="1px"
                borderEndWidth="1px"
                borderTopWidth="1px"
                borderBottomWidth="1px"
              />
              <Button
                size="lg"
                // colorScheme={colorScheme}
                height="48px"
                alignSelf="stretch"
              >
                의견 제출 하기
              </Button>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
    <Stack
      paddingX="100px"
      paddingY="50px"
      justify="space-between"
      align="flex-start"
      spacing="10px"
      overflow="hidden"
      height="274px"
      alignSelf="stretch"
      background="#FFFFFF"
    >
      <Stack justify="flex-start" align="flex-start" spacing="36px">
        <Stack justify="flex-start" align="flex-start" spacing="10px">
          <Text fontWeight="bold" fontSize="40px" color="#000000">
            댕댕뷰
          </Text>
          <Text fontWeight="medium" fontSize="12px" color="rgba(0, 0, 0, 0.5)">
            2023 JHCompany, Inc. All rights reserved.
          </Text>
        </Stack>
        <Stack justify="flex-start" align="flex-start" spacing="16px">
          <Stack
            direction="row"
            justify="flex-start"
            align="flex-start"
            spacing="36px"
          >
            <HStack justify="flex-start" align="flex-start" spacing="16px">
              <Text
                fontWeight="medium"
                fontSize="14px"
                color="rgba(0, 0, 0, 0.5)"
              >
                상호명
              </Text>
              <Text fontWeight="medium" fontSize="14px" color="#000000">
                제이에이치컴퍼니
              </Text>
            </HStack>
            <HStack justify="flex-start" align="flex-start" spacing="16px">
              <Text
                fontWeight="medium"
                fontSize="14px"
                color="rgba(0, 0, 0, 0.5)"
              >
                대표
              </Text>
              <Text fontWeight="medium" fontSize="14px" color="#000000">
                OOO
              </Text>
            </HStack>
            <HStack justify="flex-start" align="flex-start" spacing="16px">
              <Text
                fontWeight="medium"
                fontSize="14px"
                color="rgba(0, 0, 0, 0.5)"
              >
                사업자등록번호
              </Text>
              <Text fontWeight="medium" fontSize="14px" color="#000000">
                OOO-OO-OOOOO
              </Text>
            </HStack>
          </Stack>
          <Stack
            direction="row"
            justify="flex-start"
            align="flex-end"
            spacing="36px"
          >
            <HStack justify="flex-start" align="flex-start" spacing="16px">
              <Text
                fontWeight="medium"
                fontSize="14px"
                color="rgba(0, 0, 0, 0.5)"
              >
                전화
              </Text>
              <Text fontWeight="medium" fontSize="14px" color="#000000">
                OOO-OOOO-OOOO
              </Text>
            </HStack>
            <HStack justify="flex-start" align="flex-start" spacing="16px">
              <Text
                fontWeight="medium"
                fontSize="14px"
                color="rgba(0, 0, 0, 0.5)"
              >
                이메일
              </Text>
              <Text fontWeight="medium" fontSize="14px" color="#000000">
                OOO@OOOOO
              </Text>
            </HStack>
            <HStack justify="flex-start" align="flex-start" spacing="16px">
              <Text
                fontWeight="medium"
                fontSize="14px"
                color="rgba(0, 0, 0, 0.5)"
              >
                주소
              </Text>
              <Text fontWeight="medium" fontSize="14px" color="#000000">
                OO시 OO구 OO로
              </Text>
            </HStack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
);

export default Report;
