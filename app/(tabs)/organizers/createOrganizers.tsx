import {
  Avatar,
  AvatarFallbackText,
  Box,
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
            Criar organizador
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

            <FormControl size="lg" isRequired={true}>
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

            <FormControl size="lg" isRequired={true}>
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

            <Center>
              <Button
                w="$40"
                size="lg"
                bgColor="#4C1D95"
                onPress={handleCreate}
              >
                <ButtonText fontWeight="$bold">Criar</ButtonText>
              </Button>
            </Center>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}
