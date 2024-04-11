import {
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Img,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { members } from './data'

export const App = () => (
  <Container py={{ base: '16', md: '24' }}>
    <Stack spacing={{ base: '12', md: '16' }}>
      <Stack
        spacing={{ base: '8', md: '10' }}
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
      >
        <Stack spacing="3" maxW="3xl">
          <Text fontSize={{ base: 'sm', md: 'md' }} color="accent" fontWeight="semibold">
            We're hiring
          </Text>
          <Stack spacing={{ base: '4', md: '5' }}>
            <Heading size={{ base: 'sm', md: 'md' }}>Meet our team</Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="fg.muted">
              Chupa chups pudding marzipan cake chocolate shortbread.
            </Text>
          </Stack>
        </Stack>
        <Stack direction={{ base: 'column-reverse', md: 'row' }} spacing="3">
          <Button variant="secondary" size="xl">
            Contact us
          </Button>
          <Button size="xl">Join our team</Button>
        </Stack>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        columnGap="8"
        rowGap={{ base: '10', lg: '16' }}
      >
        {members.map((member) => (
          <Stack key={member.name} spacing="4">
            <Stack spacing="5">
              <Img src={member.image} alt={member.name} h="72" objectFit="cover" />
              <Stack spacing="1">
                <Text fontWeight="medium" fontSize={{ base: 'lg', md: 'xl' }}>
                  {member.name}
                </Text>
                <Text color="accent" fontSize={{ base: 'md', md: 'lg' }}>
                  {member.role}
                </Text>
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
        ))}
      </SimpleGrid>
    </Stack>
  </Container>
)
