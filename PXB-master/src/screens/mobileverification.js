import React, { useState, useEffect, useRef, useContext} from 'react';
import { Image,View, StyleSheet, TouchableOpacity, Alert, ScrollView, RefreshControlBase } from 'react-native';
import {  Appbar, Text,  TextInput, ActivityIndicator} from 'react-native-paper';


function mobileverification ({navigation, route}) {

    const [Number1, setNumber1] = useState(' ');
    const [Number2, setNumber2] = useState(' ');
    const [Number3, setNumber3] = useState(' ');
    const [Number4, setNumber4] = useState(' ');


    const [Pin1valid , setPin1Valid] = useState(false);
    const [Pin2valid , setPin2Valid] = useState(false);
    const [Pin3valid , setPin3Valid] = useState(false);
    const [Pin4valid , setPin4Valid] = useState(false);

    const [Code, setCode] = useState('+1')
    const [Errors, SetErrors] = useState(false)

    const[ loading, setLoading] = useState(false);
    const[ stoping, setStoping] = useState(false);


    useEffect(() => {
        if (route.params?.item) {
            setCode(route.params.item)
        }
    }, [route.params?.item])



    console.log('g',Code)

//////////////////Automatic-enter-to-next-textbox///////////////////

const Pin1Ref = React.createRef();
const Pin2Ref = React.createRef();
const Pin3Ref = React.createRef();
const Pin4Ref = React.createRef();


///////FOR_ERRORS/////////////

const submitPin = () => {
    SetErrors(true)
    
}

console.log('Numbers', Number1)
console.log('Numbers', Number2)
console.log('Numbers', Number3)
console.log('Numbers', Number4)

///////////Validation_On_OTP//////////////

const SubmitOTP = () => {
    
    if(Number1 === "1" &&  Number2 === "1" && Number3 === "1" && Number4 === "1") {
        navigation.navigate('verification');
    } 
    else {
        SetErrors(true)
        // Alert.alert('Invalid OTP')
    }
}

    return(
    <View style={{flex:1}}>    
            <ScrollView scrollEnabled={false} >
                <View>
                    <Appbar.Header style={{ backgroundColor:'#034C81'}} >
                        <Appbar.Action color="white" icon="arrow-left" onPress={()=> navigation.navigate('page')} />
                        <Image source={require('../../assets/images/headerimage.png')} style={styles.headerimage} />

                    </Appbar.Header>
                </View>

                {/* <View style={styles.appheader}></View> */}
                <Text style={styles.text1} >Mobile Number Verification</Text>
                <Text style={styles.text2} >A verification code has been sent to your</Text>
                <Text style={styles.text3} >mobile number</Text>
                <Text style={styles.text4} >{Code}</Text>
                <View style={styles.btn}>   
                    {/* <TouchableOpacity onPress={()=> navigation.navigate('verification')} disabled={!Number1 || !Number2 || !Number3 || !Number4} style={ !Number1 || !Number2 || !Number3 || !Number4  ? styles.verifybtndis  : styles.verifybtn}> */}
                     <TouchableOpacity onPress={SubmitOTP} disabled={!Number1 || !Number2 || !Number3 || !Number4} style={ !Number1 || !Number2 || !Number3 || !Number4  ? styles.verifybtndis  : styles.verifybtn}>
                        <Text style={styles.verifybtntext} >Verify</Text>
                    </TouchableOpacity> 
                </View>
                <View style={styles.otpcontainer}>
                    <Text style={styles.otpboxtext} >Please enter code to confirm registration</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-around', paddingHorizontal:30}}>
                        <TextInput 
                           keyboardType={'numeric'} 
                           maxLength={1} 
                           mode={'outlined'} 
                           theme={{colors:{text:'white'}}}
                           style={ Pin1valid ? styles.otpinputvalid :  styles.otpinput}
                           ref={Pin1Ref}
                        //    onChangeText={()=> Pin2Ref.current.focus() }
                        //    onChangeText={val =>{ 
                        //        if(val){
                        //            setNumber1(val);
                        //            Pin2Ref.current.focus();
                        //        } else {
                        //            setNumber1(val)
                        //        }
                        //       }  }
                        onChangeText={val =>{ 
                               if(val !== ''){
                                   setNumber1(val);
                                   Pin2Ref.current.focus();
                               } else {
                                   setNumber1(val);
                                   Pin2Ref.current.focus();
                               }
                              }  }
                              
                           onKeyPress={({nativeEvent})=> { 
                               if(nativeEvent.key === 'Backspace'  ){
                                   SetErrors(false)
                                   setPin1Valid(false);
                               }
                               else {
                                   setPin1Valid(true);
                               }

                           }} 
                        />
                        <TextInput 
                           keyboardType={'numeric'} 
                           maxLength={1} 
                           mode={'outlined'} 
                           theme={{colors:{text:'white'}}}
                           style={ Pin2valid ? styles.otpinputvalid :  styles.otpinput}
                        //    onChangeText={()=> Pin3Ref.current.focus() }
                           ref={Pin2Ref}
                           onChangeText={val =>{ 
                               if(val){
                                   setNumber2(val);
                                   Pin3Ref.current.focus();
                               } else {
                                   setNumber2(val)
                               }
                              }  }
                           onKeyPress={({nativeEvent})=> { 
                               if(nativeEvent.key === 'Backspace' ){
                                   Pin1Ref.current.focus()
                                   setPin2Valid(false);
                               }
                               else {
                                   setPin2Valid(true);
                               }
                           }}
                        />
                        <TextInput 
                           keyboardType={'numeric'} 
                           maxLength={1} 
                           mode={'outlined'}
                           theme={{colors:{text:'white'}}} 
                           style={ Pin3valid ? styles.otpinputvalid :  styles.otpinput}
                        //    onChangeText={()=> Pin4Ref.current.focus() }
                           ref={Pin3Ref}
                           onChangeText={val =>{ 
                               if(val){
                                   setNumber3(val);
                                   Pin4Ref.current.focus();
                               } else {
                                   setNumber3(val)
                               }
                              }  }
                           onKeyPress={({nativeEvent})=> { 
                               if(nativeEvent.key === 'Backspace' ){
                                   Pin2Ref.current.focus()
                                   setPin3Valid(false);
                               }
                               else {
                                   setPin3Valid(true);
                               }
                           }}

                        />
                        <TextInput 
                           keyboardType={'numeric'} 
                           maxLength={1} 
                           mode={'outlined'} 
                           theme={{colors:{text:'white'}}}
                           style={ Pin4valid ? styles.otpinputvalid :  styles.otpinput}
                        //    onChangeText={ () => submitPin()} 
                           ref={Pin4Ref}
                           onChangeText={val =>{ 
                               if(val){
                                   setNumber4(val);
                                //    submitPin();
                               } else {
                                   setNumber4(val)
                               }
                              }  }
                           onKeyPress={({nativeEvent})=> {  
                               if(nativeEvent.key === 'Backspace' ){
                                   Pin3Ref.current.focus()
                                   setPin4Valid(false);
                               }
                               else {
                                   setPin4Valid(true);
                               }
                           }}
                        />

                    </View>
                    {
                        Errors ? (
                           <Text style={styles.error}>Code Invalid/Expired</Text>
                        ) : null
                    }   
                     
                </View>
                
                <View style={styles.baseline} >
                    <Text >Did not receive Code?</Text>
                    <TouchableOpacity style={styles.btntext5} onPress={()=>Alert.alert('SMS Send')} >
                        <Text style={styles.text5} >Resend SMS</Text>
                    </TouchableOpacity>
                </View>
                
         </ScrollView>
    </View>
    )
}

