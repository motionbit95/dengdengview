import { Box, Heading, Progress, Stack, Text } from '@chakra-ui/react'

interface Props {
  label: string
  value: number
  limit: number
}
export const Stat = (props: Props) => {
  const { label, value, limit, ...boxProps } = props
  return (
    <Box bg="bg.surface" boxShadow="sm" {...boxProps}>
      <Box px={{ base: '4', md: '6' }} py={{ base: '5', md: '6' }}>
        <Stack>
          <Text textStyle="sm" color="fg.muted">
            {label}
          </Text>
          <Stack direction="row" align="baseline">
            <Heading size={{ base: 'sm', md: 'md' }}>{value}</Heading>
            <Text aria-hidden fontWeight="semibold" color="fg.muted">
              / {limit}
            </Text>
            <Box srOnly>out of {limit}</Box>
          </Stack>
        </Stack>
      </Box>
      <Progress value={(value / limit) * 100} size="xs" borderRadius="none" bg="bg.surface" />
    </Box>
  )
}
