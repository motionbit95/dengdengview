import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  HStack,
  IconButton,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Logo } from './Logo'
import { links } from './_data'

export const App = () => (
  <Box bg="bg.accent.default" color="fg.accent.default">
    <Container as="footer" role="contentinfo">
      <Stack
        spacing={{ base: '12', md: '8' }}
        direction={{ base: 'column-reverse', lg: 'row' }}
        py={{ base: '12', md: '16' }}
        justify="space-between"
      >
        <SimpleGrid columns={{ base: 2, md: 4 }} gap="8" width={{ base: 'full', lg: 'auto' }}>
          {links.map((group, idx) => (
            <Stack key={idx} spacing="4" minW={{ lg: '40' }}>
              <Text fontSize="sm" fontWeight="semibold" color="fg.accent.subtle">
                {group.title}
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                {group.links.map((link, idx) => (
                  <Button key={idx} as="a" variant="text.accent" href={link.href}>
                    {link.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
        <Stack spacing="4">
          <Text fontSize="sm" fontWeight="semibold" color="fg.accent.subtle">
            Stay up to date
          </Text>
          <Stack spacing="4" direction={{ base: 'column', sm: 'row' }} maxW={{ lg: '360px' }}>
            <Input placeholder="Enter your email" variant="filled.accent" type="email" required />
            <Button variant="primary.accent" type="submit">
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Divider borderColor="bg.accent.subtle" />
      <Stack
        pb="12"
        pt="8"
        justify="space-between"
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'start', md: 'center' }}
      >
        <HStack
          justify={{ base: 'space-between', sm: 'start' }}
          width={{ base: 'full', sm: 'auto' }}
          spacing="8"
        >
          <Logo />
          <ButtonGroup variant="tertiary.accent">
            <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
            <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
          </ButtonGroup>
        </HStack>
        <Text fontSize="sm" color="fg.accent.subtle">
          &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
        </Text>
      </Stack>
    </Container>
  </Box>
)
