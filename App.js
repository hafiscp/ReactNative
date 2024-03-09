import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MobileLearn from "./components/MobileLearn";
import Greet from "./components/Greet";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MobileLearn /> */}
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Dark Mode , 
          <Text style={styles.darkModeBold}>
             in bold, and
            <Text style={styles.darkModeBoldItalic}> in Bold Italic
            </Text>
          </Text>
        </Text>
      </View>
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
  darkMode: {
    backgroundColor: "black",
  },
  darkModeText: {
    color: "white",
  },
  darkModeBold: {
    fontWeight: "bold",
  },
  darkModeBoldItalic: {
    fontStyle: "italic",
  },
});
