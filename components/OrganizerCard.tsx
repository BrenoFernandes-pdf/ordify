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
import { useState } from "react";

type Props = {
  imagePath: string;
  name: string;
  description: string;
};

export default function OrganizerCard({ imagePath, name, description }: Props) {
  const [isFavorited, setIsFavorited] = useState(false);

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
              uri: imagePath,
            }}
            alt="Foto do organizador"
          />

          <VStack space="xs">
            <Text fontWeight="$bold" fontSize="$lg">
              {name}
            </Text>

            <Text fontWeight="$light" fontSize="$sm">
              {description}
            </Text>
          </VStack>
        </HStack>

        <Box>
          <Pressable
            onPress={() => {
              setIsFavorited(!isFavorited);
            }}
          >
            <Star
              color={isFavorited ? "#4C1D95" : "black"}
              fill={isFavorited ? "#4C1D95" : "none"}
              strokeWidth={1.25}
            />
          </Pressable>
        </Box>
      </HStack>
    </Card>
  );
}
