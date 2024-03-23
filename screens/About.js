import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

export default function About({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Button
        title="More About"
        onPress={() => navigation.navigate("MoreAbout")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
  },
});
