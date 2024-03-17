import { View, Text, StyleSheet, Platform, Image } from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

export default function PokemonCardLayout({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}> {name}</Text>
        <Text style={styles.hp}>
          <Text style={styles.heart}> ❤️ </Text>
          {hp}
        </Text>
      </View>

      <View>
        <Image source={image} resizeMode="contain" style={styles.image} />
      </View>

      <View style={styles.typeContainer}>
        <View style={[styles.typeBadge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves : {moves.join(", ")}</Text>
      </View>

      <View style={styles.weaknessesContainer}>
        <Text style={styles.weaknessesText}>
          Weaknesses : {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
    margin: 20,
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
  heart: {
    fontSize: 17,
  },
  hp: {
    fontSize: 18,
    fontWeight: "600",
  },
  image: {
    marginTop: 10,
    marginBottom: 20,
    width: "100%",
    height: 250,
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
  typeContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  typeBadge: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 4,
    borderRadius: 20,
  },
  typeEmoji: {
    fontSize: 18,
  },
  typeText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  movesContainer: {
    marginBottom: 10,
  },
  movesText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  weaknessesContainer: {
    marginBottom: 10,
  },
  weaknessesText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
