import React from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

export default function MoreAbout({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>More About Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
  },
});
