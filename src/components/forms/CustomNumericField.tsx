// Modules
import React from 'react';
import { TextInput } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

// Types
import { CommonFieldProps } from './CustomTextField';

export default function CustomNumericField (props:CommonFieldProps) {

  const {
    isLoading,
    values,
    setValue
  } = props;
  
  console.log(values)

  return (
    <TextInput 
      variant='outlined'
      editable={!isLoading}
      value={values.value}
      onChangeText={(text) => setValue(values.inputName, text)}
      label={values.label}
      keyboardType='numeric'
      style={{ marginBottom:10 }}
      leading={props => values.icon ? <Icon name={values.icon} {...props} /> : undefined}
    />
  )
}