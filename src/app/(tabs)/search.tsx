import { Text, ScrollView } from "react-native";
import { useSearchResults } from "@/hooks/useSearchResults";
import { useState } from "react";
import FilterPicker from "@/features/search/FilterPicker";
import SearchBtn from "@/features/search/SearchBtn";
import SearchInput from "@/features/search/SearchInput";
import { SimpleCharacter } from "@/types/SimpleCharacterType";
import Grid from "@/features/listView/Grid";
import { useRouter } from "expo-router";

export default function Search() {
  const router = useRouter();
  const [filter, setFilter] = useState<string>("name");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SimpleCharacter[]>([]);
  const { data } = useSearchResults({ query, filter });

  const handleSearch = () => {
    setResults(data);
  };

  return (
    <ScrollView>
      <Text>Pick a search category and type your search below.</Text>
      <FilterPicker selected={filter} onSelect={(key) => setFilter(key)} />
      <Text>Filter: {filter}</Text>
      <SearchInput value={query} onChangeText={(text) => setQuery(text)} />

      {query && filter && <SearchBtn handleSearch={handleSearch} />}
      {results && (
        <Grid
          characters={results}
          onCardPress={(item) =>
            router.push({
              pathname: "/details/[id]",
              params: { id: item.id },
            })
          }
        />
      )}
    </ScrollView>
  );
}
