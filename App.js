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
  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <PokemonCardLayout {...charmanderData} />
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
