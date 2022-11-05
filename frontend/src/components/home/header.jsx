import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useContext} from 'react'
import { SearchBar } from './searchbar';
import { StateContext } from '../../context/context.api';
export const HeaderHome=()=> {
    const {activeTab,setActiveTab} = useContext(StateContext);    
  return (
    <>
    <View style={styles.container}>
    <TouchableOpacity onPress={()=>{setActiveTab("Delivery")}}>
    <View style={[styles.container1,activeTab==="Delivery"?{backgroundColor:"black",}:{backgroundColor:"white"}]}>
    <Text style={[styles.text,activeTab==="Delivery"?{color:"white",}:{color:"black"}]}>Delivery</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{setActiveTab("Pickup");}}>
    <View style={[styles.container2,activeTab==="Pickup"?{backgroundColor:"black",}:{backgroundColor:"white"}]}>
    <Text style={[styles.text,activeTab==="Pickup"?{color:"white",}:{color:"black"}]}>Pickup</Text>
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