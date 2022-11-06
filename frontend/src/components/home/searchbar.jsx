import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Icon } from '@rneui/themed'

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete placeholder='search' query={{key:"AIzaSyAGCyoPpvB2jJfpcSXSHUsygeb8IG8xXJg"}}
      onPress={(data,details=null)=>{
        console.log(data.description)
      }}
      styles={
    {
        textInput:{
            backgroundColor:"#eee",
            borderRadius:20,
            marginTop:7,
            fontWeight:"700",
        },
        textInputContainer:{
            backgroundColor:"#eee",
            borderRadius:50,
            alignItems:"center",
            flexDirection:"row",
            
        },
    }
      }
      renderLeftButton={()=>{
        return (
            <View style={styles.icon}>
                <Icon  name="location-sharp" type="ionicon" />
            </View>
        )
      }}
      renderRightButton={()=>{
        return (
            <View style={styles.searchIcon}>
                <Icon style={{marginRight:6}} type='antdesign' name="clockcircle" size={11} />
                <Text>search</Text>
            </View>
        )
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:15,
        flexDirection:"row",
        alignItems:"center",
    },
    icon:{marginLeft:10},
    searchIcon:{
        flexDirection:"row",
        marginRight:8,
        backgroundColor:"white",
        alignItems:"center",
        borderRadius:30,
        justifyContent:"center",
        padding:9,
    }
})