import { useEffect, useState } from "react";
import { SimpleCharacter } from "@/types/SimpleCharacterType";
import { fetchSearchResults } from "@/api/fetchSearchResults";

type Props = {
  query: string;
  filter: string;
};

export function useSearchResults({ query, filter }: Props) {
  const [data, setData] = useState<SimpleCharacter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getSearchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const { characters } = await fetchSearchResults({ query, filter });

        setData(characters);
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
        } else {
          setError(new Error("Unknown error"));
        }
      } finally {
        setLoading(false);
      }
    };

    getSearchResults();
  }, [query, filter]);

  return { data, loading, error };
}
