// Modules
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box, IconButton, Text, VStack } from '@react-native-material/core';

// H1ooks
import useCustomPalette from '../hooks/useCustomPalette'

// Types
import { DrawerNavigation } from '../router/DrawerRouter';

export default function ResultImage() {
  const { darkGray, border } = useCustomPalette();
  const route = useRoute();
  return (
    <VStack>
      <Box style={{ height:'15%', backgroundColor:darkGray }}/>
      <Image
        style={{ height:'70%' }}
        /* @ts-ignore */
        source={{ uri:route.params.uri }}
      />
      <ButtonContainer/>
    </VStack>
  )
}

function ButtonContainer () {
  const { darkGray } = useCustomPalette();
  const navigation = useNavigation<DrawerNavigation>();
  return (
    <Box style={{ ...styles.buttonContainer, backgroundColor:darkGray }}>
      <IconButton 
        color='white' 
        icon={props => <Icon name="reload" {...props} />} 
        onPress={() => navigation.navigate('camera')}
      />
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