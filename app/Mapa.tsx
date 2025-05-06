import React, { useEffect, useState } from "react";
import { PermissionsAndroid, Platform, StyleSheet, Text, View } from "react-native";
import Map, { Callout, Marker } from "react-native-maps";

const coordinate = {
    latitude: -23.707653465126587,
    longitude: -46.6100632254698
}
const DISTANCIA_MAXIMA = 5000;
const locais = [
{  latitude: -23.707653465126587, longitude: -46.6100632254698, endereco: "Travessa Zaire, SP", nome: "Ponto de Descarte e Coleta"},
{  latitude: -23.707653465126587, longitude: -46.6100632254698, endereco: "Travessa Zaire, SP", nome: "Ponto de Descarte e Coleta"},
{  latitude: -23.707653465126587, longitude: -46.6100632254698, endereco: "Travessa Zaire, SP", nome: "Ponto de Descarte e Coleta"},
{  latitude: -23.707653465126587, longitude: -46.6100632254698, endereco: "Travessa Zaire, SP", nome: "Ponto de Descarte e Coleta"},

];


    

export default function App () {


    const [userLocation, setUserLocation] = useState(null);
    const [mostrarPonto, setMostrarPonto] = useState(false);
    const [distancia, setDistancia] = useState(null);

    useEffect(() => {
        async function getPermissionAndLocation() {
            if (Platform.OS === "android") {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
              );
              if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                console.warn("Permissão de localização negada");
                return;
              }
            }
        }
    })
    
    return(
<View style={styles.container}>
    <Map
     style={StyleSheet.absoluteFill} 
    initialRegion={{
       latitude: coordinate.latitude,
       longitude: coordinate.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
    }}
    >
        <Marker coordinate={coordinate} >
                <Callout style={styles.callou}>
                    <View>
                        <Text style={styles.title}>
                            Ponto de Descarte e Coleta
                        </Text>
                        <Text style={styles.addres}>Travessa Zaire, SP</Text>
                    </View>
                </Callout>
            </Marker>
    </Map>
</View>
)
}

const styles = StyleSheet.create({
container:{
    flex:1
},
callou: {
    padding: 12
},
title:{
    fontWeight: "bold",
    fontSize: 18
},
addres:{
    fontSize: 14
}
})