import {
  Box,
  Card,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Star } from "lucide-react-native";
import { Organizer } from "@/context/UserContext";
import { useUserContext } from "@/context/UserContext";

type Props = {
  organizer: Organizer;
};

export default function OrganizerCard({ organizer }: Props) {
  const { updateOrganizer } = useUserContext();

  const toggleFavorite = () => {
    const updatedOrganizer = {
      ...organizer,
      isFavorited: !organizer.isFavorited,
    };

    updateOrganizer(updatedOrganizer);
  };

  return (
    <Card
      size="md"
      variant="filled"
      bg="$white"
      shadowColor="$black"
      elevation="$1"
      mx="$4"
    >
      <HStack justifyContent="space-between">
        <HStack space="md">
          <Image
            size="sm"
            source={{
              uri: organizer.image,
            }}
            alt="Foto do organizador"
          />

          <VStack space="xs">
            <Text fontWeight="$bold" fontSize="$lg">
              {organizer.name}
            </Text>

            <Text fontWeight="$light" fontSize="$sm">
              {organizer.description}
            </Text>
          </VStack>
        </HStack>

        <Box>
          <Pressable onPress={toggleFavorite}>
            <Star
              color={organizer.isFavorited ? "#4C1D95" : "black"}
              fill={organizer.isFavorited ? "#4C1D95" : "none"}
              strokeWidth={1.25}
            />
          </Pressable>
        </Box>
      </HStack>
    </Card>
  );
}
