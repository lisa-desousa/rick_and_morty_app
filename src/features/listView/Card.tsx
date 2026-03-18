import { Image, Pressable, StyleSheet, Text } from "react-native";
import { SimpleCharacter } from "@/types/SimpleCharacterType";
import FavouritesBadge from "../../shared_components/FavouritesBadge";

type CardProps = {
  character: SimpleCharacter;
  onPress: () => void; //ta bort optional?
};

export default function Card({ character, onPress }: CardProps) {
  return (
    <Pressable
      style={[
        styles.card,
        {
          backgroundColor: "#c6ff53",
        },
      ]}
      onPress={onPress}
    >
      <FavouritesBadge id={character.id} />
      <Text style={styles.name}>{character.name}</Text>
      <Image source={{ uri: character.image }} style={styles.image} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 20,
    width: 170,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 6,
    textAlign: "center",
    color: "#004100",
  },
});
