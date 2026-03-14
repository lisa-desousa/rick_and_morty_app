import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type BackButtonProps = {
  onPress: () => void;
};

export default function BackButton({ onPress }: BackButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name="arrow-back-circle" size={40} color="#004100" />
    </Pressable>
  );
}
