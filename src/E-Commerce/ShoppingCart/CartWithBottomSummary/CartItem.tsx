import {
  Box,
  Flex,
  HStack,
  Link,
  StackDivider,
  Text,
  useColorModeValue as mode,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FormatPriceOptions, formatPrice } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { QuantitySelect } from './QuantitySelect'
import { CartItemData } from './_data'

type CartItemProps = CartItemData &
  FormatPriceOptions & {
    onChangeQuantity?: (quantity: number) => void
    onClickDelete?: () => void
    onClickSaveForLater?: () => void
  }

export const CartItem = (props: CartItemProps) => {
  const {
    isBestSeller,
    image,
    isInStock,
    title,
    variants,
    onChangeQuantity,
    onClickDelete,
    onClickSaveForLater,
    price,
    locale,
    currency,
    quantity,
  } = props

  const isMobile = useBreakpointValue({ base: true, md: false })

  return isMobile ? (
    <Box>
      <Flex>
        <CartProductMeta
          isInStock={isInStock}
          title={title}
          variants={variants}
          image={image}
          isBestSeller={isBestSeller}
        />
        <Text pt="1" fontSize="sm" fontWeight="semibold">
          {formatPrice(price, { locale, currency })}
        </Text>
      </Flex>
      <HStack mt="2" justify="space-between">
        <HStack
          mt="2"
          fontSize="sm"
          fontWeight="medium"
          divider={<StackDivider />}
          spacing="3"
          color={mode('blue.600', 'blue.300')}
        >
          <Link as="button" type="button" onClick={onClickDelete}>
            Delete
          </Link>
          <Link as="button" type="button" onClick={onClickSaveForLater}>
            Save for later
          </Link>
        </HStack>
        <QuantitySelect
          id={title}
          value={quantity}
          onChange={(e) => onChangeQuantity?.(+e.target.value)}
        />
      </HStack>
    </Box>
  ) : (
    <Flex align="flex-start" justify="space-between">
      <CartProductMeta
        isInStock={isInStock}
        title={title}
        variants={variants}
        image={image}
        isBestSeller={isBestSeller}
      />
      <HStack width="full" maxW="sm" justify="space-between">
        <QuantitySelect
          id={title}
          value={quantity}
          onChange={(e) => onChangeQuantity?.(+e.target.value)}
        />
        <Flex
          direction="column"
          align="flex-end"
          justify="space-between"
          width="full"
          maxW="2xs"
          minH="16"
        >
          <Text fontWeight="semibold">{formatPrice(price, { locale, currency })}</Text>
          <Flex direction="column" align="center">
            <HStack
              mt="2"
              fontSize="sm"
              fontWeight="medium"
              divider={<StackDivider />}
              spacing="3"
              color={mode('blue.600', 'blue.300')}
            >
              <Link as="button" type="button" fontWeight="medium" onClick={onClickDelete}>
                Delete
              </Link>
              <Link as="button" type="button" fontWeight="medium" onClick={onClickSaveForLater}>
                Save for later
              </Link>
            </HStack>
          </Flex>
        </Flex>
      </HStack>
    </Flex>
  )
}
