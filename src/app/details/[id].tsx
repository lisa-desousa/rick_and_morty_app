import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import DetailsSection from "@/features/detailsView/DetailsSection";
import { useCharacterById } from "@/hooks/useCharacterById";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Details() {
  const { id } = useLocalSearchParams();
  const num = Number(id); //verifiera på nåt sett att detta inte är NaN ?
  const character = useCharacterById(num);

  if (character.status === "loading") return <Text>Loading...</Text>;
  if (character.status === "error")
    return <Text>{character.error.message}</Text>;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <DetailsSection item={character.data} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c6ff53",
    alignItems: "center",
  },
});
