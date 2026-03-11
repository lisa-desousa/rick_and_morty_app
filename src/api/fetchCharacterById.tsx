import { Character } from "@/types/CharacterType";

export async function fetchCharacterById(id: number) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  const json = await res.json();
  return json as Character;
}
