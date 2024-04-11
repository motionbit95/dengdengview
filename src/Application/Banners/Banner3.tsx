import {
  Box,
  Container,
  HStack,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react";
import { FiX } from "react-icons/fi";

export const BannerWithSignUp = () => (
  <Box as="section" pb={{ base: "12", md: "24" }}>
    <Box borderBottomWidth="1px" bg="bg.surface">
      <Container py="3">
        <HStack
          spacing={{ base: "3", md: "4" }}
          justify={{ base: "start", md: "space-between" }}
        >
          <Box boxSize="8" display={{ base: "none", md: "block" }} />
          <Text color="fg.emphasized" fontWeight="medium">
            🎉 Hooray, twe just released a new version. Check out{" "}
            <Link href="#">what's new.</Link>
          </Text>
          <IconButton
            icon={<FiX />}
            variant="tertiary"
            aria-label="Close banner"
          />
        </HStack>
      </Container>
    </Box>
  </Box>
);
