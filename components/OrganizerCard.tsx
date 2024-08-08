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
  name: string;
  description: string;
};

export default function OrganizersCard({
  imagePath,
  name,
  description,
}: Props) {
  return (
    <Pressable>
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
            <Pressable>
              <Icon as={StarIcon} size="xl" />
            </Pressable>
          </Box>
        </HStack>
      </Card>
    </Pressable>
  );
}
