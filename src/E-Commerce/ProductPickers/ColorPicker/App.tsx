import { Box } from "@chakra-ui/react";
import { ColorPicker } from "./ColorPicker";

export const ColorPickerContainer = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <ColorPicker
      defaultValue="Blue"
      options={[
        { label: "Blue", value: "#2B6CB0" },
        { label: "Yellow", value: "#ECC94B" },
        { label: "Red", value: "#F56565" },
      ]}
    />
  </Box>
);
