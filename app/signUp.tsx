import AppScreenTemplate from "@/components/AppScreenTemplate";
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
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Input,
  InputField,
  LinkText,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { AlertCircleIcon, CheckIcon } from "lucide-react-native";

export default function SignUp() {
  return (
    <AppScreenTemplate description="Crie sua conta">
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

          <FormControlError ml="$2">
            <FormControlErrorIcon as={AlertCircleIcon} />

            <FormControlErrorText>
              At least 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
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

          <FormControlError ml="$2">
            <FormControlErrorIcon as={AlertCircleIcon} />

            <FormControlErrorText>
              At least 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
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

          <FormControlError ml="$2">
            <FormControlErrorIcon as={AlertCircleIcon} />

            <FormControlErrorText>
              At least 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
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

        <Link href="/" asChild>
          <Button size="lg" bgColor="#4C1D95">
            <ButtonText fontWeight="$bold">Sign up</ButtonText>
          </Button>
        </Link>

        <Box alignItems="center" mb="$8">
          <HStack>
            <Text fontWeight="$medium">Já possui uma conta? </Text>

            <Link href="/">
              <LinkText fontWeight="$bold" color="#4C1D95">
                Sign in
              </LinkText>
            </Link>
          </HStack>
        </Box>
      </VStack>
    </AppScreenTemplate>
  );
}
