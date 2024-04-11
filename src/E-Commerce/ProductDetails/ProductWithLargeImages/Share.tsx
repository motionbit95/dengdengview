import {
  chakra,
  HStack,
  Icon,
  IconButtonProps,
  Stack,
  StackProps,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaEnvelope, FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa'

interface ShareProps {
  label?: string
  rootProps?: StackProps
}

export const Share = (props: ShareProps) => {
  const { label = 'Share', rootProps } = props
  return (
    <Stack {...rootProps}>
      <Text fontSize="sm" fontWeight="medium" color={useColorModeValue('gray.600', 'gray.400')}>
        {label}
      </Text>
      <HStack spacing="5">
        <ShareButton aria-label="Share with Mail">
          <Icon as={FaEnvelope} />
        </ShareButton>
        <ShareButton aria-label="Share on Facebook">
          <Icon as={FaFacebook} />
        </ShareButton>
        <ShareButton aria-label="Share on Twitter">
          <Icon as={FaTwitter} />
        </ShareButton>
        <ShareButton aria-label="Share on Pinterest">
          <Icon as={FaPinterest} />
        </ShareButton>
      </HStack>
    </Stack>
  )
}

const ShareButton = (props: IconButtonProps) => (
  <chakra.button
    fontSize="xl"
    transition="all 200ms"
    lineHeight="1"
    color={useColorModeValue('gray.400', 'gray.500')}
    _hover={{
      color: useColorModeValue('blue.500', 'blue.200'),
    }}
    _focus={{ boxShadow: 'none' }}
    _focusVisible={{ boxShadow: 'outline', outline: 'none' }}
    {...props}
  />
)
