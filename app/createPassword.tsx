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

export default function ForgotPassword() {
  return (
    <AppScreenTemplate screenDescription="Criar nova Senha">
      <Box>
        <VStack space="4xl">
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
          <FormControl size="lg" isInvalid={false} isRequired={true}>
            <FormControlLabel mb="$2">
              <FormControlLabelText>Confirmar senha</FormControlLabelText>
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

          <Link href="/" asChild>
            <Button size="lg" bgColor="#4C1D95">
              <ButtonText fontWeight="$bold">Atualizar Senha</ButtonText>
            </Button>
          </Link>
        </VStack>
      </Box>
    </AppScreenTemplate>
  );
}
