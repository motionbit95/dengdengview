import {
  Box,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReviewForm } from "./ReviewForm";

export const ReviewDialog = () => (
  <Box height="100vh">
    {/*`trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly. */}
    <Modal
      isOpen={true}
      onClose={console.log}
      size="xl"
      isCentered
      blockScrollOnMount={false}
      trapFocus={false}
    >
      <ModalOverlay />
      <ModalContent
        borderRadius="xl"
        mx={{ base: "2.5", lg: "16" }}
        overflow="hidden"
      >
        <ModalCloseButton
          top="0"
          right="0"
          size="lg"
          borderRadius="none"
          borderBottomLeftRadius="md"
        />
        <ModalBody
          px={{ base: "5", md: "12", lg: "16" }}
          py={{ base: "10", md: "12", lg: "16" }}
          pb={{ base: "6" }}
        >
          <Stack spacing="6">
            <Heading
              fontSize="2xl"
              fontWeight="semibold"
              color={useColorModeValue("black", "white")}
            >
              Write a review
            </Heading>
            <ReviewForm />
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  </Box>
);
