import {
  AspectRatio,
  Image,
  Skeleton,
  Stack,
  StackProps,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import {
  IoChevronBackOutline,
  IoChevronDownOutline,
  IoChevronForwardOutline,
  IoChevronUpOutline,
} from 'react-icons/io5'
import { Carousel, CarouselIconButton, CarouselSlide, useCarousel } from './Carousel'
import { ProductImage } from './_data'

interface GalleryProps {
  images: ProductImage[]
  aspectRatio?: number
  rootProps?: StackProps
}

export const Gallery = (props: GalleryProps) => {
  const { images, aspectRatio = 4 / 3, rootProps } = props
  const [index, setIndex] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slidesPerView = useBreakpointValue({ base: 3, md: 4 })
  const isVertical = useBreakpointValue({ base: false, md: true })

  const [ref, slider] = useCarousel({
    vertical: isVertical,
    slides: { perView: slidesPerView, spacing: useBreakpointValue({ base: 16, md: 24 }) },
    slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
  })

  return (
    <Stack
      spacing={{ base: '4', md: '6' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      {...rootProps}
    >
      <Stack
        spacing={{ base: '4', md: '6' }}
        direction={{ base: 'row', md: 'column' }}
        minW="24"
        maxH="md"
      >
        <CarouselIconButton
          onClick={() => slider.current?.prev()}
          icon={isVertical ? <IoChevronUpOutline /> : <IoChevronBackOutline />}
          aria-label="Previous slide"
          disabled={currentSlide === 0}
        />

        <Carousel ref={ref} direction={{ base: 'row', md: 'column' }} width="full">
          {images.map((image, i) => (
            <CarouselSlide key={i} onClick={() => setIndex(i)} cursor="pointer">
              <AspectRatio
                ratio={aspectRatio}
                transition="all 200ms"
                opacity={index === i ? 1 : 0.4}
                _hover={{ opacity: 1 }}
              >
                <Image src={image.src} objectFit="cover" alt={image.alt} fallback={<Skeleton />} />
              </AspectRatio>
            </CarouselSlide>
          ))}
        </Carousel>

        <CarouselIconButton
          onClick={() => slider.current?.next()}
          icon={isVertical ? <IoChevronDownOutline /> : <IoChevronForwardOutline />}
          aria-label="Next slide"
          disabled={currentSlide + Number(slidesPerView) === images.length}
        />
      </Stack>
      <AspectRatio ratio={aspectRatio} flex="1">
        <Image
          src={images[index].src}
          objectFit="cover"
          alt={images[index].alt}
          fallback={<Skeleton />}
        />
      </AspectRatio>
    </Stack>
  )
}
