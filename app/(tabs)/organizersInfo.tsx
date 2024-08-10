import InfoCard from "@/components/InfoCard";
import {
  Avatar,
  AvatarFallbackText,
  Box,
  Button,
  ButtonText,
  Center,
  Divider,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function CreateOrganizers() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleCreate = () => {
    router.back();
  };

  return (
    <Box flex={1} bg="$white">
      <Box w="$full" bg="#4C1D95" px="$6" pt="$8" pb="$4">
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="$2xl" color="$white">
            Nome do organizador
          </Text>

          <Avatar bgColor="$amber600" borderRadius="$full">
            <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
          </Avatar>
        </HStack>
      </Box>

      <Box pt="$6" px="$6">
        <ScrollView>
          <VStack space="4xl">
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
                <Button size="lg" bgColor="#4C1D95" onPress={handleCreate}>
                  <ButtonText fontWeight="$bold">Editar</ButtonText>
                </Button>

                <Button size="lg" bgColor="#4C1D95" onPress={handleCreate}>
                  <ButtonText fontWeight="$bold">Excluir</ButtonText>
                </Button>
              </HStack>
            </Center>

            <Divider bgColor="#CFD1D4" />

            <InfoCard description="Informações" infos={["blalba", "blala"]} />
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}
