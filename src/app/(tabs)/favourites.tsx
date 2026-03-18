import Grid from "@/features/listView/Grid";
import { useRouter } from "expo-router";
import { useFavourites } from "@/context/FavouritesContext";
import { useCharacterById } from "@/hooks/useCharacterById";
import { FetchWrapper } from "@/shared_components/FetchWrapper";
import { Text } from "react-native";

export default function Favourites() {
  const router = useRouter();
  const { favourites } = useFavourites();
  const { data, loading, error } = useCharacterById(favourites);

  return (
    <FetchWrapper loading={loading} error={error}>
      {data.length > 0 ? (
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
        <Text>Your favourites will show up here!</Text>
        // varför inte funka????????????????? :D
      )}
    </FetchWrapper>
  );
}
