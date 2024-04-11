import { Avatar, Box, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Rating } from './Rating'

interface TestiomonialProps {
  avatarUrl: string
  company: string
  name: string
  logo: () => JSX.Element
  title: string
  quote: string
}

export const Testimonial = (props: TestiomonialProps) => {
  const { avatarUrl, name, quote, title, company, logo: Logo } = props
  return (
    <Stack spacing={{ base: '6', md: '8' }}>
      <Rating />
      <Text textStyle={{ base: 'lg', md: 'xl' }} fontWeight="medium">
        {quote}
      </Text>
      <Stack
        gap="5"
        spacing="0"
        direction={{ base: 'column', md: 'row' }}
        divider={<StackDivider display={{ base: 'none', md: 'block' }} />}
        align={{ base: 'flex-start', md: 'center' }}
      >
        <Stack spacing={{ base: '4', md: '5' }} direction={{ base: 'column', md: 'row' }}>
          <Avatar src={avatarUrl} boxSize="14" name={name} />
          <Box>
            <Text fontWeight="semibold">{name}</Text>
            <Text color="fg.muted">
              {title}, {company}
            </Text>
          </Box>
        </Stack>
        <Logo />
      </Stack>
    </Stack>
  )
}
