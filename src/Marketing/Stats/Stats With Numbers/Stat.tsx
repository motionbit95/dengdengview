import { Button, Stack, Text } from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'

interface StatProps {
  label: string
  description: string
  value: string
  cta: string
}

export const Stat = (props: StatProps) => {
  const { label, description, value, cta } = props
  return (
    <Stack spacing="3" flex="1">
      <Text textStyle={{ base: '5xl', md: '6xl' }} color="accent" fontWeight="semibold">
        {value}
      </Text>
      <Stack spacing="5">
        <Stack>
          <Text textStyle="lg" fontWeight="semibold">
            {label}
          </Text>
          <Text color="fg.muted">{description}</Text>
        </Stack>
        <Button
          alignSelf="start"
          size="lg"
          variant="link"
          colorScheme="blue"
          rightIcon={<FiArrowRight />}
        >
          {cta}
        </Button>
      </Stack>
    </Stack>
  )
}
