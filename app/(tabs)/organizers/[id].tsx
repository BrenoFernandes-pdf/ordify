import AppScreenTemplate from "@/components/AppScreenTemplate";
import DeleteModal from "@/components/DeleteModal";
import InfoCard from "@/components/InfoCard";
import ItemCard from "@/components/ItemCard";
import ItemModal from "@/components/ItemModal";
import {
  Box,
  Button,
  ButtonText,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Plus } from "lucide-react-native";
import { Href, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { useUserContext } from "@/context/UserContext";
import { generateId } from "@/utils/idManager";

export default function OrganizerInfo() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { readOrganizer, deleteOrganizer, createItem, deleteItem, updateItem } =
    useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const organizerId = parseInt(id!);
  const organizer = readOrganizer(organizerId);

  if (!organizer) {
    return (
      <Center flex={1}>
        <Text>Organizador não encontrado</Text>
      </Center>
    );
  }

  const infos = [organizer.name, organizer.description];

  const handleAddItem = (newItem: {
    name: string;
    image: string;
    quantity: number;
  }) => {
    createItem(organizer.id, {
      id: generateId("item"),
      name: newItem.name,
      image: newItem.image,
      quantity: newItem.quantity,
    });

    setIsModalOpen(false);
  };

  const handleDeleteOrganizer = () => {
    deleteOrganizer(organizer.id);
    router.back();
  };

  const handleItemSave = (updatedItem) => {
    updateItem(organizerId, updatedItem);
  };

  return (
    <AppScreenTemplate title={organizer.name}>
      <ScrollView px="$6">
        <ItemModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddItem}
        />

        <DeleteModal
          name="organizador"
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          onDelete={handleDeleteOrganizer}
        />

        <VStack space="4xl" py="$8">
          <Center>
            <Image
              size="xl"
              source={{
                uri: organizer.image,
              }}
              alt="Foto do organizador"
            />
          </Center>

          <Center>
            <HStack space="md">
              <Button
                onPress={() =>
                  router.push(`/organizers/edit/${organizer.id}` as Href)
                }
                size="lg"
                bgColor="#4C1D95"
              >
                <ButtonText fontWeight="$bold">Editar</ButtonText>
              </Button>

              <Button
                onPress={() => setShowDeleteModal(true)}
                size="lg"
                bgColor="#4C1D95"
              >
                <ButtonText fontWeight="$bold">Excluir</ButtonText>
              </Button>
            </HStack>
          </Center>

          <Divider bgColor="#CFD1D4" />

          <Box>
            <Heading mb="$2" size="xl" fontWeight="$bold">
              Informações
            </Heading>

            <InfoCard infos={infos} />
          </Box>

          <Box>
            <Heading mb="$2" size="xl" fontWeight="$bold">
              Itens guardados
            </Heading>

            <VStack space="lg">
              {organizer.items.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  onDelete={() => deleteItem(organizer.id, item.id)}
                  onSave={handleItemSave}
                />
              ))}

              <Pressable
                onPress={() => setIsModalOpen(true)}
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
        </VStack>
      </ScrollView>
    </AppScreenTemplate>
  );
}
