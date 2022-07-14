// Modules
import React from 'react';
import { TextInput } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

// Types
import { CustomTextInputProps } from './CustomTextField';

export default function CustomPasswordField (props:CustomTextInputProps) {

  const { 
    title, 
    inputName, 
    isLoading,
    formValues,
    setFormValues,
    icon
  } = props

  return (
    <TextInput 
      variant='outlined' 
      label={title} 
      secureTextEntry={true} 
      style={{ marginBottom:10 }}
      editable={!isLoading}
      leading={props => icon && <Icon name={icon as any} {...props} />} 
      value={formValues[inputName].value}
      onChangeText={(text) => setFormValues({ ...formValues, [inputName]:{ error:'', value:text }})}
    />
  )
}
