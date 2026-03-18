import { fetchCharacterById } from "@/api/fetchCharacterById";
import { useEffect, useState } from "react";
import { Character } from "@/types/CharacterType";

export function useCharacterById(id: number | number[]) {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getCharacters = async () => {
      if (!id) return;

      setLoading(true);
      setError(null);
      try {
        const data = await fetchCharacterById(id);
        setData(data);
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
  }, [id]);

  return { loading, error, data };
}
