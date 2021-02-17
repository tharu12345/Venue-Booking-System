import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import Images from '../configs/Images';

export default class category extends Component{
  button1 = () => {this.props.navigation.navigate('mens');};
  button2= () => {this.props.navigation.navigate('women');};
  button3 = () => {this.props.navigation.navigate('kids');};
  button4 = () => {this.props.navigation.navigate('schools');};

  render() {
    return (
      <View style ={styles.container}>

      <View style={styles.Brow}>
      <Image source={Images.pic2} style={styles.ImagesContainer}>
      </Image>
          <TouchableOpacity 
          onPress={this.button1} 
          style={styles.button1}>
          <Text>men</Text>
          </TouchableOpacity>
      </View>
      
      <View style={styles.Brow}>
      <Image source={Images.pic3} style={styles.ImagesContainer}>
      </Image>
          <TouchableOpacity 
          onPress={this.button2} 
          style={styles.button1}>
          <Text>women</Text>
          </TouchableOpacity>
      </View>
       
      <View style={styles.Brow}>
      <Image source={Images.pic4} style={styles.ImagesContainer}>
      </Image>
          <TouchableOpacity 
          onPress={this.button3} 
          style={styles.button1}>
          <Text>Kids</Text>
          </TouchableOpacity>
      </View>
      
      <View style={styles.Brow}>
      <Image source={Images.pic5} style={styles.ImagesContainer}>
      </Image>
          <TouchableOpacity 
          onPress={this.button4} 
          style={styles.button1}>
          <Text>School</Text>
          </TouchableOpacity>
      </View>
       </View> 
    );
  }
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    flexDirection:"column",
    backgroundColor:"#009CA1",
    height : "100%",
    alignItems:'center'
  },

  ImagesContainer:{
    width:100,
    height:100,
    marginTop:20,
  },
 
  button1:{
    width:100,
    height:45,  
    marginLeft:15,
    margin:10,
    backgroundColor:"yellow",
    padding:10,
    borderRadius:10,
    marginTop:20,
    alignSelf:"center"
  },
  Brow:{
    flexDirection:"row"
  }
})