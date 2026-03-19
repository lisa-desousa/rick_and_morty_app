import { SimpleCharacter } from "@/types/SimpleCharacterType";
import { Character } from "@/types/CharacterType";
import { Info } from "@/types/InfoType";

type FetchProps = {
  query: string;
  filter: string;
};

type ApiResponse = {
  info: Info;
  results: Character[];
};

export async function fetchSearchResults({ query, filter }: FetchProps) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?${filter}=${query}`,
  );

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  const json: ApiResponse = await res.json();

  const info: Info = json.info;

  const characters: SimpleCharacter[] = json.results.map((c) => ({
    id: c.id,
    name: c.name,
    image: c.image,
  }));

  return { characters, info };
}
