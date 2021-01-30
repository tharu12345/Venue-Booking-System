import React from 'react';
import {Text,View,Image, StyleSheet, TouchableOpacity,Button} from 'react-native';

 const app1 = () => {
    return (
        <>
    
          <View style ={styles.container}>
                 <Image style={styles.pic14} source={require('./asset/pic14.png')}/>
                <Image style={styles.pic8} source={require('./asset/pic8.jpg')}/> 
         <TouchableOpacity style={styles.button}>

                  <Text>rejister</Text>
                 </TouchableOpacity> 

         <TouchableOpacity style={styles.button}>

                  <Text>login</Text>
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
  pic8 : {
        width:330,
        height:250,
         
    
    },
    button: {
      width: '65%',
      backgroundColor:'#ffffff',
      padding:20,
      margin:20,
      justifyContent:'center',
      alignItems:'center',


    },
    pic14 : {
      width:"100%",
      height:100,
       
  
  },
 });

export default app1;