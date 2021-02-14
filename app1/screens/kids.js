import React, { Component } from 'react';
import {Text,View,Image, StyleSheet, TouchableOpacity,TextInput} from 'react-native';

export default class kids extends Component {

onbutton1 = () => {this.props.navigation.navigate('kids');};
render(){
    return (
           <View style ={styles.container}>
                 
        
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

           