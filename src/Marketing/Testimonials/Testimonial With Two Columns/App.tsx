import { Box, Container, Stack } from '@chakra-ui/react'
import { testimonials } from './data'
import { Testimonial } from './Testimonial'

export const App = () => (
  <Box as="section" py={{ base: '16', md: '24' }}>
    <Container>
      <Stack direction={{ base: 'column', md: 'row' }} spacing="16">
        {testimonials.map((testimonial, id) => (
          <Testimonial key={id} {...testimonial} />
        ))}
      </Stack>
    </Container>
  </Box>
)
