import StartScreenTemplate from "@/components/StartScreenTemplate";
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

export default function SignUp() {
  const router = useRouter();

  return (
    <StartScreenTemplate description="Crie sua conta">
      <VStack space="4xl">
        <FormControl size="lg" isRequired={true}>
          <FormControlLabel mb="$2">
            <FormControlLabelText>Nome</FormControlLabelText>
          </FormControlLabel>

          <Input>
            <InputField
              type="text"
              placeholder="Nome"
              placeholderTextColor="#DBDFE5"
            />
          </Input>
        </FormControl>

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

        <FormControl size="lg" isRequired={true}>
          <FormControlLabel mb="$2">
            <FormControlLabelText>Confirmar Senha</FormControlLabelText>
          </FormControlLabel>

          <Input>
            <InputField
              type="password"
              placeholder="Senha"
              placeholderTextColor="#DBDFE5"
            />
          </Input>
        </FormControl>

        <Checkbox
          size="md"
          value="Manter Conectado"
          aria-label="Manter Conectado"
        >
          <CheckboxIndicator mr="$2">
            <CheckboxIcon as={CheckIcon} color="$white" />
          </CheckboxIndicator>

          <CheckboxLabel>
            <Text fontSize="$xs">Eu aceito os </Text>

            <Text fontWeight="bold" fontSize="$xs">
              Termos de Uso
            </Text>

            <Text fontSize="$xs"> e </Text>

            <Text fontWeight="bold" fontSize="$xs">
              Política de Privacidade
            </Text>
          </CheckboxLabel>
        </Checkbox>

        <Button
          onPress={() => {
            router.push("/");
          }}
          size="lg"
          bgColor="#4C1D95"
        >
          <ButtonText fontWeight="$bold">Sign up</ButtonText>
        </Button>

        <Box alignItems="center" mb="$8">
          <HStack>
            <Text fontWeight="$medium">Já possui uma conta? </Text>

            <Pressable
              onPress={() => {
                router.push("/");
              }}
            >
              <Text
                color="#4C1D95"
                fontWeight="$bold"
                textDecorationLine="underline"
              >
                Sign in
              </Text>
            </Pressable>
          </HStack>
        </Box>
      </VStack>
    </StartScreenTemplate>
  );
}
