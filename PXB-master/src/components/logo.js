import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
    return(
    <Image
    resizeMode="contain"
    source={require('../../assets/images/logo.png')} 
    style={styles.image} />
    );
}


const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 100,
        marginBottom: 8,
        top:-50
    },
})