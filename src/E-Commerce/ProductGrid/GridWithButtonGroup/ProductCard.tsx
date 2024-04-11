import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Skeleton,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { PriceTag } from './PriceTag'
import { Rating } from './Rating'
import { ProductButtonGroup } from './ProductButtonGroup'
import { Product } from './_data'

interface Props {
  product: Product
}

export const ProductCard = (props: Props) => {
  const { product } = props
  return (
    <Stack spacing="3">
      <Box position="relative" className="group">
        <AspectRatio ratio={3 / 4}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            draggable="false"
            fallback={<Skeleton />}
          />
        </AspectRatio>
        <HStack spacing="3" position="absolute" top="4" left="4">
          {product.tags?.map((tag) => (
            <Tag key={tag.name} bg={`${tag.color}.500`} color="white" fontWeight="semibold">
              {tag.name}
            </Tag>
          ))}
        </HStack>
        <Box
          opacity="0"
          transition="opacity 0.1s"
          _groupHover={{ opacity: 1 }}
          position="absolute"
          bottom="3"
          left="3"
          right="3"
          bg={useColorModeValue('white', 'gray.800')}
          borderRadius="md"
          padding="1.5"
        >
          <ProductButtonGroup />
        </Box>
      </Box>
      <Stack spacing="1">
        <Text>{product.name}</Text>
        <HStack>
          <Rating defaultValue={product.rating} size="sm" />
          <Text fontWeight="medium" fontSize="sm" color={useColorModeValue('gray.800', 'gray.200')}>
            12
          </Text>
        </HStack>
      </Stack>
      <PriceTag
        currency={product.currency}
        price={product.price}
        priceProps={{
          fontWeight: 'bold',
          fontSize: 'sm',
          color: useColorModeValue('black', 'white'),
        }}
      />
    </Stack>
  )
}
