import {
  Avatar,
  Button,
  HStack,
  Heading,
  Stack,
  Text,
  border,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PageHeader2 } from "../Application/PageHeader/PageHeader2";
import { getDocument, searchDoc } from "../Firebase/Database";
import { where } from "firebase/firestore";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import {
  BsChatDots,
  BsCheckCircle,
  BsClipboard2Check,
  BsFile,
  BsHeart,
  BsLink,
} from "react-icons/bs";
import { BiLink, BiUser } from "react-icons/bi";
import { AiOutlineHeart, AiOutlinePicture } from "react-icons/ai";

function ReviewDetail(props) {
  const [reviewList, setReviewList] = useState([]);
  const [totalCount, setTotalCount] = useState({
    like: 0,
    comment: 0,
    letter: 0,
    picture: 0,
  });
  useEffect(() => {
    let cid = window.location.pathname.replaceAll("/admin/dashboard/", "");
    searchDoc("Review", where("cid", "==", cid)).then((data) => {
      let reviewList = [];
      let like = 0;
      let comment = 0;
      let letter = 0;
      let picture = 0;
      data.forEach((doc) => {
        let isBanner = false;
        doc.imageList.map((item) => {
          if (item.includes("image.png")) {
            isBanner = true;
          }
        });
        if (isBanner) {
          like = like + 1;
        }
        // like = like + 0;
        comment = comment + parseInt(doc.commentCnt ? doc.commentCnt : 0);
        letter = letter + doc.contentList.join().length;
        picture = picture + doc.imageList.length;

        setTotalCount({
          like: like,
          comment: comment,
          letter: letter,
          picture: picture,
        });
        if (doc.uid) {
          getDocument("User", doc.uid).then((user) => {
            reviewList.push({ ...doc, ...user });
            setReviewList(reviewList);
          });
        } else {
          reviewList.push({ ...doc });
          setReviewList(reviewList);
        }
      });
    });
  }, []);

  const isBanner = (list) => {
    let isBanner = false;
    list.map((item) => {
      if (item.includes("image.png")) {
        isBanner = true;
      }
    });
    return isBanner;
  };

  return (
    <Stack>
      {/* <PageHeader2
        title="리뷰 분석"
        discription={`총 ${reviewList.length}개의 리뷰가 있습니다.`}
      /> */}
      <Stack py={2}>
        <Heading size={"sm"}>리뷰 분석</Heading>
        <Text opacity={0.5}>{reviewList.length}개의 리뷰가 있습니다</Text>
      </Stack>

      <Stack>
        <Stack
          border={"2px"}
          borderColor={"#00B5D8"}
          borderRadius={"xl"}
          overflow={"hidden"}
        >
          <HStack bgColor={"#00B5D8"} p={2}>
            <BiUser color={"white"} size={"24px"} />
            <Text color={"white"} fontWeight={"bold"} fontSize={"xl"}>
              총 인원 : {reviewList.length}명
            </Text>
          </HStack>
          <HStack w={"100%"} justifyContent={"space-around"} p={2}>
            <Stack>
              <HStack>
                <Text fontWeight={"bold"}>베너 등록 완료</Text>
                <BsCheckCircle opacity={0.5} size={"18px"} />
              </HStack>
              <HStack>
                <Text fontWeight={"bold"} fontSize={"lg"} color={"#00B5D8"}>
                  {totalCount.like}
                </Text>
                <Text fontWeight={"bold"} fontSize={"lg"}>
                  개
                </Text>
              </HStack>
            </Stack>
            <Stack>
              <HStack>
                <Text fontWeight={"bold"}>총 댓글 수</Text>
                <BsChatDots opacity={0.5} size={"18px"} />
              </HStack>
              <HStack>
                <Text fontWeight={"bold"} fontSize={"lg"} color={"#00B5D8"}>
                  {totalCount.comment}
                </Text>
                <Text fontWeight={"bold"} fontSize={"lg"}>
                  개
                </Text>
              </HStack>
            </Stack>
            <Stack>
              <HStack>
                <Text fontWeight={"bold"}> 총 글자 수</Text>
                <BsClipboard2Check opacity={0.5} size={"18px"} />
              </HStack>
              <HStack>
                <Text fontWeight={"bold"} fontSize={"lg"} color={"#00B5D8"}>
                  {totalCount.letter.toLocaleString()}
                </Text>
                <Text fontWeight={"bold"} fontSize={"lg"}>
                  개
                </Text>
              </HStack>
            </Stack>
            <Stack>
              <HStack>
                <Text fontWeight={"bold"}> 총 사진 수</Text>
                <AiOutlinePicture opacity={0.5} size={"18px"} />
              </HStack>
              <HStack>
                <Text fontWeight={"bold"} fontSize={"lg"} color={"#00B5D8"}>
                  {totalCount.picture}
                </Text>
                <Text fontWeight={"bold"} fontSize={"lg"}>
                  개
                </Text>
              </HStack>
            </Stack>
          </HStack>
        </Stack>

        <TableContainer
          p={{ base: 0, md: 4 }}
          border={"1px solid #d9d9d9"}
          borderRadius={"md"}
        >
          <Table variant="striped" colorScheme="gray">
            <Tbody>
              {reviewList.map((review) => (
                <Tr>
                  <Td>
                    <HStack>
                      {/* <Avatar size={"sm"} src={review.image} /> */}
                      <Text>{review.name}</Text>
                    </HStack>
                  </Td>
                  <Td>
                    <Button
                      colorScheme="green"
                      onClick={() => window.open(review.url)}
                      leftIcon={<BiLink />}
                    >
                      리뷰보기
                    </Button>
                  </Td>
                  <Td>
                    <HStack>
                      <BsCheckCircle size={"24px"} />
                      <Text fontSize={"md"} fontWeight={"bold"}>
                        배너 등록
                      </Text>
                      <Text
                        fontSize={"md"}
                        fontWeight={"bold"}
                        color={
                          isBanner(review?.imageList) ? "#00B5D8" : "gray.500"
                        }
                      >
                        {isBanner(review?.imageList) ? "완료" : "미완료"}
                      </Text>
                    </HStack>
                  </Td>
                  <Td>
                    <HStack>
                      <BsChatDots size={"24px"} />
                      <Text fontSize={"md"} fontWeight={"bold"}>
                        댓글 수
                      </Text>
                      <Text
                        fontSize={"md"}
                        fontWeight={"bold"}
                        color={"#00B5D8"}
                      >
                        {review.commentCnt ? review.commentCnt : 0}
                      </Text>
                    </HStack>
                  </Td>

                  <Td>
                    <HStack>
                      <BsClipboard2Check size={"24px"} />
                      <Text fontSize={"md"} fontWeight={"bold"}>
                        글자 수
                      </Text>
                      <Text
                        fontSize={"md"}
                        fontWeight={"bold"}
                        color={"#00B5D8"}
                      >
                        {review.contentList.join(" ").length.toLocaleString()}
                      </Text>
                    </HStack>
                  </Td>

                  <Td>
                    <HStack>
                      <AiOutlinePicture size={"24px"} />
                      <Text fontSize={"md"} fontWeight={"bold"}>
                        사진 수
                      </Text>
                      <Text
                        fontSize={"md"}
                        fontWeight={"bold"}
                        color={"#00B5D8"}
                      >
                        {review.imageList.length}
                      </Text>
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
}

export default ReviewDetail;
