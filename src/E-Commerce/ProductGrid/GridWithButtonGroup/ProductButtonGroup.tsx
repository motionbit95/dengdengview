import { ButtonGroup, Icon, IconButton, useColorModeValue } from '@chakra-ui/react'
import { FiEye, FiHeart, FiShoppingCart } from 'react-icons/fi'

const options = [
  {
    icon: FiHeart,
    label: 'Add to favourite',
  },
  {
    icon: FiShoppingCart,
    label: 'Add to cart',
  },
  {
    icon: FiEye,
    label: 'View details',
  },
]

export const ProductButtonGroup = () => {
  const iconColor = useColorModeValue('gray.600', 'gray.400')
  return (
    <ButtonGroup variant="tertiary" colorScheme="blue" width="full" size="sm" spacing="1">
      {options.map((option) => (
        <IconButton
          key={option.label}
          rounded="sm"
          sx={{ ':not(:hover)': { color: iconColor } }}
          _focus={{ boxShadow: 'none' }}
          _focusVisible={{ boxShadow: 'outline' }}
          width="full"
          aria-label={option.label}
          icon={<Icon as={option.icon} boxSize="5" />}
        />
      ))}
    </ButtonGroup>
  )
}
