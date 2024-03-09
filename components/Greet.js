import { View, Text, StyleSheet } from "react-native";

export default function Greet({name}){
    return(
        <View style={[styles.bgColor,styles.boxType,styles.boxShadow,styles.boxShadow,styles.androidBoxShadow]}>
            <Text>Hello, {name}!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bgColor :{
        backgroundColor:"lightblue"
    },
    boxType:{
        height:250,
        width:250,
        padding:20,
        marginVertical:20
    },
    boxShadow:{
        shadowColor:"#333333",
        shadowOffset:{
            width:10,
            height:10
        },
        shadowOpacity:0.2,
        shadowRadius:20
    },
    androidBoxShadow:{
        elevation:10,
    }
})