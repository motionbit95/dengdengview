import { Box, Container, IconButton, Stack, Text } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";

export const BannerWithLink = () => (
  <Box as="section" pb={{ base: "12", md: "24" }}>
    <Box borderBottomWidth="1px" bg="bg.surface">
      <Container py={{ base: "4", md: "3.5" }}>
        <Stack
          direction="row"
          spacing={{ base: "3", md: "4" }}
          justify="space-between"
          align={{ base: "start", md: "center" }}
        >
          <Box>
            <Text fontWeight="medium">
              Hooray, twe just released a new version.
            </Text>
            <Text color="fg.muted">
              Exciting times ahead, as the new version integrates the most
              recent updates from Chakra UI.
            </Text>
          </Box>
          <IconButton
            icon={<FiX />}
            variant="tertiary"
            aria-label="Close banner"
          />
        </Stack>
      </Container>
    </Box>
  </Box>
);
