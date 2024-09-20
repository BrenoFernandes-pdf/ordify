import AppScreenTemplate from "@/components/AppScreenTemplate";
import {
  Button,
  ButtonText,
  Center,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Image,
  Input,
  InputField,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import { useUserContext } from "@/context/UserContext";
import * as ImagePicker from "expo-image-picker";

export default function EditOrganizer() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { readOrganizer, updateOrganizer } = useUserContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [organizer, setOrganizer] = useState(null);

  const organizerId = parseInt(id!);

  useEffect(() => {
    const selectedOrganizer = readOrganizer(organizerId);

    if (selectedOrganizer) {
      setOrganizer(selectedOrganizer);
      setName(selectedOrganizer.name);
      setDescription(selectedOrganizer.description);
      setImage(selectedOrganizer.image);
    }
  }, [organizerId, readOrganizer]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    if (organizer) {
      const updatedOrganizer = {
        ...organizer,
        name,
        description,
        image: image || organizer.image,
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
            <Pressable onPress={pickImage}>
              <Image
                size="xl"
                source={{
                  uri: image ? image : "https://via.placeholder.com/400",
                }}
                alt="Foto do organizador"
              />
            </Pressable>
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
