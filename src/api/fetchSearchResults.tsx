import { Character } from "@/types/CharacterType";
import { SimpleCharacter } from "@/types/SimpleCharacterType";

type Props = {
  query: string;
  filter: string;
};
export async function fetchSearchResults({ query, filter }: Props) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?${filter}=${query}`,
  );

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  const json = await res.json();

  const info = json.info;

  const characters = json.results.map((c: SimpleCharacter) => ({
    id: c.id,
    name: c.name,
    image: c.image,
  }));

  return { characters, info };
}