export default mobileverification;

const styles = StyleSheet.create({
    appheader:{
    
              

    },
    Button:{
        backgroundColor: "#5382F6",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 110,
        width:'70%',
        top:270,
        left:70,
        height:70
        
        
    },
    headerimage:{
        top:0,
        left:100,
        width:80,
        height:35
    },
    text1:{
        fontSize:24,
        fontWeight:"700",
        top:45,
        left:38

    },
    text2:{
        fontSize:16,
        fontWeight:'400',
        top:53,
        left:38

    },
    text3:{
        fontSize: 16,
        fontWeight: '400',
        top: 55,
        left: 38
    },
    text4:{
        top:36,
        right:-150,
        fontSize:16,
        fontWeight:'700'

    },
    baseline:{
        flexDirection:'row',
        justifyContent:'center',
        top:220,
        right:50
        
    },
    btntext5:{
        position:'relative',
        right:-5,
    },
    text5:{
        color:'#5382F6',
        fontSize:14,
        fontWeight:'600'
    },
    btn:{
        top:200,
        right:5
        
    },
    otpcontainer:{
        backgroundColor:'#e1f9ef',
        width:334,
        position:'absolute',
        top:250,
        right:30,
        height:186,
     
    },
    otpboxtext:{
        fontSize:14,
        fontWeight:'500',
        top:30,
        right:40,
        position:'absolute',

    },
    otpinput:{
        width:60,
        height:60,
        top:70,
        textAlign:'center',
        
         ////////////enter-text=center-for-textinput
        // backgroundColor:'#69E2B3'
    
    },
    otpinputvalid:{
        width:60,
        height:60,
        top:70,
        textAlign:'center',
        backgroundColor:'#69E2B3'

    },
    verifybtn:{
        width: '83%',
        height: 54,
        top: 110,
        left: 36,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    verifybtndis:{
        width: '83%',
        height: 54,
        top: 110,
        left: 36,
        backgroundColor: "#DDDD",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    verifybtntext:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        fontWeight: '700',
        top: 12,
        left: 125
    },
    error:{
        top:75,
        right:-35,
        fontSize:14,
        fontWeight:'500',
        color:'#CC1414'
    },
    ActivityIndicator:{
        top:350,
        left:-10
    }


    
})
