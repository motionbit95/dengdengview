import { Box, Button, Container, Slide, Stack, Text } from "@chakra-ui/react";
import { useBanner } from "./useBanner";

export const BannerWithText = () => {
  const { isOpen, onClose } = useBanner();
  return (
    <Slide direction="top" in={isOpen}>
      <Container px={{ base: "0", md: "6" }}>
        <Box
          borderBottomRadius={{ base: "0", md: "lg" }}
          borderWidth="1px"
          borderTopWidth="0"
          bg="bg.surface"
          boxShadow="sm"
        >
          <Box px="4" py={{ base: "4", md: "3.5" }}>
            <Stack
              spacing="4"
              justify={{ base: "start", md: "space-between" }}
              direction={{ base: "column", md: "row" }}
            >
              <Box>
                <Text fontWeight="medium">Stay Ahead with our Newsletter</Text>
                <Text color="fg.muted">
                  Embrace trends, industry insights, and actionable advice.
                </Text>
              </Box>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing="3"
                align={{ base: "stretch", md: "center" }}
              >
                <Button>Sign Up</Button>
                <Button variant="secondary" onClick={onClose}>
                  Dismiss
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Slide>
  );
};
