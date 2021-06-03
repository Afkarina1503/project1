import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import{createStackNavigator} from'@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

function layar2 ({route,navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress ={() =>navigation.navigate('satu')}>
             <Image
              style={styles.icon1} 
              source={require('../src/gambar/close1.png')}
              /> 
              </TouchableOpacity>
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
            <Text style={styles.text4}>Details</Text>
        <View>
        <FlatList
         renderItem={({item}) => 
         <View>
         <Image source={item.src}style={styles.img1}/>
         <Text style={styles.item}>{item.key}</Text>
         <Text style={styles.harga}>{item.harga}</Text>
         </View> 
       }
    data={[
      {
        key: 'Thursday,June 10',
        harga: '9:30-11.00 PM',
        src:require('../src/gambar/kalender.png')
      },
      {
        key: 'Washington,DC',
        harga:'129 Oakway Lane',
        src:require('../src/gambar/location.png')
      },
    ]}
   
  /> 
  </View>
        </TouchableOpacity>
            <Text style={styles.text5}>Member</Text>
            <Image style={styles.img4}
            source={require('../src/gambar/plus.png')}/>
            <Image style={styles.img5}
            source={require('../src/gambar/wanita.png')}/>
            <Image style={styles.img6}
            source={require('../src/gambar/laki1.png')}/>
            <Image style={styles.img7}
            source={require('../src/gambar/laki2.png')}/>
            <Image style={styles.img8}
            source={require('../src/gambar/laki3.png')}/>
            <TouchableOpacity
            style={styles.button1}>
                <Text style={styles.text6}>
                    Book it!
                </Text>
            
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
    text4:{
        fontSize:20,
        fontFamily:'Poppins-Medium',
        marginTop:-30,
        marginLeft:5,
    },
    text5:{
        marginTop:-250,
        marginLeft:70,
        fontFamily:'Poppins-Medium',
        fontSize:20,
    },
    text6:{
        color:'white',
        fontSize:15,
        fontFamily:'Poppins-Medium',
        marginLeft:68,
        marginTop:13,
    },
    button:{
        position:'relative',
        width:360,
        height:550,
        backgroundColor:'white',
        borderRadius:40,
        padding:60,
        marginTop:20,
    },
    button1:{
        backgroundColor:'#ffc75f',
        width:200,
        height:50,
        marginTop:40,
        marginLeft:65,
        borderRadius:12,
    },
    item:{
        marginLeft:70,
        marginTop:-40,
        fontSize:16,
        
        
      },
      harga:{       
        marginLeft:70,
        color:'grey',
        marginTop:10
      },
      img3:{
        marginLeft:270,
        marginBottom:40,
        width:40,
        height:40,
        borderRadius:8,
      },
      img1:{
        marginLeft:5,
        marginTop:50,
        width:40,
        height:40,
      },
      img4:{
          position:'relative',
          width:30,
          height:30,
          marginLeft:70,
          marginTop:15,
      },
      img5:{
        position:'relative',
        width:30,
        height:30,
        marginLeft:110,
        marginTop:-30,
    },
    img6:{
        position:'relative',
        width:30,
        height:30,
        marginLeft:150,
        marginTop:-30,
    },
    img7:{
        position:'relative',
        width:30,
        height:30,
        marginLeft:190,
        marginTop:-30,
    },
    img8:{
        position:'relative',
        width:30,
        height:30,
        marginLeft:230,
        marginTop:-29,
    },



})
