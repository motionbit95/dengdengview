import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Badge,
  Button,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react'
import { MdAccessTime, MdLocationOn } from 'react-icons/md'
import { JobListing } from './data'

export const JobPosting = (props: JobListing) => {
  const { title, department, description, location, type } = props
  return (
    <AccordionItem py="4">
      <AccordionButton gap={4} px="0">
        <Text as="h2" fontWeight="semibold" textStyle="xl">
          {title}
        </Text>
        <Badge variant="pill">{department}</Badge>
      </AccordionButton>
      <AccordionPanel px="0">
        <Stack spacing={{ base: '6', md: '8' }}>
          <Stack spacing={{ base: '4', md: '5' }}>
            <Text color="fg.muted">{description}</Text>
            <HStack spacing={{ base: '5', md: '6' }}>
              <HStack color="fg.muted">
                <Icon as={MdLocationOn} boxSize="5" />
                <Text as="span">{location}</Text>
              </HStack>
              <HStack color="fg.muted">
                <Icon as={MdAccessTime} boxSize="5" />
                <Text as="span">{type}</Text>
              </HStack>
            </HStack>
          </Stack>
          <Button alignSelf="start">Apply Now</Button>
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  )
}
