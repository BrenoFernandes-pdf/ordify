import AppScreenTemplate from "@/components/AppScreenTemplate";
import {
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
import { AlertCircleIcon } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function CreatePassword() {
  const router = useRouter();

  return (
    <AppScreenTemplate description="Criar nova Senha">
      <VStack space="4xl">
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

        <FormControl size="lg" isRequired={true}>
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

        <Button
          onPress={() => {
            router.push("/");
          }}
          size="lg"
          bgColor="#4C1D95"
        >
          <ButtonText fontWeight="$bold">Atualizar Senha</ButtonText>
        </Button>
      </VStack>
    </AppScreenTemplate>
  );
}
