import React, { useEffect, useState } from "react";
import { getDocument, searchDoc } from "../Firebase/Database";
import { where } from "firebase/firestore";
import {
  Avatar,
  Button,
  Divider,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PageHeader2 } from "../Application/PageHeader/PageHeader2";
import { BiComment, BiLink } from "react-icons/bi";
import { bucketAddress } from "../E-Commerce/ProductGrid/GridQuiteMinimalistic/_data";

function Review(props) {
  const [reviewList, setReviewList] = useState([]);
  useEffect(() => {
    let cid = window.location.pathname.replaceAll("/admin/dashboard/", "");
    console.log(cid);
    searchDoc("Review", where("cid", "==", cid)).then((data) => {
      let reviewList = [];
      data.forEach((doc) => {
        getDocument("User", doc.uid).then((user) => {
          reviewList.push({ ...doc, ...user });
          console.log({ ...doc, ...user });
          setReviewList(reviewList);
        });
      });
    });
  }, []);
  return (
    <Stack>
      <PageHeader2
        title="리뷰모아보기"
        discription={`총 ${reviewList.length} 개의 리뷰가 있습니다.`}
      />

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4} p={4}>
        {reviewList.map((review) => (
          <Stack
            borderRadius={"lg"}
            borderColor={"green.500"}
            borderWidth={"2px"}
            shadow={"md"}
            key={review.doc_id}
            w={"full"}
            spacing={4}
            p={4}
          >
            <HStack justifyContent={"space-between"}>
              <HStack>
                <Avatar src={review.image} size="sm" />
                <Text>{review.nickname ? review.nickname : review.name}</Text>
              </HStack>
              <Text color="fg.muted" fontSize={"sm"}>
                {review.dateList}
              </Text>
            </HStack>
            <Divider />
            {/* <HStack>
              <BiComment />
              <Text>{review.commentCnt}개</Text>
            </HStack> */}
            <Text fontSize={"lg"} fontWeight={"bold"}>
              {review.titleList?.toString().replaceAll(" : 네이버 블로그", " ")}
            </Text>
            <Text fontSize={"sm"} noOfLines={4} opacity={0.6}>
              {review.contentList.join()}
            </Text>

            <Image
              aspectRatio={"4/3"}
              w={"full"}
              alt=""
              src={
                bucketAddress +
                "/downloads%2F" +
                encodeURIComponent(
                  review.imageList[0].split("/").pop().split("?")[0]
                ) +
                "?alt=media"
              }
            />
            {/* <Text>
              {bucketAddress +
                "/downloads%2F" +
                encodeURIComponent(
                  review.imageList[0].split("/").pop().split("?")[0]
                ) +
                "?alt=media"}
            </Text> */}
            <Button
              leftIcon={<BiLink />}
              colorScheme="green"
              onClick={() => {
                window.open(review.url);
              }}
            >
              리뷰 보러가기
            </Button>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

export default Review;
