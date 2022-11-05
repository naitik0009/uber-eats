import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
export const BottomNavbar = ()=>{
    return (
        <View style={styles.container}>
            <Text></Text>
        <View style={styles.iconContainer}>
            <Icon name="home" text="Home"/>
            <Text style={styles.text}>Home</Text>
        </View>
        <View style={styles.iconContainer}>
        <Icon name="search" text="Browse"/>
            <Text style={styles.text}>Home</Text>
        </View>
        <View style={styles.iconContainer}>
        <Icon name="shopping-bag" text="Grocery"/>
            <Text style={styles.text}>Home</Text>
        </View>
        <View style={styles.iconContainer}>
        <Icon name="receipt" text="Orders"/>
            <Text style={styles.text}>Home</Text>
        </View>
        
        <View style={styles.iconContainer}>
        <Icon name="user" text="Account"/>
            <Text style={styles.text}>Home</Text>
        </View>
        <Text></Text>
        </View>
    )
} 

const Icon = (props)=>{
    return (
        <>
        <FontAwesome5
        name = {props.name}
        size={25}
        style={styles.icon}
        />
        <Text style={styles.text}>{props.text}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        height:"8%",
        marginBottom:5,
        width:"100%",
        resizeMode:"contain",
        backgroundColor:"white"
    },
    icon:{
        marginTop:3,
        marginBottom:3,
        alignSelf:"center"
    },
    iconContainer : {
        flexDirection:"column",
    },
    text:{
        color:"grey"
    }
});