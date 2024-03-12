import React from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions, SafeAreaView } from "react-native";
import SafeView from "./components/SafeView";
import Dynamic from "./components/Dynamic";
import Box from "./components/Box";
import MobileLearn from "./components/MobileLearn";
import Greet from "./components/Greet";
import DarkMode from "./components/DarkMode";

export default function App() {
  return (
    // <ScrollView>
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* <MobileLearn /> */}
        {/* <DarkMode /> */}
        {/* <Greet name="Hafis" /> */}
        {/* <Greet name="My Friend" /> */}
        {/* <Box style={{ backgroundColor: "red" }}> Hello1 </Box> */}
        {/* <Dynamic style={{ backgroundColor: "yellow" }} /> */}
        <SafeView />
      </View>
    </SafeAreaView>
    // </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    // flexWrap:"wrap",
    // flexDirection:"row",
    // gap:10,
    // rowGap:10,
    // columnGap:10,
    // marginTop: 50,
    // borderWidth: 5,
    // borderColor: "black",
  },
  safeContainer:{
    flex:1,
    backgroundColor:"plum",
  }
});
