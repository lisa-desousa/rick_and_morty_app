import { Pressable, Text } from "react-native";

type Props = {
  handleSearch: () => void;
};

export default function SearchBtn({ handleSearch }: Props) {
  return (
    <Pressable onPress={handleSearch}>
      <Text>Search now!</Text>
    </Pressable>
  );
}
