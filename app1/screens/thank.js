import React, { Component } from 'react';
import {Text,View,Image, StyleSheet, TouchableOpacity,BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';;


 const Thank = () => {
   return (
     <>
    
    <View style ={styles.container}>
            <Image source={require('../asset/pic16.png')}Image style={styles.pic16}/>
            <Text style={{fontSize:40, top:180}}>Thank you </Text>
          
            </View>

   
            <View style={{
          backgroundColor:'#E3CEF6', 
        width:400,height:50,
        marginBottom:2,
        marginTop:10,
        flexDirection:'row',
        alignSelf:"center",
        alignItems:"center",
        top:2,}}>

        <TouchableOpacity
          onPress={() => navigation.navigate("Buy")}>
        <Icon name="retweet" size={30} style={{marginLeft:120}}/>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => BackHandler.exitApp()}>
        <Icon name="window-close" size={30} style={{marginLeft:100}}/>
        </TouchableOpacity>

           </View>

    </>

   );
 };

 const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        backgroundColor: "#009CA1",
        alignItems: "center",
        height : "100%",
    },
    pic16 : {
      width:'80%',
      height:230,
      top:120,
  
  },
    text: {
      width:"100%",
      height:100,
      top:400,

    },
 });


 export default Thank;