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
import { BsMegaphone } from "react-icons/bs";
import { FiChevronDown, FiFile } from "react-icons/fi";

export const CampainCollaspe = ({ ...props }) => {
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
          <Icon as={BsMegaphone} />
          <Text as="span">나의 체험단</Text>
        </HStack>
        <PopoverIcon isOpen={isOpen} />
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Stack spacing="1" alignItems="stretch" ps="8" py="1">
          {["신청한 체험단", "선정된 체험단", "리뷰한 체험단"].map(
            (item, index) => (
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
