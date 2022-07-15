// Modules
import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box, IconButton, VStack } from '@react-native-material/core';

// H1ooks
import useCustomPalette from '../hooks/useCustomPalette'

export default function ResultImage() {
  const { darkGray, border } = useCustomPalette()
  return (
    <VStack>
      <Box style={{ height:'15%', backgroundColor:darkGray }}/>
      <Box style={{ height:'70%', backgroundColor:border }}/>
      <ButtonContainer/>
    </VStack>
  )
}

function ButtonContainer () {
  const { darkGray } = useCustomPalette()
  return (
    <Box style={{ ...styles.buttonContainer, backgroundColor:darkGray }}>
      <IconButton color='white' icon={props => <Icon name="reload" {...props} />} />
      <IconButton color='white' icon={props => <Icon name="check" {...props} />} />
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
})