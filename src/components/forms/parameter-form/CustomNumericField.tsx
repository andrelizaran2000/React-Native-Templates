// Modules
import React from 'react';
import { TextInput } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

// Types
import { CustomTextInputProps } from './CustomTextField';

export default function CustomNumericField (props:CustomTextInputProps) {

  const { 
    title, 
    inputName, 
    isLoading,
    icon,
    formValues,
    setFormValues
  } = props

  return (
    <TextInput 
      variant='outlined' 
      label={title} 
      keyboardType='number-pad' 
      leading={props => icon && <Icon name={icon as any} {...props} />} 
      style={{ marginBottom:10 }}
      editable={!isLoading}
    />
  )
}
