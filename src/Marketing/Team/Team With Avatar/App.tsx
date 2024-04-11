import { Avatar, Box, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { members } from './data'

export const App = () => (
  <Container py={{ base: '16', md: '24' }}>
    <Stack spacing={{ base: '12', md: '16' }}>
      <Stack spacing="3" align="center" textAlign="center">
        <Text fontSize={{ base: 'sm', md: 'md' }} color="accent" fontWeight="semibold">
          We're hiring
        </Text>
        <Stack spacing={{ base: '4', md: '5' }}>
          <Heading size={{ base: 'sm', md: 'md' }}>Meet our team</Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="fg.muted" maxW="3xl">
            Jelly brownie candy dessert lemon drops marshmallow pastry. Dessert candy canes jujubes
            sugar plum cheesecake.
          </Text>
        </Stack>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        columnGap="8"
        rowGap={{ base: '10', lg: '16' }}
      >
        {members.map((member) => (
          <Stack key={member.name} spacing="4" align="center" textAlign="center">
            <Stack spacing={{ base: '4', md: '5' }} align="center">
              <Avatar src={member.image} boxSize={{ base: '24', lg: '32' }} />
              <Box>
                <Text fontWeight="medium" fontSize="lg">
                  {member.name}
                </Text>
                <Text color="accent">{member.role}</Text>
              </Box>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  </Container>
)
