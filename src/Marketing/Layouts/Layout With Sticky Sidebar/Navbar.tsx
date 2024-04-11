import { Box, Container } from '@chakra-ui/react'
import { Placeholder } from './Placeholder'
import { useNavbar } from './useNavbar'

export const Navbar = () => {
  const { rootProps } = useNavbar()

  return (
    <Box
      as="nav"
      role="navigation"
      position="sticky"
      top="0"
      zIndex="docked"
      bg="bg.accent.default"
      color="fg.accent.default"
      {...rootProps}
    >
      <Container>
        <Placeholder minH="20">Navigation</Placeholder>
      </Container>
    </Box>
  )
}
