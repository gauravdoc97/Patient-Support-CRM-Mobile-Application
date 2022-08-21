import React, {useState, useEffect} from "react";
import {ScrollView, Image, TouchableOpacity, StyleSheet, Text, View, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Country from '../../countries.json';

import Logo from "../components/logo";
import { useFormik,  setFieldValue } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-native-date-picker'

// import PhoneInput from 'react-phone-number-input/react-native-input'
// import { parsePhoneNumber } from 'react-phone-number-input'



 import * as RNLocalize from "react-native-localize";
import DialCode from "../components/DialCode";






const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();


function page({ navigation, route }) {

    const [fistname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [mobile, setmobile] = useState('');
    const [dob, setdob] = useState('');
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [cpass, setcpass]= useState('');

    const [isSubmitting, isSetSubmitting] = useState(false);


    const [flag , setFlag]= useState('🇺🇸') 
    const [Code, setCode] = useState('+1');  ///////////////dail_code
    const [countrycode, setCountryCode] = useState(RNLocalize.getCountry()) 
    const [countryname , setCountryName] = useState('')
 



    const [isValidPass, setisValidPass] = useState(false);
    const [isValidPass1, setisValidPass1] = useState(false);
    const [isValidPass2, setisValidPass2] = useState(false);
    const [isValidPass3, setisValidPass3] = useState(false);
    const [isValidPass4, setisValidPass4] = useState(false);
    const [isValidPass1Green, setisValidPass1Green] = useState(false);
    const [isValidPass2Green, setisValidPass2Green] = useState(false);
    const [isValidPass3Green, setisValidPass3Green] = useState(false);
    const [isValidPass4Green, setisValidPass4Green] = useState(false);

/////////////STATES_FOR_DATE_PICKER//////////////////
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)


//////////////Mobile_code_parameter////////////////


    useEffect(() => {
        if (route.params?.item1) {
            setCode(route.params.item1)
        }
    }, [route.params?.item1])

    // console.log('hi',Code)



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


    // console.log('hello', countrycode)








///////ON_FOCUS_NEWPASSWORD//////////
    const Pfocus = () => {
        
        setisValidPass(true);
        setisValidPass1(true);
        setisValidPass2(true);
        setisValidPass3(true);
        setisValidPass4(true)
    }

    const Ffocus = () => {

        setisValidPass(false);
        setisValidPass1(false);
        setisValidPass2(false);
        setisValidPass3(false);
        setisValidPass4(false);
        setisValidPass1Green(false);
        setisValidPass2Green(false);
        setisValidPass3Green(false);
        setisValidPass4Green(false);
    }
    const Lfocus = () => {

        setisValidPass(false);
        setisValidPass1(false);
        setisValidPass2(false);
        setisValidPass3(false);
        setisValidPass4(false);
        setisValidPass1Green(false);
        setisValidPass2Green(false);
        setisValidPass3Green(false);
        setisValidPass4Green(false);
    }

    const Mfocus = () => {
        setisValidPass(false);
        setisValidPass1(false);
        setisValidPass2(false);
        setisValidPass3(false);
        setisValidPass4(false);
        setisValidPass1Green(false);
        setisValidPass2Green(false);
        setisValidPass3Green(false);
        setisValidPass4Green(false);
    }
    const Efocus = () => {
        setisValidPass(false);
        setisValidPass1(false);
        setisValidPass2(false);
        setisValidPass3(false);
        setisValidPass4(false);
        setisValidPass1Green(false);
        setisValidPass2Green(false);
        setisValidPass3Green(false);
        setisValidPass4Green(false);
    }

    const CPfocus = () => {
        setisValidPass(false);
        setisValidPass1(false);
        setisValidPass2(false);
        setisValidPass3(false);
        setisValidPass4(false);
        setisValidPass1Green(false);
        setisValidPass2Green(false);
        setisValidPass3Green(false);
        setisValidPass4Green(false);
    }



///////////newPasswordvalidation/////////////
 const handlepass = (val) => {

     const SpecialChar = /[~!@#$%^&*]/;
     const UpperCase = /[A-Z]/;
     const LowerCase = /[a-z]/;

     if(val.trim().length >= 10 ) {
        setisValidPass1Green(true);
        setisValidPass1(false);
     }
     if (val.trim().length < 10 ) {
        setisValidPass1Green(false);
        setisValidPass1(true);
     }
     if (UpperCase.test(val) ){
        setisValidPass2Green(true);
        setisValidPass2(false);
         
     }
     if (!UpperCase.test(val)){
        setisValidPass2Green(false);
        setisValidPass2(true);
         
     }
     if (LowerCase.test(val)) {
        setisValidPass3Green(true);
        setisValidPass3(false);
      
     }
     if (!LowerCase.test(val)) {
        setisValidPass3Green(false);
        setisValidPass3(true);
         
     }
     if (SpecialChar.test(val)) {
        setisValidPass4Green(true);
        setisValidPass4(false);
        
     }
     if (!SpecialChar.test(val)) {
        setisValidPass4Green(false);
        setisValidPass4(true);
         
     }
     

 }

///////////Validation_SChema_YUP////////

    const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/
                        // /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

    const reg = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;

    const loginValidationSchema = yup.object().shape({
        firstname: yup
            .string()
            .required(),
        lastname: yup
            .string()
            .required(),

        mobile: yup 
            .string()
            .required()
            .min(10 , "Invalid Number")
            .matches(phoneRegExp, 'Phone number is not valid'),


            // .min(10, ({ min }) => `Mobile must be at least ${min} characters`),

            // .matches("1234567890", "The account already exists.Login to\ncontinue"),


            
        dob: yup
            .string(),
            // .required(),
            // .matches(reg,'required!'),

        email: yup.string().email('This email is Invalid').required(),
 
        cpass: yup 
            .string()
            .required('Password does not match')
            .matches( pass, 'Password does not match') 
    })
//////////////Mobile_Number_Format////////////////




//  const formatPhoneNumber = (phoneNumberString) => {
//     //  let newText = '';
//     //  let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
//     //  for(var i =0; i< cleaned.length; i++) {
//     //      if(i == 0) {
//     //          newText = '(';
//     //      } else if (i==3) {
//     //          newText =  newText + ')-';
//     //      } 
//     //     else if ( i == 6 ) {
//     //          newText = newText + '-' ;
//     //      }
//     //     newText = newText + cleaned[i];
//     //  }
//     //  setmobile(newText);

//  };

 useEffect(()=> {
    formatPhoneNumber(NumberWithouFormat)
 },[countrycode])

//  console.log('NEW',mobile.replace(/[^0-9]/g,''))

 NumberWithouFormat = mobile.replace(/[^0-9]/g,'')

//  console.log('bYE', NumberWithouFormat)


    const formatPhoneNumber = (val, setFieldValue ) => {
          try { 
            if (val.length !== 10 ) {
                setmobile(val)
                formik.setFieldValue('mobile', val)
                // console.log('WIERD', formik.setFieldValue())
            
            }   else {
                const number = phoneUtil.parse(val , countrycode);
                console.log(phoneUtil.formatInOriginalFormat(number, countrycode));
                const FormattedNumber = phoneUtil.formatInOriginalFormat(number, countrycode);
                setmobile(FormattedNumber)
                formik.setFieldValue('mobile', FormattedNumber)
                
            }    
        } catch (error) {
            
                 
        }   
    }

////////////////useFormik//////
const formik = useFormik({  
    initialValues:{firstname:'', lastname:'', mobile:'',dob:'' ,email:'',cpass:'' },
    validationSchema:loginValidationSchema,
    validateOnChange:isSubmitting,
    onSubmit: values => {   
            console.log('ABC', values.mobile)
            isSetSubmitting(true); 
            navigation.navigate({
            name: "mobile",
            params: { item: values.mobile },
        });  
    }

        
    
})             
console.log('whatelse', mobile)


/////////////AUTOMATIC_DEVICE_LOCATION/////

console.log('AUTP_COUNTRY', RNLocalize.getCountry())

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
    <View>             
        <View>
             <View>
                <Appbar.Header style={{ backgroundColor: '#034C81' }} >
                <Appbar.Action color="white" icon="arrow-left" onPress={() => navigation.navigate('signup')} />
                <Image source={require('../../assets/images/headerimage.png')} style={styles.headerimage} />
                </Appbar.Header>
            </View>

            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}

            >
            <ScrollView style={{paddingBottom:160,}}>
                    <Text style={styles.text1} >Register</Text>
                <TextInput 
                   placeholderTextColor="#B3B6B7" 
                //    placeholder="First Name" 
                   label="First Name"
                   mode="outlined"
                   onFocus={()=>Ffocus()} 
                   style={styles.textinput1} 
                   onChangeText={formik.handleChange('firstname')}
                   value={formik.values.firstname}
                   error={formik.errors.firstname}
                />

                {formik.errors.firstname &&
                   <Text style={styles.incorrectfirst}>{formik.errors.firstname}</Text>
                }
                    
                {/* <View style={{backgroundColor:'yellow', top:2}} >
                   <TextInput
                    style={styles.textinput2}
                    label="Last Name"
                    mode="outlined"
                />     
                </View>     */}
                

                <View >
                    <TextInput 
                   placeholderTextColor="#B3B6B7" 
                //    placeholder="Last Name"
                   label="Last Name"
                   mode="outlined"
                   onFocus={()=>Lfocus()}  
                   style={styles.textinput2} 
                   onChangeText={formik.handleChange('lastname')}
                   value={formik.values.lastname}
                   error={formik.errors.lastname}
                />
                </View>
                

                {formik.errors.lastname &&
                   <Text style={styles.incorrectlast}>{formik.errors.lastname}</Text>
                }

                <View>
                    <TextInput 
                       placeholderTextColor="#B3B6B7"  
                    //    placeholder="Mobile Number"
                       label="Mobile Number"
                       onFocus={()=>Mfocus()}  
                       mode="outlined" 
                       style={styles.textinput3}
                       keyboardType="numeric" 
                       onChangeText={(val) => formatPhoneNumber(val, setFieldValue)}
                    //    value={mobile}
                    //    onChangeText={handleChange('mobile')}
                    //    onChangeText={mobileNumberParaser}
                       value={formik.values.mobile}
                       error={formik.errors.mobile}
                    
                    />
                    <View style={{top:1, left:159}}>
                        <DialCode
                             onPress={()=> navigation.navigate('dailcode2')}
                             TextFlag={flag}
                             TextCode={Code}
                        />
                       
                    </View>
                    {/* <TouchableOpacity style={styles.code1} onPress={() => navigation.navigate('dailcode2')}>
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

                {formik.errors.mobile &&
                <Text style={styles.incorrectmobile}>{formik.errors.mobile}</Text>
                }


                <TextInput 
                   placeholderTextColor="#B3B6B7" 
                //    placeholder="Date of Birth"
                   label="Date of Birth" 
                   mode="outlined" 
                   right={<TextInput.Icon onPress={() => setOpen(true)} style={{ top: 4 }} color="#808080" name="calendar-range" />}
                   style={styles.textinput4} 
                //    onChangeText={handleChange('dob')}
                   value={date}
                   error={formik.errors.dob}
                   editable={false}
                />

                <DatePicker 
                    modal
                    mode="date"
                    androidVariant="nativeAndroid"
                    textColor="black"
                    open={open}
                    date={new Date(date)}
                    maximumDate={new Date("2021-12-31")}  //////////maxdate_this_year
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date.toLocaleDateString())   /////DateString "DAY"_"Mon"_"Date"_"year"
                        
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}  
                />

                {/* {errors.dob &&
                <Text style={styles.incorrectdob}>{errors.dob}</Text>
                } */}


                <TextInput 
                
                   placeholderTextColor="#B3B6B7"   
                //    placeholder="Email Address"
                   label="Email Address"
                   onFocus={()=>Efocus()} 
                   mode="outlined"
                   autoCapitalize={true}
                   style={styles.textinput5} 
                   onChangeText={formik.handleChange('email')}
                   value={formik.values.email}
                   error={formik.errors.email}
                   
                   
                />

                {formik.errors.email &&
                <Text style={styles.incorrectemail}>{formik.errors.email}</Text>
                }
                <TextInput 
                   placeholderTextColor="#B3B6B7"   
                //    placeholder="Password"
                   label="Password" 
                   mode="outlined" 
                   onFocus={()=> Pfocus()}
                   secureTextEntry={true}
                   style={styles.textinput6} 
                   onChangeText={val => handlepass(val)}

                //    onChangeText={handleChange('pass')}
                //    value={values.pass}
                //    error={errors.pass}
                />
                  


                    {isValidPass ? (
                        <Text style={styles.ErrorPass} >The password will need to have atleast:</Text>
                    ) : null }
                        

                    {isValidPass1 ? (
                        <Text style={ styles.ErrorPass1}   >•  10 characters</Text>
                    ) : null }
                    
                    {isValidPass1Green ? (
                        <Text style={ styles.ErrorPass1G}   >✓  10 characters</Text>
                    ): null }

                      

                    { isValidPass2 ? (
                        <Text style={styles.ErrorPass2}   > •  1 upper case character</Text>
                    ) : null }

                    {isValidPass2Green ? (
                        <Text style={styles.ErrorPass2G}   > ✓  1 upper case character</Text>
                    ): null}

                 

                    {isValidPass3 ? (
                        <Text style={styles.ErrorPass3}   > •  1  lower case character</Text>
                    ) : null}
                   
                    {isValidPass3Green ? (
                    <Text style={styles.ErrorPass3G}   > ✓  1  lower case character</Text>
                    ) : null}

               
                    {isValidPass4 ? (
                        <Text style={styles.ErrorPass4}   > •   special character</Text>
                    ) : null}
                     
                    {isValidPass4Green ? (
                        <Text style={styles.ErrorPass4G}   > ✓   special character</Text>
                    ): null }

               
                <TextInput 
                   placeholderTextColor="#B3B6B7"   
                //    placeholder="Confirm Password"
                   label="Confirm Password"
                   onFocus={()=>CPfocus()} 
                   secureTextEntry={true}
                   mode="outlined" 
                   style={styles.textinput7} 
                   onChangeText={formik.handleChange('cpass')}
                   value={formik.values.cpass}
                   error={formik.errors.cpass}
                />

                            
                {formik.errors.cpass &&
                <Text style={styles.incorrectcpass}>{formik.errors.cpass}</Text>
                }


                

                <View>
                    <TouchableOpacity style={ !formik.values.firstname || !formik.values.lastname || !formik.values.email || !formik.values.cpass  ? styles.resetbtndis :   styles.resetbtn} onPress={formik.handleSubmit} disabled={(!formik.values.firstname || !formik.values.lastname || !formik.values.email || !formik.values.cpass)}  >
                        <Text style={styles.resettext}>Register</Text>
                    </TouchableOpacity>
                </View>

        </ScrollView>
            </KeyboardAvoidingView>
    </View>
            

{/* 
                </>
            )}
        </Formik> */}
</View>

    );
}

