import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'

export const App = () => (
  <Box as="section" bg="bg.accent.default" color="fg.accent.default">
    <Container py={{ base: '16', md: '24' }}>
      <Stack spacing={{ base: '8', md: '10' }}>
        <Stack spacing={{ base: '4', md: '5' }} align="center">
          <Heading size={{ base: 'sm', md: 'md' }}>Ready to Grow?</Heading>
          <Text color="on-accent-muteed" maxW="2xl" textAlign="center" fontSize="xl">
            With this beautiful and responsive React components you will realize your next project
            in no time.
          </Text>
        </Stack>
        <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify="center">
          <Button variant="secondary.accent" size="xl">
            Learn more
          </Button>
          <Button variant="primary.accent" size="xl">
            Start Free Trial
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Box>
)
