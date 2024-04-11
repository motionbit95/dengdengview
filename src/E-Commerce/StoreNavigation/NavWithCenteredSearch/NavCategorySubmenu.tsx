import {
  Box,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { NavFeaturedImage } from './NavFeaturedImage'
import { data } from './_data'

const DesktopNavCategorySubmenu = () => {
  return (
    <Box bg={mode('white', 'gray.800')} px="8" pt="8" pb="10">
      <Flex justify="space-between" width="full" fontSize="sm" maxW="8xl" mx="auto">
        <Flex width="480px" justify="space-between">
          <Box width="full">
            <Text fontWeight="semibold" mb="6">
              {data.category.label}
            </Text>
            <Stack spacing="4" align="flex-start">
              {data.category.links.map((link, i) => (
                <Link key={i}>{link.label}</Link>
              ))}
            </Stack>
          </Box>
          <Box width="full">
            <Text fontWeight="semibold" mb="6">
              {data.featured.label}
            </Text>
            <Stack spacing="4" align="flex-start">
              {data.featured.links.map((link, i) => (
                <Link key={i}>{link.label}</Link>
              ))}
            </Stack>
          </Box>
        </Flex>
        <Stack direction="row" spacing="8" width="full" maxW="856px">
          <NavFeaturedImage
            label="Men’s jewelry"
            imageUrl="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
          />
          <NavFeaturedImage
            width="500px"
            label="Men’s suits"
            imageUrl="https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80"
          />
        </Stack>
      </Flex>
    </Box>
  )
}

const MobileNavCategorySubmenu = () => (
  <Box p="5" width="full" height="100%" overflowY="auto">
    <Text fontWeight="bold" mb="4">
      Men
    </Text>
    <NavFeaturedImage
      height="32"
      bottomOffset="3"
      label="Men's Suit"
      imageUrl="https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80"
    />
    <Stack spacing="10" mt="10">
      <Box>
        <Text fontWeight="bold" mb="4">
          {data.category.label}
        </Text>
        <SimpleGrid columns={2} spacing="4">
          {data.category.links.map((link) => (
            <Link key={link.label} href={link.url}>
              {link.label}
            </Link>
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Text fontWeight="bold" mb="4">
          {data.featured.label}
        </Text>
        <SimpleGrid columns={2} spacing="4">
          {data.featured.links.map((link) => (
            <Link key={link.label} href={link.url}>
              {link.label}
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </Stack>
  </Box>
)

export const NavCategorySubmenu = {
  Mobile: MobileNavCategorySubmenu,
  Desktop: DesktopNavCategorySubmenu,
}
