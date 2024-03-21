import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
} from "react-native";

import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");
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
        <Text style={styles.text}>My number is {number}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    padding: 5,
    margin: 15,
    borderWidth: 1,
  },
  text: {
    margin: 15,
    padding: 5,
    fontWeight: "bold",
  },
});
