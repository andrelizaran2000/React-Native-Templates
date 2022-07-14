// Modules
import React from 'react'
import Checkbox from 'expo-checkbox';
import { HStack, Text } from '@react-native-material/core';

// Hooks
import useCustomPalette from '../../../hooks/useCustomPalette';

type CustomCheckBoxProps = {
  title:string;
}

export default  function CustomCheckBox ({ title }:CustomCheckBoxProps) {
  const { primary } = useCustomPalette();
  return (
    <HStack spacing={10}>
      <Text>{title}</Text>
      <Checkbox 
        value={true} 
        onValueChange={() => {}} 
        color={primary}
      />
    </HStack>
  )
}
