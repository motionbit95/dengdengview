import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Logo } from './Logo'
import { links } from './_data'

export const App = () => (
  <Box bg="bg.accent.default" color="on-acccent">
    <Container as="footer" role="contentinfo">
      <Stack
        justify="space-between"
        align="start"
        direction={{ base: 'column', lg: 'row' }}
        py={{ base: '12', md: '16' }}
        spacing="8"
      >
        <Stack spacing={{ base: '6', md: '8' }} align="start">
          <Logo />
          <Text color="fg.accent.muted">Create beautiful websites remarkably fast.</Text>
        </Stack>
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
      </Stack>
      <Divider borderColor="bg.accent.subtle" />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
      >
        <Text fontSize="sm" color="fg.accent.subtle">
          &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
        </Text>
        <ButtonGroup variant="tertiary.accent">
          <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
        </ButtonGroup>
      </Stack>
    </Container>
  </Box>
)
