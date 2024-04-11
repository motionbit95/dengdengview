import { HStack, Icon, StackProps } from '@chakra-ui/react'
import { BsFillStarFill } from 'react-icons/bs'

export const Rating = (props: StackProps) => (
  <HStack spacing="1.5" {...props}>
    {Array.from({ length: 5 })
      .map((_, index) => index + 1)
      .map((index) => (
        <Icon
          key={index}
          as={BsFillStarFill}
          fontSize="xl"
          color="blue.500"
          _dark={{ color: 'blue.200' }}
        />
      ))}
  </HStack>
)
