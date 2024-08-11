import {
  Box,
  Button,
  ButtonText,
  Center,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Image,
  Input,
  InputField,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  VStack,
} from "@gluestack-ui/themed";
import { X } from "lucide-react-native";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: { id: number; name: string; quantity: number }) => void;
};

export default function ItemModal({ isOpen, onClose, onSave }: Props) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSave = () => {
    const newItem = {
      id: Date.now(),
      name,
      quantity: parseInt(quantity),
    };

    onSave(newItem);

    setName("");
    setQuantity("");

    onClose();
  };

  return (
    <Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBackdrop />

        <ModalContent>
          <ModalHeader bg="#4C1D95" h="$40" position="relative">
            <ModalCloseButton position="absolute" top="$2" right="$2">
              <X size={24} color="#FFFFFF" strokeWidth={2} />
            </ModalCloseButton>

            <Box flex={1} alignItems="center">
              <Image
                size="lg"
                source={{
                  uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                }}
                alt="Foto do item"
              />
            </Box>
          </ModalHeader>

          <ModalBody>
            <VStack space="4xl" px="$4" py="$6">
              <FormControl size="lg" isRequired={true}>
                <FormControlLabel mb="$2">
                  <FormControlLabelText>Nome</FormControlLabelText>
                </FormControlLabel>

                <Input>
                  <InputField
                    type="text"
                    placeholder="Nome"
                    placeholderTextColor="#DBDFE5"
                    onChangeText={setName}
                  />
                </Input>
              </FormControl>

              <FormControl size="lg" isRequired={true}>
                <FormControlLabel mb="$2">
                  <FormControlLabelText>Quantidade</FormControlLabelText>
                </FormControlLabel>

                <Input>
                  <InputField
                    type="text"
                    placeholder="Quantidade"
                    placeholderTextColor="#DBDFE5"
                    onChangeText={setQuantity}
                  />
                </Input>
              </FormControl>

              <Box alignItems="center">
                <Button w="$2/3" onPress={handleSave} bgColor="#4C1D95">
                  <ButtonText>Adicionar</ButtonText>
                </Button>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Center>
  );
}
