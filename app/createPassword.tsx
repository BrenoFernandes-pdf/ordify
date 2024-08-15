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

export default function CreatePassword() {
  const router = useRouter();

  return (
    <StartScreenTemplate description="Criar nova Senha">
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
    </StartScreenTemplate>
  );
}
