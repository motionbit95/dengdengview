import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
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
  <Box bg="bg.accent.default" color="on-acccent">
    <Container as="footer" role="contentinfo">
      <Stack
        justify="space-between"
        align="start"
        direction={{ base: "column", lg: "row" }}
        py={{ base: "12", md: "16" }}
        spacing="8"
      >
        <Stack spacing={{ base: "6", md: "8" }} align="start">
          <Logo />
          <Text color="fg.accent.muted">강아지 고양이 체험단 & 이벤트</Text>
          <Stack color="fg.accent.muted" fontSize={"sm"}>
            <Text>대표자 : 홍길동</Text>
            <Text>사업자등록번호 : 123-45-67890</Text>
            <Text>전화번호 : 010-1234-5678</Text>
            <Text>이메일 : dangdang@example.com</Text>
            <Text>주소 : 서울시 강남구 테헤란로</Text>
          </Stack>
        </Stack>
        <SimpleGrid
          columns={{ base: 2, md: 4 }}
          gap="8"
          width={{ base: "full", lg: "auto" }}
        >
          {links.map((group, idx) => (
            <Stack key={idx} spacing="4" minW={{ lg: "40" }}>
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="fg.accent.subtle"
              >
                {group.title}
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                {group.links.map((link, idx) => (
                  <Button
                    key={idx}
                    as="a"
                    variant="text.accent"
                    href={link.href}
                  >
                    {link.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
      <Divider borderColor="bg.accent.subtle" />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
      >
        <Text fontSize="sm" color="fg.accent.subtle">
          &copy; {new Date().getFullYear()} JH Company, Inc. All rights
          reserved.
        </Text>
        <ButtonGroup variant="tertiary.accent">
          <IconButton
            as="a"
            href="https://www.instagram.com/dengdeng_view/"
            aria-label="Instagram"
            icon={<FaInstagram size={"24px"} />}
          />
          <IconButton
            as="a"
            href="https://cafe.naver.com/dengdengview"
            aria-label="Blog"
            icon={<Naver />}
          />
          <IconButton
            as="a"
            href="https://pf.kakao.com/_xbxnxnyxj"
            aria-label="Blog"
            icon={<Kakao />}
          />
        </ButtonGroup>
      </Stack>
    </Container>
  </Box>
);
