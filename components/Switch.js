import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  Switch,
} from "react-native";

import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={setNumber}
          placeholder="+91-XXXXXXXXXX"
          // secureTextEntry
          keyboardType="numeric"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.input, styles.multilineText]}
          value={message}
          onChangeText={setMessage}
          multiline
          placeholder="message"
        />
        <Text style={styles.text}>My number is {number}</Text>
        <Text style={styles.text}>My message is {message}</Text>
      </View>
      <View style={styles.darkModeContainer}>
        <Text style={styles.darkMode}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setDarkMode((previous) => !previous)}
          trackColor={{ false: "blue", true: "red" }}
          thumbColor="orange"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
  },
  darkModeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "lightyellow",
    padding: 20,
  },
  input: {
    height: 40,
    padding: 5,
    margin: 15,
    borderWidth: 1,
  },
  multilineText: {
    height: 100,
    textAlignVertical: "top",
  },
  text: {
    margin: 15,
    padding: 5,
    fontWeight: "bold",
  },
});
