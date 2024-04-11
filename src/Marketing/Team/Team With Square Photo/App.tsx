import {
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { members } from './data'
import { SquareImage } from './SquareImage'

export const App = () => (
  <Box bg="bg.surface">
    <Container py={{ base: '16', md: '24' }}>
      <Stack spacing={{ base: '12', md: '16' }}>
        <Stack spacing="3">
          <Text fontSize={{ base: 'sm', md: 'md' }} color="accent" fontWeight="semibold">
            Team
          </Text>
          <Stack spacing={{ base: '4', md: '5' }}>
            <Heading size={{ base: 'sm', md: 'md' }}>Meet our team</Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="fg.muted">
              Chupa chups pudding marzipan cake chocolate shortbread macaroon oat cake.
            </Text>
          </Stack>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          columnGap="8"
          rowGap={{ base: '10', md: '16' }}
        >
          {members.map((member) => (
            <Box key={member.name}>
              <Stack spacing="4">
                <Stack spacing={{ base: '4', md: '5' }}>
                  <SquareImage src={member.image} alt={member.name} />
                  <Stack>
                    <Box>
                      <Text fontSize="lg" fontWeight="medium">
                        {member.name}
                      </Text>
                      <Text color="accent">{member.role}</Text>
                    </Box>
                    <Text color="fg.muted">{member.description}</Text>
                  </Stack>
                </Stack>
                <HStack spacing="4" color="fg.subtle">
                  {[FaGithub, FaLinkedin, FaTwitter].map((item, id) => (
                    <Link href="#" key={id}>
                      <Icon as={item} boxSize="5" />
                    </Link>
                  ))}
                </HStack>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
)
