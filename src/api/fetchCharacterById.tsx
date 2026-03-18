import { Character } from "@/types/CharacterType";

export async function fetchCharacterById(
  id: number | number[],
): Promise<Character[]> {
  // Om det är en array -> gör om till "1,2,3"
  const idParam = Array.isArray(id) ? id.join(",") : id;

  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${idParam}`,
  );

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  const json = await res.json();

  // API returnerar objekt för "1" men array för "1,2"
  return Array.isArray(json) ? json : [json];
}
