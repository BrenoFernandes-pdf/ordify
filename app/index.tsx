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
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Input,
  InputField,
  Pressable,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { AlertCircleIcon, CheckIcon } from "lucide-react-native";
import { useRouter } from "expo-router";
import { useUser } from "@/context/UserContext";

export default function SignIn() {
  const router = useRouter();
  const { setUser } = useUser();

  const handleSignIn = () => {
    const fakeUser = {
      id: 1,
      name: "Victor Chagas",
      email: "victor@example.com",
      password: "12345",
      organizers: [],
    };

    setUser(fakeUser);

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

          <FormControlHelper ml="$2">
            <FormControlHelperText>
              Must be at least 6 characters.
            </FormControlHelperText>
          </FormControlHelper>

          <FormControlError ml="$2">
            <FormControlErrorIcon as={AlertCircleIcon} />

            <FormControlErrorText>
              At least 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
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

          <FormControlHelper ml="$2">
            <FormControlHelperText>
              Must be at least 6 characters.
            </FormControlHelperText>
          </FormControlHelper>

          <FormControlError ml="$2">
            <FormControlErrorIcon as={AlertCircleIcon} />

            <FormControlErrorText>
              At least 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
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
