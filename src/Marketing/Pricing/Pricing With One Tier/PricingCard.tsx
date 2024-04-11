import { Box, Button, HStack, Heading, Icon, List, ListItem, Stack, Text } from '@chakra-ui/react'
import { FiCheck } from 'react-icons/fi'

export const PricingCard = () => {
  const features = [
    'Exclusive Single User License',
    'Access to All Pro Components',
    'Limitless Project Implementation',
    'Regular Free Updates',
    '24/7 Dedicated Customer Support',
  ]
  return (
    <Box
      bg="bg.surface"
      borderWidth="1px"
      borderRadius="2xl"
      boxShadow="sm"
      px={{ base: '6', md: '8' }}
      py="8"
      width="full"
      maxW="lg"
    >
      <Stack spacing={{ base: '10', md: '10' }} textAlign="center">
        <Stack align="center">
          <Text textStyle={{ base: 'md', md: 'lg' }} fontWeight="semibold">
            Pro Bundle
          </Text>
          <Heading size={{ base: 'md', md: 'lg' }}>$299</Heading>
          <Text color="fg.muted">plus local taxes</Text>
        </Stack>
        <List spacing="4">
          {features.map((feature) => (
            <ListItem key={feature} color="fg.muted">
              <HStack spacing="4">
                <Icon as={FiCheck} color="accent" boxSize="6" />
                <Text>{feature}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
        <Button size="xl">Buy Now</Button>
      </Stack>
    </Box>
  )
}
