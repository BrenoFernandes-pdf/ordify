import OrganizerCard from "@/components/OrganizerCard";
import React, { useState } from "react";
import {
  Avatar,
  AvatarFallbackText,
  Box,
  Center,
  Heading,
  HStack,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Plus } from "lucide-react-native";
import { Href, useRouter } from "expo-router";

export default function Organizers() {
  // const [id, setId] = useState(1);
  const [organizers, setOrganizers] = useState([
    {
      id: 1,
      imagePath:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "Nome do organizador",
      description: "Lorem ipsum",
    },
    {
      id: 2,
      imagePath:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "Nome do organizador",
      description: "Lorem ipsum",
    },
  ]);

  const router = useRouter();

  return (
    <Box flex={1} bg="$white">
      <Box w="$full" bg="#4C1D95" px="$6" pt="$8" pb="$4">
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="$2xl" color="$white">
            Organizadores
          </Text>

          <Avatar bgColor="$amber600" borderRadius="$full">
            <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
          </Avatar>
        </HStack>
      </Box>

      <Heading ml="$6" mt="$6" mb="$2" size="xl" fontWeight="$bold">
        Organizadores criados
      </Heading>

      <ScrollView>
        <VStack space="4xl" pt="$2" pb="$6">
          {organizers.map((organizer) => (
            <Pressable
              onPress={() => {
                router.push("/organizers/organizersInfo" as Href);
              }}
              key={organizer.id}
            >
              <OrganizerCard
                imagePath={organizer.imagePath}
                name={organizer.name}
                description={organizer.description}
              />
            </Pressable>
          ))}

          <Pressable
            onPress={() => router.push("/organizers/createOrganizers" as Href)}
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
    </Box>
  );
}
