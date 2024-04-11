import { Container, Flex, Stack } from '@chakra-ui/react'
import { Footer } from './Footer'
import { Main } from './Main'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export const App = () => (
  <Flex direction="column" flex="1">
    <Navbar />
    <Container py="16" flex="1">
      <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '12', lg: '16' }} flex="1">
        <Sidebar maxW={{ lg: '36' }} />
        <Main />
        <Sidebar maxW={{ lg: '72' }} />
      </Stack>
    </Container>
    <Footer />
  </Flex>
)
