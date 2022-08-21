import React, { useState, useEffect } from 'react';
import { Image,View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import {  Appbar, Text,  TextInput } from 'react-native-paper';

import Country from '../../countries.json';

import { Formik, useFormik } from 'formik'
import * as yup from 'yup'
import { ScrollView } from 'react-native';
import { isValidNumber } from 'react-native-phone-number-input';


import * as RNLocalize from "react-native-localize";
import DialCode from '../components/DialCode';
 



const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();


function forgot ({navigation, route}) {

    const [Number, setNumber] = useState(' ');

    const [redenable, setRedEnable] = useState(false);
    const [Error1, setError1] = useState(false);
    const [Error2, setError2] = useState(false);
    const [btnstatus, Setbtnstatus] = useState(false);

    const [isSubmitting, isSetSubmitting] = useState(false);


    const [Code, setCode] = useState('');
    const [countrycode, setCountryCode] = useState(RNLocalize.getCountry())  
    const [flag , setFlag]= useState('') 
    const [countryname , setCountryName] = useState('')



useEffect (()=> {
        if(route.params?.item1) {
           setCode(route.params.item1)
        }
    },[route.params?.item1])


useEffect(() => {
        if (route.params?.item2) {
            setCountryCode(route.params.item2)
        }
    }, [route.params?.item2])

    useEffect(() => {
        if (route.params?.item3) {
            setFlag(route.params.item3)
        }
    }, [route.params?.item3])


   



    console.log('day', countrycode)


   

 
///////Validtion_schema_YUP///////////

    const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/


    const loginValidationSchema = yup.object().shape({
        Number: yup
            .string()
            
            .min(10, ({ min }) => `Number must be  ${min} digits`)
            .test('Number' , 'Invalid Number!' , (val) => isValidNumber(val, countrycode)) 
            // .test(isValidNumber)            
            // .matches(phoneRegExp, 'Phone number is not valid')
            

            // .required('This account does not exist.Register to create account'),
        
    })


    console.log('validation', isValidNumber(Number , countrycode)  ) 


   
////////////UseFormik///////////
    const formik = useFormik({
    initialValues:{Number:'' },
    validationSchema:loginValidationSchema,
    validateOnChange:isSubmitting,
                // enableReinitialize={true}
        onSubmit: values => {
        isSetSubmitting(true);
        navigation.navigate({
            name: "resetpassword",
            params: { item: values.Number },
        });

        }
})



////////Dynamic_Format_For_Country_code/////

 useEffect(()=> {
    formatPhoneNumber(NumberWithouFormat)
 },[countrycode])

//  console.log('NEW',mobile.replace(/[^0-9]/g,''))

 NumberWithouFormat = Number.replace(/[^0-9]/g,'')

//  console.log('bYE', NumberWithouFormat)

////////Format_Number/////////
const formatPhoneNumber = (val ) => {
          try { 
            if (val.length !== 10 ) {
                setNumber(val)
                formik.setFieldValue('Number', val)
                // console.log('WIERD', formik.setFieldValue())
            
            }   else {
                const number = phoneUtil.parse(val , countrycode);
                console.log(phoneUtil.formatInOriginalFormat(number, countrycode));
                const FormattedNumber = phoneUtil.formatInOriginalFormat(number, countrycode);
                setNumber(FormattedNumber)
                formik.setFieldValue('Number', FormattedNumber)
                
            }    
        } catch (error) {
            
                 
        }   
    }

//////////Automatic_Device_Location//////

console.log("GETCountry",RNLocalize.getCountry());

useEffect(()=>{
 DeviceInfo()
},[])

const DeviceInfo =() => {
const CurrentLocation = RNLocalize.getCountry();
console.log("CL", CurrentLocation)
for (var i = 0; i < Country.length; i++ ){
    const AllData = Country[i];
    for ( var j = 0; j< AllData.data.length; j++) {
        const ClassifiedData = AllData.data[j];
        if(ClassifiedData.code === CurrentLocation){
        console.log("Current_COUNTRYCODE", ClassifiedData.code)
        console.log("Current_FLAG",ClassifiedData.flag )
        console.log("Current_DIALCODE",ClassifiedData.dial_code)
        setCode(ClassifiedData.dial_code)
        setFlag(ClassifiedData.flag)
        setCountryName(ClassifiedData.value)
        
        break;
        } 
    }
}
}

 
    return(
    <View style={{flex:1}}>
       
            
            <ScrollView scrollEnabled={true} >
                <View>
                    <Appbar.Header style={{ backgroundColor:'#034C81'}} >
                        <Appbar.Action color="white" icon="arrow-left" onPress={()=> navigation.navigate('login')} />
                        <Image source={require('../../assets/images/headerimage.png')} style={styles.headerimage} />

                    </Appbar.Header>
                </View>

                {/* <View style={styles.appheader}></View> */}
                <Text style={styles.text1} >Trouble Logging In?</Text>
                <Text style={styles.text2} >Enter your mobile number and we will send</Text>
                <Text style={styles.text3} >reset to get back into your account.</Text>
                <View>
                <TextInput
                   style={styles.textinput} 
                   mode="outlined" 
                //    placeholder="Mobile Number" 
                   label="Mobile Number"
                   keyboardType="numeric"
                //    onChangeText={handleChange('Number')}
                   value={formik.values.Number}
                //    onChangeText={formik.handleChange('Number')}
                    onChangeText={(val) => formatPhoneNumber(val)}

                //    value={Number}

                   error={ formik.errors.Number}
                />
                
                <View style={{top:19, left:168}}>
                    <DialCode
                          onPress={()=> navigation.navigate('dailcode')}
                          TextFlag={flag}
                          TextCode={Code}
              
                    />
                </View>
                
                
                    {/* <TouchableOpacity style={styles.combtn} onPress = {()=> navigation.navigate('dailcode')} >
                        <View style={styles.combtn1view}>
                        <Text style={styles.combtn1} >{ flag }</Text>
                  </View>
                  <View style={styles.combtn2view} > 
                        <Text style={styles.combtn2} >ˇ</Text>
                  </View>
                  <View style={styles.combtnnewview}>
                      <Text style={styles.combtnnew}>{Code}</Text>
                  </View>
                        
                    </TouchableOpacity> */}
                </View>

                

              

                { formik.errors.Number && 
                   <Text style={styles.error1} >{formik.errors.Number}</Text>
                }


                <View>
                <TouchableOpacity disabled={!formik.values.Number}  style={ !formik.values.Number ? styles.resetbtndis  : styles.resetbtn} onPress={formik.handleSubmit} >
                     <Text style={styles.resettext}>Send Reset code</Text>
                 </TouchableOpacity>
                </View>
                
                <View style={styles.baseline} >
                    <Text>New to PX Boost?</Text>
                    <TouchableOpacity style={styles.btntext5} onPress={()=> navigation.navigate('resetpassword')} >
                        <Text style={styles.text5} >Register</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
</View>
    )
}

export default forgot;

const styles = StyleSheet.create({
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
    
    resetbtn:{
        width:'77%',
        height:53,
        top:50,
        left:41,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal:10
        
    },
    resetbtndis:{
        width: '77%',
        height: 53,
        top: 60,
        left: 41,
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: "#DDDD",

    },
    resettext:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
        fontWeight:'700',
        top:10,
        left:85

            
    },
    textinput:{
        width:'50%',
        height:57,
        top:80,
        left:145
    },
    inputViewnew1:{
        width:'18%',
        top:50,
        left:39,
    
        
    },
    combtn: {
        borderWidth: 0.8,
        height: 59,
        width:97 ,
        // position: 'relative',
        // alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 4,
        left:43,
        top:21
    },
    text6:{
        left:18,
        top:13,


    },
    text7:{
        fontSize:24,
        right:-48,
        top:15

    },
    text8:{
        fontSize:22,
        top:8,
        left:15

    },

    combtn1:{
        right:-25,
        top:17,
        fontSize:22

    },
    combtn2:{
        left:50,
        bottom:-5,
        fontSize:25

    },
    combtn1view:{
        top:-5,
        right:-15

    },
    combtn2view:{
        position:'relative',
        top:-17,
        left:30

    },
    combtnnewview:{
        top:-42, 
        left:5

    },
    combtnnew:{
        fontSize:13

    },
    
    textv:{
        flexDirection:'row'

    },
    error1:{
       fontSize:14,
       fontWeight:'500',
       color:'#CC1414',
       top:34,
       left:120
    },
    error2:{
        fontSize: 14,
        fontWeight: '500',
        color: '#CC1414',
        top:34,
        left:120
    },
    baseline:{
        flexDirection:'row',
        justifyContent:'center',
        top:435
        
    },
    btntext5:{
        position:'relative'
    },
    text5:{
        color:'#5382F6',
        fontSize:14,
        fontWeight:'600'
    }

    
})
