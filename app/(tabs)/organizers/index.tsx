import AppScreenTemplate from "@/components/AppScreenTemplate";
import OrganizerCard from "@/components/OrganizerCard";
import {
  Center,
  Heading,
  Pressable,
  ScrollView,
  VStack,
} from "@gluestack-ui/themed";
import { Plus } from "lucide-react-native";
import { Href, useRouter } from "expo-router";
import { useUser } from "@/context/UserContext";

export default function Organizers() {
  const router = useRouter();
  const { user } = useUser();

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
              <OrganizerCard
                imagePath="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                name={organizer.name}
                description={organizer.description}
              />
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
