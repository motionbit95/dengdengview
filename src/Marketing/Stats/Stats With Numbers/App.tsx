import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import { Stat } from './Stat'
import { stats } from './data'

export const App = () => (
  <Container py={{ base: '16', md: '24' }}>
    <Stack spacing={{ base: '12', md: '16' }} alignItems="stretch">
      <Stack spacing={{ base: '4', md: '5' }} direction="column">
        <Heading size={{ base: 'md', md: 'lg' }}>Build something great</Heading>
        <Text color="fg.muted" textStyle={{ base: 'lg', md: 'xl' }}>
          Everything you need to build modern UI and great products.
        </Text>
      </Stack>
      <Stack spacing="8" direction={{ base: 'column', md: 'row' }}>
        {stats.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </Stack>
    </Stack>
  </Container>
)
