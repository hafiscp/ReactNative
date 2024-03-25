import { View, Text, StyleSheet, StatusBar, Button } from "react-native";

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Dashboard Screen</Text>
      <Button
        title="Head to Settings"
        onPress={() => {
          navigation.jumpTo("Settings");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4e6f4",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
