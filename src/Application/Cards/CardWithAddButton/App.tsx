import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { experiences } from "./data";

export const CardWithAddButton = () => (
  <Box as="section" py={{ base: "4", md: "8" }}>
    <Container maxW="3xl">
      <Box
        bg="bg.surface"
        boxShadow="sm"
        borderRadius="lg"
        p={{ base: "4", md: "6" }}
      >
        <Stack spacing="5" divider={<StackDivider />}>
          <Stack
            justify="space-between"
            direction={{ base: "column", sm: "row" }}
            spacing="5"
          >
            <Stack spacing="1">
              <Text textStyle="lg" fontWeight="medium">
                Experiences
              </Text>
              <Text textStyle="sm" color="fg.muted">
                Write in a few short sentences where you have already worked.
              </Text>
            </Stack>
            <Button>Add</Button>
          </Stack>
          {experiences.map((experience, id) => (
            <Stack key={id} justify="space-between" direction="row" spacing="4">
              <Stack spacing="0.5" fontSize="sm">
                <Text color="fg.emphasized" fontWeight="medium">
                  {experience.title}
                </Text>
                <Text color="fg.muted">{experience.description}</Text>
              </Stack>

              <Stack
                direction={{ base: "column", sm: "row" }}
                spacing={{ base: "0", sm: "1" }}
              >
                <IconButton
                  icon={<FiEdit2 />}
                  variant="tertiary"
                  aria-label="Edit experience"
                />
                <IconButton
                  icon={<FiTrash2 />}
                  variant="tertiary"
                  aria-label="Delete experience"
                />
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Container>
  </Box>
);