export default page;


const styles = StyleSheet.create({

    headerimage: {
        top: 0,
        left: 100,
        width: 80,
        height: 35
    },
    text1: {
        fontSize: 24,
        fontWeight: "700",
        top: 30,
        left: 40

    },

    resetbtn: {
        width: '80%',
        height: 52,
        top: 70,
        left: 35,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10

    },
    resetbtndis: {
        width: '80%',
        height: 52,
        top: 70,
        left: 35,
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: "#DDDD",

    },
    resettext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        fontWeight: '700',
        top: 10,
        left: 108


    },
    textinput: {
        
    },
    textinput1:{
        width: '80%',
        height: 55,
        top: 50,
        left: 35,
        backgroundColor:'#FFFFFF'
    },
    textinput2:{
        width: '80%',
        height: 55,
        top: 55,
        left: 35,
        backgroundColor: '#FFFFFF'

    },
    textinput3:{
        width: '53%',
        height: 55,
        top: 62,
        left: 140,
        backgroundColor: '#FFFFFF'

    },
    textinput4:{
        width: '80%',
        height: 55,
        top: 17,
        left: 35,
        backgroundColor: '#FFFFFF'

    },
    textinput5: {
        width: '80%',
        height: 55,
        top: 25,
        left: 35,
        backgroundColor: '#FFFFFF',
        padding: 0,
        
        

    },
    textinput6: {
        width: '80%',
        height: 55,
        top: 32,
        left: 35,
        backgroundColor: '#FFFFFF'

    },
    textinput7: {
        width: '80%',
        height: 55,
        top: 39,
        left: 35,
        backgroundColor: '#FFFFFF'

    },
    code1:{
        borderWidth: 0.8,
        height: 56,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        width: 82,
        left: 35,
        top: 6,
        backgroundColor: '#FFFFFF'

    },
    code2:{
        flexDirection: 'row',

    },
    code3:{
        right: 5,
        top: 4,
        fontSize:16
    },
    code4:{
        fontSize: 24,
        right: -5,
        top: 6
    },
    incorrectText: {
        color: '#CC1414',
        bottom: 55,
        fontSize: 14,
        fontWeight: '500',
        right: 0,
    },
    box: {
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000',
        height:55,
        width:'80%',
        right:-39,
        top:35
    },
    boxtext:{
        color: "#B3B6B7" ,
        top:15,
        right:-15,
        fontSize:16
    },
    boxicon:{
        right:-277,
        top:-5,
        color:'#B3B6B7'
    },
    incorrectemail:{
        top:33,
        right:-35,
        color: '#CC1414',
        fontSize:14,
        fontWeight:'400'

    },
    incorrectcpass:{
        top:40,
        right:-35,
        color: '#CC1414',
        fontSize:14,
        fontWeight:'400'
        
    },
    incorrectmobile:{
        top:25,
        right:-120,
        color: '#CC1414',
        fontSize:14,
        fontWeight:'400'
    },
    incorrectdob:{
        top:28,
        right:-37,
        color: '#CC1414',
        fontSize:14,
        fontWeight:'400'
    },
    incorrectfirst:{
        top:53,
        right:-35,
        color: '#CC1414',
        fontSize:14,
        fontWeight:'400'
    },
    incorrectlast:{
        top:65,
        right:-35,
        color: '#CC1414',
        fontSize:14,
        fontWeight:'400'
    },
    ErrorPass:{
        fontSize:14,
        fontWeight:'400',
        alignSelf:'center',
        top:34,
        right:30
        
    },
    ErrorPass1:{
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top:35,
        right:90,
        color:'#050505CC'
    },
    ErrorPass1G:{
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 35,
        right: 90,
        color: '#268E6C'
    },
    ErrorPass2: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 36,
        right: 62,
        color: '#050505CC'
    },
    ErrorPass2G: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 36,
        right: 62,
        color: '#268E6C'
    },
    ErrorPass3: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 38,
        right: 62,
        color: '#050505CC'
    },
    ErrorPass3G: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 38,
        right: 62,
        color: '#268E6C'
    },
    ErrorPass4: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 39,
        right: 78,
        color: '#050505CC'
    },
    ErrorPass4G:{
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 39,
        right: 78,
        color: '#268E6C'
    },

    combtn1:{
        right:-25,
        top:17,
        fontSize:22

    },
    combtn2:{
        left:38,
        bottom:-5,
        fontSize:25

    },
    combtn1view:{
        top:6,
        right:12

    },
    combtn2view:{
        position:'relative',
        top:-3,
        right:4

    },
    combtnnewview:{
        top:-28, 
        left:-20

    },
    combtnnew:{
        fontSize:13

    },
    
    
})

