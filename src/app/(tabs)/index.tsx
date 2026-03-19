import { Text } from "react-native";
import Grid from "@/features/listView/Grid";
import { useRouter } from "expo-router";
import { useAllCharacters } from "@/hooks/useAllCharacters";
import { ActivityIndicator } from "react-native";

export default function App() {
  const router = useRouter();
  const { data, loading, hasMore, loadMore, error } = useAllCharacters();

  // här behövs inte fetch wrapper eftersom den har en egen footer och den laddar mer karaktärer dynamiskt
  const footer = (
    <>
      {loading && <ActivityIndicator />}
      {error && <Text>{error.message}</Text>}
      {!hasMore && <Text>That's All Folks!</Text>}
    </>
  );

  return (
    <Grid
      characters={data}
      onCardPress={(item) =>
        router.push({
          pathname: "/details/[id]",
          params: { id: item.id },
        })
      }
      onEndReached={loadMore}
      footer={footer}
    />
  );
}
