import Grid from "@/features/listView/Grid";
import { useRouter } from "expo-router";
import { useFavourites } from "@/context/FavouritesContext";
import { useCharactersById } from "@/hooks/useCharactersById";
import { Text, View } from "react-native";
import { ActivityIndicator } from "react-native";

export default function Favourites() {
  const router = useRouter();
  const { favourites } = useFavourites();
  const { data, loading, error } = useCharactersById(favourites);

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={{ backgroundColor: "#64db49", flex: 1 }}>
      {data && data.length > 0 ? ( //data är inte null och inte heller tom array
        <Grid
          characters={data}
          onCardPress={(item) =>
            router.push({
              pathname: "/details/[id]",
              params: { id: item.id },
            })
          }
        />
      ) : (
        <Text style={{ textAlign: "center", marginTop: 30 }}>
          Your favourites will show up here!
        </Text>
      )}
    </View>
  );
}
