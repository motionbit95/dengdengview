import { Box, Container, Stack } from '@chakra-ui/react'
import { BlogPageHeader } from './BlogPageHeader'
import { BlogPost } from './BlogPost'
import { posts } from './data'

export const App = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <Stack spacing="10" shouldWrapChildren>
        <BlogPageHeader />
        <Box maxW="2xl" mx="auto">
          <Stack spacing="16">
            {posts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}
