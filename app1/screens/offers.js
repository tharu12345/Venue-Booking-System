import React, { Component } from 'react';
import {Text,View,Image, StyleSheet, TouchableOpacity,TextInput} from 'react-native';

export default class offers extends Component {
onbutton1 = () => {this.props.navigation.navigate('offers');};
render(){
    return (
           <View style ={styles.container}>
                 <Text style={{fontSize:25, top:20,width:"70%",height:150, backgroundColor:"#ffffff",padding:20,
                 margin:20,justifyContent:'center', alignItems:'center',top:40,
                 borderRadius:30,}}>Cash Discount For School Bags 10% </Text> 
                 
                 

           <Text style={{fontSize:25, top:20,width:"70%",height:160, backgroundColor:"#ffffff",padding:20,
                 margin:20,justifyContent:'center', alignItems:'center',top:50,
                 borderRadius:30,}}>Dilivery Free Reduce 15%</Text>

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
   
});

           