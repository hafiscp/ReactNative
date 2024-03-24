import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="About" onPress={() => navigation.navigate("About",{
        name:"Hafis from another Universe"
      })} />
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
    color: "blue",
    fontSize: 18,
    fontWeight: "bold",
  },
});
