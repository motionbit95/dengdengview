import { Accordion, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { JobPosting } from './JobPosting'
import { jobListings } from './data'

export const App = () => (
  <Container py={{ base: '16', md: '24' }}>
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={12}>
      <Stack spacing={{ base: '4', md: '6' }}>
        <Stack spacing="4">
          <Text fontWeight="semibold" color="accent" textStyle={{ base: 'sm', md: 'md' }}>
            Careers
          </Text>
          <Heading as="h1" size={{ base: 'md', md: 'lg' }}>
            Open Positions
          </Heading>
        </Stack>
        <Text textStyle={{ base: 'lg', md: 'xl' }} color="fg.muted">
          Explore exciting job opportunities at our company and join a dynamic team dedicated to
          innovation and excellence.
        </Text>
      </Stack>
      <Accordion defaultIndex={0}>
        {jobListings.map((listing, id) => (
          <JobPosting key={id} {...listing} />
        ))}
      </Accordion>
    </SimpleGrid>
  </Container>
)
