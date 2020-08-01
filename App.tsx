import React from 'react';
import {UtilityThemeProvider, Box, Text} from 'react-native-design-utility';
import {theme} from './src/constants/theme.js'


const App = () => {

  return(
    <UtilityThemeProvider theme={theme}>
      <Box f={1} center>
        <Text>
            helllo worlddd
        </Text>
      </Box>

    </UtilityThemeProvider>

  )
}

export default App;