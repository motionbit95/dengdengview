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

function Picture(props) {
  const [reviewList, setReviewList] = useState([]);
  const [totalPicture, setTotalPicture] = useState(0);
  useEffect(() => {
    let cid = window.location.pathname.replaceAll("/admin/dashboard/", "");
    console.log(cid);
    searchDoc("Review", where("cid", "==", cid)).then((data) => {
      let reviewList = [];
      let totalPicture = 0;
      data.forEach((doc) => {
        reviewList.push({ ...doc });
        setReviewList(reviewList);
        totalPicture += doc.imageList.length;
        setTotalPicture(totalPicture);
      });
    });
  }, []);
  return (
    <Stack>
      <PageHeader2
        title="사진모아보기"
        discription={`총 ${totalPicture} 개의 사진이 있습니다.`}
      />

      <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={4} p={4}>
        {reviewList.map((review) => (
          <>
            {review.imageList.map((image) => (
              <Image
                objectFit={"cover"}
                aspectRatio={1}
                w={"full"}
                alt=""
                rounded={"lg"}
                shadow={"md"}
                src={
                  bucketAddress +
                  "/downloads%2F" +
                  image.split("/").pop().split("?")[0] +
                  "?alt=media"
                }
              />
            ))}
          </>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

export default Picture;
