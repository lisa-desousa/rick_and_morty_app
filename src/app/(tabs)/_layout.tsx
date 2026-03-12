import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favourites",
          headerShown: false,
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
