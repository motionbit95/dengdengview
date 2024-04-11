import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import { PopoverIcon } from './PopoverIcon'

export const DocumentPopover = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} trigger="hover" openDelay={0}>
      <PopoverTrigger>
        <Button rightIcon={<PopoverIcon isOpen={isOpen} />}>Documents</Button>
      </PopoverTrigger>
      <PopoverContent p="2" maxW="fit-content">
        <Stack spacing="0" alignItems="stretch">
          {['Resumes', 'Cover Letter', 'Personal', 'Education', 'Essay'].map((item) => (
            <Button key={item} variant="tertiary" justifyContent="start">
              {item}
            </Button>
          ))}
        </Stack>
      </PopoverContent>
    </Popover>
  )
}
