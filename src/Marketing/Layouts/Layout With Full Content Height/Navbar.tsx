import { Box, Container } from '@chakra-ui/react'
import { Placeholder } from './Placeholder'

export const Navbar = () => {
  return (
    <Box as="nav" role="navigation" bg="bg.accent.default">
      <Container>
        <Placeholder minH="20">Navigation</Placeholder>
      </Container>
    </Box>
  )
}
