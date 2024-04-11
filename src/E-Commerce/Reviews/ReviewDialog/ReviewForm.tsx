import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { Rating } from "../Rating/Rating";

export const ReviewForm = (props: React.ComponentProps<"form">) => (
  <form {...props}>
    <Stack spacing="6">
      <FormControl id="name">
        <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
          Name
        </FormLabel>
        <Input
          name="name"
          placeholder="Your name"
          focusBorderColor={useColorModeValue("blue.500", "blue.200")}
        />
      </FormControl>

      <FormControl id="email">
        <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
          Email
        </FormLabel>
        <Input
          name="email"
          type="email"
          placeholder="Your email address"
          focusBorderColor={useColorModeValue("blue.500", "blue.200")}
        />
      </FormControl>

      <FormControl id="rating">
        <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
          Rating
        </FormLabel>
        <Rating defaultValue={2} size="xl" />
      </FormControl>

      <FormControl id="title">
        <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
          Title
        </FormLabel>
        <Input
          name="title"
          placeholder="Your title"
          focusBorderColor={useColorModeValue("blue.500", "blue.200")}
        />
      </FormControl>

      <FormControl id="comment">
        <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
          Comment
        </FormLabel>
        <Textarea
          name="comment"
          placeholder="Your comment"
          rows={4}
          focusBorderColor={useColorModeValue("blue.500", "blue.200")}
          resize="none"
        />
      </FormControl>

      <Button type="submit" colorScheme="blue" alignSelf="start" size="lg">
        Submit review
      </Button>
    </Stack>
  </form>
);
