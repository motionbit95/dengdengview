import { Box, HStack, Text } from '@chakra-ui/react'
import { useTimer } from './useTimer'

const expiresInSeconds = new Date().getTime() + 141690000

export const Timer = () => {
  const { seconds, minutes, hours, days } = useTimer({
    expiresInSeconds,
  })

  return (
    <HStack spacing="4">
      <TimeUnit value={days} label="DAY" />
      <TimeUnit value={hours} label="HRS" />
      <TimeUnit value={minutes} label="MIN" />
      <TimeUnit value={seconds} label="SEC" />
    </HStack>
  )
}

interface Props {
  value: number
  label: string
}

const TimeUnit = (props: Props) => {
  const { value, label } = props
  return (
    <Box textAlign="center">
      <Text fontWeight="medium" fontSize="xl" lineHeight="1.2">
        {value.toLocaleString('en-US', { minimumIntegerDigits: 2 })}
      </Text>
      <Text
        fontSize="xs"
        fontWeight="semibold"
        color="whiteAlpha.700"
        textTransform="uppercase"
        lineHeight="1rem"
      >
        {label}
      </Text>
    </Box>
  )
}
