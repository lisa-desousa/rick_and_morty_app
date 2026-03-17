import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FavouritesProvider } from "@/context/FavouritesContext";

export default function RootLayout() {
  return (
    <FavouritesProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="details/[id]" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </FavouritesProvider>
  );
}
