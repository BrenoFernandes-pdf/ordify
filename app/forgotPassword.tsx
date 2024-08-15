import StartScreenTemplate from "@/components/StartScreenTemplate";
import {
  Button,
  ButtonText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  VStack,
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <StartScreenTemplate description="Insira seu e-mail">
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

        <Button
          onPress={() => {
            router.push("/createPassword");
          }}
          size="lg"
          bgColor="#4C1D95"
        >
          <ButtonText fontWeight="$bold">Enviar link</ButtonText>
        </Button>
      </VStack>
    </StartScreenTemplate>
  );
}
