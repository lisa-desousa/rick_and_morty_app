import { Text, View, Image, StyleSheet } from "react-native";
import { Character } from "@/types/CharacterType";
import FavouritesBadge from "../../shared_components/FavouritesBadge";

type DetailsSectionProps = {
  item: Character;
};

export default function DetailsSection({ item }: DetailsSectionProps) {
  const details = [
    { label: "Status", value: item.status },
    { label: "Gender", value: item.gender },
    { label: "Species", value: item.species },
    { label: "Last seen", value: item.location.name },
    ...(item.type ? [{ label: "Type", value: item.type }] : []), // ?? kollar om type finns (vilket det inte alltid gör) och lägger då till den i details-arrayen
  ];

  return (
    <View>
      <Text style={styles.name}>{item.name}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        {details.map(({ label, value }) => (
          <Text key={label} style={styles.detailText}>
            {label}: {value}
          </Text>
        ))}
        <FavouritesBadge id={item.id} />
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
  detailText: {
    fontSize: 18,
  },
});
