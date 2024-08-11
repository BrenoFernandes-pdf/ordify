import AppScreenTemplate from "@/components/AppScreenTemplate";
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
import { useUser } from "@/context/UserContext";

export default function OrganizerInfo() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { user, removeOrganizer, addItemToOrganizer, removeItemFromOrganizer } =
    useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const organizer = user?.organizers.find(
    (organizer) => organizer.id === parseInt(id!)
  );

  if (!organizer) {
    return (
      <Center flex={1}>
        <Text>Organizador não encontrado</Text>
      </Center>
    );
  }

  const infos = [organizer.name, organizer.description];

  const handleAddItem = (newItem: any) => {
    addItemToOrganizer(organizer.id, newItem);
  };

  return (
    <AppScreenTemplate title={organizer.name}>
      <ScrollView px="$6">
        <ItemModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
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
                onPress={() => {
                  router.back();
                  removeOrganizer(organizer.id);
                }}
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
              {organizer.items?.map((item) => (
                <ItemCard
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  onRemove={() =>
                    removeItemFromOrganizer(organizer.id, item.id)
                  }
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
