// Paste this code for proper functioning

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import PokemonCardLayout from "./components/PokemonCard/PokemonCardLayout";
import { charmanderData, bulbasaurData } from "./src/data/charmanderData.js";

export default function App() {
  const pokemonData = [charmanderData, bulbasaurData];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemonData}
        renderItem={({ item }) => <PokemonCardLayout {...item} />}
        keyExtractor={(item, index) => index.toString()}
      />
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
