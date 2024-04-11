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
import { FavouriteButton } from './FavouriteButton'
import { PriceTag } from './PriceTag'
import { Product } from './_data'

interface Props {
  product: Product
}

export const ProductCard = (props: Props) => {
  const { product } = props
  return (
    <Stack spacing={{ base: '3', md: '5' }}>
      <Box position="relative">
        <AspectRatio ratio={3 / 4}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            draggable="false"
            fallback={<Skeleton />}
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="3"
          right="3"
          aria-label={`Add ${product.name} to your favourites`}
        />
        <HStack spacing="3" position="absolute" bottom="3" left="3">
          {product.tags?.map((tag) => (
            <Tag key={tag.name} bg={`${tag.color}.500`} color="white" fontWeight="semibold">
              {tag.name}
            </Tag>
          ))}
        </HStack>
      </Box>
      <Stack>
        <Stack spacing="0.25">
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')}>
            {product.blue}
          </Text>
          <Text fontWeight="medium">{product.name}</Text>
        </Stack>
        <PriceTag
          currency={product.currency}
          price={product.price}
          priceProps={{ color: useColorModeValue('gray.800', 'gray.200') }}
          salePrice={product.salePrice}
          salePriceProps={{ color: useColorModeValue('red.500', 'red.400'), fontWeight: 'bold' }}
        />
      </Stack>
    </Stack>
  )
}
