import { Box, BoxProps, Stack, Text } from "@chakra-ui/react";

export const Step = (props) => {
  const { title, description, isActive, isCompleted, ...boxProps } = props;
  return (
    <Box
      flex="1"
      py={{ base: "2", md: "3" }}
      ps={{ base: "3", md: "0" }}
      borderTopWidth={{ base: "0", md: "4px" }}
      borderLeftWidth={{ base: "4px", md: "0" }}
      borderColor={isActive || isCompleted ? "accent" : "inherit"}
      {...boxProps}
    >
      <Stack spacing="0.5" fontSize={"sm"}>
        <Text color="fg.emphasized" fontWeight="medium">
          {title}
        </Text>
        <Text color="fg.muted">{description}</Text>
      </Stack>
    </Box>
  );
};
