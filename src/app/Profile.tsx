import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";



export default function Profile () {
    return(
<View className="flex-1 bg-gray-700">
    <Image
    source={require("@/assets")}
        className="w-full h-52"
        />
</View>


    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})