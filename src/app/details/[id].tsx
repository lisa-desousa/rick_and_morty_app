import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import DetailsSection from "@/features/detailsView/DetailsSection";
import { useCharacterById } from "@/hooks/useCharacterById";
import { FetchWrapper } from "@/shared_components/FetchWrapper";

export default function Details() {
  const { id } = useLocalSearchParams();
  const num = Number(id);
  const { data, loading, error } = useCharacterById(num);

  if (Number.isNaN(num)) return <Text>Id is not a number! How silly!</Text>;

  return (
    <View style={styles.container}>
      <FetchWrapper loading={loading} error={error}>
        {data ? (
          <DetailsSection item={data} />
        ) : (
          <Text>Character not found.</Text>
        )}
      </FetchWrapper>
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
