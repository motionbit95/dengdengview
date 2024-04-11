import {
  Box,
  Container,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { BlogPost } from './BlogPost'
import { posts } from './data'

export const App = () => (
  <Box bg="bg.surface">
    <Box bg="bg.accent.default" color="fg.accent.default">
      <Container pt={{ base: '16', md: '24' }} pb={{ base: '32', md: '48' }}>
        <Stack spacing={{ base: '8', md: '10' }} align="center">
          <Stack spacing={{ base: '4', md: '6' }} textAlign="center">
            <Stack spacing="4">
              <Text fontWeight="semibold" color="blue.50" textStyle={{ base: 'sm', md: 'md' }}>
                Our Blog
              </Text>
              <Heading size={{ base: 'md', md: 'lg' }}>Latest blog posts</Heading>
            </Stack>
            <Text textStyle={{ base: 'lg', md: 'xl' }} maxW="2xl" color="fg.accent.muted">
              Ice cream pudding dragée macaroon donut marzipan chocolate
            </Text>
          </Stack>
          <InputGroup size="xl" maxW={{ md: 'sm' }}>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="fg.accent.default" boxSize="5" />
            </InputLeftElement>
            <Input placeholder="Search" variant="filled.accent" />
          </InputGroup>
        </Stack>
      </Container>
    </Box>
    <Container pb={{ base: '16', md: '24' }} mt={{ base: '-16', md: '-24' }}>
      <Stack spacing={{ base: '16', md: '24' }}>
        <Stack spacing={{ base: '12', md: '16' }}>
          <BlogPost post={posts[0]} isHero />
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: '12', lg: '8' }}>
            {posts.slice(1, 4).map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Container>
  </Box>
)
