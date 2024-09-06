import AppScreenTemplate from "@/components/AppScreenTemplate";
import DeleteModal from "@/components/DeleteModal";
import GetIcon from "@/components/GetIcon";
import HomeCard from "@/components/HomeCard";
import { Event } from "@/context/UserContext";
import { useUserContext } from "@/context/UserContext";
import {
  Box,
  Image,
  HStack,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { Href, useRouter } from "expo-router";
import { Trash } from "lucide-react-native";

export default function Home() {
  const router = useRouter();
  const { user, deleteEvent } = useUserContext();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<number | null>(null);

  const favoriteOrganizers = user.organizers.filter(
    (organizer) => organizer.isFavorited
  );

  const isEventUpcoming = (dateString: string): boolean => {
    const today = new Date();
    const eventDate = parseDate(dateString);

    return eventDate.getTime() <= today.getTime() + 7 * 24 * 60 * 60 * 1000;
  };

  const parseDate = (dateString: string): Date => {
    const [day, month, year] = dateString.split("/").map(Number);

    return new Date(year, month - 1, day);
  };

  const getUpcomingEvents = (events: Event[]): Event[] => {
    return events.filter((event) => isEventUpcoming(event.date));
  };

  const upcomingEvents = getUpcomingEvents(user.events);

  const handleDelete = () => {
    if (eventToDelete !== null) {
      deleteEvent(eventToDelete);
      setShowDeleteModal(false);
      setEventToDelete(null);
    }
  };

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

          <HomeCard description="Próximos eventos">
            <VStack space="md">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => {
                  const eventDate = parseDate(event.date);
                  const today = new Date();
                  const daysDifference = Math.ceil(
                    (eventDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
                  );
                  const isExpired = daysDifference < 0;

                  return (
                    <Box
                      key={event.id}
                      m="$2"
                      p="$4"
                      bg="$white"
                      borderColor={isExpired ? "#FF0000" : "#CFD1D4"}
                      borderWidth={1}
                      borderRadius="$lg"
                    >
                      <HStack
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <HStack space="md" alignItems="center">
                          <GetIcon
                            type={event.eventType}
                            size={24}
                            color={isExpired ? "#FF0000" : "#000000"}
                          />

                          <VStack space="xs">
                            <Text
                              fontWeight="$bold"
                              fontSize="$lg"
                              color={isExpired ? "#FF0000" : "#525252"}
                            >
                              {event.name}
                            </Text>

                            <Text
                              fontWeight="$light"
                              fontSize="$sm"
                              color={isExpired ? "#FF0000" : "#525252"}
                            >
                              {daysDifference >= 0
                                ? `Evento ocorre em ${daysDifference} dias`
                                : `Evento terminou há ${Math.abs(
                                    daysDifference
                                  )} dias`}
                            </Text>
                          </VStack>
                        </HStack>

                        <Pressable
                          onPress={() => {
                            setEventToDelete(event.id);
                            setShowDeleteModal(true);
                          }}
                        >
                          <Trash
                            size={20}
                            color={isExpired ? "#FF0000" : "#000000"}
                          />
                        </Pressable>
                      </HStack>
                    </Box>
                  );
                })
              ) : (
                <Box my="$8" alignItems="center">
                  <Text fontSize="$2xl">Nenhum evento próximo</Text>
                </Box>
              )}
            </VStack>
          </HomeCard>
        </VStack>
      </ScrollView>

      <DeleteModal
        name="evento"
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        onDelete={handleDelete}
      />
    </AppScreenTemplate>
  );
}
