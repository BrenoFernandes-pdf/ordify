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
import { useUser } from "@/context/UserContext";

export default function EditOrganizer() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { user, updateOrganizer } = useUser();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [organizer, setOrganizer] = useState<any>(null);

  useEffect(() => {
    if (user) {
      const selectedOrganizer = user.organizers.find(
        (org) => org.id === parseInt(id!)
      );
      if (selectedOrganizer) {
        setOrganizer(selectedOrganizer);
        setName(selectedOrganizer.name);
        setDescription(selectedOrganizer.description);
      }
    }
  }, [user, id]);

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
                uri: organizer.imagePath,
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
