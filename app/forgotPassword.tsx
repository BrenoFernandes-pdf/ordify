import AppScreenTemplate from "@/components/AppScreenTemplate";
import {
  Box,
  Button,
  ButtonText,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  VStack,
} from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { AlertCircleIcon } from "lucide-react-native";

export default function ForgotPassword() {
  return (
    <AppScreenTemplate description="Insira seu e-mail">
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
              Insira seu e-mail para a recuração de senha.
            </FormControlHelperText>
          </FormControlHelper>

          <FormControlError ml="$2">
            <FormControlErrorIcon as={AlertCircleIcon} />

            <FormControlErrorText>
              At least 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <Link href="/createPassword" asChild>
          <Button size="lg" bgColor="#4C1D95">
            <ButtonText fontWeight="$bold">Enviar link</ButtonText>
          </Button>
        </Link>
      </VStack>
    </AppScreenTemplate>
  );
}
