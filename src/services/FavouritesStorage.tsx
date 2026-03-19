import AsyncStorage from "@react-native-async-storage/async-storage";

export const readFavs = async (): Promise<number[]> => {
  try {
    const storedFavs = await AsyncStorage.getItem("favourites");

    if (storedFavs !== null) {
      //json parse (det är en string i storage)
      const jsonFavs = JSON.parse(storedFavs);
      return jsonFavs;
    }
    return [];
  } catch (e) {
    console.log("failed" + e);
    return [];
  }
};

export const setFavs = async (favourites: number[]) => {
  try {
    await AsyncStorage.setItem("favourites", JSON.stringify(favourites));
  } catch (e) {
    console.log("failed" + e);
  }
};
