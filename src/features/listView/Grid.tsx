import { ScrollView, StyleSheet } from "react-native";
import { SimpleCharacter } from "@/types/SimpleCharacterType";
import Card from "./Card";

type GridProps = {
  characters: SimpleCharacter[];
  onCardPress?: (char: SimpleCharacter) => void;
};

export default function Grid({ characters, onCardPress }: GridProps) {
  return (
    //byt till flatlist?
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
