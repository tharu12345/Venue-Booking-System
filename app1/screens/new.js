import React from 'react';
import {Text,View,Image, StyleSheet, TouchableOpacity,Button, TextInput} from 'react-native';
import Register from './new';

 const app1 = () => {
    return (
        <>
    {/*<Register/>*/}
          <View style ={styles.container}>
                 <Text>Register</Text>
                 <Image style={styles.pic13} source={require('./asset/pic13.jpg')}/>
                 <TextInput style={styles.TextInput}placeholder="Enter your first name"/>
                 <TextInput style={styles.TextInput}placeholder="Enter your last name"/>
                 <TextInput style={styles.TextInput}placeholder="Enter your email adress"/>
                 <TextInput style={styles.TextInput}placeholder="Enter your password"/>
        
         <TouchableOpacity style={styles.button}>

                  <Text>Register</Text>
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
      borderRadius:45,
      padding:20,
      margin:20,
      justifyContent:'center',
      alignItems:'center',


    },
    pic13 : {
      width:"50%",
      height:150,
       
  
  },
 });

export default app1;