import React from 'react';
import {Text,View,Image,StyleSheet,TextInput,Button,TouchableOpacity} from 'react-native';

 const Select= () => {
   return (
     <>
     
          <View style ={styles.container}>
          <TextInput style={styles.TextInput1}placeholder="User name"/>
          <TextInput style={styles.TextInput2}placeholder="Item code"/>
          <TextInput style={styles.TextInput3}placeholder="Price"/>
          <TextInput style={styles.TextInput4}placeholder="Request"/>

          <TouchableOpacity style={styles.button}>

            <Text>Send</Text>
          </TouchableOpacity>
          
          

        </View>
        </>
   );
 }
 const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        backgroundColor: "#009CA1",
        alignItems: "center",
        height : "100%",
    },
  TextInput1:{
      width:"80%",
      height:80,
      top:80,
      backgroundColor:"#ffffff",
      padding:20,
      margin:20,
      justifyContent:'center',
      alignItems:'center',
      borderWidth: 1,
      borderColor: '#000000',

    },
    TextInput2:{
      width:"80%",
      height:80,
      top:60,
      backgroundColor:"#ffffff", 
      padding:20,
      margin:20,
      justifyContent:'center',
      alignItems:'center',
      borderWidth: 1,
      borderColor: '#000000',

    },
      TextInput3:{
        width:"80%",
        height:80,
        top:40,
        backgroundColor:"#ffffff",
        padding:20,
        margin:20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 1,
        borderColor: '#000000',

    },
    TextInput4:{
      width:"80%",
      height:80,
      top:20,
      backgroundColor:"#ffffff",
      padding:20,
      margin:20,
      justifyContent:'center',
      alignItems:'center',
      borderWidth: 1,
      borderColor: '#000000',

    },
    
    button: {
      padding:25,
      margin:15,
      justifyContent:'center',
      alignItems:'center',
      borderWidth: 1,
      borderRadius:45,
      height:25,
      width:'50%',
      backgroundColor:'#D52727',
      borderColor: '#000000',
    },


 });
 export default Select;