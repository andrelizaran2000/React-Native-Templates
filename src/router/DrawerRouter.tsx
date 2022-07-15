// Modules
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import Products from '../screens/Products';
import AddNewProduct from '../screens/AddNewProduct';
import Camera from '../screens/Camera';
import ResultImage from '../screens/ResultImage';

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
        name="add-product" 
        options={{ title:'Agregar producto' }} 
        component={AddNewProduct} 
      />
      <Drawer.Screen 
        name="camera" 
        options={{ title:'Cámara', headerShown:false, swipeEnabled:false }} 
        component={Camera} 
      />
      <Drawer.Screen 
        name="result-image" 
        options={{ title:'Resultado', headerShown:false, swipeEnabled:false }} 
        component={ResultImage} 
      />
    </Drawer.Navigator>
  );
}

