import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}

export default function AppLayout() {
  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="organizers"
        options={{
          title: "Organizadores",
          tabBarIcon: ({ color }) => <TabBarIcon name="star-o" color={color} />,
        }}
      />

      <Tabs.Screen
        name="homeAssistant/index"
        options={{
          title: "Assistente Doméstico",
          tabBarIcon: ({ color }) => <TabBarIcon name="star-o" color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <TabBarIcon name="star-o" color={color} />,
        }}
      />
    </Tabs>
  );
}
