import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { readFavs, setFavs } from "../services/FavouritesStorage";

// 1. Context typ
type FavouritesContextType = {
  favourites: number[];
  toggleFavourite: (id: number) => void;
  isFavourite: (id: number) => boolean;
};

// 2. Initiera context med default värden
const FavouritesContext = createContext<FavouritesContextType>({
  favourites: [],
  toggleFavourite: () => {},
  isFavourite: () => false,
});

// 3. Skapa context provider - här bor globalt state
export function FavouritesProvider({ children }: { children: ReactNode }) {
  const [favourites, setFavourites] = useState<number[]>([]);

  // Hämta favs från storage vid render och uppdatera state
  useEffect(() => {
    readFavs().then(setFavourites);
  }, []);

  // uppdatera storage vid ändring av favourites
  useEffect(() => {
    setFavs(favourites);
  }, [favourites]);

  // Lägg till eller ta bort en favorit
  function toggleFavourite(id: number) {
    setFavourites((prev) => {
      if (prev.includes(id)) {
        // ta bort id
        return prev.filter((favId) => favId !== id);
      } else {
        // lägg till id
        return [...prev, id];
      }
    });
  }

  // Kolla om ett id är favorit
  function isFavourite(id: number) {
    //den här funktionen returnerar boolean automatiskt
    return favourites.includes(id);
  }

  // Denna provider wrappar hela appen i root layout
  return (
    <FavouritesContext.Provider
      value={{ favourites, toggleFavourite, isFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

// 4. Custom hook för att använda context i komponenter
export function useFavourites() {
  return useContext(FavouritesContext);
}
