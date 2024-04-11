import { Flex } from '@chakra-ui/react'
import { Footer } from './Footer'
import { Main } from './Main'
import { Navbar } from './Navbar'

export const App = () => (
  <Flex direction="column" flex="1">
    <Navbar />
    <Main />
    <Footer />
  </Flex>
)
