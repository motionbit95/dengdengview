import {
  Avatar,
  Badge,
  Center,
  chakra,
  Flex,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { Dropzone } from "../../FormLayout/FormLayoutWithCards/Dropzone";

export const ListCampainImages = ({ ...props }) => {
  const [order, setOrder] = useState<string[]>(
    props.defaultImages ? props.defaultImages : []
  );

  return (
    <Center w={"full"} mx="auto">
      <Stack spacing="5" flex="1">
        <Flex overflow={"scroll"}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
            {order.map((url, index) => (
              <GridItem>
                <Image
                  style={{
                    aspectRatio: 1,
                    objectFit: "cover",
                  }}
                  key={index}
                  src={url}
                  // src={
                  //   process.env.REACT_APP_STORAGE +
                  //   "/campain" +
                  //   "%2F" +
                  //   url +
                  //   "?alt=media"
                  // }
                />
              </GridItem>
            ))}
          </SimpleGrid>
        </Flex>
        <Dropzone
          setUrl={(url: string) => {
            props.onChange([...order, url]);
            setOrder([...order, url]);
          }}
        />
      </Stack>
    </Center>
  );
};
