import React from 'react';
import {Text,View,Image, StyleSheet, TouchableOpacity, TextInput,Button} from 'react-native';
import Category from './catogory';

 const App1 = () => {
    return (
        <>
    {/*<Category/>*/}
          <View style ={styles.container}>
                 <Text>Category</Text>
         
                 <TextInput style={styles.TextInput}placeholder="Search"/>
                 <Image style={styles.pic2} source={require('../asset/pic2.jpg')}/>

         <TouchableOpacity style={styles.Button}>
           
           <Text>Mens Bag</Text>
         </TouchableOpacity>
        
                 <Image style={styles.pic2} source={require('../asset/pic3.jpg')}/>

                 <TouchableOpacity style={styles.Button}>
           
           <Text>Womens Bag</Text>
         </TouchableOpacity>
                 <Image style={styles.pic2} source={require('../asset/pic4.jpg')}/>

                 <TouchableOpacity style={styles.Button}>
           
           <Text>Kids Bag</Text>
         </TouchableOpacity>
                 <Image style={styles.pic2} source={require('../asset/pic5.jpg')}/>

                 <TouchableOpacity style={styles.Button}>
           
           <Text>School Bags</Text>
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
    pic2: {

      top:40,
      right:95,
      width:"40%",
      height:100,

  },
  button: {
    width: '65%',
    justifyContent:'flex-end',
    alignItems:'flex-end',
  
  },
 });

export default App1; 

      