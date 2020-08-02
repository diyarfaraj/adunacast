import 'react-native-gesture-handler';
import React from 'react';
import {UtilityThemeProvider, Box, Text} from 'react-native-design-utility';
import { NavigationContainer } from '@react-navigation/native';

import {theme} from "./src/constants/theme.js"
import MainStackNavigator from './src/navigators/MainStackNavigator';


const App = () => {

  return(
    <UtilityThemeProvider theme={theme} >
      
     <NavigationContainer>
       <MainStackNavigator/>
     </NavigationContainer>

    </UtilityThemeProvider>

  )
}

export default App;