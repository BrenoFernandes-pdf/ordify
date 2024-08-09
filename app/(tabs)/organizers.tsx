import OrganizerCard from "@/components/OrganizerCard";
import {
  Avatar,
  AvatarFallbackText,
  Box,
  Card,
  Heading,
  HStack,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Plus } from "lucide-react-native";

export default function Organizers() {
  const organizers = [
    {
      id: 1,
      imagePath:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "Nome do organizador",
      description: "Lorem ipsum",
    },
  ];

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
            <OrganizerCard
              key={organizer.id}
              imagePath={organizer.imagePath}
              name={organizer.name}
              description={organizer.description}
            />
          ))}

          <Pressable>
            <Card
              size="md"
              mx="$4"
              variant="outline"
              justifyContent="center"
              alignItems="center"
              borderColor="#CFD1D4"
              borderStyle="dashed"
            >
              <Plus size={48} color="#CFD1D4" />
            </Card>
          </Pressable>
        </VStack>
      </ScrollView>
    </Box>
  );
}
