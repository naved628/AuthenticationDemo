import { SafeAreaView, StyleSheet, View } from "react-native";
import Navigation from "./src/Components/navigation";

export default function App() {
  return (
      <Navigation />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});
