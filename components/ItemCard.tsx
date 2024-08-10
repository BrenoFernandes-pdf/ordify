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
  name: string;
  quantity: number;
};

export default function ItemCard({ name, quantity }: Props) {
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
              uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            }}
            alt="Foto do organizador"
          />

          <VStack space="xs">
            <Text fontWeight="$bold" fontSize="$lg">
              {name}
            </Text>

            <Text fontWeight="$light" fontSize="$sm">
              {quantity}
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
