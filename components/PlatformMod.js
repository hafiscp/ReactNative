import { Text, Platform, View, StyleSheet } from "react-native";
import PlatformSpecificButton from "./PlaformSpecificButton/PlatformSpecificButton";

export default function PlatformMod() {
  const deviceName = Platform.OS === "android" ? "Android" : "IOS";
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from {deviceName}</Text>
      <PlatformSpecificButton
        title="Button"
        onPress={() => alert("Pressed, right ?")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Platform.OS === "android" ? "green" : "wheat",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    color: Platform.OS === "android" ? "white" : "black",
  },
});
