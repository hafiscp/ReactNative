import { Pressable, Text, StyleSheet, View } from "react-native";

export default function PlatformSpecificButton({ title, onPress }) {
  return (
    <View>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    width: 100,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
});
