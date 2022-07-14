// Modules
import React from 'react'
import { TextInput } from '@react-native-material/core'

// Types
import { CustomTextInputProps } from './CustomTextField';

type Props = {
  title:string;
}

export default function CustomPasswordField (props:CustomTextInputProps) {

  const { 
    title, 
    inputName, 
    isLoading,
    formValues,
    setFormValues
  } = props

  return (
    <TextInput 
      variant='outlined' 
      label={title} 
      secureTextEntry={true} 
      style={{ marginBottom:10 }}
      editable={!isLoading}
      value={formValues[inputName].value as string}
      onChangeText={(text) => setFormValues({ ...formValues, [inputName]:{ value:text, error:'' }})}
    />
  )
}
