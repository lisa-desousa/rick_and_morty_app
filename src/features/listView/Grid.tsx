import { StyleSheet, FlatList, View } from "react-native";
import { SimpleCharacter } from "@/types/SimpleCharacterType";
import Card from "./Card";

type GridProps = {
  characters: SimpleCharacter[];
  onCardPress: (character: SimpleCharacter) => void;
  footer?: React.ReactElement;
  onEndReached?: () => void;
};

export default function Grid({
  characters,
  onCardPress,
  footer,
  onEndReached,
}: GridProps) {
  if (characters.length === 0) return null;

  //error säger: encountered two children with the same key
  // den verkar köra fetch alldeles för mkt när man scrollar

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ marginVertical: 15 }}
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return <Card character={item} onPress={() => onCardPress(item)} />;
        }}
        numColumns={2}
        ListFooterComponent={footer}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
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
