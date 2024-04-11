import { Box } from '@chakra-ui/react'
import { Placeholder } from './Placeholder'

export const Main = () => {
  return (
    <Box as="main" role="main" width="full" bg="bg.accent.default">
      <Placeholder minH="lg">Main</Placeholder>
    </Box>
  )
}
