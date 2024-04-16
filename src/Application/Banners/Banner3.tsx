import {
  Box,
  Container,
  HStack,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiX } from "react-icons/fi";

export const BannerWithSignUp = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      {!close && (
        <Box as="section" position={"sticky"} top={0}>
          <Box
            borderBottomWidth="1px"
            // bg="bg.surface"
            style={{
              background: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
            }}
          >
            <Container py="3">
              <HStack
                spacing={{ base: "3", md: "4" }}
                justify={{ base: "start", md: "space-between" }}
              >
                <Box boxSize="8" display={{ base: "none", md: "block" }} />
                <Text color="fg.emphasized" fontWeight="medium">
                  다양한 체험을 원하시면 댕댕뷰를 팔로워 해주세요 💕{" "}
                  <Link href="https://www.instagram.com/dengdeng_view/">
                    댕댕뷰 인스타그램
                  </Link>
                </Text>
                <IconButton
                  onClick={() => setClose(true)}
                  icon={<FiX />}
                  variant="tertiary"
                  aria-label="Close banner"
                />
              </HStack>
            </Container>
          </Box>
        </Box>
      )}
    </>
  );
};
