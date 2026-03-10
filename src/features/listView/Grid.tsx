import { ScrollView, StyleSheet } from "react-native";
import { Character } from "@/types/CharacterType";
import Card from "./Card";

type GridProps = {
  characters: Character[];
  onCardPress?: (char: Character) => void;
};

export default function Grid({ characters, onCardPress }: GridProps) {
  return (
    <ScrollView contentContainerStyle={styles.grid}>
      {characters.map((char) => (
        <Card
          key={char.id}
          character={char}
          onPress={() => onCardPress?.(char)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  grid: {
    gap: 12,
    padding: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
