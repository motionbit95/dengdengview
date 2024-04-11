import { Button, Collapse, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { PopoverIcon } from './PopoverIcon'

export const DocumentCollapse = () => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Button justifyContent="space-between" variant="tertiary" size="lg" onClick={onToggle}>
        <Text as="span">Documents</Text>
        <PopoverIcon isOpen={isOpen} />
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Stack spacing="1" alignItems="stretch" ps="4">
          {['Resumes', 'Cover Letter', 'Personal', 'Education', 'Essay'].map((item) => (
            <Button key={item} variant="tertiary" size="lg" justifyContent="start">
              {item}
            </Button>
          ))}
        </Stack>
      </Collapse>
    </>
  )
}
