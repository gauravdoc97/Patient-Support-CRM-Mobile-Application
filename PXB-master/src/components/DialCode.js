import React from "react";
import {View,Text,TouchableOpacity, StyleSheet, Platform} from "react-native";

const DialCode = ({onPress, TextFlag, TextCode}) => {
    return(
        <View style={styles.inputViewnew1} >
            <TouchableOpacity style={styles.combtn} onPress={onPress} >
                <View style={styles.combtn1view}>
                    <Text style={styles.combtn1} >{ TextFlag }</Text>
                </View>
                <View style={styles.combtn2view} > 
                    <Text style={styles.combtn2} >ˇ</Text>
                </View>
                <View style={styles.combtnnewview}>
                    <Text style={styles.combtnnew}>{ TextCode }</Text>
                </View>
        </TouchableOpacity> 
        </View>
        

    )
}

const styles = StyleSheet.create({
    inputViewnew1: {
        right: 125,
        width: 40,
        top:4,
        
    }, 
    combtn:{
        borderWidth: 0.8,
        height: 57,
        width:97 ,
        backgroundColor:'#f9f9f9', 
        borderRadius:4,
    },
     combtn1:{
        right:-29,
        top:15,
        fontSize:22,
    },
    combtn2:{
        left:(Platform.OS === 'ios') ? 50  : 55,
        bottom:(Platform.OS === 'ios') ? -5  : -2,
        fontSize:25,
    },
    combtn1view:{
        top:(Platform.OS === 'ios') ? 0 : -2,
        right:-18
    },
    combtn2view:{
        top:-10,
        left:27,
    },
    combtnnewview:{
        top: (Platform.OS === 'ios') ? -36.5 : -44,
        left:8,
        // width: (Platform.OS === 'ios') ? 80 : 100,

    },
    combtnnew:{
        fontSize:14
    }   
})

export default DialCode
