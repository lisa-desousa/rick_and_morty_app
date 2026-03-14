import { StyleSheet, View, Text } from "react-native";
import Grid from "@/features/listView/Grid";
import { useRouter } from "expo-router";
import { useAllCharacters } from "@/hooks/useAllCharacters";
import { useFavourites } from "@/context/FavouritesContext";

export default function Favourites() {
  const router = useRouter();
  const characters = useAllCharacters();
  const { favourites } = useFavourites();

  if (characters.status === "loading") return <Text>Loading...</Text>;
  if (characters.status === "error")
    return <Text>{characters.error.message}</Text>;

  const favCharacters = characters.data.filter((character) =>
    favourites.includes(character.id),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favourite Characters</Text>
      <Grid
        characters={favCharacters}
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
  header: {
    textAlign: "center",
    fontSize: 32,
    marginTop: 10,
  },
});
