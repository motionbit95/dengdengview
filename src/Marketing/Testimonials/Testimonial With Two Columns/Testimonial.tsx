import { Avatar, Stack, Text } from '@chakra-ui/react'

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
    <Stack spacing="8" align="center" textAlign="center">
      <Logo />
      <Text textStyle={{ base: 'lg', md: 'xl' }} fontWeight="medium">
        {quote}
      </Text>
      <Stack spacing="4" align="center">
        <Avatar src={avatarUrl} size="lg" name={name} />
        <Stack spacing="1">
          <Text fontWeight="semibold">{name}</Text>
          <Text color="fg.muted">
            {title}, {company}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  )
}
