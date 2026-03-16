import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import DetailsSection from "@/features/detailsView/DetailsSection";
import { useCharacterById } from "@/hooks/useCharacterById";

export default function Details() {
  const { id } = useLocalSearchParams();
  const num = Number(id); //verifiera på nåt sett att detta inte är NaN ?
  const { data, loading, error } = useCharacterById(num);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error.message}</Text>;
  if (!data) return <Text>Ingen data :pPPppP</Text>;

  return (
    <View style={styles.container}>
      <DetailsSection item={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c6ff53",
    alignItems: "center",
  },
});
