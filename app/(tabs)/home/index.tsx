import HomeCard from "@/components/HomeCard";
import AppScreenTemplate from "@/components/AppScreenTemplate";
import { Box, ScrollView, VStack } from "@gluestack-ui/themed";
import { useUserContext } from "@/context/UserContext";

export default function Home() {
  const { user } = useUserContext();

  return (
    <AppScreenTemplate title={`Olá, ${user.name}`}>
      <ScrollView>
        <VStack space="4xl" py="$6">
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
    </AppScreenTemplate>
  );
}
