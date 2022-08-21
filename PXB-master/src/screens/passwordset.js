import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text , Button } from "react-native-paper";


function passwordset ({navigation}) {
    return(
        <View style={{flex:1, backgroundColor:'#fff'}} >
            <Image
                resizeMode="contain"
                source={require('../../assets/images/password.png')}
                style={styles.image}
                
                />
            <TouchableOpacity onPress={() => navigation.navigate('resetpassword')}  >
                <Text style={styles.text1} >Password Reset</Text>
                </TouchableOpacity>
            <Text style={styles.text2}  >Your password has been reset successfully</Text>
            <TouchableOpacity style={styles.resetbtn} onPress={() => navigation.navigate('login')} >
                <Text style={styles.resettext}>Log In</Text>
            </TouchableOpacity>

        </View>
    )
}

export default passwordset;

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 300,
        marginBottom: 8,
        top: 100,
        right:-84
    },
    text1:{
        top:44,
        left:132,
        fontSize:18,
        fontWeight:'700'


    },
    text2:{
        top:55,
        left:48,
        fontSize:16,
        fontWeight:'400',
        color:'#828282'

    },
    resetbtn: {
        width: '77%',
        height: 53,
        top: 105,
        left: 45,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10

    },
    resettext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        fontWeight: '700',
        top: 10,
        left: 115


    }
})