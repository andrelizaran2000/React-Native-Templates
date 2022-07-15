// Modules
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Sign from '../screens/Sign';
import DrawerRouter from './DrawerRouter';
import { Provider } from '@react-native-material/core';

const Stack = createStackNavigator();

export default function StackDrawer() {
  return (
    <Provider>
      <Stack.Navigator screenOptions={{  }}>
        <Stack.Screen name='logged' options={{ headerShown:false }} component={DrawerRouter}/>
        <Stack.Screen name="sign" options={{ title:'Iniciar sesión' }} component={Sign}/>
      </Stack.Navigator>
    </Provider>
  );
}
