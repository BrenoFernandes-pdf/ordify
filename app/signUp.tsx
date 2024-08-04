import AppScreenTemplate from "@/components/AppScreenTemplate";
import {
  AddIcon,
  Box,
  Button,
  ButtonIcon,
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
  LinkText,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { AlertCircleIcon, CheckIcon } from "lucide-react-native";

export default function SignUp() {
  return (
    <AppScreenTemplate screenDescription="Crie sua conta">
      <Box>
        <VStack space="3xl">
          <FormControl size="lg" isInvalid={false} isRequired={true}>
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
          <FormControl size="lg" isInvalid={false} isRequired={true}>
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
          <FormControl size="lg" isInvalid={false} isRequired={true}>
            <FormControlLabel mb="$2">
              <FormControlLabelText>Senha</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="text"
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
          <FormControl size="lg" isInvalid={false} isRequired={true}>
            <FormControlLabel mb="$2">
              <FormControlLabelText>Confirmar Senha</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="text"
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
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel fontSize="$xs">
              Eu aceito os
              <Text fontWeight="bold" fontSize="$xs">
                {" "}
                Termos de Uso
              </Text>{" "}
              e
              <Text fontWeight="bold" fontSize="$xs">
                {" "}
                Política de Privacidade
              </Text>
            </CheckboxLabel>
          </Checkbox>

          <Link href="/(tabs)" asChild>
            <Button size="lg" bgColor="#4C1D95">
              <ButtonText fontWeight="$bold">Sign up</ButtonText>
            </Button>
          </Link>

          <Box alignItems="center">
            <HStack>
              <Text fontWeight="$medium">Já possui uma conta? </Text>
              <Link href="/">
                <LinkText fontWeight="$bold" color="#4C1D95">
                  Sign in
                </LinkText>
              </Link>
              <Box h="$32" bgColor="white" />
            </HStack>
          </Box>
        </VStack>
      </Box>
    </AppScreenTemplate>
  );
}
