import React from 'react';
import AppNavigator from './src/navigation/rootnavigator';
import {
  Provider as PaperProvider, 
  DefaultTheme, 
  configureFonts
} from 'react-native-paper';
import theme from './src/theme/theme';

 function App() {
  return(
    <PaperProvider theme = {theme} >
      <AppNavigator />
    </PaperProvider>

      
     
    
  )
}

export default App



























// import React, {useState, useEffect} from 'react';
// import {  TouchableHighlight,Image, TouchableOpacity,StyleSheet, Text, View } from 'react-native';
// import { TextInput, Button } from 'react-native-paper';
// import { create } from 'react-test-renderer';
// import Logo from './src/components/Logo';
// import Panel from './src/components/Panel';
// import AppButton from './src/components/AppButton';
// import SplashScreen from 'react-native-splash-screen';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import Input from './src/components/Input';
// export default function App() {
//   const [Number, setNumber] = useState(' ');
//   const [Password, setPassword] = useState(' ');

//   useEffect(()=>{
//   //  if(SplashScreen){
//   //    SplashScreen.hide();
//   //  } 
//    SplashScreen && SplashScreen.hide()
//      ///////this will run only first time when app started
//   },[])
  

//   const onButtonPressed = () => {
//     //////body//////
//   }
//   return(
//     <View style={styles.container}>
//       <Logo/>
//       <View style={styles.inputViewnew1} >
//         <Button color="black" mode= "outlined" style={styles.combtn} >
//           <Text>+1</Text>
//         </Button>
//         {/* <Input
//           style={styles.inpuTextsymbol}
//           label="+1↓"
//         /> */}
//       </View>
//       <View style={styles.inputViewnew}>
//         <Input
//           style = {styles.inpuText}
//           mode="outlined"
//           label="Mobile Number"
//           placeholderTextColor="#848484"
//           keyboardType="numeric"
//           onChangeText ={val=> {setNumber(val)}}
//         />
//       </View>
//       <View style={styles.inputView}>
//        <Input
//        style = {styles.inpuText}
//        secureTextEntry={true}
//        mode="outlined"
//        label="Password"
//        keyboardType="default"
//        right = {<TextInput.Icon name = "eye"/>}
//        placeholderTextColor="#848484"
//        onChangeText={val=> {setPassword(val)}}
//        />
//       </View>
//       <Text style={styles.incorrectText}>Incorrect Mobile Number/Password.Try again</Text>
//       <View style={styles.forgotPassword}>
//         <TouchableOpacity>
//           <Text style={styles.forgot}>Forgot password?</Text>
//         </TouchableOpacity>
//       </View>
//       <AppButton onpress={console.log()} title="Log In" />
//       {/* <TouchableOpacity style= {styles.button}>
//           <Text style={styles.text}>Log In</Text>
//       </TouchableOpacity> */}
//       <View style={styles.orlineR}>

//       </View>
//       <View style={styles.orlineL}>

//       </View>
//       <View style={styles.orlogin}>
//         <Text style={styles.orlogintext} >OR log in with</Text>
//       </View >

//       <View style={styles.loginWithBar}>
//         <TouchableOpacity style={styles.iconButton}>
//           <Icon 
//             name='facebook' 
//             type='font-awesome' 
//             size={50} 
//             color='#1877F2'
//          />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconButton}>
//           <Icon
//             name='google'
//             type='font-awesome'
//             size={47}
//             color='#EB4335'
//           />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconButton}>
//           <Icon 
//            name='apple' 
//            type='font-awesome' 
//            size={50} 
//            color='black' />
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.fb} >Facebook</Text>
//       <Text style={styles.go} >Google</Text>
//       <Text style={styles.ap} >Apple</Text>
//       {/* <Text style={styles.iconline}>–––––––––––––––––––––––––––––––––––––––––––––––––––</Text> */}
//     <View style={styles.line}>
//     <View>
//     </View>  
//       <Text style={styles.lastline1}>New to PX Boost?</Text>
//       <TouchableOpacity>
//           <Text style={styles.lastline2}>Register</Text>
//       </TouchableOpacity>
//     </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor:'white',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   imagecontainer: {
//    width:180,
//    height:120,
//    marginBottom:490
//   },
//   inputView: {
    
//     width: "85%",
//     height: 45,
//     marginBottom: 20,
//     justifyContent: "center",
//     padding: 20,
//     top:-50
//   },
//   inputViewnew: {

//     width: "65%",
    
//     height: 45,
//     marginBottom: 20,
//     justifyContent: "center",
//     padding: 20,
//     top: -50,
//     left:40
//   },
//   inputViewnew1:{
//     right:123,
//     top:1,
//     width:'12%'


//   },
//   combtn:{
//     borderWidth:1.2,
//     height:50,
//   },
//   inpuText: {
//     height: 50,
//     color: "white"
   

//   },
//   forgotPassword: {
//     left:60,
//     bottom:60
//   },
//   forgot:{
//     color:'#5382F6',
//     left:28,
//     fontWeight:"600",
//     top:26
//   },
//   text: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     right:-90,
//     bottom:-40
//   },
//   button: {
//     width: '70%',
//     marginVertical: 10,
//     paddingVertical: 2,
//     bottom:10,
//     color:'#D8D8D8'
//   },
//   orlogin:{
//     top:70,
//   },
//   orlogintext:{
//     fontSize:13,
  
//   },
//   loginWithBar: {
//     display: 'flex',
//     justifyContent:'center',
//     flexDirection: 'row',
//     marginTop: 20,
//   },
//   iconButton: {
//     backgroundColor: 'white',
//     padding: 15,
//     marginHorizontal:15,
//     borderRadius: 100,
//     top:70
//   },
//   iconline: {
//     top:90,
//     fontSize:9,
    
//   },
//   lastline1:{
//     top:97,
//     left:59,
//     fontSize:12
//   },
//   lastline2: {
//     left:169,
//     top:80,
//     fontSize:15,
//     fontWeight:'bold',
//     color:'#5382F6'
//   },
//   incorrectText: {
//     color:'#CC1414',
//     bottom:55,
//     fontSize:12,
//     right:20
//   },
//   fb:{
//     right:110,
//     top:60
//   },
//   go:{
//      top:42
//   },
//   ap:{
//     left: 110,
//     top: 27
//   },
//   line:{
//     borderBottomColor: 'black',
//     borderBottomWidth: 0.2,
//     width:'80%',
//     top:10
//   },
//   orlineR:{
//     borderBottomColor: 'black',
//     borderBottomWidth: 0.3,
//     width:'23%',
//     left:110,
//     top:80
//   },
//   orlineL:{
//     borderBottomColor: 'black',
//     borderBottomWidth: 0.3,
//     width:'23%',
//     right:110,
//     top:80
//   }
  
// })