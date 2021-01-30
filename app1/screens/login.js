import React from 'react';
import {Text,View,Image, StyleSheet, TouchableOpacity,Button, TextInput} from 'react-native';

 const Login = () => {
    return (
        <>
   
          <View style ={styles.container}>
                 <Text>Login</Text>
                 <Image style={styles.pic13} source={require('../asset/pic6.png')}/>
                 <TextInput style={styles.TextInput}placeholder="Enter your email adress"/>
                 <TextInput style={styles.TextInput}placeholder="Enter your password"/>
        
         <TouchableOpacity style={styles.button}>

                  <Text>Login</Text>
                 </TouchableOpacity> 

         

           </View>

           </>
           
          
        
    );
 };
 const styles = StyleSheet.create({

    container:{ 
        flex:1,
        backgroundColor :"#009CA1",
        alignItems:"center",
        height : "100%"
    },
         
    textInput: {
      width:'80%',
      

    },
  
    button: {
      width: '65%',
      backgroundColor:'#ffffff',
      padding:20,
      margin:20,
      justifyContent:'center',
      alignItems:'center',


    },
    pic13 : {
      width:"70%",
      height:250,
       
  
  },
 });

export default Login;