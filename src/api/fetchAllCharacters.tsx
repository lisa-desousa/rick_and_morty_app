import { Character } from "@/types/CharacterType";

//data.next är url till nästa sida!!!!!!
//data.results visar endast första 20st

//använda 1 funktion för att hämta namn, bild och url ( för flöde + sök?) och en annan för att hämta alla detaljer - så måste inte all data hämtas samtidigt?
export async function fetchAllCharacters() {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await res.json();
    console.log("Success: ", data);
    return data.results as Character[];
  } catch (error) {
    console.log("Failed: ", error);
    throw new Error("Failed to fetch characters");
  }
}
