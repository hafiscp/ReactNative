import { View, Text, StyleSheet, Platform, Image } from "react-native";

export default function PokemonCardLayout({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  return (
    <View style={styles.card}>
      <Text>{name}</Text>
      <Text>{hp}</Text>
      <View>
        <Image
          source={image}
          style={{ marginTop: 10, marginBottom: 10, height: 300, width: 300 }}
        />
      </View>
      <View>
        <Text>Type : {type}</Text>
        <Text>Moves : {moves.join(",")}</Text>
        <Text>Weaknesses : {weaknesses.join(",")}</Text>
      </View>

      {/* <Text style={styles.text}>{Platform.OS}</Text> */}
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
