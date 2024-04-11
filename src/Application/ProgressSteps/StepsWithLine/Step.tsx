import { Box, BoxProps } from '@chakra-ui/react'

interface Props extends BoxProps {
  isActive: boolean
}

export const Step = (props: Props) => {
  const { isActive, ...boxProps } = props
  return (
    <Box
      flex="1"
      h="2"
      bg={isActive ? 'accent' : 'border.default'}
      borderRadius="base"
      transition="background 0.2s"
      {...boxProps}
    />
  )
}
