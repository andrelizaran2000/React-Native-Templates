// Modules
import React from 'react'
import { TextInput } from '@react-native-material/core'

export type CustomTextInputProps = {
  title:string
  required:boolean;
  isLoading:boolean;
  inputName:string;
  formValues: any;
  setFormValues: React.Dispatch<any>;
}

export default function CustomTextField (props:CustomTextInputProps) {

  const { 
    title, 
    isLoading,
    formValues,
    setFormValues,
    inputName
  } = props

  return (
    <TextInput 
      variant='outlined' 
      label={title} 
      style={{ marginBottom:10 }}
      editable={!isLoading}
      value={formValues[inputName].value as string}
      onChangeText={(text) => setFormValues({ ...formValues, [inputName]:{ value:text, error:'' }})}
      helperText={formValues[inputName].error || undefined}
    />
  )
}
