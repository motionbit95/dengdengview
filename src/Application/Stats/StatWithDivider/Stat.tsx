import { Box, BoxProps, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { FiArrowDownRight, FiArrowUpRight, FiMoreVertical } from 'react-icons/fi'

interface Props extends BoxProps {
  label: string
  value: string
  delta: {
    value: string
    isUpwardsTrend: boolean
  }
}
export const Stat = (props: Props) => {
  const { label, value, delta, ...boxProps } = props
  return (
    <Box px={{ base: '4', md: '6' }} py={{ base: '5', md: '6' }} {...boxProps}>
      <Stack>
        <HStack justify="space-between">
          <Text textStyle="sm" color="fg.muted">
            {label}
          </Text>
          <Icon as={FiMoreVertical} boxSize="5" color="fg.muted" />
        </HStack>
        <Stack spacing="4">
          <Heading size={{ base: 'sm', md: 'md' }}>{value}</Heading>
          <HStack spacing="1" fontWeight="medium">
            <Icon
              color={delta.isUpwardsTrend ? 'success' : 'error'}
              as={delta.isUpwardsTrend ? FiArrowUpRight : FiArrowDownRight}
              boxSize="5"
            />
            <Text color={delta.isUpwardsTrend ? 'success' : 'error'}>{delta.value}</Text>
            <Text color="fg.muted">vs last week</Text>
          </HStack>
        </Stack>
      </Stack>
    </Box>
  )
}
