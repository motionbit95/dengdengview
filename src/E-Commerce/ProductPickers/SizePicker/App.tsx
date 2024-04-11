import { Box } from "@chakra-ui/react";
import { SizePicker } from "./SizePicker";

export const SizePickerContainer = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <SizePicker
      defaultValue="32"
      options={[
        { label: "32mm", value: "32" },
        { label: "34mm", value: "34" },
        { label: "36mm", value: "36" },
        { label: "40mm", value: "40" },
      ]}
    />
  </Box>
);
