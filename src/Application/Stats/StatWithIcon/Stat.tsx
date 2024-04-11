import { As, Box, Heading, HStack, Icon, Square, Stack, Text } from '@chakra-ui/react'
import { FiArrowDownRight, FiArrowUpRight, FiMoreVertical } from 'react-icons/fi'

interface Props {
  icon: As
  label: string
  value: string
  delta: {
    value: string
    isUpwardsTrend: boolean
  }
}
export const Stat = (props: Props) => {
  const { label, value, icon, delta, ...boxProps } = props
  return (
    <Box
      px={{ base: '4', md: '6' }}
      py={{ base: '5', md: '6' }}
      bg="bg.surface"
      borderRadius="lg"
      boxShadow="sm"
      {...boxProps}
    >
      <Stack spacing={{ base: '5', md: '6' }}>
        <Stack direction="row" justify="space-between">
          <HStack spacing="4">
            <Square size="12" bg="bg.accent.subtle" borderRadius="md">
              <Icon as={icon} boxSize="6" color="fg.accent.default" />
            </Square>
            <Text fontWeight="medium">{label}</Text>
          </HStack>
          <Icon as={FiMoreVertical} boxSize="5" color="fg.muted" />
        </Stack>
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
