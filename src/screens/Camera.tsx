// Modules
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera'; 
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box, IconButton, VStack } from '@react-native-material/core';

// Hooks
import useCustomPalette from '../hooks/useCustomPalette';

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
  const { darkGray } = useCustomPalette()
  return (
    <Box style={{ ...styles.buttonContainer, backgroundColor:darkGray }}>
      <IconButton color='white' icon={props => <Icon name="flash" {...props} />} />
      <TouchableOpacity style={styles.takePhotoButton}/>
      <IconButton color='white' icon={props => <Icon name="arrow-u-left-top" {...props} />} />
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