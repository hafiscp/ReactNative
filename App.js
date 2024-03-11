import React from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import Dynamic from "./components/Dynamic";
import Box from "./components/Box";
import MobileLearn from "./components/MobileLearn";
import Greet from "./components/Greet";
import DarkMode from "./components/DarkMode";

export default function App() {
  return (
    // <ScrollView>
    <View style={styles.container}>
      {/* <MobileLearn /> */}
      {/* <DarkMode /> */}
      {/* <Greet name="Hafis" /> */}
      {/* <Greet name="My Friend" /> */}
      {/* <Box style={{ backgroundColor: "red" }}> Hello1 </Box> */}
      <Dynamic style={{ backgroundColor: "yellow" }} />
    </View>
    // </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // flexWrap:"wrap",
    // flexDirection:"row",
    // gap:10,
    // rowGap:10,
    // columnGap:10,
    // marginTop: 50,
    // borderWidth: 5,
    // borderColor: "black",
  },
});
