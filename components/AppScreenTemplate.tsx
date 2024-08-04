import MainGradient from "../assets/Icons/MainGradient";
import { Box, Heading, Text, ScrollView } from "@gluestack-ui/themed";
import { ReactElement } from "react";

const AppScreenTemplate = ({
  screenDescription,
  children,
}: {
  screenDescription: string;
  children: ReactElement;
}) => {
  return (
    <Box flex={1} bg="$black">
      <Box position="absolute" h="$full" w="$full">
        <MainGradient />
      </Box>

      <Box h="$1/3" w="$full" pl="$5" pb="$8" justifyContent="flex-end">
        <Heading color="white" size="5xl">
          Ordify
        </Heading>

        <Text color="#C4B5FD" size="xl">
          {screenDescription}
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
};

export default AppScreenTemplate;
