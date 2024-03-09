import { View, StyleSheet, Text } from "react-native";

export default function Box({ children, style }) {
  return (
    <View style={[styles.boxContainer, style]}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor:"#fff",
    padding:20,
  },
  boxText: {
    color: "white",
    fontWeight: "bold",
    textAlign:"center",
    fontSize:24
  },
});
