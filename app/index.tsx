import StartScreenTemplate from "@/components/StartScreenTemplate";
import { generateId } from "@/utils/idManager";
import { useUserContext } from "@/context/UserContext";
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

export default function SignIn() {
  const router = useRouter();
  const { createUser, setUser } = useUserContext();

  const handleSignIn = () => {
    const tempUser = {
      id: generateId("user"),
      name: "Víctor Chagas",
      email: "victor@example.com",
      password: "12345",
      organizers: [
        {
          id: generateId("organizer"),
          name: "Caixa da Bagunça",
          description: "Objetos Aleatórios",
          image:
            "https://i.pinimg.com/originals/3d/28/3e/3d283e7cfcf6e00b177e5019669fd3b0.png",
          isFavorited: true,
          items: [
            {
              id: generateId("item"),
              name: "Faqueiro",
              image:
                "https://http2.mlstatic.com/faqueiro-talher-aco-D_NQ_NP_788304-MLB25734389920_072017-F.jpg",
              quantity: 1,
              creationDate: "11/08/2015",
            },
            {
              id: generateId("item"),
              name: "Jarra",
              image: "https://www.ecured.cu/images/7/7a/Jarra-con-tapa.JPG",
              quantity: 10,
              creationDate: "11/12/2022",
            },
            {
              id: generateId("item"),
              name: "Relógio de Parede",
              image:
                "https://images.tcdn.com.br/img/img_prod/754260/relogio_de_parede_analogico_herweg_6463_034_preto_8745_1_20201207100344.jpg",
              quantity: 1,
              creationDate: "22/03/2023",
            },
            {
              id: generateId("item"),
              name: "Diário de um B.",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/91A4Iql-eQL.jpg",
              quantity: 1,
              creationDate: "22/03/2010",
            },
            {
              id: generateId("item"),
              name: "Percy Jackson",
              image:
                "https://th.bing.com/th/id/OIP.Scg0ZGBnAI0glK4py-8cugAAAA?rs=1&pid=ImgDetMain",
              quantity: 1,
              creationDate: "01/03/2013",
            },
            {
              id: generateId("item"),
              name: "Árvore de Natal",
              image:
                "https://www.tuacasa.com.br/wp-content/uploads/2018/08/arvore-de-natal-pequena-decorada-25-730x730.jpg",
              quantity: 1,
              creationDate: "01/03/2008",
            },
            {
              id: generateId("item"),
              name: "Extensão Antiga",
              image:
                "https://th.bing.com/th/id/OIP.4um50oH27QWUPZNWNyQ2gQHaHa?rs=1&pid=ImgDetMain",
              quantity: 1,
              creationDate: "21/09/2010",
            },
          ],
        },
        {
          id: generateId("organizer"),
          name: "Caixa de Ferramentas(Tio)",
          description: "Itens da Caixa de Ferramentas do Tio",
          image:
            "https://th.bing.com/th/id/R.943c0a841532afa66462d28c14ed43dd?rik=lhdJFPpehEJWOA&pid=ImgRaw&r=0",
          isFavorited: true,
          items: [
            {
              id: generateId("item"),
              name: "Corta Grama",
              image:
                "https://http2.mlstatic.com/D_NQ_NP_718392-MLB70474839896_072023-O.webp",
              quantity: 1,
              creationDate: "11/02/2019",
            },
            {
              id: generateId("item"),
              name: "Kit de Pintura",
              image:
                "https://http2.mlstatic.com/D_NQ_NP_606455-MLU73681432522_012024-O.webp",
              quantity: 3,
              creationDate: "31/05/2018",
            },
            {
              id: generateId("item"),
              name: "Chave de Fenda",
              image:
                "https://images.tcdn.com.br/img/img_prod/625223/chave_de_fenda_3_16_x_4_vonder_plus_1841_1_20190201095519.jpg",
              quantity: 3,
              creationDate: "31/05/2018",
            },
            {
              id: generateId("item"),
              name: "Porquinhas",
              image:
                "https://th.bing.com/th/id/OIP.fgZ34PaBg8pd4MJRke0DvgHaD5?rs=1&pid=ImgDetMain",
              quantity: 17,
              creationDate: "31/05/2024",
            },
          ],
        },
        {
          id: generateId("organizer"),
          name: "Meu computador Quântico",
          description: "Organize seus periféricos quânticos",
          image:
            "https://www.oarquivo.com.br/images/stories/Geral_27/quancor2.jpg",
          isFavorited: true,
          items: [
            {
              id: generateId("item"),
              name: "Mouse",
              image:
                "https://i5.walmartimages.com/asr/1a40c9de-484a-4184-9aeb-ffb12bb1f1ed_1.c44c31d44925036143be964c15e075b1.jpeg",
              quantity: 3,
              creationDate: "19/08/2024",
            },
            {
              id: generateId("item"),
              name: "teclado",
              image:
                "https://external-preview.redd.it/reYc1YATQw-Fs4Tt5ttr_BEfd9VRuG17nxuxVi-0IfM.jpg?width=960&crop=smart&auto=webp&s=e3961b1bff902ced9d130f08971e62d7e22e8ad2",
              quantity: 2,
              creationDate: "19/08/2024",
            },
            {
              id: generateId("item"),
              name: "Fonte de PC",
              image:
                "https://th.bing.com/th/id/OIP.99lwSq6cJYjRSlTxOEBVqQHaHa?rs=1&pid=ImgDetMain",
              quantity: 1,
              creationDate: "11/02/2021",
            },
            {
              id: generateId("item"),
              name: "Monitor Antigo",
              image:
                "https://http2.mlstatic.com/monitor-tubo-lg-preto-16-D_NQ_NP_337311-MLB20548557796_012016-F.jpg",
              quantity: 1,
              creationDate: "11/02/1975",
            },
          ],
        },
      ],
      events: [
        {
          id: generateId("event"),
          name: "CPU #1",
          description: "Computação Móvel: Smart Agro",
          eventType: "",
          date: "26/03/2024",
        },
        {
          id: generateId("event"),
          name: "Ataque/Defesa #1",
          description: "Computação Móvel: Vez de Atacar!",
          eventType: "Consulta Médica",
          date: "02/04/2024",
        },
        {
          id: generateId("event"),
          name: "Dentista",
          description: "Somente limpeza",
          eventType: "Consulta Médica",
          date: "26/09/2024",
        },
        {
          id: generateId("event"),
          name: "Levar carro à oficina",
          description: "Consertar motor e trocar óleo",
          eventType: "Revisão do Carro",
          date: "24/9/2024",
        },
        {
          id: generateId("event"),
          name: "Aniversário da Vovó",
          description: "Lembrar de comprar presente!",
          eventType: "Aniversário",
          date: "10/09/2025",
        },
        {
          id: generateId("event"),
          name: "Apresentar o Ordify",
          description: "Revisar Apresentação",
          eventType: "",
          date: "24/09/2024",
        },
      ],
    };

    createUser(tempUser);
    setUser(tempUser);

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
