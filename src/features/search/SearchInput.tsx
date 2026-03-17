import { TextInput } from "react-native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchInput({ value, onChangeText }: Props) {
  return (
    <TextInput
      placeholder="Type here..."
      value={value}
      onChangeText={onChangeText}
    ></TextInput>
  );
}
