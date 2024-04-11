import { Box, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { Stat } from './Stat'
import { stats } from './data'

export const App = () => (
  <Container py={{ base: '16', md: '24' }}>
    <Stack spacing={{ base: '12', md: '16' }}>
      <Stack spacing={{ base: '4', md: '5' }} textAlign="center" align="center">
        <Heading size={{ base: 'sm', md: 'md' }}>Why Chakra UI Pro?</Heading>
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="fg.muted" maxW="3xl">
          Because this beautiful and responsive React components will help your to realize your next
          project in no time.
        </Text>
      </Stack>
      <Box
        bg="bg.accent.default"
        color="fg.accent.default"
        borderRadius="2xl"
        px={{ base: '6', md: '12', lg: '16' }}
        py={{ base: '10', md: '12', lg: '16' }}
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} rowGap="8">
          {stats.map((stat, id) => (
            <Stat key={id} {...stat} />
          ))}
        </SimpleGrid>
      </Box>
    </Stack>
  </Container>
)
