import AppScreenTemplate from "@/components/AppScreenTemplate";
import InfoCard from "@/components/InfoCard";
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
import { useRouter, useLocalSearchParams } from "expo-router";
import { useUser } from "@/context/UserContext";
import ItemCard from "@/components/ItemCard";

export default function OrganizerInfo() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { user } = useUser();

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

  const handleEdit = () => {
    // lógica de edição aqui
  };

  const handleDelete = () => {
    // lógica de exclusão aqui
  };

  return (
    <AppScreenTemplate title={organizer.name}>
      <ScrollView px="$6">
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
              <Button size="lg" bgColor="#4C1D95" onPress={handleEdit}>
                <ButtonText fontWeight="$bold">Editar</ButtonText>
              </Button>

              <Button size="lg" bgColor="#4C1D95" onPress={handleDelete}>
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

            {organizer.items?.map((item) => (
              <Pressable
                onPress={() => {
                  // router.push(`/organizers/${organizer.id}` as Href);
                }}
                key={item.id}
              >
                <ItemCard name={item.name} quantity={item.quantity} />
              </Pressable>
            ))}
          </Box>
        </VStack>
      </ScrollView>
    </AppScreenTemplate>
  );
}
