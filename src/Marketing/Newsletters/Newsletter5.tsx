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
  <Container py={{ base: '16', md: '24' }}>
    <Box bg="bg.surface" py={{ base: '10', md: '16' }} px="6" borderRadius="lg" boxShadow="sm">
      <Stack spacing={{ base: '8', md: '10' }} align="center">
        <Stack spacing={{ base: '4', md: '5' }} textAlign="center">
          <Heading size={{ base: 'sm', md: 'md' }}>Not found what you are looking for?</Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="fg.muted">
            We will contact you when there are new components to discover.
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          width="full"
          maxW={{ md: 'lg' }}
          spacing="4"
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
)
