import React from 'react';
import {Text,View,Image, StyleSheet} from 'react-native';
   
 const Mens= () => {
    return (
        <>
    
          <View style ={styles.container}>
                 <Image style={styles.pic2} source={require('./../asset/pic2.jpg')}/>
                 <Text style={{fontSize:20, top:0,left:70}}>RS.1500</Text> 
                <Image style={styles.pic17} source={require('./../asset/pic17.jpg')}/> 
                <Text style={{fontSize:20, top:0,left:70}}>RS.1800</Text> 
          

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
  pic2: {
         width:"50%",
         height:200,
         right:75,
         top:70,


    },
    pic17 : {
        width:"50%",
        height:200,
        right:75,
        top:70,
  
  },
 });

export default Mens;
