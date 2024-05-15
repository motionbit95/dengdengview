import {
  Box,
  Button,
  Collapse,
  HStack,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BsPersonCircle } from "react-icons/bs";
import { FiChevronDown, FiFile } from "react-icons/fi";

export const DocumentCollapse = ({ ...props }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Button
        variant="tertiary"
        onClick={onToggle}
        justifyContent="space-between"
        width="full"
      >
        <HStack spacing="3">
          <Icon as={BsPersonCircle} />
          <Text as="span">내정보 수정</Text>
        </HStack>
        <PopoverIcon isOpen={isOpen} />
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Stack spacing="1" alignItems="stretch" ps="8" py="1">
          {["기본정보 수정", "블로그 위젯 등록" /*, "비밀번호 변경"*/].map(
            (item) => (
              <Button
                key={item}
                variant="tertiary"
                justifyContent="start"
                onClick={() => props.setItem(item)}
              >
                {item}
              </Button>
            )
          )}
        </Stack>
      </Collapse>
    </Box>
  );
};

export const PopoverIcon = (props: { isOpen: boolean }) => {
  const iconStyles = {
    transform: props.isOpen ? "rotate(-180deg)" : undefined,
    transition: "transform 0.2s",
    transformOrigin: "center",
  };
  return <Icon aria-hidden as={FiChevronDown} __css={iconStyles} />;
};
