import { Avatar, Button, HStack, Stack, Text } from "@chakra-ui/react";
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
        like = like + 0;
        comment = comment + parseInt(doc.commentCnt);
        letter =
          doc.contentList?.length > 1
            ? letter + doc.contentList.join().length
            : 0;
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
        }
      });
    });
  }, []);
  return (
    <Stack>
      <PageHeader2 title="리뷰분석" />

      <Stack
        border={"2px"}
        borderColor={"red.500"}
        borderRadius={"xl"}
        m={4}
        overflow={"hidden"}
      >
        <HStack bgColor={"#EE3466"} p={2}>
          <BiUser color={"white"} size={"24px"} />
          <Text color={"white"} fontWeight={"bold"} fontSize={"xl"}>
            총 인원 : {reviewList.length}명
          </Text>
        </HStack>
        <HStack w={"100%"} justifyContent={"space-around"} p={2}>
          <Stack>
            <HStack>
              <Text fontWeight={"bold"}>총 공감 수</Text>
              <AiOutlineHeart opacity={0.5} size={"18px"} />
            </HStack>
            <HStack>
              <Text fontWeight={"bold"} fontSize={"lg"} color={"red.500"}>
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
              <Text fontWeight={"bold"} fontSize={"lg"} color={"red.500"}>
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
              <Text fontWeight={"bold"} fontSize={"lg"} color={"red.500"}>
                {totalCount.letter}
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
              <Text fontWeight={"bold"} fontSize={"lg"} color={"red.500"}>
                {totalCount.picture}
              </Text>
              <Text fontWeight={"bold"} fontSize={"lg"}>
                개
              </Text>
            </HStack>
          </Stack>
        </HStack>
      </Stack>

      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          <Tbody>
            {reviewList.map((review) => (
              <Tr>
                <Td>
                  <HStack>
                    <Avatar size={"sm"} src={review.image} />
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
                    <AiOutlineHeart size={"24px"} />
                    <Text fontSize={"md"} fontWeight={"bold"}>
                      공감 수
                    </Text>
                    <Text fontSize={"md"} fontWeight={"bold"} color={"red.500"}>
                      0
                    </Text>
                  </HStack>
                </Td>
                <Td>
                  <HStack>
                    <BsChatDots size={"24px"} />
                    <Text fontSize={"md"} fontWeight={"bold"}>
                      댓글 수
                    </Text>
                    <Text fontSize={"md"} fontWeight={"bold"} color={"red.500"}>
                      {review.commentCnt}
                    </Text>
                  </HStack>
                </Td>

                <Td>
                  <HStack>
                    <BsClipboard2Check size={"24px"} />
                    <Text fontSize={"md"} fontWeight={"bold"}>
                      글자 수
                    </Text>
                    <Text fontSize={"md"} fontWeight={"bold"} color={"red.500"}>
                      {review.contentList.join(" ").length}
                    </Text>
                  </HStack>
                </Td>

                <Td>
                  <HStack>
                    <AiOutlinePicture size={"24px"} />
                    <Text fontSize={"md"} fontWeight={"bold"}>
                      사진 수
                    </Text>
                    <Text fontSize={"md"} fontWeight={"bold"} color={"red.500"}>
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
  );
}

export default ReviewDetail;
