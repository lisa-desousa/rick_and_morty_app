import { SafeAreaView } from "react-native-safe-area-context";
import { FavouritesProvider } from "@/context/FavouritesContext";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <FavouritesProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Slot />
      </SafeAreaView>
    </FavouritesProvider>
  );
}
