import { AddIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import React from "react";

export function GainModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const format = (val:string) => `R$` + val;
  const parse = (val: string) => val.replace(/^\$/, "");

  const [value, setValue] = React.useState("1.53");

  return (
    <>
      <Button onClick={onOpen}>Adicionar ganho</Button>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><AddIcon boxSize={6}/>Adicionar ganho</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Nome</FormLabel>
              <Input ref={initialRef} placeholder="Nome" />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Valor</FormLabel>
              <NumberInput
                precision={2}
                value={format(value)}
                onChange={(valueString) => setValue(parse(valueString))}
              >
                <NumberInputField />
              </NumberInput>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Fechar
            </Button>
            <Button colorScheme="blue" mr={3}>
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
