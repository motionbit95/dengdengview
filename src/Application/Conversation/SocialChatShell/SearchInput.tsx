import { Input, InputGroup, InputLeftElement, InputProps } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

export const SearchInput = (props: InputProps) => {
  return (
    <InputGroup size="sm">
      <InputLeftElement color="fg.subtle">
        <BsSearch />
      </InputLeftElement>
      <Input placeholder="Search messages..." {...props} />
    </InputGroup>
  )
}
