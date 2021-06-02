import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity, Button} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const layar2 = () => {
    return (
        <View style={styles.container}>
             <Image
              style={styles.icon1} 
              source={require('../src/gambar/close1.png')}
              /> 
           <Image style={styles.img}
           source={require('../src/gambar/zenit.png')}/>
           <Text style={styles.text1}>Zenith Tennis</Text>
           <Text style={styles.text2}>Center</Text>
           <Image
              style={styles.icon2} 
              source={require('../src/gambar/star.png')}
              />
            <Text style={styles.text3}>4.8</Text> 
            <TouchableOpacity
              style={styles.button}>

            </TouchableOpacity>
        </View>
    )
}

export default layar2

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffc75f',
        flex:1,
    },
    img:{
        position:'absolute',
        marginLeft:50,
        marginTop:140,
        width:50,
        height:50,
        borderRadius:8,
    },
    icon1:{
        width:30,
        height:30,
        marginLeft:290,
        marginTop:80,
    },
    text1:{
        color:'white',
        fontSize:20,
        marginLeft:125,
        marginTop:28,
        fontFamily:'Poppins-Medium'
        
    },
    text2:{
        color:'white',
        fontSize:18,
        marginLeft:125,
        marginTop:-10,
        fontFamily:'Poppins-Medium'
    },
    icon2:{
        position:'absolute',
        width:15,
        height:15,
        marginLeft:125,
        marginTop:190,

    },
    text3:{
        color:'white',
        marginLeft:145,
        marginTop:-5,
        fontFamily:'Poppins-Medium',
    },
    button:{
        width:360,
        height:600,
        backgroundColor:'white',
        borderRadius:40,
        padding:60,
    }

})
