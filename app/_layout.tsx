import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as SplashScreen from "expo-splash-screen";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { useColorScheme } from "react-native";
import { Stack } from "expo-router";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const colorScheme = useColorScheme();

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <GluestackUIProvider config={config}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen name="index" />
          {/* <Stack.Screen name="signIn" /> */}
          <Stack.Screen name="signUp" />
          <Stack.Screen name="forgotPassword" />
          <Stack.Screen name="createPassword" />
        </Stack>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
