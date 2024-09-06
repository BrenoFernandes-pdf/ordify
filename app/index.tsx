import StartScreenTemplate from "@/components/StartScreenTemplate";
import { generateId } from "@/utils/idManager";
import { useUserContext } from "@/context/UserContext";
import {
  Box,
  Button,
  ButtonText,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Input,
  InputField,
  Pressable,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { CheckIcon } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();
  const { createUser, readUser, setUser } = useUserContext();

  const handleSignIn = () => {
    const tempUser = {
      id: generateId("user"),
      name: "Víctor Chagas",
      email: "victor@example.com",
      password: "12345",
      organizers: [
        {
          id: generateId("organizer"),
          name: "Organizador de Viagem",
          description: "Organize seus itens para viagens",
          isFavorited: false,
          items: [
            { id: generateId("item"), name: "Passaporte", quantity: 10 },
            { id: generateId("item"), name: "Mapa", quantity: 10 },
          ],
        },
        {
          id: generateId("organizer"),
          name: "Organizador de Trabalho",
          description: "Gerencie suas tarefas e projetos",
          isFavorited: false,
          items: [
            { id: generateId("item"), name: "Laptop", quantity: 10 },
            {
              id: generateId("item"),
              name: "Caderno de Anotações",
              quantity: 10,
            },
          ],
        },
        {
          id: generateId("organizer"),
          name: "Organizador de Casa",
          description: "Organize suas tarefas domésticas",
          isFavorited: false,
          items: [
            { id: generateId("item"), name: "Lista de Compras", quantity: 10 },
            { id: generateId("item"), name: "Itens de Limpeza", quantity: 10 },
          ],
        },
      ],
      events: [
        {
          id: generateId("event"),
          name: "Evento 1",
          description: "Urgente precisa ir logo lorem lorem lprem lorem",
          eventType: "Consulta Médica",
          date: "10/09/2024",
        },
        {
          id: generateId("event"),
          name: "Evento 2",
          description: "Urgente precisa ir logo lorem lorem lprem lorem",
          eventType: "Consulta Médica",
          date: "11/09/2024",
        },
        {
          id: generateId("event"),
          name: "Evento 3",
          description: "Urgente precisa ir logo lorem lorem lprem lorem",
          eventType: "Consulta Médica",
          date: "12/09/2024",
        },
        {
          id: generateId("event"),
          name: "Evento 4",
          description: "Urgente precisa ir logo lorem lorem lprem lorem",
          eventType: "Consulta Médica",
          date: "13/09/2024",
        },
        {
          id: generateId("event"),
          name: "Evento 5",
          description: "Urgente precisa ir logo lorem lorem lprem lorem",
          eventType: "Consulta Médica",
          date: "10/09/2025",
        },
        {
          id: generateId("event"),
          name: "Evento 7",
          description: "Expirado",
          eventType: "ADAW",
          date: "11/02/2002",
        },
      ],
    };

    createUser(tempUser);
    setUser(tempUser);

    router.push("/home");
  };

  return (
    <StartScreenTemplate description="Acesse sua conta">
      <VStack space="4xl">
        <FormControl size="lg" isRequired={true}>
          <FormControlLabel mb="$2">
            <FormControlLabelText>E-mail</FormControlLabelText>
          </FormControlLabel>

          <Input>
            <InputField
              type="text"
              placeholder="E-mail"
              placeholderTextColor="#DBDFE5"
            />
          </Input>
        </FormControl>

        <FormControl size="lg" isRequired={true}>
          <FormControlLabel mb="$2">
            <FormControlLabelText>Senha</FormControlLabelText>
          </FormControlLabel>

          <Input>
            <InputField
              type="password"
              placeholder="Senha"
              placeholderTextColor="#DBDFE5"
            />
          </Input>
        </FormControl>

        <HStack justifyContent="space-between">
          <Checkbox
            size="md"
            value="Manter conectado"
            aria-label="Manter conectado"
          >
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} color="$white" />
            </CheckboxIndicator>

            <CheckboxLabel fontSize="$sm">Manter conectado</CheckboxLabel>
          </Checkbox>

          <Pressable
            onPress={() => {
              router.push("/forgotPassword");
            }}
          >
            <Text
              color="#black"
              fontSize="$sm"
              fontWeight="$bold"
              textDecorationLine="underline"
            >
              Esqueceu a senha?
            </Text>
          </Pressable>
        </HStack>

        <Button onPress={handleSignIn} size="lg" bgColor="#4C1D95">
          <ButtonText fontWeight="$bold">Sign in</ButtonText>
        </Button>

        <Box alignItems="center">
          <HStack>
            <Text fontWeight="$medium">Não possui uma conta? </Text>

            <Pressable
              onPress={() => {
                router.push("/signUp");
              }}
            >
              <Text
                color="#4C1D95"
                fontWeight="$bold"
                textDecorationLine="underline"
              >
                Sign up
              </Text>
            </Pressable>
          </HStack>
        </Box>
      </VStack>
    </StartScreenTemplate>
  );
}
