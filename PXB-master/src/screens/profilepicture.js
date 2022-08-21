import React, { useState, useEffect} from 'react';
import { Image,View, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import {  Appbar, Text,  TextInput, Button} from 'react-native-paper';


function profilepicture ({navigation, route}) {

    const [Number1, setNumber1] = useState(' ');
    const [Number2, setNumber2] = useState(' ');
    const [Number3, setNumber3] = useState(' ');
    const [Number4, setNumber4] = useState(' ');

    const [Code, setCode] = useState('+1')

    useEffect(() => {
        if (route.params?.item) {
            setCode(route.params.item)
        }
    }, [route.params?.item])

    console.log('g',Code)



   



 
    return(
    <View style={{flex:1, backgroundColor:'#ffff'}}>    
            <ScrollView scrollEnabled={false} >
                
                    <Appbar.Header style={{ backgroundColor:'#034C81'}} >
                        {/* <Appbar.Action color="white" icon="arrow-left" onPress={()=> navigation.navigate('verification')} /> */}

                        <Image source={require('../../assets/images/headerimage.png')} style={styles.headerimage} />
                        <TouchableOpacity style={styles.skipbtn} onPress={()=>Alert.alert('SKIP')} >
                            <Text style={styles.skiptext} >SKIP</Text>
                        </TouchableOpacity>
                        <Text style={styles.text} >Profile Picture</Text>
                        <Image resizeMode="contain" source={require('../../assets/images/profilepicture.png')} style={styles.picture} />
                    </Appbar.Header>

            <View>

                <Button style={styles.addbtn} mode='outlined' onPress={() => navigation.navigate('verification')}>
                  Add Picture
                </Button>
                <TouchableOpacity style={styles.safebtn} onPress={()=> navigation.navigate('optional')} >
                    <Text style={styles.safebtntext}  >
                        Save
                    </Text>
                </TouchableOpacity>
            </View>        
                
                
                
                
         </ScrollView>
    </View>
    )
}

export default profilepicture;

const styles = StyleSheet.create({
    headerimage:{
        top:0,
        left:145,
        width:80,
        height:35
    },
    skipbtn:{
        top:1,
        left:256

    },
    skiptext:{
        color:'white',
        fontSize:14,
        fontWeight:'700'
    },
    text:{
        fontSize:24,
        fontWeight:'700',
        top:80,
        left:4
    },
    picture:{
        top:230,
        right:205,
        width:250,
        height:250
    },
    safebtn:{
        width: 200,
        height: 56,
        top: 420,
        left:100,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    safebtntext:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        fontWeight: '700',
        top: 12,
        left: 65
    },
    addbtn:{
        width: 200,
        height: 56,
        top: 400,
        left:100,
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10

    }
  
    


    
})
