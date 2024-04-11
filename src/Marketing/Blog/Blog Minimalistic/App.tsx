import { Container, GridItem, SimpleGrid } from '@chakra-ui/react'
import { BlogPost } from './BlogPost'
import { posts } from './data'

export const App = () => (
  <Container py={{ base: '16', md: '24' }}>
    <SimpleGrid columns={2} gridRowGap={{ base: '8', md: '16' }} gridColumnGap="8">
      {posts.map((post) => (
        <GridItem
          key={post.id}
          sx={{
            ':nth-of-type(3n-2)': { gridColumn: 'span 2' },
          }}
          gridColumn={{ base: 'span 2', md: 'span 1' }}
        >
          <BlogPost post={post} />
        </GridItem>
      ))}
    </SimpleGrid>
  </Container>
)
