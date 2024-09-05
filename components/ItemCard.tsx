import InfoCard from "@/components/InfoCard";
import DeleteModal from "@/components/DeleteModal";
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

type Props = {
  name: string;
  quantity: number;
  isCreating?: boolean;
  onDelete: () => void;
};

export default function ItemCard({
  name,
  quantity,
  isCreating,
  onDelete,
}: Props) {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [itemName, setItemName] = useState(name);
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const infos = [itemName, `${itemQuantity}`];

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
        }}
      >
        <ModalBackdrop />

        <ModalContent>
          <ModalHeader bg="#4C1D95" position="relative">
            <ModalCloseButton position="absolute" top="$2" right="$2">
              <X size={24} color="#FFFFFF" strokeWidth={2} />
            </ModalCloseButton>

            <Box flex={1} py="$4" alignItems="center">
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
                        value={itemName}
                        placeholder="Nome"
                        placeholderTextColor="#DBDFE5"
                        onChangeText={setItemName}
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
                        // value={`${itemQuantity}`}
                        placeholder="Quantidade"
                        placeholderTextColor="#DBDFE5"
                        onChangeText={(text) => setItemQuantity(parseInt(text))}
                      />
                    </Input>
                  </FormControl>

                  <Box alignItems="center">
                    <Button
                      w="$2/3"
                      onPress={() => setShowEditForm(false)}
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
                    <Pressable bg="#4C1D95" rounded="$full" p="$2">
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
              uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            }}
            alt="Foto do item"
          />

          <VStack space="md">
            <Text fontWeight="$bold" fontSize="$xl">
              {itemName}
            </Text>

            <HStack space="xs">
              <Pressable>
                <Minus size={20} color="#000000" />
              </Pressable>

              <Text fontWeight="$bold" fontSize="$xl">
                {itemQuantity}
              </Text>

              <Pressable>
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
