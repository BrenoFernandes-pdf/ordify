import InfoCard from "@/components/InfoCard";
import DeleteModal from "@/components/DeleteModal";
import { Item } from "@/context/UserContext";
import {
  Box,
  Button,
  ButtonText,
  Card,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Image,
  Input,
  InputField,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Pressable,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import {
  DollarSign,
  ExternalLink,
  Info,
  Minus,
  Pencil,
  Plus,
  Trash,
  X,
} from "lucide-react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

type Props = {
  item: Item;
  isCreating?: boolean;
  onDelete: () => void;
  onSave: (updatedItem) => void;
};

export default function ItemCard({
  item,
  isCreating,
  onDelete,
  onSave,
}: Props) {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [name, setName] = useState(item.name);
  const [image, setImage] = useState<string | null>(item.image);
  const [editedImage, setEditedImage] = useState<string | null>(item.image);
  const [quantity, setQuantity] = useState(item.quantity);

  const infos = [name, `${quantity}`];

  const handleShare = async () => {
    try {
      if (await Sharing.isAvailableAsync()) {
        let localUri = image;

        if (image.startsWith("http")) {
          const downloadResult = await FileSystem.downloadAsync(
            image,
            FileSystem.documentDirectory + "item-image.png"
          );
          localUri = downloadResult.uri;
        }

        await Sharing.shareAsync(localUri, {
          dialogTitle: "Compartilhar item",
          mimeType: "image/png",
        });
      } else {
        alert("Compartilhamento não disponível no seu dispositivo");
      }
    } catch (error) {
      console.log("Erro ao compartilhar:", error);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setEditedImage(result.assets[0].uri);
    } else {
      setEditedImage(image);
    }
  };

  const handleSaveChanges = () => {
    setImage(editedImage);

    const updatedItem = { ...item, name, image: editedImage, quantity };

    onSave(updatedItem);
    setShowEditForm(false);
  };

  const handleUpdateQuantity = (newQuantity: number) => {
    const updatedItem = { ...item, quantity: newQuantity };

    onSave(updatedItem);
  };

  const handleDecrement = () => {
    if (quantity > 0 && !isNaN(quantity)) {
      const newQuantity = quantity - 1;

      setQuantity(newQuantity);
      handleUpdateQuantity(newQuantity);
    }
  };

  const handleIncrement = () => {
    if (!isNaN(quantity)) {
      const newQuantity = quantity + 1;

      setQuantity(newQuantity);
      handleUpdateQuantity(newQuantity);
    }
  };

  return (
    <Card
      size="md"
      variant="filled"
      bg="$white"
      borderColor="#CFD1D4"
      borderWidth={1}
      mx="$4"
    >
      <Modal
        isOpen={showInfoModal}
        onClose={() => {
          setShowInfoModal(false);
          setShowEditForm(false);
          setEditedImage(image);
        }}
      >
        <ModalBackdrop />

        <ModalContent>
          <ModalHeader bg="#4C1D95" position="relative">
            <ModalCloseButton position="absolute" top="$2" right="$2">
              <X size={24} color="#FFFFFF" strokeWidth={2} />
            </ModalCloseButton>

            <Box flex={1} py="$4" alignItems="center">
              {showEditForm ? (
                <Pressable onPress={pickImage}>
                  <Image
                    size="lg"
                    source={{
                      uri: editedImage,
                    }}
                    alt="Foto do item"
                  />
                </Pressable>
              ) : (
                <Image
                  size="lg"
                  source={{
                    uri: image,
                  }}
                  alt="Foto do item"
                />
              )}
            </Box>
          </ModalHeader>

          <ModalBody>
            <Box py="$8">
              {showEditForm ? (
                <VStack space="4xl" px="$4">
                  <FormControl size="lg" isRequired={true}>
                    <FormControlLabel mb="$2">
                      <FormControlLabelText>Nome</FormControlLabelText>
                    </FormControlLabel>

                    <Input>
                      <InputField
                        type="text"
                        value={name}
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
                        value={quantity ? quantity.toString() : ""}
                        placeholder="Quantidade"
                        placeholderTextColor="#DBDFE5"
                        onChangeText={(text) => {
                          const parsed = parseInt(text);

                          if (!isNaN(parsed)) {
                            setQuantity(parsed);
                            handleUpdateQuantity(parsed);
                          }
                        }}
                      />
                    </Input>
                  </FormControl>

                  <Box alignItems="center">
                    <Button
                      w="$2/3"
                      onPress={handleSaveChanges}
                      bgColor="#4C1D95"
                    >
                      <ButtonText>Salvar</ButtonText>
                    </Button>
                  </Box>
                </VStack>
              ) : (
                <InfoCard infos={infos}></InfoCard>
              )}
            </Box>
          </ModalBody>

          {!showEditForm && (
            <ModalFooter>
              <HStack space="md">
                {!isCreating && (
                  <>
                    <Pressable
                      onPress={handleShare}
                      bg="#4C1D95"
                      rounded="$full"
                      p="$2"
                    >
                      <ExternalLink color="#FFFFFF" size={20} />
                    </Pressable>

                    <Pressable bg="#4C1D95" rounded="$full" p="$2">
                      <DollarSign color="#FFFFFF" size={20} />
                    </Pressable>
                  </>
                )}

                <Pressable
                  onPress={() => setShowEditForm(true)}
                  bg="#4C1D95"
                  rounded="$full"
                  p="$2"
                >
                  <Pencil color="#FFFFFF" size={20} />
                </Pressable>
              </HStack>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>

      <DeleteModal
        name="item"
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        onDelete={onDelete}
      />

      <HStack justifyContent="space-between">
        <HStack space="md">
          <Image
            size="sm"
            source={{
              uri: image,
            }}
            alt="Foto do item"
          />

          <VStack space="md">
            <Text fontWeight="$bold" fontSize="$xl">
              {name}
            </Text>

            <HStack space="xs">
              <Pressable onPress={handleDecrement}>
                <Minus size={20} color="#000000" />
              </Pressable>

              <Text fontWeight="$bold" fontSize="$xl">
                {quantity}
              </Text>

              <Pressable onPress={handleIncrement}>
                <Plus size={20} color="#000000" />
              </Pressable>
            </HStack>
          </VStack>
        </HStack>

        <HStack space="md">
          <Pressable onPress={() => setShowDeleteModal(true)}>
            <Trash size={20} color="#000000" />
          </Pressable>

          <Pressable onPress={() => setShowInfoModal(true)}>
            <Info size={20} color="#000000" />
          </Pressable>
        </HStack>
      </HStack>
    </Card>
  );
}
