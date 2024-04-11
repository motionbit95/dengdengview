import {
  AspectRatio,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'

export const App = () => (
  <Container py={{ base: '16', md: '24' }}>
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={16}>
      <Stack spacing={{ base: '8', md: '12' }} justifyContent="center">
        <Stack spacing={{ base: '4', md: '6' }}>
          <Heading size={{ base: 'md', md: 'xl' }}>Create your app remarkable fast</Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="fg.muted">
            Choose from over 180+ beautiful and responsive components and build your app twice as
            fast.
          </Text>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} spacing="3">
          <Button size={{ base: 'lg', md: 'xl' }}>Buy now</Button>
          <Button variant="secondary" size={{ base: 'lg', md: 'xl' }}>
            Learn more
          </Button>
        </Stack>
      </Stack>
      <AspectRatio ratio={1}>
        <Image objectFit="cover" src="https://tinyurl.com/yeyjvptc" alt="Lady at work" />
      </AspectRatio>
    </SimpleGrid>
  </Container>
)
