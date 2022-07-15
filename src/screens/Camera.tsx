// Modules
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera'; 
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box, IconButton, VStack } from '@react-native-material/core';

// Hooks
import useCustomPalette from '../hooks/useCustomPalette';
import { useNavigation } from '@react-navigation/native';

// Types
import { DrawerNavigation } from '../router/DrawerRouter';

export default function CameraScreen () {
  const { darkGray } = useCustomPalette()
  return (
    <VStack>
      <Box style={{ height:'15%', backgroundColor:darkGray }}></Box>
      <Camera style={{ height:'70%' }} type={CameraType.back}/>
      <ButtonContainers/>
    </VStack>
  )
}

function ButtonContainers () {

  const { darkGray } = useCustomPalette();
  const navigation = useNavigation<DrawerNavigation>();

  function redirectToResultImage () {
    navigation.navigate('resultImage', {
      uri:'https://play-lh.googleusercontent.com/6f6MrwfRIEnR-OIKIt_O3VdplItbaMqtqgCNSOxcfVMCKGKsOdBK5XcI6HZpjssnB2Y',
      base64:''
    })
  }

  return (
    <Box style={{ ...styles.buttonContainer, backgroundColor:darkGray }}>
      <IconButton 
        color='white' 
        icon={props => <Icon name="arrow-u-left-top" {...props} />} 
        onPress={() => navigation.goBack()}
      />
      <TouchableOpacity style={styles.takePhotoButton} onPress={redirectToResultImage}/>
      <IconButton color='white' icon={props => <Icon name="flash" {...props} />} />
    </Box>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    height:'15%', 
    justifyContent:'space-between', 
    flexDirection:'row', 
    alignItems:'center', 
    padding:15
  },
  takePhotoButton: {
    borderRadius:100, 
    backgroundColor:'white', 
    height:60, 
    width:60
  }
});