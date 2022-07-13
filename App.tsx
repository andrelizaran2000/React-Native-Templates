// Modules
import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

// Routers
import StackDrawer from './src/router/StackDrawer';
import useCustomPalette from './src/utils/useCustomPalette';
import { StatusBar } from 'react-native';

export default function App() {

  const { actionBar } = useCustomPalette()

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      card: actionBar,
      text: 'white',
    },
  };
  
  return ( 
    <NavigationContainer theme={MyTheme}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor={actionBar}
      />
      <StackDrawer/>
    </NavigationContainer>
  )
}
