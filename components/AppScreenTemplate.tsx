import { Box, Heading, Text, ScrollView } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { ReactElement } from "react";

type Props = {
  description: string;
  children: ReactElement;
};

export default function AppScreenTemplate({ description, children }: Props) {
  return (
    <Box flex={1} bg="$black">
      <Box position="absolute" h="$full" w="$full">
        <LinearGradient
          colors={["#4C1D95", "#321362", "#18092F"]}
          start={{ x: 0, y: 0.4 }}
          end={{ x: 1, y: 0.7 }}
          style={{ flex: 1 }}
        />
      </Box>

      <Box h="$1/3" w="$full" pl="$5" pb="$8" justifyContent="flex-end">
        <Heading color="white" size="5xl">
          Ordify
        </Heading>

        <Text color="#C4B5FD" size="xl">
          {description}
        </Text>
      </Box>

      <Box
        bg="white"
        h="$2/3"
        w="$full"
        pt="$6"
        px="$6"
        borderTopLeftRadius="$3xl"
        borderTopRightRadius="$3xl"
      >
        <ScrollView>{children}</ScrollView>
      </Box>
    </Box>
  );
}
