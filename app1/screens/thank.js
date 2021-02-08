import React from 'react';
import {Text,View,Image, StyleSheet} from 'react-native';

 const Thank = () => {
   return (
     <>
    
    <View style ={styles.container}>
            <Image source={require('../asset/pic16.png')}Image style={styles.pic16}/>
            <Text style={{fontSize:40, top:180}}>Thank you </Text>
          
          

        </View>
        </>
   );
 }
 const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        backgroundColor: "#009CA1",
        alignItems: "center",
        height : "100%",
    },
    pic16 : {
      width:'80%',
      height:230,
      top:120,
  
  },
    text: {
      width:"100%",
      height:100,
      top:400,

    },
 });


 export default Thank;