import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'

export const App = () => (
  <Box bgGradient="linear(to-b, bg.accent.default 50%, bg.canvas 50%, )">
    <Container py={{ base: '16', md: '24' }}>
      <Box
        bg="bg.surface"
        py={{ base: '10', md: '16' }}
        px={{ base: '6', md: '16' }}
        borderRadius="lg"
        boxShadow="sm"
      >
        <Stack
          spacing={{ base: '8', md: '8' }}
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
        >
          <Stack spacing={{ base: '4', md: '5' }}>
            <Heading size={{ base: 'sm', md: 'md' }}>Sign up for our newsletter</Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="fg.muted">
              Be the first to know when we release new components
            </Text>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing="4"
            width="full"
            maxW={{ base: 'md', xl: 'lg' }}
          >
            <FormControl flex="1">
              <Input type="email" size="xl" placeholder="Enter your email" />
              <FormHelperText color="fg.subtle">
                We send you at most one mail per month
              </FormHelperText>
            </FormControl>
            <Button size="xl">Subscribe</Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  </Box>
)
