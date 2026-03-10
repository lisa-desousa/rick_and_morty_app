import { fetchAllCharacters } from "@/api/fetchAllCharacters";
import { useEffect, useState } from "react";
import { Character } from "@/types/CharacterType";

export function useAllCharacters() {
  const [state, setState] = useState<
    | { status: "loading" }
    | { status: "error"; error: Error }
    | { status: "success"; data: Character[] }
  >({ status: "loading" });

  useEffect(() => {
    fetchAllCharacters()
      .then((data) => setState({ status: "success", data }))
      .catch((error) => setState({ status: "error", error }));
  }, []);

  return state;
}
