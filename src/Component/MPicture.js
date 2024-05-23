import React, { useEffect, useState } from "react";
import { getDocument, searchDoc } from "../Firebase/Database";
import { where } from "firebase/firestore";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { PageHeader2 } from "../Application/PageHeader/PageHeader2";
import { BiComment, BiLink } from "react-icons/bi";
import { bucketAddress } from "../E-Commerce/ProductGrid/GridQuiteMinimalistic/_data";

function Picture(props) {
  const [reviewList, setReviewList] = useState([]);
  const [totalPicture, setTotalPicture] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

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

  const handleImageClick = (imageUrl) => {
    // console.log("이미지링크 이건디 : ", imageUrl);
    setSelectedImageUrl(imageUrl);
    onOpen();
  };

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
              <>
                <Image
                  objectFit={"cover"}
                  aspectRatio={1}
                  w={"full"}
                  alt=""
                  rounded={"lg"}
                  shadow={"md"}
                  cursor={"pointer"}
                  src={
                    bucketAddress +
                    "/downloads%2F" +
                    encodeURIComponent(image.split("/").pop().split("?")[0]) +
                    "?alt=media"
                  }
                  onClick={() =>
                    handleImageClick(
                      bucketAddress +
                        "/downloads%2F" +
                        encodeURIComponent(
                          image.split("/").pop().split("?")[0]
                        ) +
                        "?alt=media"
                    )
                  }
                />
              </>
            ))}
          </>
        ))}
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="2xl">
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody py={4}>
            {selectedImageUrl && (
              <Image
                src={selectedImageUrl}
                objectFit="contain"
                w="full"
                h="full"
                alt=""
              />
            )}
          </ModalBody>
          <ModalFooter>
            <Button w={"full"} onClick={onClose}>
              이미지 닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
}

export default Picture;
