import OrganizerCard from "@/components/OrganizerCard";
import {
  Text,
  Heading,
  Box,
  VStack,
  HStack,
  ScrollView,
  Avatar,
  AvatarFallbackText,
  ArrowLeftIcon,
  Card,
  Pressable,
  Icon,
} from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { Plus } from "lucide-react-native";

export default function Organizers() {
  return (
    <Box flex={1} bg="$white">
      <Box w="$full" bg="#4C1D95" px="$6" pt="$8" pb="$4">
        <HStack justifyContent="space-between" alignItems="center">
          <HStack space="xs" alignItems="center">
            <Link href="/(tabs)">
              <Icon as={ArrowLeftIcon} size="xl" color="$white" />
            </Link>

            <Text fontSize="$4xl" color="$white">
              Organizadores
            </Text>
          </HStack>

          <Avatar bgColor="$amber600" borderRadius="$full">
            <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
          </Avatar>
        </HStack>
      </Box>

      <Heading ml="$6" mt="$6" mb="$2" size="2xl" fontWeight="$bold">
        Organizadores criados
      </Heading>

      <ScrollView>
        <VStack space="4xl" pt="$2" pb="$6">
          <OrganizerCard
            imagePath="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            organizerName="Nome do organizador"
            organizerDescription="Lorem ipsum"
          />

          <OrganizerCard
            imagePath="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            organizerName="Nome do organizador"
            organizerDescription="Lorem ipsum"
          />

          <OrganizerCard
            imagePath="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            organizerName="Nome do organizador"
            organizerDescription="Lorem ipsum"
          />

          <OrganizerCard
            imagePath="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            organizerName="Nome do organizador"
            organizerDescription="Lorem ipsum"
          />

          <OrganizerCard
            imagePath="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            organizerName="Nome do organizador"
            organizerDescription="Lorem ipsum"
          />

          <Pressable>
            <Card
              size="md"
              mx="$4"
              variant="outline"
              justifyContent="center"
              alignItems="center"
              borderColor="#E2E4E8"
              borderStyle="dashed"
            >
              <Plus size={48} color="#E2E4E8" />
            </Card>
          </Pressable>
        </VStack>
      </ScrollView>
    </Box>
  );
}
