import { Badge, Box, Button, Container, Heading, Img, Stack, Text } from '@chakra-ui/react'

export const App = () => (
  <Box position="relative" height={{ lg: '720px' }}>
    <Container py={{ base: '16', md: '24' }} height="full">
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '16' }}
        align={{ lg: 'center' }}
        height="full"
      >
        <Stack spacing={{ base: '8', md: '12' }}>
          <Stack spacing="4">
            <Badge
              variant="pill"
              colorScheme="blue"
              alignSelf="start"
              size={{ base: 'md', md: 'lg' }}
            >
              New components available
            </Badge>
            <Stack spacing={{ base: '4', md: '6' }} maxW={{ md: 'xl', lg: 'md', xl: 'xl' }}>
              <Heading size={{ base: 'md', md: 'xl' }}>Create your app remarkable fast</Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} color="fg.muted">
                Choose from over 180+ beautiful and responsive components and build your app twice
                as fast.
              </Text>
            </Stack>
          </Stack>
          <Stack direction={{ base: 'column', md: 'row' }} spacing="3">
            <Button size={{ base: 'lg', md: 'xl' }}>Buy now</Button>
            <Button variant="secondary" size={{ base: 'lg', md: 'xl' }}>
              Learn more
            </Button>
          </Stack>
        </Stack>
        <Box
          pos={{ lg: 'absolute' }}
          right="0"
          bottom="0"
          w={{ base: 'full', lg: '50%' }}
          height={{ base: '96', lg: 'full' }}
          sx={{
            clipPath: { lg: 'polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)' },
          }}
        >
          <Img
            boxSize="full"
            objectFit="cover"
            src="https://tinyurl.com/yeyjvptc"
            alt="Lady at work"
          />
        </Box>
      </Stack>
    </Container>
  </Box>
)
