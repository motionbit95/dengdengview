import {
  AspectRatio,
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import { Logo } from './Logo'
import { Rating } from './Rating'

export const App = () => (
  <Box as="section" py={{ base: '16', md: '24' }}>
    <Container>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '12', md: '16' }}>
        <AspectRatio ratio={1} order={{ base: '2', md: '0' }}>
          <Image src="https://tinyurl.com/299apdk5" objectFit="cover" />
        </AspectRatio>
        <Stack spacing={{ base: '6', md: '8' }} justify="center">
          <Rating />
          <Text textStyle={{ base: 'lg', md: '2xl' }} fontWeight="medium">
            "As a lead developer at ABC Inc, I have had the opportunity to work with Chakra UI on
            multiple projects. I can confidently say that it is one of the best UI libraries I have
            ever used."
          </Text>
          <Stack
            spacing="5"
            direction="row"
            divider={<StackDivider />}
            align={{ base: 'flex-start', md: 'center' }}
          >
            <Stack spacing={{ base: '4', md: '5' }} direction={{ base: 'column', md: 'row' }}>
              <Box>
                <Text fontWeight="semibold">David Smith</Text>
                <Text color="fg.muted">Lead Developer, ABC Inc.</Text>
              </Box>
            </Stack>
            <Logo />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  </Box>
)
