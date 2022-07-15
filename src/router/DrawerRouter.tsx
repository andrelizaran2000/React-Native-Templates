// Modules
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Avatar, HStack, Text, VStack } from '@react-native-material/core';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList, DrawerNavigationProp } from '@react-navigation/drawer';

// Screens
import Camera from '../screens/Camera';
import Products from '../screens/Products';
import ResultImage from '../screens/ResultImage';
import AddNewProduct from '../screens/AddNewProduct';

// Hooks
import useSelectors from '../hooks/useSelectors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export type RootStackParamList = {
  products: undefined;
  addProduct: undefined;
  camera: undefined;
  resultImage: {
    uri:string;
    base64:string;
  }
};  

export type DrawerNavigation = DrawerNavigationProp<RootStackParamList>;

const Drawer = createDrawerNavigator();
const windowHeight = Dimensions.get('window').height;
 
export default function DrawerRouter() {
  return (
    <Drawer.Navigator screenOptions={{ headerTintColor: 'white' }} drawerContent={(props) => <CustomDrawer {...props} />}>
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

function CustomDrawer (props: DrawerContentComponentProps) {

  const { user } = useSelectors();
  const { state, ...rest } = props;
  
  const newState = { ...state }
  newState.routes = newState.routes.filter(item => (item.name !== 'camera' && item.name !== 'resultImage'))

  return (
    <DrawerContentScrollView {...props} >
      <VStack style={{ justifyContent:'space-between', height:(windowHeight-40) }}>

        <VStack>
          <VStack style={{ padding:15 }}>
            <HStack style={{ alignItems:'center', marginBottom:15 }}>
              <Avatar icon={props => <Icon name="account" {...props} />} color='white'/>
              <Text color='white' style={{ marginLeft:20 }}>{user.displayName}</Text>
            </HStack>
          </VStack>
          {/* <DrawerItemList state={newState} {...rest}/> */}
          <DrawerItemList {...props}/>
        </VStack>

        <TouchableOpacity>
          <HStack style={{ padding:15, alignItems:'center' }}>
            <Icon color='white' name="logout" size={24} style={{ paddingRight:15 }}/>
            <Text color='white' variant='subtitle2'>Cerrar sesión</Text>
          </HStack>
        </TouchableOpacity>

      </VStack>
    </DrawerContentScrollView>
  )
}