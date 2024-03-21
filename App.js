import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  Switch,
  Button,
} from "react-native";

import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.text}>Username</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.buttonView}>
          <Button title="Login" onPress={() => console.log("Login")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "wheat",
    paddingTop: StatusBar.currentHeight,
    alignItems: "stretch",
    justifyContent: "center",
  },
  buttonView: {
    // flexDirection: "row",
    // justifyContent: "space-around",
    // alignItems: "center",
  },
  formContainer: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    shadowRadius:10,
    shadowOpacity: 0.1,
    elevation: 0.5,
  },
  text: {
    paddingVertical: 10,
    fontWeight: "bold",
  },
  textInput: {
    borderWidth: 1,
    height: 40,
    padding: 10,
    marginBottom: 15,
  },
});
