// Modules
import React from 'react';
import { TextInput } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export type CustomTextInputProps = {
  title:string
  required:boolean;
  isLoading:boolean;
  inputName:string;
  formValues: any;
  setFormValues: React.Dispatch<any>;
  icon?:string;
}

export default function CustomTextField (props:CustomTextInputProps) {

  const { 
    title, 
    isLoading,
    formValues,
    setFormValues,
    inputName,
    icon
  } = props

  return (
    <TextInput 
      variant='outlined' 
      label={title} 
      style={{ marginBottom:10 }}
      editable={!isLoading}
      leading={props => icon && <Icon name={icon as any} {...props} />} 
      value={formValues[inputName].value}
      onChangeText={(text) => setFormValues({ ...formValues, [inputName]:{ error:'', value:text }})}
    />
  )
}
