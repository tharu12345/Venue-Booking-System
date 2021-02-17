import React, { Component } from 'react';
import {Text,View,Image, StyleSheet, TouchableOpacity,TextInput} from 'react-native';

export default class selectandrequest extends Component {
onbutton3 = () => {this.props.navigation.navigate('selectandrequest');};
onbutton8 = () => {this.props.navigation.navigate('thank');};
   
         render(){
          return (
     <>
          <View style ={styles.container}>

          <TextInput style={styles.TextInput1}placeholder="User name"/>
          <TextInput style={styles.TextInput2}placeholder="Dilivery address"/>
          <TextInput style={styles.TextInput3}placeholder="Item code"/>
          <TextInput style={styles.TextInput4}placeholder="Messages"/>

         
          <TouchableOpacity onPress={this.onbutton8}
      style={styles.button8}>
      <Text style={{fontSize: 19}}>Send</Text>
        </TouchableOpacity>

          
          

        </View>
        </>
   );
   };
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
      height:70,
      top:0,
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
      height:70,
      top:0,
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
        height:70,
        top:0,
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
      height:70,
      top:0,
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
      borderColor: '#000000',
      backgroundColor: '#848484',


    },
    button8: {
      padding:25,
      margin:15,
      justifyContent:'center',
      alignItems:'center',
      borderWidth: 1,
      borderRadius:45,
      height:25,
      width:'50%',
      borderColor: '#000000',
      backgroundColor: '#848484',


    },
 });
