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
  Image,
  KeyboardAvoidingView,
} from "react-native";

import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", username, password);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.formContainer}>
          <Image
            source={require("./assets/adaptive-icon.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Username</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          {errors.username ? (
            <Text style={styles.errorText}>{errors.username}</Text>
          ) : null}
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}
          <View style={styles.buttonView}>
            <Button title="Login" onPress={handleSubmit} />
          </View>
        </View>
      </KeyboardAvoidingView>
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
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  formContainer: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 0.5,
  },
  image: {
    alignSelf: "center",
    height: 200,
    width: 200,
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
