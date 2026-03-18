import { Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";

type BtnProps = {
  handleSearch: () => void;
  disabled: boolean;
};

export default function SearchBtn({ handleSearch, disabled }: BtnProps) {
  return (
    <Pressable
      onPress={handleSearch}
      style={[styles.button, disabled && styles.buttonDisabled]}
    >
      <Text style={styles.label}>Search now!</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    width: 150,
    borderRadius: 8,
    backgroundColor: "#64db49",
  },

  buttonDisabled: {
    backgroundColor: "#a3a3a3",
  },

  label: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
});
