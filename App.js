import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import PokemonCardLayout from "./components/PokemonCard/PokemonCardLayout";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCardLayout />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightyellow",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
