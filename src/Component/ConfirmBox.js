import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { BsInfoCircle } from "react-icons/bs";

function ConfirmBox({ ...props }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button {...props} onClick={props.onClick ? props.onClick : onOpen}>
        {props.children}
      </Button>

      <Modal isCentered isOpen={props.isOpen ? true : isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack>
              <BsInfoCircle />
              <Text>{props.title}</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{props.discription}</Text>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="outline"
              colorScheme="gray"
              mr={3}
              onClick={onClose}
            >
              취소
            </Button>
            <Button
              onClick={() => {
                props.onConfirm();
                onClose();
              }}
            >
              {props.buttonText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ConfirmBox;
