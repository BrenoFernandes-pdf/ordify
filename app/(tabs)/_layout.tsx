import { Tabs } from "expo-router";
import { Home, Package, CalendarCheck, User } from "lucide-react-native";
import { View } from "react-native";

function TabBarIcon({ name, focused }: { name: any; focused: boolean }) {
  const IconComponent = name;

  return (
    <View>
      {focused ? (
        <IconComponent color="#4C1D95" size={30} />
      ) : (
        <IconComponent color="#979A9E" size={30} />
      )}
    </View>
  );
}

export default function AppLayout() {
  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={Home} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="organizers"
        options={{
          title: "Organizadores",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={Package} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="homeAssistant/index"
        options={{
          title: "Assistente Doméstico",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={CalendarCheck} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={User} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
