// Modules
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import Products from '../screens/Products';
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
        name="add-product" 
        options={{ title:'Agregar producto' }} 
        component={AddNewProduct} 
      />
    </Drawer.Navigator>
  );
}

