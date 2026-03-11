import { SimpleCharacter } from "@/types/SimpleCharacterType";

//data.next är url till nästa sida!!!!!!
//data.results visar endast första 20st
//lägg page som ${} i slutet av url

export async function fetchAllCharacters() {
  const res = await fetch(`https://rickandmortyapi.com/api/character`);

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  const json = await res.json();

  return json.results.map((c: SimpleCharacter) => ({
    id: c.id,
    name: c.name,
    image: c.image,
  }));
}
