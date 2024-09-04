import AppScreenTemplate from "@/components/AppScreenTemplate";
import ItemCard from "@/components/ItemCard";
import ItemModal from "@/components/ItemModal";
import {
  Box,
  Button,
  ButtonText,
  Center,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Image,
  Input,
  InputField,
  Pressable,
  ScrollView,
  VStack,
} from "@gluestack-ui/themed";
import { Plus } from "lucide-react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useUserContext } from "@/context/UserContext";
import { generateId } from "@/utils/idManager";

export default function CreateOrganizer() {
  const router = useRouter();
  const { user, createOrganizer, createItem } = useUserContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleCreate = () => {
    if (user) {
      const newOrganizer = {
        id: generateId("organizer"),
        name,
        description,
        isFavorited: false,
        items,
      };

      createOrganizer(newOrganizer);

      router.back();
    }
  };

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleRemoveItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <AppScreenTemplate title="Criar organizador">
      <ScrollView px="$6">
        <ItemModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSave={handleAddItem}
        />

        <VStack space="4xl" py="$8">
          <Center>
            <Image
              size="xl"
              source={{
                uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              }}
              alt="Foto do organizador"
            />
          </Center>

          <FormControl size="lg" isRequired>
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

          <FormControl size="lg" isRequired>
            <FormControlLabel mb="$2">
              <FormControlLabelText>Descrição</FormControlLabelText>
            </FormControlLabel>

            <Input>
              <InputField
                type="text"
                placeholder="Descrição"
                placeholderTextColor="#DBDFE5"
                onChangeText={setDescription}
              />
            </Input>
          </FormControl>

          <Box>
            <Heading mb="$2" size="xl" fontWeight="$bold">
              Adicionar itens
            </Heading>

            <VStack space="lg">
              {items.map((item) => (
                <ItemCard
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  isCreating
                  onRemove={() => handleRemoveItem(item.id)}
                />
              ))}

              <Pressable
                onPress={() => setShowModal(true)}
                mx="$4"
                borderColor="#CFD1D4"
                borderStyle="dashed"
                borderRadius="$lg"
                borderWidth={1}
              >
                <Center py="$4">
                  <Plus size={48} color="#CFD1D4" />
                </Center>
              </Pressable>
            </VStack>
          </Box>

          <Center>
            <Button w="$40" size="lg" bgColor="#4C1D95" onPress={handleCreate}>
              <ButtonText fontWeight="$bold">Criar</ButtonText>
            </Button>
          </Center>
        </VStack>
      </ScrollView>
    </AppScreenTemplate>
  );
}
