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

export default function SignIn() {
  return (
    <AppScreenTemplate screenDescription="Acesse sua conta">
      <Box>
        <VStack space="4xl">
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

          <FormControl size="lg" isInvalid={false} isRequired={true}>
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
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel fontSize="$lg">Manter conectado</CheckboxLabel>
            </Checkbox>

            <Link href="/forgotPassword" asChild>
              <LinkText color="$black" fontSize="$lg" fontWeight="$bold">
                Esqueceu a senha?
              </LinkText>
            </Link>
          </HStack>

          <Link href="/tabs" asChild>
            <Button size="lg">
              <ButtonText fontWeight="$bold">Sign in</ButtonText>
            </Button>
          </Link>

          <Box alignItems="center">
            <HStack>
              <Text fontWeight="$medium">Não possui uma conta? </Text>
              <Link href="/signUp">
                <LinkText fontWeight="$bold" color="#4C1D95">
                  Sign up
                </LinkText>
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </AppScreenTemplate>
  );
}
