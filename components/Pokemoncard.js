import { StyleSheet, View, Text, Platform } from "react-native";
import React from "react";

export default function Pokemoncard() {
  return (
    <View style={styles.card}>
      <Text>Pokemon Card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderwidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowoffset: { width: 2, height: 2 },
        shadowcolor: "#333",
        shadowOpocity: 0.3,
        shadowradius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
