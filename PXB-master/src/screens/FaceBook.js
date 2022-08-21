import React from "react";
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import { LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { Button } from "react-native-paper";



export default function FaceBook({navigation}) {


// const loginWithFacebook = () => {
//   LoginManager.logInWithPermissions(["public_profile", "email"]).then(
//     function(result) {
//       if (result.isCancelled) {
//         console.log("==> Login cancelled");
//       } else {
//         console.log(
//           "==> Login success with permissions: " +
//             result.grantedPermissions.toString()
//         );
//       }
//      },
//      function(error) {
//       console.log("==> Login fail with error: " + error);
//      }
//    );
// }
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
       <SafeAreaView>

           <Button style={{top:120}} onPress={onFbLogin}>
                  <Text> Login With Facebook </Text>          
           </Button>

           {/* <LoginButton
              
           
           
            onLoginFinished={(error, result)=> {
                if(error) {
                    console.log('login has error: ' + result.error);
                } else if (result.isCancelled) {
                    console.log('login is cancelled.');
                } else {
                    AccessToken.getCurrentAccessToken().then((date)=> {
                        console.log(data.AccessToken.toString());
                    });
                }
            }}
            onLoginFinished={()=> console.log('logout')}
        
           /> */}

          <TouchableOpacity style={{top:190, right:-176}} onPress={()=>navigation.navigate('login')}>
              <Text>BACK</Text>
        </TouchableOpacity> 



          
       </SafeAreaView>
    );
};

