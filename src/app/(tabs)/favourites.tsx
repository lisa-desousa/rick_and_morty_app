import Grid from "@/features/listView/Grid";
import { useRouter } from "expo-router";
import { useFavourites } from "@/context/FavouritesContext";
import { useEffect, useState } from "react";
import { Character } from "@/types/CharacterType";
import { fetchCharacterById } from "@/api/fetchCharacterById";

export default function Favourites() {
  const router = useRouter();
  const { favourites } = useFavourites();
  const [favCharacters, setFavCharacters] = useState<Character[]>([]);

  //ett anrop istället för promise.all
  //id:n kan separeras med ,
  useEffect(() => {
    const loadFavorites = async () => {
      const data = await Promise.all(
        favourites.map((id) => fetchCharacterById(id)),
      );

      setFavCharacters(data);
    };

    loadFavorites();
  }, [favourites]);

  return (
    <Grid
      characters={favCharacters}
      onCardPress={(item) =>
        router.push({
          pathname: "/details/[id]",
          params: { id: item.id },
        })
      }
    />
  );
}
