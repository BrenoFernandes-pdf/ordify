import HomeCard from "@/components/homeCard";
import {
  Text,
  Center,
  Heading,
  Divider,
  Link,
  Button,
  ButtonText,
  Box,
  LinkText,
  VStack,
  HStack,
  ScrollView,
  Avatar,
  AvatarFallbackText,
} from "@gluestack-ui/themed";

export default function Home() {
  return (
    <Box flex={1} bg="$white">
      <Box w="$full" bg="#4C1D95" px="$6" pt="$8" pb="$4">
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="$4xl" color="$white">
            Olá, Fulano
          </Text>

          <Avatar bgColor="$amber600" borderRadius="$full">
            <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
          </Avatar>
        </HStack>
      </Box>

      <ScrollView py="$8">
        <VStack space="4xl" mb="$12">
          <HomeCard
            description="Confira seus organizadores"
            title="Destaques"
            path="/organizers"
          >
            <Box h="$20" w="$full" bg="$red"></Box>
          </HomeCard>

          <HomeCard description="Relembre seus itens parados">
            <Box h="$20" w="$full" bg="$red"></Box>
          </HomeCard>

          <HomeCard
            description="Confira seus organizadores"
            title="Destaques"
            path="/organizers"
          >
            <Box h="$20" w="$full" bg="$red"></Box>
          </HomeCard>

          <HomeCard description="Relembre seus itens parados">
            <Box h="$20" w="$full" bg="$red"></Box>
          </HomeCard>
        </VStack>
      </ScrollView>
    </Box>
  );
}
