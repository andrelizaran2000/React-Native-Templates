// Modules
import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

// Routers
import StackDrawer from './src/router/StackDrawer';

// Hooks
import useCustomPalette from './src/hooks/useCustomPalette';

// Store
import { store } from './src/store/store';

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
      <Provider store={store}>
        <StackDrawer/>
      </Provider>
    </NavigationContainer>
  )
}
