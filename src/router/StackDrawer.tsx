// Modules
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Sign from '../screens/Sign';
import DrawerRouter from './DrawerRouter';

const Stack = createStackNavigator();

export default function StackDrawer() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='logged' options={{ headerShown:false }} component={DrawerRouter}/>
      <Stack.Screen name="sign" options={{ title:'Iniciar sesión' }} component={Sign}/>
    </Stack.Navigator>
  );
}
