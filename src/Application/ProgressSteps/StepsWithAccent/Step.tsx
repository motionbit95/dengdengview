import { Box, BoxProps, Stack, Text } from '@chakra-ui/react'

interface StepProps extends BoxProps {
  title: string
  description: string
  isCompleted: boolean
  isActive: boolean
}

export const Step = (props: StepProps) => {
  const { title, description, isActive, isCompleted, ...boxProps } = props
  return (
    <Box
      flex="1"
      py={{ base: '2', md: '3' }}
      ps={{ base: '3', md: '0' }}
      borderTopWidth={{ base: '0', md: '4px' }}
      borderLeftWidth={{ base: '4px', md: '0' }}
      borderColor={isActive || isCompleted ? 'accent' : 'inherit'}
      {...boxProps}
    >
      <Stack spacing="0.5">
        <Text color="fg.emphasized" fontWeight="medium">
          {title}
        </Text>
        <Text color="fg.muted">{description}</Text>
      </Stack>
    </Box>
  )
}
