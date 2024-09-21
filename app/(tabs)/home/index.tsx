import AppScreenTemplate from "@/components/AppScreenTemplate";
import AppFab from "@/components/AppFab";
import DeleteModal from "@/components/DeleteModal";
import GetIcon from "@/components/GetIcon";
import HomeCard from "@/components/HomeCard";
import { Event, Item, Organizer } from "@/context/UserContext";
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
  const { user, deleteEvent, deleteItem } = useUserContext();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<number | null>(null);
  const [itemToDelete, setItemToDelete] = useState<{
    organizerId: number;
    itemId: number;
  } | null>(null);

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

  const getOldItems = (
    organizers: Organizer[]
  ): { item: Item; organizerId: number }[] => {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const oldItems: { item: Item; organizerId: number }[] = [];

    organizers.forEach((organizer) => {
      const filteredItems = organizer.items.filter((item) => {
        const itemDate = parseDate(item.creationDate);
        return itemDate <= sixMonthsAgo;
      });

      filteredItems.forEach((item) => {
        oldItems.push({ item, organizerId: organizer.id });
      });
    });

    return oldItems;
  };

  const upcomingEvents = getUpcomingEvents(user.events);
  const oldItems = getOldItems(user.organizers);

  const handleDeleteEvent = () => {
    if (eventToDelete !== null) {
      deleteEvent(eventToDelete);
      setShowDeleteModal(false);
      setEventToDelete(null);
    }
  };

  const handleDeleteItem = () => {
    if (itemToDelete !== null) {
      deleteItem(itemToDelete.organizerId, itemToDelete.itemId);
      setShowDeleteModal(false);
      setItemToDelete(null);
    }
  };

  return (
    <AppScreenTemplate title={`Olá, ${user.name}`}>
      <ScrollView>
        <VStack space="4xl" pt="$6" pb="$8">
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
                            uri: organizer.image,
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

          <HomeCard description="Itens parados">
            <VStack space="md">
              {oldItems.length > 0 ? (
                oldItems.map(({ item, organizerId }) => (
                  <Box
                    key={item.id}
                    m="$2"
                    p="$4"
                    bg="$white"
                    borderColor="#CFD1D4"
                    borderWidth={1}
                    borderRadius="$lg"
                  >
                    <HStack justifyContent="space-between" alignItems="center">
                      <HStack space="md" alignItems="center">
                        <Image
                          size="sm"
                          source={{ uri: item.image }}
                          alt={item.name}
                        />

                        <VStack space="xs">
                          <Text fontWeight="$bold" fontSize="$lg">
                            {item.name}
                          </Text>

                          <Text
                            fontWeight="$light"
                            fontSize="$sm"
                            color="#525252"
                          >
                            Criado em {item.creationDate}
                          </Text>
                        </VStack>
                      </HStack>

                      <Pressable
                        onPress={() => {
                          setItemToDelete({ organizerId, itemId: item.id });
                          setShowDeleteModal(true);
                        }}
                      >
                        <Trash size={20} color="#000000" />
                      </Pressable>
                    </HStack>
                  </Box>
                ))
              ) : (
                <Box my="$8" alignItems="center">
                  <Text fontSize="$2xl">Nenhum item antigo encontrado</Text>
                </Box>
              )}
            </VStack>
          </HomeCard>
        </VStack>
      </ScrollView>

      <DeleteModal
        name={eventToDelete ? "evento" : "item"}
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        onDelete={eventToDelete ? handleDeleteEvent : handleDeleteItem}
      />

      <AppFab />
    </AppScreenTemplate>
  );
}
