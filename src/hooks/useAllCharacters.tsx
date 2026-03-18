import { fetchAllCharacters } from "@/api/fetchAllCharacters";
import { useEffect, useState } from "react";
import { SimpleCharacter } from "@/types/SimpleCharacterType";

export function useAllCharacters() {
  const [data, setData] = useState<SimpleCharacter[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadMore = () => {
    if (loading || !hasMore) return;

    setLoading(true);

    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const getCharacters = async () => {
      setError(null);
      try {
        const { characters, info } = await fetchAllCharacters(page);

        //kombinera 2 arrayer till 1
        setData((prev) => [...prev, ...characters]);

        if (info.next === null) {
          setHasMore(false);
        }
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

    getCharacters();
  }, [page]);

  return { data, loading, page, hasMore, loadMore, error };
}
