import { Box } from "@chakra-ui/react";
import { images } from "./_data";
import { Gallery } from "./Gallery";

export const GalleryWithHorizontalCarousel = () => {
  return (
    <Box
      maxW="3xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Gallery images={images} />
    </Box>
  );
};
