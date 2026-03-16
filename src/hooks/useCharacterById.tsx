import { fetchCharacterById } from "@/api/fetchCharacterById";
import { useEffect, useState } from "react";
import { Character } from "@/types/CharacterType";

export function useCharacterById(id: number) {
  // const [state, setState] = useState<
  //   | { status: "loading" }
  //   | { status: "error"; error: Error }
  //   | { status: "success"; data: Character }
  // >({ status: "loading" });

  const [data, setData] = useState<Character | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // fetchCharacterById(id)
    //   .then((data) => setState({ status: "success", data }))
    //   .catch((error) => setState({ status: "error", error }));
    const getCharacterById = async () => {
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

    getCharacterById();
  }, [id]);

  return { loading, error, data };
}
