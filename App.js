import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.img}
      source={require('./src/gambar/tenisku.jpeg')} /> 
       <TouchableOpacity
         style ={styles.button}  > 
         <TextInput  
         placeholder='Search'
         style={styles.text1}>
         </TextInput>
         </TouchableOpacity>   
        <Text style={styles.text2}>Popular places</Text>

    </View>
  )
}

export default App

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
    marginTop:5,
    color:'#E2E2E2',

  },
  text2:{
    fontFamily:'Poppins-Bold',
    marginTop:40,
    marginLeft:20,
    fontSize:20,
  }
})
