import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'

const CustomButton = ({ disabled , text , onPress, style}) => {
    return (
        <View style={style}>
            <TouchableOpacity disabled={disabled} onPress={onPress}  style={disabled ? styles.resetbtn : styles.resetbtn} >
                <Text style={styles.resettext}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default CustomButton;

const styles = StyleSheet.create({
    resetbtn: {
        width: '77%',
        height: 53,
        top: 50,
        left: 41,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10

    },
    resetbtndis: {
        width: '77%',
        height: 53,
        top: 60,
        left: 41,
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 0,
        backgroundColor: "#DDDD",

    },
    resettext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: 11



    },
});