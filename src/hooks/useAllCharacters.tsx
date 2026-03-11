import { fetchAllCharacters } from "@/api/fetchAllCharacters";
import { useEffect, useState } from "react";
import { SimpleCharacter } from "@/types/SimpleCharacterType";

export function useAllCharacters() {
  const [state, setState] = useState<
    | { status: "loading" }
    | { status: "error"; error: Error }
    | { status: "success"; data: SimpleCharacter[] }
  >({ status: "loading" });

  useEffect(() => {
    fetchAllCharacters()
      .then((data) => setState({ status: "success", data }))
      .catch((error) => setState({ status: "error", error }));
  }, []);

  return state;
}
