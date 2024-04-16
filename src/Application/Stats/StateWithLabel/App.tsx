import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { Stat } from "./Stat";

export const StatWithLabel = (props: any) => (
  <Box as="section" w={"full"}>
    <SimpleGrid columns={{ base: 1, lg: 3 }} gap={4}>
      {props.stats.map((value: any, index: number) => (
        <Stat key={index} label={value.label} value={value.value} />
      ))}
    </SimpleGrid>
  </Box>
);
