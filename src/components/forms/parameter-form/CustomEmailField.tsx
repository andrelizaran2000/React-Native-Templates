// Modules
import React from 'react';
import { TextInput } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

// Types
import { IconOptions } from './types';
import { CustomTextInputProps } from './CustomTextField';

export default function CustomEmailField (props:CustomTextInputProps) {

  const { 
    title, 
    inputName, 
    isLoading,
    formValues,
    setFormValues,
    required,
    icon
  } = props

  return (
    <TextInput 
      variant='outlined' 
      label={title} 
      keyboardType='email-address' 
      editable={!isLoading}
      style={{ marginBottom:10 }}
      leading={props => icon && <Icon name={icon as IconOptions} {...props} />} 
      value={formValues[inputName].value}
      onChangeText={(text) => setFormValues({ ...formValues, [inputName]:{ error:'', value:text }})}
    />
  )
}
