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
    let cid = window.location.pathname.split("/").pop(); //window.location.pathname.replaceAll("/admin/dashboard/", "");
    console.log(cid);
    searchDoc("Review", where("cid", "==", cid)).then((data) => {
      let reviewList = [];
      data.forEach((doc) => {
        console.log(doc);
        if (doc.uid) {
          getDocument("User", doc.uid).then((user) => {
            reviewList.push({ ...doc, ...user });
            console.log({ ...doc, ...user });
            setReviewList(reviewList);
          });
        } else {
          reviewList.push({ ...doc });
          setReviewList(reviewList);
        }
      });
    });
  }, []);
  return (
    <Stack>
      <PageHeader2
        title="리뷰모아보기"
        discription={`총 ${reviewList.length} 개의 리뷰가 있습니다.`}
      />

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={4}
        p={{ base: 4, xl: 8 }}
        // px={{ base: 0, xl: 16 }}
      >
        {reviewList?.map((review) => (
          <Stack
            borderRadius={"lg"}
            borderColor={
              review.reviewType === "instagram" ? "red.500" : "green.500"
            }
            borderWidth={"2px"}
            shadow={"md"}
            key={review.doc_id}
            w={"full"}
            spacing={4}
            p={4}
          >
            <HStack justifyContent={"space-between"}>
              <HStack>
                {/* <Avatar src={review.image} size="sm" /> */}
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
            <Stack height={"full"} justifyContent={"space-between"}>
              <Stack height={"full"} justifyContent={"space-between"}>
                <Text fontSize={"lg"} fontWeight={"bold"} noOfLines={1}>
                  {review.titleList
                    ?.toString()
                    .replaceAll(" : 네이버 블로그", " ")}
                </Text>
                <Text fontSize={"sm"} noOfLines={4} opacity={0.6}>
                  {review.contentList.join()}
                </Text>

                {/* <Text>
                  {review.imageList[0]?.includes("firebase")
                    ? review.imageList[0]
                    : bucketAddress +
                      "/downloads%2F" +
                      encodeURIComponent(
                        review.imageList[0]?.split("/").pop().split("?")[0]
                      ) +
                      "?alt=media"}
                </Text> */}
                {review.imageList.length > 0 && (
                  <Image
                    aspectRatio={"4/3"}
                    objectFit={"cover"}
                    w={"full"}
                    alt=""
                    src={
                      review.imageList[0]?.includes("firebase")
                        ? review.imageList[0]
                        : bucketAddress +
                          "/downloads%2F" +
                          encodeURIComponent(
                            review.imageList[0]?.split("/").pop().split("?")[0]
                          ) +
                          "?alt=media"
                    }
                  />
                )}
              </Stack>
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
                colorScheme={
                  review.reviewType === "instagram" ? "red" : "green"
                }
                onClick={() => {
                  window.open(review.url);
                }}
              >
                리뷰 보러가기
              </Button>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

export default Review;
