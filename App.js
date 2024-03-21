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
  const [message, setMessage] = useState("");
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
