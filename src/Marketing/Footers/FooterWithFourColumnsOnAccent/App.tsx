import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaBlog,
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Blog, Kakao, Logo, Naver } from "./Logo";
import { links } from "./_data";
import { BiCoffee } from "react-icons/bi";
import { FiCoffee } from "react-icons/fi";

export const FooterWithFourColumnsOnAccent = () => (
  <Box bg="#F1F4F8" color="on-acccent">
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack
        justify="space-between"
        align={{ base: "center", md: "end" }}
        spacing={{ base: "8", md: "0" }}
        direction={{ base: "column", md: "row" }}
        // py={{ base: "8", md: "16" }}
        // spacing="8"
      >
        <Stack
          spacing={{ base: "6", md: "8" }}
          align={{ base: "center", md: "start" }}
        >
          {/* <Image w={24} src={require("../../../Assets/img/LogoTextW.png")} /> */}
          <Text
            color={"#8C8C8C"}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontFamily={"Cafe24Ssurround"}
          >
            댕댕뷰
          </Text>
          <Text color="#57636C">강아지 고양이 체험단 & 이벤트</Text>
          <Stack
            color="#57636C"
            fontSize={"sm"}
            whiteSpace={"nowrap"}
            spacing={{ base: 1, md: 0.5 }}
          >
            <Stack direction={{ base: "column", lg: "row" }}>
              <Text>제이에이치컴퍼니(댕댕뷰)</Text>
              <Text display={{ base: "none", lg: "block" }}>|</Text>
              <Text>대표자 : 조재현,김현준</Text>
            </Stack>
            <Stack direction={{ base: "column", lg: "row" }}>
              <Text>사업자등록번호 : 376-02-02457</Text>
              <Text display={{ base: "none", lg: "block" }}>|</Text>
              <Text>주소 : 경기도 군포시 군포첨단산업2로7번길 8</Text>
            </Stack>
            <Stack direction={{ base: "column", lg: "row" }}>
              <Text>이메일 : dengdengview@naver.com</Text>
              <Text display={{ base: "none", lg: "block" }}>|</Text>
              <Text>전화번호 : 010-8307-2838</Text>
            </Stack>
            <Text>카카오톡 채널 문의 : 댕댕뷰 체험단</Text>
          </Stack>
        </Stack>
        {/* <SimpleGrid
          columns={{ base: 2, md: 3 }}
          columnGap={{ base: "4", md: "8" }}
          rowGap={{ base: "4", md: "8" }}
          width={{ base: "full", lg: "auto" }}
        >
          {links.map((group, idx) => (
            <Stack key={idx} spacing="4" minW={{ lg: "40" }}>
              <Text fontSize="sm" fontWeight="semibold" color="#8C8C8C">
                {group.title}
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                {group.links.map((link, idx) => (
                  <Button
                    key={idx}
                    as="a"
                    // variant="text.accent"
                    variant={"ghost"}
                    color={"#57636C"}
                    _hover={{ bgColor: "gray.200" }}
                    href={link.href}
                  >
                    {link.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid> */}
        <Stack
          spacing={2}
          fontSize={"sm"}
          fontWeight={"700"}
          textAlign={{ base: "center", md: "end" }}
        >
          <Text>이용약관</Text>
          <Text>개인정보처리방침</Text>
        </Stack>
      </Stack>
      {/* <Divider borderColor="#CCCCCC" /> */}
      <Stack
        pt={{ base: "4", md: "8" }}
        justify="space-between"
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
      >
        <Text fontSize="sm" color="#57636C" fontWeight={"700"}>
          &copy; {new Date().getFullYear()} JH Company, Inc. All rights
          reserved.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://pf.kakao.com/_xbxnxnyxj"
            aria-label="Blog"
            icon={<Kakao color="#57636C" />}
          />
          {/* <IconButton
            as="a"
            // href="https://www.instagram.com/dengdeng_view/"
            aria-label="Link"
            icon={<FaLink size={"24px"} color="#57636C" />}
          /> */}
          <IconButton
            as="a"
            href="https://www.instagram.com/dengdeng_view/"
            aria-label="Instagram"
            icon={<FaInstagram size={"24px"} color="#57636C" />}
          />
          <IconButton
            as="a"
            href="https://cafe.naver.com/dengdengview"
            aria-label="Blog"
            icon={<Naver color="#57636C" />}
          />
        </ButtonGroup>
      </Stack>
    </Container>
  </Box>
);
