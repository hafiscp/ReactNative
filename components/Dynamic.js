import { useEffect, useState } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

export default function Dynamic({ children, style }) {

    const windowWidth = useWindowDimensions().width
    const windowHeight = useWindowDimensions().height

  return (
    <View
      style={[
        styles.bg,
        style,
        {
          height: windowHeight > 400 ? "50%" : 200,
          width: windowWidth > 900 ? "60%" : 350,
        },
      ]}
    >
      <Text style={{ fontSize: windowWidth > 900 ? 40 : 24 }}>Hello</Text>
    </View>
  );
}

// const boxWidth = Dimensions.get("window").width;
// const boxHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  bg: {
    justifyContent: "center",
    alignItems: "center",
  },
});
