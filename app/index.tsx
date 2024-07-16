import { StatusBar, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-wite">
      <Text className="text-4xl font-bold font-pblack">Hello World</Text>
      <StatusBar />
    </View>
  );
}
