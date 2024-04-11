import { Container, Flex, FlexProps } from '@chakra-ui/react'
import { Placeholder } from './Placeholder'

export const Main = (props: FlexProps) => {
  return (
    <Flex as="main" role="main" direction="column" flex="1" py="16" {...props}>
      <Container flex="1">
        <Placeholder minH="lg" bg="bg.accent.default">
          Main
        </Placeholder>
      </Container>
    </Flex>
  )
}
