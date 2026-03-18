import Grid from "@/features/listView/Grid";
import { useRouter } from "expo-router";
import { useFavourites } from "@/context/FavouritesContext";
import { useCharacterById } from "@/hooks/useCharacterById";
import { Text, View } from "react-native";
import { ActivityIndicator } from "react-native";

export default function Favourites() {
  const router = useRouter();
  const { favourites } = useFavourites();
  const { data, loading, error } = useCharacterById(favourites);
  // hook funkar inte som jag vill här - när favourites är tom så kastar fetch ett fel och det är ju inte nödvändigtvis fel att listan är tom = blir fel i UI.
  //men det blir också fel att göra det t.ex. optional med en parameter i fetch eftersom att den används även för detaljsidan och där VILL jag att den kastar ett fel om inget ID finns
  //

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={{ backgroundColor: "#64db49", flex: 1 }}>
      {data && data.length > 0 ? (
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
