import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import React from 'react'

export const Categories = ()=> {
    var i = 1;
    var j =10;
    const images = [
        {
            image: require("./images/shopping-bag.png"),
            name:"Pick-up",
        },
        {
            image: require("./images/soft-drink.png"),
            name:"Soft Drinks",
        },
        {
            image: require("./images/bread.png"),
            name:"Bakery Items",
        },
        {
            image: require("./images/fast-food.png"),
            name:"Fast Food",
        },
        {
            image: require("./images/deals.png"),
            name:"Deals",
        },
        {
            image:require("./images/coffee.png"),
            name:"Coffee & Tea",
        },
        {
            image:require("./images/desserts.png"),
            name:"Deserts",
        }
    ];
  return (
    
   <View>
     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     {images.map((image,index)=>(
        <View key={++j} style={styles.container}>
            <Image key={j++} style={styles.image} source={image.image}/>
            <Text key={i++} style={styles.text}>{image.name}</Text>
        </View>
     ))} 
    </ScrollView>
   </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        margin:10,
    },
    image:{
        width:50,
        height:50,
        resizeMode:"contain",
    },
    text:{
        fontSize:13,
        fontWeight:"700",
    }
})