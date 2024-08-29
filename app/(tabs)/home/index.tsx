import HomeCard from "@/components/HomeCard";
import AppScreenTemplate from "@/components/AppScreenTemplate";
import {
  Box,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useUserContext } from "@/context/UserContext";
import { Href, useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  const { user } = useUserContext();

  const favoriteOrganizers = user.organizers.filter(
    (organizer) => organizer.isFavorited
  );

  return (
    <AppScreenTemplate title={`Olá, ${user.name}`}>
      <ScrollView>
        <VStack space="4xl" py="$6">
          <HomeCard
            description="Confira seus organizadores"
            title="Destaques"
            path="/organizers"
          >
            <Box alignItems="center">
              <ScrollView horizontal>
                {favoriteOrganizers.length > 0 ? (
                  favoriteOrganizers.map((organizer) => (
                    <Pressable
                      onPress={() => {
                        router.push(`/organizers/${organizer.id}` as Href);
                      }}
                      key={organizer.id}
                    >
                      <Box
                        mx="$2"
                        my="$4"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Image
                          size="md"
                          source={{
                            uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                          }}
                          alt={organizer.name}
                        />
                        <Text fontWeight="$bold" mt="$2" textAlign="center">
                          {organizer.name}
                        </Text>
                      </Box>
                    </Pressable>
                  ))
                ) : (
                  <Box my="$8">
                    <Text fontSize="$2xl">Nenhum organizador favoritado</Text>
                  </Box>
                )}
              </ScrollView>
            </Box>
          </HomeCard>

          <HomeCard description="Relembre seus itens parados">
            <Box h="$20" w="$full" bg="$red"></Box>
          </HomeCard>
        </VStack>
      </ScrollView>
    </AppScreenTemplate>
  );
}
