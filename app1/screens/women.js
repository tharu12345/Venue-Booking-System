import React from 'react';
import {Text,View,Image, StyleSheet} from 'react-native';
   
 const Women = () => {
    return (
        <>
    
          <View style ={styles.container}>
                 <Image style={styles.pic3} source={require('./../asset/pic3.jpg')}/>
                 <Text style={{fontSize:40, top:180}}>RS.2500</Text> 
                <Image style={styles.pic7} source={require('./../asset/pic7.jpg')}/> 
                <Text style={{fontSize:40, top:180}}>RS.2500</Text> 
          

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
  pic3: {
        width:"30%",
        height:90,


    },
    pic7 : {
      width:"80%",
      height:100,
       
  
  },
 });

export default Women;