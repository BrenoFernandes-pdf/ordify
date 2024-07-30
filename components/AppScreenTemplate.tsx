import { Box, Heading, Text, ScrollView } from "@gluestack-ui/themed";
import MainGradient from "../assets/Icons/MainGradient";

const AppScreenTemplate = ({
  screenDescription,
  children,
}: {
  screenDescription: string;
  children: React.ReactElement<typeof Box>;
}) => {
  return (
    <Box flex={1} bg="$black">
      <Box position="absolute" h="$full" w="$full">
        <MainGradient />
      </Box>

      <Box
        h="$1/3"
        w="$full"
        p="$4"
        justifyContent="flex-end"
        alignItems="flex-start"
      >
        <Heading color="white" size="5xl">
          Ordify
        </Heading>
        <Text color="#C4B5FD" size="3xl">
          {screenDescription}
        </Text>
      </Box>

      <Box
        bg="white"
        h="$2/3"
        w="$full"
        borderTopLeftRadius="$3xl"
        borderTopRightRadius="$3xl"
      >
        <ScrollView p="$4">{children}</ScrollView>
      </Box>
    </Box>
  );
};

export default AppScreenTemplate;
