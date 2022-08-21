import { placeholder } from "@babel/types";
import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { TextInput } from "react-native-paper"

const Input = ({error,outlineColor,label,right,secureTextEntry,mode,placeholder,placeholderTextColor,keyboardType,onChangeText,value}) => {
    return(
        <View>
            <TextInput
            style={styles.input}
            label={label}
            right={right}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            mode={mode}
            value={value}
            outlineColor={outlineColor}
            error={error}
            />
        </View>

    );
}

export default Input

const styles = StyleSheet.create({
    input:{
        height: 50,
        color: "white",
    }
})