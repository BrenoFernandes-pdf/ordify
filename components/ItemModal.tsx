import {
  Box,
  Button,
  ButtonText,
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
  Pressable,
} from "@gluestack-ui/themed";
import { X } from "lucide-react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { generateId } from "@/utils/idManager";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: {
    id: number;
    name: string;
    image: string;
    quantity: number;
  }) => void;
};

export default function ItemModal({ isOpen, onClose, onSave }: Props) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleSave = () => {
    const parsedQuantity = parseInt(quantity);
    const finalQuantity = isNaN(parsedQuantity) ? 0 : parsedQuantity;

    const newItem = {
      id: generateId("item"),
      name,
      quantity: finalQuantity,
      image:
        image ||
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      creationDate: new Date().toISOString(),
    };

    onSave(newItem);

    setName("");
    setQuantity("");
    setImage(null);

    onClose();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setImage(null);
        onClose();
      }}
    >
      <ModalBackdrop />

      <ModalContent>
        <ModalHeader bg="#4C1D95" h="$40" position="relative">
          <ModalCloseButton position="absolute" top="$2" right="$2">
            <X size={24} color="#FFFFFF" strokeWidth={2} />
          </ModalCloseButton>

          <Box flex={1} alignItems="center">
            <Pressable onPress={pickImage}>
              <Image
                size="lg"
                source={{ uri: image || "https://via.placeholder.com/400" }}
                alt="Foto do item"
              />
            </Pressable>
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
  );
}
