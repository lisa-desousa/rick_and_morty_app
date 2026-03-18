import { TextInput } from "react-native";
import { StyleSheet } from "react-native";

type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchInput({ value, onChangeText }: InputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Type here..."
      value={value}
      onChangeText={onChangeText}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 6,
    width: 250,
    paddingHorizontal: 6,
  },
});
