import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { Stat } from "./Stat";

const stats = [
  { label: "Running ad campaigns", value: 1, limit: 3 },
  { label: "Emails sent", value: 1240, limit: 10000 },
  { label: "Contacts", value: 120, limit: 500 },
];

export const StatWithProgressBar = () => (
  <Box as="section" py={{ base: "4", md: "8" }}>
    <Container>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "5", md: "6" }}>
        {stats.map((stat, id) => (
          <Stat key={id} {...stat} />
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);
