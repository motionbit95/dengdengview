import { Flex, Image, Link, Select, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { PriceTag } from './PriceTag'

type CartItemProps = {
  name: string
  description: string
  quantity: number
  price: number
  currency: string
  imageUrl: string
  onChangeQuantity?: (quantity: number) => void
  onClickDelete?: () => void
}

export const CartItem = (props: CartItemProps) => {
  const {
    name,
    description,
    quantity,
    imageUrl,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
  } = props

  return (
    <Stack direction="row" spacing="5">
      <Image
        rounded="md"
        minWidth="24"
        maxWidth="24"
        height={{ base: '20', md: '24' }}
        fit="cover"
        src={imageUrl}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Stack width="full" spacing="3">
        <Stack direction={{ base: 'column', md: 'row' }} spacing="3" alignItems="flex-start">
          <Stack spacing="0.5" width="full">
            <Text fontWeight="medium">{name}</Text>
            <Text color={useColorModeValue('gray.500', 'gray.300')}>{description}</Text>
          </Stack>
          <PriceTag price={price} currency={currency} />
        </Stack>
        <Flex width="full" justifyContent="space-between" alignItems="center">
          <Select
            aria-label="Select quantity"
            focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
            width="16"
            height="8"
            value={quantity}
            onChange={(e) => {
              onChangeQuantity?.(+e.currentTarget.value)
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
          <Link
            as="button"
            type="button"
            fontWeight="medium"
            fontSize="sm"
            color={useColorModeValue('blue.500', 'blue.200')}
            onClick={onClickDelete}
          >
            Remove
          </Link>
        </Flex>
      </Stack>
    </Stack>
  )
}
