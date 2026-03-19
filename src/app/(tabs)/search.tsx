import { Text, View, StyleSheet } from "react-native";
import { useSearchResults } from "@/hooks/useSearchResults";
import { useState } from "react";
import FilterPicker from "@/features/search/FilterPicker";
import SearchBtn from "@/features/search/SearchBtn";
import SearchInput from "@/features/search/SearchInput";
import Grid from "@/features/listView/Grid";
import { useRouter } from "expo-router";
import { FetchWrapper } from "@/shared_components/FetchWrapper";

export default function Search() {
  const router = useRouter();

  const [filter, setFilter] = useState<string>("name");
  const [query, setQuery] = useState("");

  // sökning ska inte triggas förrens man trycker på sök-knappen. eftersom hooken har filter och query som dependency-arrayer så kommer de triggas så fort värdet uppdateras om vi inte matar in de först när användaren klickar
  const [submittedFilter, setSubmittedFilter] = useState<string>("name");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const { data, loading, error } = useSearchResults({
    query: submittedQuery,
    filter: submittedFilter,
  });

  const handleSearch = () => {
    setSubmittedFilter(filter);
    setSubmittedQuery(query);

    setQuery(""); // Rensa input men låt filter ligga kvar
  };

  return (
    <>
      {/* sök-rutan */}
      <View style={styles.searchContainer}>
        <Text style={styles.description}>
          Pick a search category and type your search below.
        </Text>

        <View>
          <FilterPicker selected={filter} onSelect={(key) => setFilter(key)} />
        </View>

        <View>
          <SearchInput value={query} onChangeText={(text) => setQuery(text)} />
        </View>

        <View>
          <SearchBtn
            handleSearch={handleSearch}
            disabled={query.length === 0}
          />
        </View>
      </View>

      {/* resultat */}
      <FetchWrapper loading={loading} error={error}>
        <Grid
          characters={data!}
          onCardPress={(item) =>
            router.push({
              pathname: "/details/[id]",
              params: { id: item.id },
            })
          }
        />
      </FetchWrapper>
    </>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    color: "#333",
  },
  searchContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
    marginVertical: 20,
  },
});
