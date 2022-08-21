import * as React from 'react';
import {
    Provider as PaperProvider, DefaultTheme, configureFonts
} from 'react-native-paper';

const fontConfig = {

    ios: {
        regular: {
            fontFamily: 'Lato-Regular',
            fontWeight: 'normal',
        }
    },
    android: {
        regular: {
            fontFamily: 'Lato-Regular',
            fontWeight: 'normal',
        },
    }
};


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#5382F6',       ///// primary
        accent: '#f1c40f',
        surface: '#618CEF',    //////containertype
        error: '#CC1414',
        // text:'white'         //////text input colour 
    },
    fonts: configureFonts(fontConfig)
};

export default theme 