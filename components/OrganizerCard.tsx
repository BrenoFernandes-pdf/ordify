import {
  Box,
  Card,
  HStack,
  Icon,
  Image,
  Pressable,
  StarIcon,
  Text,
  VStack,
} from "@gluestack-ui/themed";

type Props = {
  imagePath: string;
  organizerName: string;
  organizerDescription: string;
};

export default function OrganizersCard({
  imagePath,
  organizerName,
  organizerDescription,
}: Props) {
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
            size="md"
            source={{
              uri: imagePath,
            }}
            alt="Foto do organizador"
          />

          <VStack space="xs">
            <Text fontWeight="$bold" fontSize="$2xl">
              {organizerName}
            </Text>

            <Text>{organizerDescription}</Text>
          </VStack>
        </HStack>

        <Box>
          <Pressable>
            <Icon as={StarIcon} size="xl" />
          </Pressable>
        </Box>
      </HStack>
    </Card>
  );
}
