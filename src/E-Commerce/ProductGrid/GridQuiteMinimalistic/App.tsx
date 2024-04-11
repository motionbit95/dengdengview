import { Box, SimpleGrid } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { products } from "./_data";

export const GridQuiteMinimalistic = () => (
  <Box
    maxW="5xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <SimpleGrid
      columns={{ base: 1, sm: 2, lg: 3 }}
      gap={{ base: "8", lg: "12" }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  </Box>
);
