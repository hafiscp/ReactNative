import React from "react";
import { View, StyleSheet } from "react-native";
import MobileLearn from "./components/MobileLearn";
import Greet from "./components/Greet";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MobileLearn /> */}
      <Greet name="Hafis" />
      <Greet name="My Friend" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 40,
  },
});
