import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function Dynamic({ children, style }) {
  return (
    <View style={[styles.bg, style]}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
}

const boxWidth = Dimensions.get("window").width
const boxHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  bg: {
    height: boxHeight > 400 ? "40%" : "200",
    width: boxWidth > 200 ? "75%": "200",
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize:20
  }
});
