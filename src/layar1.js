import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput,FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import{createStackNavigator} from'@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';


export default function App  ({navigation}) {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.img}
      source={require('../src/gambar/tenisku.jpeg')} /> 
       <TouchableOpacity
         style ={styles.button}  >
         <Icon name='search' style={styles.icon1} /> 
         <TextInput 
         placeholder='Search'
         style={styles.text1}>
         </TextInput>
         </TouchableOpacity>
        <Text style={styles.text2}>Popular places</Text>
        <View style={styles.container}>
      <FlatList
         renderItem={({item}) => 
         <View>
         <Image source={item.src}style={styles.img1}/>
         <View style={{flex:1}}>
         <Text style={styles.item} onPress={()=> navigation.navigate('dua',item.key)}>{item.key} </Text>
         <Text style={styles.harga}>{item.harga}</Text>
         </View> 
         </View>
       }
        data={[
          {
            key: 'Zenith Tennis Center',
            harga: '$15 per hour',
            src:require('../src/gambar/tenis.png')
          },
          {
            key: 'Lacoste Club',
            harga:'$25 per hour',
            src:require('../src/gambar/lacoste.png')
          },
          {
            key: 'Hatch End',
            harga:'$20 per hour',
            src:require('../src/gambar/gambar1.png')
          },
        ]}
       
      /> 
      <View>
        <Image 
        style={styles.img3}
        source={require('../src/gambar/Vektor.png')}/> 
      </View>
    </View>
        

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
  },
  img:{
    position:'absolute',
    height:250,
    width:370,
  },
  button:{
    marginTop:50,
    backgroundColor:'white',
    height:60,
    width:250,
    borderRadius:10,
    marginTop:220,
    marginLeft:50,
    backgroundColor:'white',
    shadowRadius:4.65,
    shadowColor:'#000',
    shadowOpacity:0.29,
    shadowOffset: {
      width:0,
      height:3,
    },
    elevation: 7,

  
  },
  text1:{
    marginLeft:25,
    marginTop:6,
    color:'#E2E2E2',

  },
  text2:{
    fontFamily:'Poppins-Bold',
    marginTop:40,
    marginLeft:20,
    fontSize:24,
    fontFamily:'Poppins-Medium',
  },
  icon1:{
      position:'absolute',
      color:'grey',
      marginTop:24,
      marginLeft:10,
  
  },
  item:{
    marginLeft:100,
    marginTop:35,
    fontSize:18,
    
    
  },
  harga:{
    marginLeft:100,
    color:'grey',
  },
  img3:{
    marginLeft:270,
    marginBottom:50,
    width:40,
    height:40,
    borderRadius:8,
  },
  img1:{
    marginLeft:20,
    resizeMode:'cover',
    marginTop:40,
    position:'absolute',
    width:40,
    height:40,
  },
})
