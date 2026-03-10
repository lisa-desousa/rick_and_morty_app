import { fetchCharacterById } from "@/api/fetchCharacterById";
import { useEffect, useState } from "react";
import { Character } from "@/types/CharacterType";

export function useCharacterById(id: number) {
  const [state, setState] = useState<
    | { status: "loading" }
    | { status: "error"; error: Error }
    | { status: "success"; data: Character }
  >({ status: "loading" });

  useEffect(() => {
    fetchCharacterById(id)
      .then((data) => setState({ status: "success", data }))
      .catch((error) => setState({ status: "error", error }));
  }, [id]);

  return state;
}
