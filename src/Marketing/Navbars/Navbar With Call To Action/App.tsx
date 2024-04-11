import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { Logo } from './Logo'
import { MobileDrawer } from './MobileNavbar'
import { ToggleButton } from './ToggleButton'

export const App = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const mobileNavbar = useDisclosure()
  return (
    <Box as="section" minH="md">
      <Box borderBottomWidth="1px" bg="bg.surface" position="relative" zIndex="tooltip">
        <Container py="4">
          <HStack justify="space-between">
            <Logo />
            {isDesktop ? (
              <HStack spacing="8">
                <ButtonGroup size="lg" variant="text" colorScheme="gray" spacing="8">
                  {['Components', 'Pricing', 'Marketplace', 'Support'].map((item) => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup>
                <Button>Sign Up</Button>
              </HStack>
            ) : (
              <>
                <ToggleButton
                  onClick={mobileNavbar.onToggle}
                  isOpen={mobileNavbar.isOpen}
                  aria-label="Open Menu"
                />
                <MobileDrawer isOpen={mobileNavbar.isOpen} onClose={mobileNavbar.onClose} />
              </>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}
