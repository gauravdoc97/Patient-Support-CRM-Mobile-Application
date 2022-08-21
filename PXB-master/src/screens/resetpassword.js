import  React, {useState, useEffect} from 'react';
import { ScrollView ,Button, View, StyleSheet ,Image, TouchableOpacity, Alert, TouchableHighlight} from 'react-native';
import { Appbar, Text, TextInput } from 'react-native-paper';

import { Formik, useFormik } from 'formik'
import * as yup from 'yup'


function resetpassword({ navigation, route }) {

    const [Code, setCode] = useState('+1')

    const [resetcode, setrestCode] = useState('');
    const [newpass, setnewPass] = useState('');
    const [confirmpass, setconfirmPass] = useState('');


    const [redenable1, setRedEnable1] = useState(false);
    const [redenable2, setRedEnable2] = useState(false);
    const [redenable3, setRedEnable3] = useState(false);



    const [isValidPass, setisValidPass] = useState(false);
    const [isValidPass1, setisValidPass1] = useState(false);
    const [isValidPass2, setisValidPass2] = useState(false);
    const [isValidPass3, setisValidPass3] = useState(false);
    const [isValidPass4, setisValidPass4] = useState(false);

    const [isValidPassone, setisValidPassone] = useState(false);
    const [isValidPasstwo, setisValidPasstwo] = useState(false);

    const [style1, setstyle1] = useState(false);
    const [style2, setstyle2] = useState(false);
    const [style3, setstyle3] = useState(false);
    const [style4, setstyle4] = useState(false);

    const [isSubmitting, isSetSubmitting] = useState(false);



useEffect (()=>{
 handleconfirm()
},[newpass,confirmpass])

    useEffect(() => {
        if (route.params?.item) {
            setCode(route.params.item)
        }
    }, [route.params?.item])

  

   
//////////Validation using YUP/////////////////////////////
    const loginValidationSchema = yup.object().shape({
        resetcode: yup
            .string()
            .min(5, ({ min }) => `Reset Code must be at least ${min} characters`)
            .required('Reset Code is Required'),
        confirmpass: yup
            .string()
            .matches(newpass, 'Password does not match') 
            ///////////important for matching direct string
            // .required('Confirm password is required'),
    })


    const handlecode = (val) => {
        if(val === "12345") {
         setisValidPassone(false);
         setRedEnable1(false);
        } 
        if(val !== "12345") {
          setisValidPassone(true);
          setRedEnable1(true)
        }
        if(val === ''){
            setisValidPassone(false);
            setRedEnable1(false);
        }

    }
    
    const handleconfirm = (val) => {
        if(val) {
            setRedEnable3(false);
            setisValidPasstwo(false)
        }
        if(val === newpass){
           setisValidPasstwo(false);
           setRedEnable3(false);
        } 
        if (val !== newpass){
            setisValidPasstwo(true);
            setRedEnable3(true);
        }
        

    }



///////ON_FOCUS_NEWPASSWORD//////////
    const fistvalid = () => {
        
        setisValidPass(true);
        setisValidPass1(true);
        setisValidPass2(true);
        setisValidPass3(true);
        setisValidPass4(true)
    }

    const fistvalid2 = () => {

        setisValidPass(false);
        setisValidPass1(false);
        setisValidPass2(false);
        setisValidPass3(false);
        setisValidPass4(false)
    }
    const fistvalid3 = () => {

        setisValidPass(false);
        setisValidPass1(false);
        setisValidPass2(false);
        setisValidPass3(false);
        setisValidPass4(false)
    }



///////////newPasswordvalidation/////////////
 const handlepass = (val) => {

     const exp = /[~!@#$%^&*]/;
     const alpha = /[A-Z]/;
     const gamma = /[a-z]/;

     if(val.trim().length >= 10 ) {
         setnewPass(val);
         setstyle1(true);
     }
     if (val.trim().length < 10 ) {
         setnewPass(val);
         setstyle1(false);
     }
     if (alpha.test(val) ){
         setnewPass(val);
         setstyle2(true);
     }
     if (!alpha.test(val)){
         setnewPass(val);
         setstyle2(false);
     }
     if (gamma.test(val)) {
         setnewPass(val);
         setstyle3(true);
     }
     if (!gamma.test(val)) {
         setnewPass(val);
         setstyle3(false);
     }
     if (exp.test(val)) {
         setnewPass(val);
         setstyle4(true);
     }
     if (!exp.test(val)) {
         setnewPass(val);
         setstyle4(false);
     }
     

 }





 ////////////////useFormik//////

const formik = useFormik({
    initialValues:{resetcode:'', confirmpass:''},
                validationSchema:loginValidationSchema,
                validateOnChange:isSubmitting,
                // enableReinitialize={true}
                onSubmit: values => {
                    isSetSubmitting(true);
                    navigation.navigate({
                        name: "passwordset",
                    });
                }

})

    return (
        
     <View style={{ flex: 1, backgroundColor:'#fff'}} >
       
            
            <ScrollView  scrollEnabled={true} >
                <View>
                    <Appbar.Header style={{ backgroundColor: '#034C81' }} >
                        <Appbar.Action color="white" icon="arrow-left" onPress={() => navigation.navigate('forgot')} />
                        <Image source={require('../../assets/images/headerimage.png')} style={styles.headerimage} />

                    </Appbar.Header>
                </View>
                <View>
                    <Text style={styles.text1} >Reset Password</Text>
                    <Text style={styles.text2} >A password reset code has been sent on{'\n'}                                        on SMS</Text>
                    <Text style={styles.text5} >{Code}</Text>
                    <Text style={styles.text3} >Did not receive Code?</Text>

                 <View>
                    {/* <TouchableOpacity style={styles.sms} onPress={() => navigation.navigate('passwordset')} > */}
                    <TouchableOpacity style={styles.sms} onPress={() => Alert.alert('Message Sent')} >
                         <Text style={styles.text4}>Resend SMS</Text>
                    </TouchableOpacity>
                 </View>
                    <View>
                        <TextInput 
                          mode="outlined" 
                          style={styles.textin1}
                        //   placeholder="Password Reset Code"
                          label="Password Reset Code"
                          keyboardType="numeric"
                        //   error={redenable1}
                          onFocus={() => fistvalid2()}
                        //   onChangeText={val => handlecode(val)}
                        onChangeText={formik.handleChange('resetcode')}
                        // onBlur={handleBlur('resetcode')}
                        value={formik.values.resetcode}
                        error={formik.errors.resetcode}
                        
                          />
                        {isValidPassone ? (
                            <Text style={styles.ErrorPassone} >Incorrect code</Text>)
                            : null}

                        { formik.errors.resetcode &&
                            <Text style={styles.ErrorPassone} >{formik.errors.resetcode}</Text>
                        }

                        <TextInput 
                          mode="outlined"  
                          style={styles.textin2} 
                          placeholder="New Password"
                          label="New Password"
                          error={redenable2}
                          secureTextEntry={true}
                          onFocus={()=> fistvalid()}
                          onChangeText={val => handlepass(val)}
                          />

                        {isValidPass ? (
                            <Text style={styles.ErrorPass} >The password will need to have atleast:</Text>)
                            : null}
                            
                        { isValidPass1 ? ( 
                            <Text style={ style1 ? styles.ErrorPass1G : styles.ErrorPass1}   >✓  10 characters</Text>
                        ) : null }   

                        { isValidPass2 ? (
                            <Text style={ style2 ? styles.ErrorPass2G : styles.ErrorPass2}   >✓  1 upper case character</Text>
                        ) : null }

                        { isValidPass3 ? (
                            <Text style={ style3 ? styles.ErrorPass3G : styles.ErrorPass3}   >✓  1  lower case character</Text>
                        ) : null }

                        {isValidPass4 ? (
                            <Text style={ style4 ? styles.ErrorPass4G : styles.ErrorPass4}   >✓  special character</Text>
                        ) : null }

                        <TextInput 
                          mode="outlined" 
                          style={styles.textin3} 
                          placeholder="Confirm Password"
                          label= "Confirm Password"
                          secureTextEntry={true}
                        //   error={redenable3}
                          onFocus={() => fistvalid3()}
                        //   onChangeText={val => handleconfirm(val)}
                            onChangeText={formik.handleChange('confirmpass')}
                            // onBlur={handleBlur('confirmpass')}
                            value={formik.values.confirmpass}
                            error={formik.errors.confirmpass}
                            // error={formik.errors.confirmpass || formik.errors.resetcode}

                          />

                        {/* {isValidPasstwo ? (
                            <Text style={styles.ErrorPasstwo} >Passwords do not match</Text>)
                            : null} */}

                        {formik.errors.confirmpass &&
                            <Text style={styles.ErrorPasstwo} >{formik.errors.confirmpass}</Text>
                        }

                        <TouchableHighlight  style={ (!formik.values.resetcode || !formik.values.confirmpass )  ? styles.resetbtndis   : styles.resetbtn} onPress={formik.handleSubmit}  >
                            <Text style={styles.resettext}>Reset</Text>
                        </TouchableHighlight>

                    </View>
                </View>
            </ScrollView>  
        
    </View>
    );
}

export default resetpassword;

const styles = StyleSheet.create({
    headerimage:{
        
            top: 0,
            left: 100,
            width: 80,
            height: 35
        },
        text1:{
            fontSize:24,
            fontWeight:'700',
            top:25,
            left:44,
            

        },
        text2:{
            fontSize: 16,
            fontWeight: '400',
            top:34,
            left:44

        },
        text3:{
            fontSize: 14,
            fontWeight: '400',
            top:37,
            left:44
        },
        text4:{
            color:'#5382F6',
            fontSize: 14,
            fontWeight: '700',
            top:20,
            left:180
        },
        text5:{
            fontSize:16,
            fontWeight:'700',
            top:15,
            left:50,

        },
        textin1:{
            top:45,
            width:'77%',
            left:40,
            backgroundColor:'#fff'
        

        },
        textin2:{
            top:55,
            width: '77%',
            left: 40,
            backgroundColor: '#fff'


        },
        textin3:{
            top:70,
            width: '77%',
            left: 40,
            backgroundColor: '#fff'


        },
        resetbtn: {
        width: '78%',
        height: 53,
        top: 90,
        left: 38,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10

        },
    resetbtndis: {
        width: '78%',
        height: 53,
        top: 90,
        left: 38,
        backgroundColor: "#DDDD",
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
        left: 120


    },
    ErrorPass:{
        fontSize:14,
        fontWeight:'400',
        alignSelf:'center',
        top:65,
        right:20
        
    },
    ErrorPass1:{
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top:69,
        right:80,
        color:'#050505CC'
    },
    ErrorPass1G:{
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 69,
        right: 80,
        color: '#268E6C'
    },
    ErrorPass2: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 70,
        right: 52,
        color: '#050505CC'
    },
    ErrorPass2G: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 70,
        right: 52,
        color: '#268E6C'
    },
    ErrorPass3: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 71,
        right: 52,
        color: '#050505CC'
    },
    ErrorPass3G: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 71,
        right: 52,
        color: '#268E6C'
    },
    ErrorPass4: {
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 72,
        right: 68,
        color: '#050505CC'
    },
    ErrorPass4G:{
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'center',
        top: 71,
        right: 68,
        color: '#268E6C'
    },
    ErrorPassone:{
        fontSize:14,
        fontWeight:'400',
        color:'#CC1414',
        top:50,
        left:42
    },
    ErrorPasstwo:{
        fontSize: 14,
        fontWeight: '400',
        color: '#CC1414',
        top:75,
        left:42

    },
    sms:{
        top:0,
        right:-5
    }
    

})