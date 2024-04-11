import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FacebookIcon, TwitterIcon, WhatsAppIcon } from "./SocialIcons";

export const CardWithForm = () => (
  <Box as="section" py={{ base: "4", md: "8" }}>
    <Container maxW="3xl">
      <Box
        bg="bg.surface"
        boxShadow="sm"
        borderRadius="lg"
        p={{ base: "4", md: "6" }}
      >
        <Stack spacing="5">
          <Stack spacing="1">
            <Text textStyle="lg" fontWeight="medium">
              Share Chakra UI with friends
            </Text>
            <Text textStyle="sm" color="fg.muted">
              Email friends who have never tried Chakra UI
            </Text>
          </Stack>
          <Stack spacing="3" direction={{ base: "column", sm: "row" }}>
            <Button
              variant="secondary"
              leftIcon={<FacebookIcon />}
              iconSpacing="3"
            >
              Facebook
            </Button>
            <Button
              variant="secondary"
              leftIcon={<TwitterIcon />}
              iconSpacing="3"
            >
              Twitter
            </Button>
            <Button
              variant="secondary"
              leftIcon={<WhatsAppIcon />}
              iconSpacing="3"
            >
              WhatsApp
            </Button>
          </Stack>
          <Stack direction={{ base: "column", sm: "row" }} spacing="3">
            <FormControl id="email" width={{ sm: "auto" }}>
              <FormLabel>Send an invite</FormLabel>
              <Input
                type="email"
                placeholder="Your friends email"
                maxW={{ sm: "xs" }}
              />
            </FormControl>
            <Button alignSelf={{ sm: "flex-end" }}>Send</Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  </Box>
);
