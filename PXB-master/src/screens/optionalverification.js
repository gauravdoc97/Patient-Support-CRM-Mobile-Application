import React, { useState, useEffect} from 'react';
import { Image,View, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import {  Appbar, Text,  TextInput} from 'react-native-paper';


function optionalverification ({navigation, route}) {

    const [Number1, setNumber1] = useState(' ');
    const [Number2, setNumber2] = useState(' ');
    const [Number3, setNumber3] = useState(' ');
    const [Number4, setNumber4] = useState(' ');
    const [Number5, setNumber5] = useState(' ');

    const [styleEnable1, setstyleEnable1] = useState('true');
    const [styleEnable2, setstyleEnable2] = useState('true');
    const [styleEnable3, setstyleEnable3] = useState('true');
    const [styleEnable4, setstyleEnable4] = useState('true');
    const [styleEnable5, setstyleEnable5] = useState('true');



    const enablefunction1 = () => {
        setstyleEnable1(false);
    } 
    const enablefunction2 = () => {
        setstyleEnable2(false);
    } 
    const enablefunction3 = () => {
        setstyleEnable3(false);
    } 
    const enablefunction4 = () => {
        setstyleEnable4(false);
    } 
    const enablefunction5 = () => {
        setstyleEnable5(false);
    } 


 
    return(
    <View style={{flex:1}}>    
            <ScrollView scrollEnabled1={false} >
                <View>
                    <Appbar.Header style={{ backgroundColor:'#034C81'}} >
                        <Appbar.Action color="white" icon="arrow-left" onPress={()=> navigation.navigate('profilepicture')} />
                        <TouchableOpacity style={styles.skipbtn} onPress={()=>Alert.alert('SKIP')} >
                            <Text style={styles.skipbtntext} >SKIP</Text>
                        </TouchableOpacity>
                        <Image source={require('../../assets/images/headerimage.png')} style={styles.headerimage} />

                    </Appbar.Header>
                    <Text style={styles.text1} >Select what exceptional {'\n'}care looks to you  </Text>
                    <Text style={styles.text2} >Select one or multiple options</Text>
                    <TextInput 
                       style={ styleEnable1 ? styles.inputbox1 : styles.inputbox1X } 
                       mode="outlined"
                       placeholder="Loren ipsum dolor sit amet"
                       placeholderTextColor="#b3b3b3"
                       onChangeText={(val) => setNumber1(val)}
                       onFocus = {enablefunction1}
                    />
                    <TextInput 
                       style={styleEnable2 ? styles.inputbox2 : styles.inputbox2X} 
                       mode="outlined" 
                       placeholder="Duis aute irure dolor in reprehenderit"
                       placeholderTextColor="#b3b3b3"
                       onChangeText={(val) => setNumber2(val)}
                       onFocus = {enablefunction2}  
                    />
                    <TextInput 
                       style={styleEnable3 ? styles.inputbox3 : styles.inputbox3X} 
                       mode="outlined"
                       placeholder="Excepteur sint occaecat"
                       placeholderTextColor="#b3b3b3"
                       onChangeText={(val) => setNumber3(val)}
                       onFocus = {enablefunction3} 
                      
                    />
                    <TextInput 
                       style={styleEnable4 ? styles.inputbox4 : styles.inputbox4X} 
                       mode="outlined"
                       placeholder="Ut enim ad minim veniam, quis nostrud"
                       placeholderTextColor="#b3b3b3"
                       onChangeText={(val) => setNumber4(val)}
                       onFocus = {enablefunction4}   
                    />
                    <TextInput 
                       style={styleEnable5 ? styles.inputbox5 : styles.inputbox5X} 
                       mode="outlined"
                       placeholder="Loren ipsum dolor sit amet"
                       placeholderTextColor="#b3b3b3"
                       onChangeText={(val) => setNumber5(val)}
                       onFocus = {enablefunction5}  
                    />

                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btntext}  >Done</Text>
                    </TouchableOpacity>

                </View>

               
         </ScrollView>
    </View>
    )
}

export default optionalverification;

const styles = StyleSheet.create({
    
    headerimage:{
        top:0,
        left:75,
        width:80,
        height:35
    },
    text1:{
        fontSize:24,
        fontWeight:"700",
        top:30,
        left:13

    },
    text2:{
        fontSize:16,
        fontWeight:'400',
        top:45,
        left:13

    },
    inputbox1:{
        width:374,
        height:72,
        left:8,
        top:65,
        backgroundColor:'#e6e6e6'
    },
    inputbox1X:{
        width:374,
        height:72,
        left:8,
        top:65,
        backgroundColor:'#5382F6'
    },
    inputbox2:{
        width:374,
        height:72,
        left:8,
        top:70,
        backgroundColor:'#e6e6e6'

    },
    inputbox2X:{
        width:374,
        height:72,
        left:8,
        top:70,
        backgroundColor:'#5382F6'
    },
    inputbox3:{
        width:374,
        height:72,
        left:8,
        top:75,
        backgroundColor:'#e6e6e6'

    },
    inputbox3X:{
        width:374,
        height:72,
        left:8,
        top:75,
        backgroundColor:'#5382F6'
    },
    inputbox4:{
        width:374,
        height:72,
        left:8,
        top:80,
        backgroundColor:'#e6e6e6'

    },
    inputbox4X:{
        width:374,
        height:72,
        left:8,
        top:80,
        backgroundColor:'#5382F6'
    },
    inputbox5:{
        width:374,
        height:72,
        left:8,
        top:85,
        backgroundColor:'#e6e6e6'

    },
    inputbox5X:{
        width:374,
        height:72,
        left:8,
        top:85,
        backgroundColor:'#5382F6'
    },
    btn:{
        height: 59,
        width:374,
        top: 130,
        left: 8,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    btntext:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        fontWeight: '700',
        top: 12,
        left: 150
    },
    skipbtn:{
        left:290,
        top:2

    },
    skipbtntext:{
        color:'white',
        fontSize:14,
        fontWeight:'700'
    }


    
})
