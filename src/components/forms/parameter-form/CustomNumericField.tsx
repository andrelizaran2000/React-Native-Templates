// Modules
import React from 'react';
import { TextInput } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

// Types
import { IconOptions } from '../ParameterForm';
import { CustomTextInputProps } from './CustomTextField';

type Props = {
  icon:IconOptions | undefined
} & CustomTextInputProps

export default function CustomNumericField (props:Props) {

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
      leading={props => icon && <Icon name={icon} {...props} />} 
      style={{ marginBottom:10 }}
      editable={!isLoading}
      value={formValues[inputName].value as string}
      onChangeText={(text) => setFormValues({ ...formValues, [inputName]:{ value:text, error:'' }})}
    />
  )
}
