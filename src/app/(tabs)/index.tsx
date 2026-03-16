import { Text } from "react-native";
import Grid from "@/features/listView/Grid";
import { useRouter } from "expo-router";
import { useAllCharacters } from "@/hooks/useAllCharacters";
import { ActivityIndicator } from "react-native";

//prio:
//flatlist komponent med massa props eller duplicerad kod?
//sökfunktion
//navigering funkar ej - går alltid till index inte bakåt
//fixa alla småkomponenter: backbtn, loading, error, ikoner för tabs...
//fixa katastrofal styling
//ej resetta scroll position
//refaktorisera - använd inte två hooks för loading state??

//... vi får se om det blir mer
//mappa ut episoder som karaktärer är med i i detailssection
//liknande flöden för locations och episodes
//kunna länka mellan details-sidor
//generera random karaktär

export default function App() {
  const router = useRouter();
  const { data, loading, hasMore, loadMore, error } = useAllCharacters();

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
