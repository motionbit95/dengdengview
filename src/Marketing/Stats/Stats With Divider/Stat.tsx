import { Heading, Stack, StackProps, Text } from '@chakra-ui/react'

interface StatProps extends StackProps {
  label: string
  value: string
}

export const Stat = (props: StatProps) => {
  const { label, value, ...stackProps } = props
  return (
    <Stack spacing="3" textAlign="center" {...stackProps}>
      <Heading size={{ base: 'lg', md: 'xl' }} color="accent">
        {value}
      </Heading>
      <Text fontSize="lg" fontWeight="medium" color="fg.muted">
        {label}
      </Text>
    </Stack>
  )
}
