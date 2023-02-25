import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

export function SpendModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Adicionar gasto</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar gasto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button variant="ghost">Salvar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
