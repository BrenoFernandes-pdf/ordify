import {
  Avatar,
  AvatarFallbackText,
  Box,
  HStack,
  Pressable,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useUserContext } from "@/context/UserContext";
import { Pencil } from "lucide-react-native";

type Props = {
  title: string;
  extended?: boolean;
};

export default function AppHeader({ title, extended }: Props) {
  const { user } = useUserContext();

  return (
    <>
      {extended ? (
        <Box h="$1/3" w="$full" bg="#4C1D95">
          <Box h="$1/4" w="$full" pl="$6" justifyContent="flex-end">
            <Text fontSize="$2xl" color="$white">
              {title}
            </Text>
          </Box>

          <Box h="$3/4" w="$full">
            <VStack space="xs" alignItems="center">
              <Avatar bgColor="$amber600" borderRadius="$full" size="xl">
                <AvatarFallbackText>{user.name}</AvatarFallbackText>
              </Avatar>

              <HStack space="sm" alignItems="center">
                <Text fontSize="$4xl" color="$white">
                  {user.name}
                </Text>

                <Pressable pt="$2">
                  <Pencil color="#FFFFFF" size={20} />
                </Pressable>
              </HStack>

              <Text fontSize="$lg" color="#C4B5FD">
                {user.email}
              </Text>
            </VStack>
          </Box>
        </Box>
      ) : (
        <Box w="$full" bg="#4C1D95" px="$6" pt="$8" pb="$4">
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize="$2xl" color="$white">
              {title}
            </Text>

            <Avatar bgColor="$amber600" borderRadius="$full">
              <AvatarFallbackText>{user.name}</AvatarFallbackText>
            </Avatar>
          </HStack>
        </Box>
      )}
    </>
  );
}
