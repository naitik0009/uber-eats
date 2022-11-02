import { Dimensions,Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Badge, Icon } from '@rneui/base';
const width = Dimensions.get("screen").width;
export const RestaurantItems = ()=> {
    const [enable,setEnable] = React.useState(false);
  return (
    <View style={styles.container}>
   <View style={styles.imageContainer}>
   <Image style={styles.image} source={require("./images/food.jpg") }/>
   <View style={{position:"absolute",zIndex:1000,right:10}}>
   <TouchableOpacity onPress={()=>{setEnable(!enable)}}>
   <Icon type='ionicon' name={enable?"heart":"heart-outline"}  size={30} color={enable?"red":"white"}/>
   </TouchableOpacity>
   </View>
   </View>
    <View style={styles.container1}>
    <View>
        <Text style={{fontWeight:"800"}}>Farmhouse kitchen thai cuisin </Text>
        <Text>35 - 45 . min</Text>
    </View>
    <Badge value={4} textStyle={{color:"black"}}   badgeStyle={styles.badge}/>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    margin:10,
    borderRadius:20,
    justifyContent:"center",
    backgroundColor:"white",
},
container1:{flexDirection:"row",justifyContent:"space-between",marginLeft:10,marginRight:10},
imageContainer:{
    alignItems:"center",
},
image:{
    width:"100%",
    height:200,
    resizeMode:"contain"
},
badge:{
    backgroundColor:"#eee",
    width:40,
    height:40,
    borderRadius:50,
}
})