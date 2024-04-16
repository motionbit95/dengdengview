import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { campains } from "./_data";

export const GridQuiteMinimalistic = () => (
  <Container>
    <Box
    // maxW="5xl"
    // mx="auto"
    // px={{ base: "6", md: "8", lg: "12" }}
    // py={{ base: "6", md: "8", lg: "12" }}
    >
      <SimpleGrid
        columns={{ base: 2, sm: 3, lg: 4 }}
        gap={{ base: "8", lg: "12" }}
      >
        {campains.map((campain) => (
          <ProductCard key={campain.id} campain={campain} />
        ))}
      </SimpleGrid>
    </Box>
  </Container>
);
