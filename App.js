import React from "react";
import { View, StyleSheet, Text,ScrollView } from "react-native";
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
        <Box style={{backgroundColor:"blue"}}> Hello1 </Box>
        <Box style={{backgroundColor:"red"}}> Hello2 </Box>
        <Box style={{backgroundColor:"grey"}}> Hello3 </Box>
        <Box style={{backgroundColor:"green"}}> Hello4 </Box>
        <Box style={{backgroundColor:"purple"}}> Hello5 </Box>
        <Box style={{backgroundColor:"plum"}}> Hello6 </Box>
      </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height:250,
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexWrap:"wrap",
    flexDirection:"row",
    rowGap:10,
    columnGap:10,
    marginTop: 50,
    borderWidth:5,
    borderColor:"black"
  },
 
});
