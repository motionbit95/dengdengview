import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'

export const App = () => (
  <Container py={{ base: '16', md: '24' }}>
    <Box
      bg="bg.accent.default"
      color="fg.accent.default"
      borderRadius="xl"
      px={{ base: '6', lg: '16' }}
      py={{ base: '10', lg: '16' }}
    >
      <Stack spacing="8" direction={{ base: 'column', lg: 'row' }} justify="space-between">
        <Stack spacing="4" maxW="2xl">
          <Heading size="sm">Ready to Grow?</Heading>
          <Text color="fg.accent.muted" fontSize={{ base: 'lg', lg: 'xl' }}>
            With this beautiful and responsive React components you will realize your next project
            in no time.
          </Text>
        </Stack>
        <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify={{ base: 'start' }}>
          <Button variant="secondary.accent" size="xl">
            Learn more
          </Button>
          <Button variant="primary.accent" size="xl">
            Start Free Trial
          </Button>
        </Stack>
      </Stack>
    </Box>
  </Container>
)
