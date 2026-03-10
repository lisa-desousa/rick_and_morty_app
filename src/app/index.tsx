import { StyleSheet, View, Text } from "react-native";
import Grid from "@/features/listView/Grid";
import { useRouter } from "expo-router";
import { useAllCharacters } from "@/hooks/useAllCharacters";

export default function App() {
  const router = useRouter();
  const characters = useAllCharacters();

  if (characters.status === "loading") return <Text>Loading...</Text>;
  if (characters.status === "error")
    return <Text>{characters.error.message}</Text>;

  return (
    <View style={styles.container}>
      <Grid
        characters={characters.data}
        onCardPress={(character) =>
          router.push({
            pathname: "/details",
            params: { id: character.id },
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#64db49",
    alignItems: "center",
    justifyContent: "center",
  },
});
