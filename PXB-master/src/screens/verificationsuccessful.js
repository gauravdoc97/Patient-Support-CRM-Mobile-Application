import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text , Button } from "react-native-paper";




function verificationsuccessful ({navigation}) {
    return(
        <View style={{flex:1, backgroundColor:'#fff'}} >
            <Image
                resizeMode="contain"
                source={require('../../assets/images/verified.png')}
                style={styles.image}
                
                />
            <TouchableOpacity onPress={() => navigation.navigate('mobile')}  >
                <Text style={styles.text1} >Verification Successfully</Text>
                </TouchableOpacity>
            <Text style={styles.text2}  >You have successfully verified your account.</Text>
            <TouchableOpacity style={styles.resetbtn} onPress={() => navigation.navigate('profilepicture')} >
                <Text style={styles.resettext}>Log In</Text>
            </TouchableOpacity>

            

        </View>
    )
}

export default verificationsuccessful;

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 400,
        marginBottom: 8,
        top: 140,
        right:-45
    },
    text1:{
        top:35,
        left:100,
        fontSize:18,
        fontWeight:'700'


    },
    text2:{
        top:45,
        left:46,
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