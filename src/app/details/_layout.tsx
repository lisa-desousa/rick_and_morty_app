import { Stack } from "expo-router";
import BackButton from "@/features/detailsView/BackButton";
import { useRouter } from "expo-router";

export default function StackLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          title: "",
          headerLeft: () => <BackButton onPress={() => router.back()} />,
        }}
      />
    </Stack>
  );
}
