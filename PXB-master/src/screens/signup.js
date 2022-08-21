import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View, Alert} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from "../components/CustomButton";
import Logo from "../components/logo";

import { LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';


 function signup({navigation}) {

/////////FACEBOOK_LOGIN//////////
const fblogin = (resCallback) => {
  LoginManager.logOut();
  return LoginManager.logInWithPermissions(['email','public_profile']).then(
    result => {
      console.log("fb result====>", result);
      if (result.declinedPermissions && result.declinedPermissions.includes("email")){
        resCallback({message: "Email is Required"})
      }
      if(result.isCancelled){
        console.log("error")
      } else {
        const infoRequest = new GraphRequest(
          '/me?fields=email,name',
          null,
          resCallback
        );
        new GraphRequestManager().addRequest(infoRequest).start()
      }
    },
    function(error) {
      console.log("Login fail with error:" + error)
    }
  )
}
const onFbLogin = async()=>{
  try {
    await fblogin(_responseInfoCallBack)
  } catch (error) {
    
console.log("error raised" , error)  
}
}

_responseInfoCallBack = async(error, result) => {
  if(error){
    console.log("error top", error)
    return;
  }
  else{
    const userData = result 
    console.log("fb data +++++++", userData )
  }

}



     return(
         <View style={styles.container}>
             <View style={styles.imageview}>
                <Logo/>
             </View>
             
             <TouchableOpacity style={styles.resetbtn} onPress={() => navigation.navigate('page')} >
                 <Text style={styles.resettext}>Register with Mobile Number</Text>
             </TouchableOpacity>
             <View style={styles.orline} >
                 <Text >OR Register with</Text>
             </View >
             <View style={styles.orlineR}>

             </View>
             <View style={styles.orlineL}>

             </View>
            <View>
             <View style={styles.loginWithBar}>
                 {/* <TouchableOpacity style={styles.iconButton}> */}
                     <Icon
                         style={styles.iconButton}
                         name='facebook'
                         type='font-awesome'
                         size={50}
                         color='#1877F2'
                         onPress={() => onFbLogin()}
                        //  onPress={()=>Alert.alert('Enter Facebook Credentials')}
                     />
                 {/* </TouchableOpacity> */}
                 <TouchableOpacity style={styles.iconButton} onPress={()=>Alert.alert('Enter Google Credentials')} >
                     <Image source={require('../../assets/images/googleLogo.png')} style={styles.combtn3} />
                 </TouchableOpacity>
                 {/* <TouchableOpacity style={styles.iconButton}> */}
                     <Icon
                         style={styles.iconButton}
                         name='apple'
                         type='font-awesome'
                         size={50}
                         color='black'
                        onPress={()=>Alert.alert('Enter Apple Credentials')}
                          />
                 {/* </TouchableOpacity> */}
             </View>
             </View> 
             <Text style={styles.fb} >Facebook</Text>
             <Text style={styles.go} >Google</Text>
             <Text style={styles.ap} >Apple</Text>
             <View style={styles.line}>
                 <View>
                 </View>
                 <View style={{top:60}}>
                        <Text style={styles.text1}>By Continuing, you agree to the</Text>
                        <TouchableOpacity style={styles.textone} onPress={()=>Alert.alert('Terms & Conditions')} >
                        <Text style={styles.text2} >Terms & Conditions</Text>
                        </TouchableOpacity>
                        <Text style={styles.text3}  >and</Text>
                     <TouchableOpacity style={styles.texttwo} onPress={()=>Alert.alert('Privacy Policy')} >
                         <Text style={styles.text4} >Privacy Policy</Text>
                     </TouchableOpacity>
                     
                 </View>
                 <View style={styles.baseline} >
                     <Text>Already PX Boost?</Text>
                     <TouchableOpacity style={styles.btntext5} onPress={() => navigation.navigate('login')} >
                         <Text style={styles.text5} >Log In</Text>
                     </TouchableOpacity>
                 </View>
             </View>   
         </View>
     );

 }

 export default signup;


const styles = StyleSheet.create({

    container:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#fff'
    },
    loginWithBar: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
        top:-80
    },
    iconButton: {
        backgroundColor: 'white',
        padding: 15,
        marginHorizontal: 15,
        borderRadius: 100,
        top: 50,
        left: 4
    },
    combtn3: {
        resizeMode: 'contain',
        height: 40,
        top: 8

    },
    fb: {
        right: 115,
        top: -34,
    },
    go: {
        top: -51,
        left: 5
    },
    ap: {
        left: 122,
        top: -69,
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.2,
        width: '80%',
        top: -130
    },
    baseline: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 304

    },
    btntext5: {
        position: 'relative',
        right:-5,
        top:-1
    },
    text5: {
        color: '#5382F6',
        fontSize: 14,
        fontWeight: '600'
    },
    orlineR: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.3,
        width: '23%',
        left: 110,
        top: -18
    },
    orlineL: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.3,
        width: '23%',
        right: 110,
        top: -18
    },
    orline:{
        top:-10
    },
    appButtonContainer: {
        top: 15,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 13,
        paddingHorizontal: 123,
        width:'75%',
        height:53,
    },
    resetbtn: {
        width: '77%',
        height: 53,
        top: -50,
        left: -1,
        backgroundColor: "#5382F6",
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10

    },
    resettext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
        fontWeight: '700',
        top: 15,
        left: 55
    },
    text1:{
        top:35,
        left:-13,
        fontSize:14

    },
    text2:{
        top:18,
        left:195,
        color:'#5382F6',
        fontSize: 14


    },
    text3:{
        top:20,
        right:-100,
        fontSize: 14


    },
    text4:{
        top:3,
        left:130,
        color:'#5382F6',
        fontSize: 14




    },
    textone:{

    },
    texttwo:{

    },
    imageview:{
        top:-35

    }
    
})