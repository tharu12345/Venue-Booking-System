import React,{Component} from 'react';
import {Text,View,Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export default class homepage extends Component {
  onbutton1 = () => {this.props.navigation.navigate('catogory');};
  onbutton2 = () => {this.props.navigation.navigate('offers');};
       
        render(){
          return (
    <View style ={styles.container}>
<Image style={styles.pic14} source={require('../asset/download.jpg')}/>
                 <TextInput style={styles.TextInput}placeholder="Search"/>
                
                <TouchableOpacity onPress={this.onbutton1}
                style={styles.button1}>
                <Text style={{fontSize: 19}}>Category</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onbutton2}
                style={styles.button2}>
                <Text style={{fontSize: 19}}>Offers</Text>
                </TouchableOpacity>
                 
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

   button1: {
     height:80,
     width: '45%',
     backgroundColor:'#ffffff',
     padding:20,
     margin:30,
     justifyContent:'center',
     alignItems:'center',
     top:30,
     borderRadius:30,
   },
   button2: {
    height:80,
    width: '45%',
    backgroundColor:'#ffffff',
    padding:20,
    margin:0,
    justifyContent:'center',
    alignItems:'center',
    top:30,
    borderRadius:30,
     

   },
   pic14 : {
     width:"100%",
     height:200,
     top:70,
 },
});
