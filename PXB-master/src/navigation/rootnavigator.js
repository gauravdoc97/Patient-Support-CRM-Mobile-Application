
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from '../screens/login';
import selectcountry from '../screens/selectcountry';
import forgot from '../screens/forgot';
import resetpassword from '../screens/resetpassword';
import passwordset from '../screens/passwordset';
import dailcode from '../screens/dailcode'; 
import signup from '../screens/signup';
import page from '../screens/page';
import dailcode2 from '../screens/dailcode2';
import mobileverification from '../screens/mobileverification';
import optionalverification from '../screens/optionalverification';
import verificationsuccessful from '../screens/verificationsuccessful';
import profilepicture from '../screens/profilepicture';
import FaceBook from '../screens/FaceBook';



const Stack = createNativeStackNavigator();

function rootnavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                   headerShown: false
              }} 
              >
                <Stack.Screen name="login" component={login} />
                <Stack.Screen name="facebook" component={FaceBook} />

                <Stack.Screen name="country" component={selectcountry} />
                <Stack.Screen name="signup" component={signup} />
                <Stack.Screen name="dailcode" component={dailcode} />
                <Stack.Screen name="dailcode2" component={dailcode2} />
                <Stack.Screen name="forgot" component={forgot} />
                <Stack.Screen name="page" component={page} />
                <Stack.Screen name="resetpassword" component={resetpassword} />
                <Stack.Screen name="mobile" component={mobileverification} />
                <Stack.Screen name="optional" component={optionalverification} />
                <Stack.Screen name="passwordset" component={passwordset} />
                <Stack.Screen name="verification" component={verificationsuccessful} />
                <Stack.Screen name="profilepicture" component={profilepicture} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default rootnavigator;