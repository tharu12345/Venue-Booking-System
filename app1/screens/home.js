import React, { Component } from 'react';
import {Text,View,Image, StyleSheet, TouchableOpacity,BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

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
      <Text style={{fontSize: 18}}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onbutton2}
      style={styles.button2}>
      <Text style={{fontSize: 18}}>REGISTER</Text>
        </TouchableOpacity>

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
        height:230,   
    
    },
    button1: {
      width: '65%',
      backgroundColor:'#ffffff',
      padding:20,
      margin:5,
      justifyContent:'center',
      alignItems:'center',
      height:50,

    },
    button2: {
      width: '65%',
      backgroundColor:'#ffffff',
      padding:20,
      margin:5,
      justifyContent:'center',
      alignItems:'center',
      height:50,

    },
    pic14 : {
      width:"100%",
      height:100,
    
  
  },
 });
