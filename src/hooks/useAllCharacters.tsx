import { fetchAllCharacters } from "@/api/fetchAllCharacters";
import { useEffect, useState } from "react";
import { SimpleCharacter } from "@/types/SimpleCharacterType";

//du kan skicka funktoinen som en prop så slipper vi 2 olika filer
//du kan också göra ett state för varje grej: loading, error och data, så kan du importera de i komponenten och göra conditional rendering iställer för character.status === osv...
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
