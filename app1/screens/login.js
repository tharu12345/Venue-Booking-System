import React, { Component } from 'react';
import {Text,View,Image, StyleSheet, TouchableOpacity,TextInput} from 'react-native';

export default class login extends Component {
onbutton3 = () => {this.props.navigation.navigate('homepage');};
   
         render(){
          return (
          <View style ={styles.container}>
                 <Image style={styles.pic13} source={require('../asset/pic6.png')}/>
                 <TextInput style={styles.TextInput}placeholder="Enter your email adress"/>
                 <TextInput style={styles.TextInput}placeholder="Enter your password"/>
        
                 <TouchableOpacity onPress={this.onbutton3}
                 style={styles.button3}>
                <Text style={{fontSize: 19}}>LOGIN</Text>
                   </TouchableOpacity>
           </View>     
           
    );
 };
 }

 const styles = StyleSheet.create({
    container:{ 
        flex:1,
        backgroundColor :"#009CA1",
        alignItems:"center",
        height : "100%"
    },
      TextInput: {
      width:'50%',
      top:60,
      justifyContent:'center',
      alignItems:'center',
    },
    button3: {
      width: '55%',
      backgroundColor:'#ffffff',
      padding:20,
      margin:80,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:50,
      height:50,
    },
    pic13 : {
      width:"70%",
      height:250,
      top:50
  },
 });
