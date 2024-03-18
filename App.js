import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";

import pokemonList from "./data.json";

export default function App() {
  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          {pokemonList.map((pokemon) => {
            return (
              <View key={pokemon.id} style={styles.list}>
                <Text style={styles.listText}>{pokemon.type}</Text>
                <Text style={styles.listText}>{pokemon.name}</Text>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    justifyContent: "center",
    margin: 20,
  },
  list: {
    flexDirection: "column",
    justifyContent: "space-around",
    borderWidth: 2,
    padding: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor:"lightblue"
  },
  listText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  mainContainer: {
    backgroundColor: "#f5f5f5",
  },
});
