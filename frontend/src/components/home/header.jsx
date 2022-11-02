import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SearchBar } from './searchbar';

export const HeaderHome=()=> {
    const [delivery,setDelivery] = React.useState(true);
    const [pickup,setPickup] = React.useState(false);
  return (
    <>
    <View style={styles.container}>
    <TouchableOpacity onPress={()=>{setDelivery(true);setPickup(false)}}>
    <View style={[styles.container1,delivery?{backgroundColor:"black",}:{backgroundColor:"white"}]}>
    <Text style={[styles.text,delivery?{color:"white",}:{color:"black"}]}>Delivery</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{setDelivery(false);setPickup(!pickup)}}>
    <View style={[styles.container2,pickup?{backgroundColor:"black",}:{backgroundColor:"white"}]}>
    <Text style={[styles.text,pickup?{color:"white",}:{color:"black"}]}>Pickup</Text>
    </View>
    </TouchableOpacity>
    </View>
    <SearchBar/>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        marginVertical:10,
    },
    container1:{
        width:85,
        height:30,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        margin:8,
    },
    container2:{
        backgroundColor:"black",
        width:85,
        height:30,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        margin:8,
    },
    text:{
        
        fontSize:15,
        fontWeight:"800",
    }
})