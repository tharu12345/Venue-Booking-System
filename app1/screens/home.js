import React, { Component } from 'react';
import {Text,View,Image, StyleSheet, TouchableOpacity,} from 'react-native';

export default class home extends Component {
onbutton1 = () => {this.props.navigation.navigate("login");};
onbutton2 = () => {this.props.navigation.navigate('register');};


    render(){
       return (
       <View style ={styles.container}>

        <Image style={styles.pic14} source={require('../asset/pic23.jpg')}/>
       <Image style={styles.pic8} source={require('../asset/pic22.jpg')}/> 

      <TouchableOpacity onPress={this.onbutton1}
      style={styles.button1}>
      <Text style={{fontSize: 19}}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onbutton2}
      style={styles.button2}>
      <Text style={{fontSize: 19}}>REGISTER</Text>
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
  pic8 : {
        width:330,
        height:250,
         
    
    },
    button1: {
      width: '55%',
      backgroundColor:'#ffffff',
      padding:20,
      margin:15,
      justifyContent:'center',
      alignItems:'center',
      height:50,

    },
    button2: {
      width: '55%',
      backgroundColor:'#ffffff',
      padding:20,
      margin:1,
      justifyContent:'center',
      alignItems:'center',
      height:50,

    },
    pic14 : {
      width:"100%",
      height:100,
    
  
  },
 });
