// Modules
import React from 'react'
import { TextInput } from '@react-native-material/core'
import { CustomTextInputProps } from './CustomTextField'

export default function CustomEmailField (props:CustomTextInputProps) {

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
      keyboardType='email-address' 
      editable={!isLoading}
      style={{ marginBottom:10 }}
      value={formValues[inputName].value as string}
      onChangeText={(text) => setFormValues({ ...formValues, [inputName]:{ value:text, error:'' }})}
    />
  )
}
