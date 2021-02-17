import React, {Component} from 'react';
import {FlatList,StyleSheet,Text,View,TextInput,Image,} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import bags from '../configs/bag';

class FlatListItem extends Component {
    render(){
        return(  
             <View style={{
                 flex:1,
                 borderRadius:10,
                 margin:10,
                 flexDirection:"row",
                 backgroundColor:"#009CA1"}}>

                 <Image source={this.props.item.img}
                 style={{width:120, height:120, margin:5, borderRadius:10}}>

                 </Image>
                <View style={{flex:1,flexDirection:'column'}}>
                    <Text style={styles.flatListBg}>{this.props.item.name}</Text>
                    <Text style={styles.flatListBg1}>{this.props.item.price}</Text>
                    <Text style={styles.flatListBg2}>{this.props.item.shipping}</Text>
                </View>
             </View>
)
}
}

const styles = StyleSheet.create({
    header: {
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between'
      },
      searchContainer:{
        height:40,
        backgroundColor:"#BCA9F5",
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
     }, 
    flatListBg:{
        color:"#000000",
        padding:5,
        fontSize:24,
        marginBottom:-7
    },
    flatListBg1:{
        color:"#DF0101",
        padding:5,
        fontSize:20,
        marginBottom:-7
    },
    flatListBg2:{
        color:"#000000",
        padding:5,
        fontSize:18,
    },
})

export default class flatListBg extends Component {
    onselectandrequest= () => {this.props.navigation.navigate("selectandrequest")};
    render(){
        return(
            <View style={{flex:1, marginTop:"2%", }}>
            <View style={styles.searchContainer}>
              <Icon name="search" size={20} style={{marginLeft:20}}/>
              <TextInput placeholder="Search"/>
            </View>
            <View>

            <TouchableOpacity
            onPress={this.onselectandrequest}
            >
             <FlatList data={bags}
                renderItem={({item, index})=>{
                    return (
                    <FlatListItem 
                    item={item} 
                    index={index}> 
                    </FlatListItem>);
                }}/>

             </TouchableOpacity>
            </View>
            </View>
        )
    }
}

