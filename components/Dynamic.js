import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function Dynamic({ children, style }) {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({ window });
    });
    return () => subscription?.remove();
  });

  const { window } = dimensions;
  const windowWidth = window.width;
  const windowHeight = window.height;

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
      <Text style={{ fontSize: windowWidth > 400 ? 30 : 24 }}>Hello</Text>
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
