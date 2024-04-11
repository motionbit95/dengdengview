import { HStack, Icon, Stack, StackProps, Text, useColorModeValue } from '@chakra-ui/react'
import { BiCheckShield, BiPackage } from 'react-icons/bi'
import { Ri24HoursLine } from 'react-icons/ri'

const promose = [
  {
    icon: BiPackage,
    text: 'Free shipping + returns',
  },
  {
    icon: BiCheckShield,
    text: '2 year extended warranty',
  },
  {
    icon: Ri24HoursLine,
    text: 'We’re here for you 24/7',
  },
]

export const Promos = (props: StackProps) => {
  const color = useColorModeValue('gray.600', 'gray.300')
  return (
    <Stack spacing="4" p="6" bg={useColorModeValue('gray.50', 'gray.700')} {...props}>
      {promose.map((promo, id) => (
        <HStack key={id} spacing="3" color={color}>
          <Icon as={promo.icon} fontSize="xl" />
          <Text>{promo.text}</Text>
        </HStack>
      ))}
    </Stack>
  )
}
