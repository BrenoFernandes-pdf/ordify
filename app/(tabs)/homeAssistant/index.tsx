import AppScreenTemplate from "@/components/AppScreenTemplate";
import CreateEventModal from "@/components/CreateEventModal";
import EventCard from "@/components/EventCard";
import { useUserContext } from "@/context/UserContext";
import {
  Center,
  Heading,
  Pressable,
  ScrollView,
  VStack,
} from "@gluestack-ui/themed";
import { Plus } from "lucide-react-native";
import { useState } from "react";

export default function HomeAssistant() {
  const { user, deleteEvent } = useUserContext();
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <AppScreenTemplate title="Assistente">
      <ScrollView>
        <Heading ml="$6" mt="$6" mb="$2" size="xl" fontWeight="$bold">
          Eventos criados
        </Heading>

        <VStack space="4xl" pt="$2" pb="$6">
          {user?.events?.map((event) => (
            <Pressable key={event.id}>
              <EventCard
                id={event.id}
                name={event.name}
                description={event.description}
                eventType={event.eventType}
                date={event.date}
                onDelete={() => deleteEvent(event.id)}
              />
            </Pressable>
          ))}

          <Pressable
            onPress={() => setShowCreateModal(true)}
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

        <CreateEventModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
        />
      </ScrollView>
    </AppScreenTemplate>
  );
}
