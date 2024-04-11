import { Box, Container, Text } from "@chakra-ui/react";
import { CheckboxCard, CheckboxCardGroup } from "./CheckboxCardGroup";

export const CheckboxCardGroupContainer = () => (
  <Box as="section" bg="bg.surface" py={{ base: "4", md: "8" }}>
    <Container maxW="lg">
      <CheckboxCardGroup defaultValue={["one", "two"]} spacing="3">
        {["one", "two", "three"].map((option) => (
          <CheckboxCard key={option} value={option}>
            <Text color="fg.emphasized" fontWeight="medium" fontSize="sm">
              Option {option}
            </Text>
            <Text color="fg.muted" textStyle="sm">
              Jelly biscuit muffin icing dessert powder macaroon.
            </Text>
          </CheckboxCard>
        ))}
      </CheckboxCardGroup>
    </Container>
  </Box>
);
