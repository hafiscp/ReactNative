import { View, Text, StyleSheet, StatusBar, Button } from "react-native";

export default function SettingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setting Screen</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.jumpTo("Dashboard")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5e5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
