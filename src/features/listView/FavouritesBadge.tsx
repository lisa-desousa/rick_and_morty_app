import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";
import { useFavourites } from "@/context/FavouritesContext";

type BadgeProps = {
  id: number;
};

export default function FavouritesBadge({ id }: BadgeProps) {
  const { isFavourite, toggleFavourite } = useFavourites();

  const active = isFavourite(id);

  return (
    <Pressable onPress={() => toggleFavourite(id)}>
      <Ionicons name="heart" size={32} color={active ? "#ff4f87" : "#a2a2a2"} />
    </Pressable>
  );
}
