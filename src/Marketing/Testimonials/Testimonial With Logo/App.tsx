import { Avatar, Box, Container, Stack, Text } from '@chakra-ui/react'
import { Logo } from './Logo'

export const App = () => (
  <Box as="section" py={{ base: '16', md: '24' }}>
    <Container>
      <Stack spacing="8" align="center" textAlign="center">
        <Logo />
        <Text textStyle={{ base: '3xl', md: '4xl' }} fontWeight="medium">
          "As a senior UI designer at Logoipsum Inc, I have had the pleasure of using Chakra UI for
          several of our projects. I have to say, it has been an absolute game-changer for our
          team."
        </Text>
        <Stack spacing="4" align="center">
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            size="lg"
            name="Sarah Johnson"
          />
          <Stack spacing="1">
            <Text fontWeight="semibold" textStyle="lg">
              Sarah Johnson
            </Text>
            <Text color="fg.muted">Senior UI Designer, Logoipsum</Text>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  </Box>
)
