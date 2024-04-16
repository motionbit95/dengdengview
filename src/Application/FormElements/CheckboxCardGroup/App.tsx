import { Box, Container, Text } from "@chakra-ui/react";
import { CheckboxCard, CheckboxCardGroup } from "./CheckboxCardGroup";

export const CheckboxCardGroupContainer = (props: any) => (
  <Box
    as="section"
    bg="bg.surface"
    // py={{ base: "4", md: "8" }}
    w={"full"}
  >
    <CheckboxCardGroup spacing="3">
      {props?.list?.map((option: any) => (
        <CheckboxCard key={option} value={option}>
          <Text color="fg.emphasized" fontWeight="medium" fontSize="sm">
            {option.title}
          </Text>
          <Text color="fg.muted" textStyle="sm">
            {option.description}
          </Text>
        </CheckboxCard>
      ))}
    </CheckboxCardGroup>
  </Box>
);
