import AppScreenTemplate from "@/components/AppScreenTemplate";
import OrganizerCard from "@/components/OrganizerCard";
import { useUserContext } from "@/context/UserContext";
import {
  Center,
  Heading,
  Pressable,
  ScrollView,
  VStack,
} from "@gluestack-ui/themed";
import { Plus } from "lucide-react-native";
import { Href, useRouter } from "expo-router";

export default function Organizers() {
  const router = useRouter();
  const { user } = useUserContext();

  return (
    <AppScreenTemplate title="Organizadores">
      <ScrollView>
        <Heading ml="$6" mt="$6" mb="$2" size="xl" fontWeight="$bold">
          Organizadores criados
        </Heading>

        <VStack space="4xl" pt="$2" pb="$6">
          {user?.organizers?.map((organizer) => (
            <Pressable
              onPress={() => {
                router.push(`/organizers/${organizer.id}` as Href);
              }}
              key={organizer.id}
            >
              <OrganizerCard organizer={organizer} />
            </Pressable>
          ))}

          <Pressable
            onPress={() => router.push("/organizers/createOrganizer")}
            mx="$4"
            borderColor="#CFD1D4"
            borderStyle="dashed"
            borderRadius="$lg"
            borderWidth={1}
          >
            <Center py="$4">
              <Plus size={48} color="#CFD1D4" />
            </Center>
          </Pressable>
        </VStack>
      </ScrollView>
    </AppScreenTemplate>
  );
}
