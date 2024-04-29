import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import React, { useEffect } from "react";
import { TesterTable } from "./CampainTable";

export const CampainTable = (props: any) => {
  const [startIndex, setStartIndex] = React.useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    // <Container py={{ base: "4", md: "8" }} px={{ base: "0", md: 8 }}>
    <Box
      bg="bg.surface"
      boxShadow={{ base: "none", md: "sm" }}
      borderRadius={{ base: "none", md: "lg" }}
    >
      <Stack spacing="5">
        <Box px={{ base: "4", md: "6" }} pt="5">
          <Stack
            direction={{ base: "column", md: "row" }}
            justify="space-between"
          >
            <Stack>
              <Text textStyle="lg" fontWeight="medium">
                체험단관리
              </Text>
              <Text color="fg.muted" textStyle="sm" whiteSpace={"pre-line"}>
                {`체험단을 등록하고 수정할 수 있습니다.`}
              </Text>
            </Stack>
            <InputGroup maxW="xs">
              <InputLeftElement pointerEvents="none">
                <Icon as={FiSearch} color="fg.muted" boxSize="5" />
              </InputLeftElement>
              <Input placeholder="검색" />
            </InputGroup>
          </Stack>
        </Box>
        <Box overflowX="auto">
          <TesterTable {...props} />
        </Box>
        <Box px={{ base: "4", md: "6" }} pb="5">
          <HStack spacing="3" justify="space-between">
            {/* {!isMobile && (
              <Text color="fg.muted" textStyle="sm">
                총 10건의 검색결과가 있습니다.
              </Text>
            )} */}
            <ButtonGroup
              spacing="3"
              justifyContent="space-between"
              width={{ base: "full", md: "auto" }}
              variant="secondary"
            >
              <Button isDisabled={props.isPrevDisabled} onClick={props.onPrev}>
                이전
              </Button>
              <Button isDisabled={props.isNextDisabled} onClick={props.onNext}>
                다음
              </Button>
            </ButtonGroup>
            <Button onClick={() => props.onRegister()}>등록</Button>
          </HStack>
        </Box>
      </Stack>
    </Box>
    // </Container>
  );
};
