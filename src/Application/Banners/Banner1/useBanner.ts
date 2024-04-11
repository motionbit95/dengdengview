import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'

export const useBanner = () => {
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: true })
  // This is for demo purposes only
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => onOpen(), 500)
      return () => clearTimeout(timer)
    }
  }, [isOpen])
  return { isOpen, onClose }
}
