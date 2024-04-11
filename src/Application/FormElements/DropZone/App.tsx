import { Box, Container, FormControl, FormLabel } from "@chakra-ui/react";
import { Dropzone } from "./Dropzone";

export const DropzoneContainer = () => (
  <Box as="section" bg="bg.surface" py={{ base: "4", md: "8" }}>
    <Container maxW="lg">
      <FormControl id="file">
        <FormLabel>Dropzone</FormLabel>
        <Dropzone />
      </FormControl>
    </Container>
  </Box>
);
