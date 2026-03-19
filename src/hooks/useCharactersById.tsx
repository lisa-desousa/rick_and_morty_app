import { fetchCharacterById } from "@/api/fetchCharacterById";
import { useEffect, useState } from "react";
import { Character } from "@/types/CharacterType";

//TVÅ HOOKS:
//En för att hämta 1 karaktär, en för att hämta flera
//Detta för att undvika ful logik och "är det rätt datatyp?" i komponenterna
//(de använder samma fetch)
export function useCharactersById(ids: number[]) {
  const [data, setData] = useState<Character[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getCharacters = async () => {
      if (!ids || ids.length === 0) {
        //om man kör !id -> return så missar man att rensa sista karaktären när det bara finns en kvar
        setData([]); //detta nollställer vid det tillfället
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const result = await fetchCharacterById(ids);

        // OM det inte är en array:
        const characters = Array.isArray(result) ? result : [result];

        setData(characters);
      } catch (e) {
        setError(e instanceof Error ? e : new Error("Unknown error"));
      } finally {
        setLoading(false);
      }
    };

    getCharacters();
  }, [ids]);

  return { loading, error, data };
}
