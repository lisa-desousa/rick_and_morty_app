import { Text, Pressable, View, StyleSheet } from "react-native";

const filters = [
  { key: "name", label: "Name" },
  { key: "status", label: "Status" },
  { key: "species", label: "Species" },
  { key: "type", label: "Type" },
  { key: "gender", label: "Gender" },
];

type FilterProps = {
  selected: string;
  onSelect: (key: string) => void;
};

export default function FilterPicker({ selected, onSelect }: FilterProps) {
  return (
    <View style={styles.container}>
      {filters.map((filter) => {
        const isActive = selected === filter.key; //"är detta det filter som är valt i parent?"

        return (
          <Pressable
            key={filter.key}
            onPress={() => onSelect(filter.key)}
            style={[styles.button, isActive && styles.buttonActive]}
          >
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {filter.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    backgroundColor: "#ddd",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonActive: {
    backgroundColor: "#64db49",
  },
  label: {
    color: "#333",
  },
  labelActive: {
    color: "white",
    fontWeight: "600",
  },
});
