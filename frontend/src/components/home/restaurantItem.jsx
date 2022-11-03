import { Dimensions,Image,FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Badge, Icon } from '@rneui/base';
import { RestaurantData } from '../../services/home/restaurant';
const width = Dimensions.get("screen").width;
const FOURSQUARE_API = "fsq3bBBLxnl5Wvix1CSkJTGjwKlV91NPyYwNlT/7duhXU9Y=";
const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";
export const RestaurantItems = ()=> {
    const [enable,setEnable] = React.useState(false);
    const [restaurantData,setData] = React.useState(RestaurantData);
    const [city,setCity] = React.useState("San Francisco");
    const GetRestaurantFromYelp = ()=>{
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        const apiOptions = {
            headers:{
                Authorization : `Bearer ${YELP_API_KEY}`,
            },
        };
        return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) =>
          setData(
            json.businesses.filter((business) =>
              business.transactions.includes(activeTab.toLowerCase())
            )
          )
        );
    };
    React.useEffect(()=>{GetRestaurantFromYelp()},[city,enable]);
  return (
    <FlatList
    data={restaurantData}
    renderItem={({item,index})=>(
        <View key={item.key} style={styles.container}>
   <View key={item.key} style={styles.imageContainer}>
   <Image key={item.key} style={styles.image} source={{uri:item.image_url}}/>
   <View key={item.key} style={{position:"absolute",zIndex:1000,right:10,top:20}}>
   <TouchableOpacity key={item.key} onPress={()=>{setEnable(!enable)}}>
   <Icon type='ionicon' key={item.key} name={enable?"heart":"heart-outline"}  size={30} color={enable?"red":"white"}/>
   </TouchableOpacity>
   </View>
   </View>
    <View key={item.key} style={styles.container1}>
    <View key={item.key} >
        <Text key={item.key} style={{fontWeight:"800"}}>{item.name}</Text>
        <Text key={item.key}>35 - 45 . min</Text>
    </View>
    <Badge key={item.key} value={item.rating} textStyle={{color:"black"}}   badgeStyle={styles.badge}/>
    </View>
    </View>
    )}
    />
  )
}

const styles = StyleSheet.create({
container:{
    margin:10,
    borderRadius:20,
    justifyContent:"center",
    backgroundColor:"white",
},
container1:{flexDirection:"row",justifyContent:"space-between",marginLeft:10,marginRight:10,marginBottom:15},
imageContainer:{
    alignItems:"center",
    borderRadius:20,
},
image:{
    width:"100%",
    height:190,
    resizeMode:"contain"
},
badge:{
    backgroundColor:"#eee",
    width:40,
    height:40,
    borderRadius:50,
}
})