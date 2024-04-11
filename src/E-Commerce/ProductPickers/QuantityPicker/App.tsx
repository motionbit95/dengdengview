import { Box } from "@chakra-ui/react";
import { QuantityPicker } from "./QuantityPicker";

export const QuantityPickerContainer = () => {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <QuantityPicker rootProps={{ maxW: "140px" }} defaultValue={1} max={5} />
    </Box>
  );
};
