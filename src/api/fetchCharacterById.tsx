import { Character } from "@/types/CharacterType";

export async function fetchCharacterById(
  id: number | number[],
): Promise<Character[] | Character> {
  // Om det är en array -> gör om till "1,2,3"
  const idParam = Array.isArray(id) ? id.join(",") : id;

  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${idParam}`,
  );

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  const json = await res.json();

  // Om en, returnera ett objekt
  if (!Array.isArray(json)) return json as Character;

  // Om flera, returnera array
  return json as Character[];
}
