import { BoxProps, Divider, Stack, Text } from '@chakra-ui/react'
import { StepCircle } from './StepCircle'

interface StepProps extends BoxProps {
  title: string
  description: string
  isCompleted: boolean
  isActive: boolean
  isLastStep: boolean
}

export const Step = (props: StepProps) => {
  const { isActive, isCompleted, isLastStep, title, description, ...stackProps } = props

  return (
    <Stack spacing="4" direction="row" {...stackProps}>
      <Stack spacing="0" align="center">
        <StepCircle isActive={isActive} isCompleted={isCompleted} />
        <Divider
          orientation="vertical"
          borderWidth="1px"
          borderColor={isCompleted ? 'accent' : isLastStep ? 'transparent' : 'inherit'}
        />
      </Stack>
      <Stack spacing="0.5" pb={isLastStep ? '0' : '8'}>
        <Text color="fg.emphasized" fontWeight="medium">
          {title}
        </Text>
        <Text color="fg.muted">{description}</Text>
      </Stack>
    </Stack>
  )
}
