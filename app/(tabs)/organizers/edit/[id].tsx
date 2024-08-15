import AppScreenTemplate from "@/components/AppScreenTemplate";
import {
  Button,
  ButtonText,
  Center,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Image,
  Input,
  InputField,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import { useUserContext } from "@/context/UserContext";

export default function EditOrganizer() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { readOrganizer, updateOrganizer } = useUserContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [organizer, setOrganizer] = useState(null);

  const organizerId = parseInt(id!);

  useEffect(() => {
    const selectedOrganizer = readOrganizer(organizerId);

    if (selectedOrganizer) {
      setOrganizer(selectedOrganizer);
      setName(selectedOrganizer.name);
      setDescription(selectedOrganizer.description);
    }
  }, [organizerId, readOrganizer]);

  const handleSave = () => {
    if (organizer) {
      const updatedOrganizer = {
        ...organizer,
        name,
        description,
      };

      updateOrganizer(updatedOrganizer);
      router.back();
    }
  };

  if (!organizer) {
    return (
      <Center flex={1}>
        <Text>Organizador não encontrado</Text>
      </Center>
    );
  }

  return (
    <AppScreenTemplate title="Editar organizador">
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

          <FormControl size="lg" isRequired={true}>
            <FormControlLabel mb="$2">
              <FormControlLabelText>Nome</FormControlLabelText>
            </FormControlLabel>

            <Input>
              <InputField
                type="text"
                placeholder="Nome"
                placeholderTextColor="#DBDFE5"
                value={name}
                onChangeText={setName}
              />
            </Input>
          </FormControl>

          <FormControl size="lg" isRequired={true}>
            <FormControlLabel mb="$2">
              <FormControlLabelText>Descrição</FormControlLabelText>
            </FormControlLabel>

            <Input>
              <InputField
                type="text"
                placeholder="Descrição"
                placeholderTextColor="#DBDFE5"
                value={description}
                onChangeText={setDescription}
              />
            </Input>
          </FormControl>

          <Center>
            <Button w="$40" size="lg" bgColor="#4C1D95" onPress={handleSave}>
              <ButtonText fontWeight="$bold">Salvar</ButtonText>
            </Button>
          </Center>
        </VStack>
      </ScrollView>
    </AppScreenTemplate>
  );
}
