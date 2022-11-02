import { SafeAreaView,View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { HeaderHome } from '../components/home/header'

export const Homescreen = ()=> {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}> 
      <HeaderHome/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
    flex:1,
        backgroundColor:"#eee",
    },
    container1:{
        backgroundColor:"white",
        padding:15,
    }
})