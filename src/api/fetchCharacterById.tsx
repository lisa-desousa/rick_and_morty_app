import { Character } from "@/types/CharacterType";

export async function fetchCharacterById(id: number) {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();
    console.log("Success: ", data);
    return data as Character;
  } catch (error) {
    console.log("Failed: ", error);
    throw new Error("Failed to fetch character by ID");
  }
}
