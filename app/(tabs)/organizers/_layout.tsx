import { Stack } from "expo-router";

export default function OrganizersLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Organizadores" }} />
      <Stack.Screen
        name="[id]"
        options={{ title: "Informações do organizador" }}
      />
      <Stack.Screen
        name="createOrganizer"
        options={{ title: "Criar organizador" }}
      />
    </Stack>
  );
}
