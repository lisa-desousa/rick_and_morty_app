import { Text, View, Image, StyleSheet } from "react-native";
import { Character } from "@/types/CharacterType";

type DetailsSectionProps = {
  item: Character;
};

export default function DetailsSection({ item }: DetailsSectionProps) {
  return (
    <View>
      <Text style={styles.name}>{item.name}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={{ fontSize: 18 }}>Status: {item.status}</Text>
        <Text style={{ fontSize: 18 }}>Gender: {item.gender}</Text>
        <Text style={{ fontSize: 18 }}>Species: {item.species}</Text>
        <Text style={{ fontSize: 18 }}>Last seen: {item.location.name}</Text>
        {item.type && <Text style={{ fontSize: 18 }}>Type: {item.type}</Text>}

        {/* här kan man göra en komponent som loopar över url och hämtar info? */}
        {/* <Text style={{ fontSize: 18 }}>Appears in: {item.episode}</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    borderRadius: 5,
    alignSelf: "center",
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 15,
    marginTop: 30,
    textAlign: "center",
    color: "#004100",
  },
  detailsContainer: {
    marginTop: 20,
    gap: 8,
    backgroundColor: "#fcfff5",
    padding: 16,
    borderRadius: 5,
    alignSelf: "center",
    minWidth: 250,
  },
});
