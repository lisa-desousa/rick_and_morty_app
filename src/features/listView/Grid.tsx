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
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ marginVertical: 15 }}
        data={characters}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        // varför error här?
        renderItem={({ item }) => {
          return <Card character={item} onPress={() => onCardPress(item)} />;
        }}
        numColumns={characters.length > 1 ? 2 : 1}
        // fix!!
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
