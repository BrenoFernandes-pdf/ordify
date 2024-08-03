import { Heading, Center, Divider, Text } from "@gluestack-ui/themed";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function balbla() {
  return (
    <Center flex={1}>
      <Heading bold size="2xl">
        Expo V3 - Tab 1
      </Heading>
      <Divider marginVertical={30} width="80%" />
      <Text p="$4">Example below to use gluestack-ui components.</Text>
    </Center>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}
