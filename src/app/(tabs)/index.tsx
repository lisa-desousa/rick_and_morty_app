import { StyleSheet, View, Text } from "react-native";
import Grid from "@/features/listView/Grid";
import { useRouter } from "expo-router";
import { useAllCharacters } from "@/hooks/useAllCharacters";

//prio:
//favoriter(globalt state, async storage)
//pagination
//sökfunktion
//fixa alla småkomponenter: backbtn, loading, error, ikoner för tabs...

//... vi får se om det blir mer
//mappa ut episoder som karaktärer är med i i detailssection
//liknande flöden för locations och episodes
//kunna länka mellan details-sidor
//generera random karaktär

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
            pathname: "/details/[id]",
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
