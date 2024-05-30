import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { campains } from "./_data";

export const GridQuiteMinimalistic = (props: any) => (
  <Container>
    <Box
    // maxW="5xl"
    // mx="auto"
    // px={{ base: "6", md: "8", lg: "12" }}
    // py={{ base: "6", md: "8", lg: "12" }}
    >
      {window.location.pathname === "/" ? (
        <SimpleGrid
          columns={{ base: 2, sm: 3, lg: 4 }}
          gap={{ base: "8", lg: "12" }}
        >
          {props?.campains?.slice(0, 8).map((campain: any) => (
            <ProductCard key={campain.doc_id} campain={campain} />
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid
          columns={{ base: 2, sm: 3, lg: 4 }}
          gap={{ base: "8", lg: "12" }}
        >
          {props?.campains?.map((campain: any) => (
            <ProductCard key={campain.doc_id} campain={campain} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  </Container>
);
