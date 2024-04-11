import { Avatar, AvatarBadge, Box, HStack, Stack, Text } from '@chakra-ui/react'

interface MessageDaa {
  name: string
  image: string
  updatedAt: string
  message: string
}

interface Props {
  data: MessageDaa
}

export const ChatMessage = (props: Props) => {
  const { name, image, updatedAt, message } = props.data
  return (
    <HStack align="flex-start" gap="3" px="4" py="3" _hover={{ bg: 'bg.muted' }} rounded="md">
      <Box pt="1">
        <Avatar size="sm" src={image} name={name}>
          <AvatarBadge />
        </Avatar>
      </Box>
      <Stack spacing="0" fontSize="sm" flex="1" isTruncated>
        <HStack spacing="1">
          <Text fontWeight="medium" flex="1">
            {name}
          </Text>
          <Text color="fg.subtle" fontSize="xs">
            {updatedAt}
          </Text>
        </HStack>
        <Box color="fg.subtle" isTruncated>
          {message}
        </Box>
      </Stack>
    </HStack>
  )
}
