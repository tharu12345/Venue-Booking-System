import React, { Component } from 'react';
import {Text,View,Image, StyleSheet, TouchableOpacity,TextInput} from 'react-native';

export default class rejister extends Component {
onbutton5 = () => {this.props.navigation.navigate('homepage');};

    render(){
       return (
       <View style ={styles.container}>

                 <Text>Register</Text>
                 <Image style={styles.pic13} source={require('../asset/pic13.jpg')}/>
                 <TextInput style={styles.TextInput}placeholder="Enter your first name"/>
                 <TextInput style={styles.TextInput}placeholder="Enter your last name"/>
                 <TextInput style={styles.TextInput}placeholder="Enter your email adress"/>
                 <TextInput style={styles.TextInput}placeholder="Enter your password"/>

                 <TouchableOpacity onPress={this.onbutton5}
              style={styles.button5}>
             <Text style={{fontSize: 19}}>REGISTER</Text>
             </TouchableOpacity>


         

           </View>
     
    );
 };
}
 const styles= StyleSheet.create({

    container:{ 
        flex:1,
        backgroundColor :"#009CA1",
        alignItems:"center",
        height : "100%"
    },
         
    TextInput: {
      width:'50%',
      top:50,
    },
  
    button5: {
            width: '75%',
            backgroundColor:'#ffffff',
            padding:20,
            margin:20,
            justifyContent:'center',
            alignItems:'center',
    },
    pic13 : {
      width:"50%",
      height:150,
      top:50,
  
  },
 });