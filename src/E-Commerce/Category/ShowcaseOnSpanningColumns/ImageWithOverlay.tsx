import {
  Box,
  BoxProps,
  Button,
  Heading,
  Image,
  LightMode,
  Skeleton,
  Stack,
  Text,
} from '@chakra-ui/react'

type ImageWithOverlayProps = BoxProps & {
  title: string
  description?: string
  url?: string
  alt?: string
  src: string
  spacing?: string
}

export const ImageWithOverlay = (props: ImageWithOverlayProps) => {
  const {
    title,
    description,
    url,
    src,
    alt,
    spacing = '8',
    objectPosition = 'cover',
    ...rest
  } = props

  return (
    <Box borderRadius="xl" overflow="hidden" position="relative" width="full" {...rest}>
      <Image
        boxSize="full"
        maxHeight={{ base: '240px', md: '100%' }}
        src={src}
        alt={alt}
        objectFit="cover"
        objectPosition={objectPosition}
        fallback={<Skeleton />}
      />
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear(to-t, blackAlpha.300 20%, blackAlpha.700)"
        px={{ base: '6', md: '10' }}
        py={{ base: '6', md: '10' }}
        boxSize="full"
      >
        <Stack spacing={spacing}>
          <Stack spacing="4">
            <Heading size="lg" color="white">
              {title}
            </Heading>
            {description && (
              <Text fontSize="lg" color="white" maxW="2xs">
                {description}
              </Text>
            )}
          </Stack>
          <LightMode>
            <Button bg="white" color="gray.800" alignSelf="start" as="a" href={url}>
              Shop now
            </Button>
          </LightMode>
        </Stack>
      </Box>
    </Box>
  )
}
