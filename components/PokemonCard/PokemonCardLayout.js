import { View, Text, StyleSheet, Platform } from "react-native";

export default function PokemonCardLayout() {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{Platform.OS}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: "white",
    margin: 25,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 0.5,
      },
    }),
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    ...Platform.select({
      ios: {
        color: "blue",
      },
      android: {
        color: "green",
      },
    }),
  },
});
