import {
  AspectRatio,
  Box,
  HStack,
  Icon,
  Image,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiEye, FiHeart } from 'react-icons/fi'
import { PriceTag } from './PriceTag'
import { Rating } from './Rating'
import { ProductCardButton } from './ProductCardButton'
import { Product } from './_data'

interface Props {
  product: Product
}

export const ProductCard = (props: Props) => {
  const { product } = props
  return (
    <Stack spacing="4">
      <Box position="relative" className="group">
        <AspectRatio ratio={3 / 4}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius="md"
          />
        </AspectRatio>
        <Box
          opacity={0}
          transition="opacity 0.1s"
          position="absolute"
          className="container"
          bottom="3"
          left="3"
          _groupHover={{ opacity: 1 }}
        >
          <HStack spacing="3">
            <ProductCardButton
              aria-label="Add to favourite"
              icon={<Icon as={FiHeart} boxSize="5" />}
            />
            <ProductCardButton aria-label="View details" icon={<Icon as={FiEye} boxSize="5" />} />
          </HStack>
        </Box>
      </Box>
      <Stack spacing="1">
        <HStack justifyContent="space-between">
          <Text
            color={useColorModeValue('black', 'white')}
            fontSize="sm"
            fontWeight="semibold"
            letterSpacing="wider"
            textTransform="uppercase"
          >
            {product.name}
          </Text>
          <PriceTag
            currency={product.currency}
            price={product.price}
            priceProps={{
              fontSize: 'sm',
              fontWeight: 'semibold',
              color: useColorModeValue('black', 'white'),
            }}
          />
        </HStack>
        <HStack>
          <Rating defaultValue={product.rating} size="sm" />
          <Text fontWeight="medium" fontSize="sm" color={useColorModeValue('gray.500', 'gray.200')}>
            ({product.ratingCount})
          </Text>
        </HStack>
      </Stack>
    </Stack>
  )
}
