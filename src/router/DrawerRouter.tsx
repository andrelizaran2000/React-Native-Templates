// Modules
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import Camera from '../screens/Camera';
import Products from '../screens/Products';
import ResultImage from '../screens/ResultImage';
import AddNewProduct from '../screens/AddNewProduct';

const Drawer = createDrawerNavigator();
 
export default function DrawerRouter() {
  return (
    <Drawer.Navigator screenOptions={{ headerTintColor: 'white', }}>
      <Drawer.Screen 
        name="products" 
        options={{ title:'Productos disponibles' }} 
        component={Products} 
      />
      <Drawer.Screen 
        name="addProduct" 
        options={{ title:'Agregar producto' }} 
        component={AddNewProduct} 
      />
      <Drawer.Screen 
        name="camera" 
        options={{ title:'Cámara', headerShown:false, swipeEnabled:false }} 
        component={Camera} 
      />
      <Drawer.Screen 
        name="resultImage" 
        options={{ title:'Resultado', headerShown:false, swipeEnabled:false }} 
        component={ResultImage} 
      />
    </Drawer.Navigator>
  );
}

