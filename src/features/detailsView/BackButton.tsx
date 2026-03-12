import { Text, Pressable } from "react-native";

type BackButtonProps = {
  onPress: () => void;
};

export default function BackButton({ onPress }: BackButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Text>Go Back</Text>
    </Pressable>
  );
}
