// Modules
import React from 'react';
import { TextInput } from '@react-native-material/core';

// Hooks
import { FormValuesProps } from '../../hooks/useForm';

export type CommonFieldProps = {
  isLoading:boolean;
  values:FormValuesProps;
  setValue:(inputName: string, text: string) => void;
}

export default function CustomTextField (props:CommonFieldProps) {

  const {
    isLoading,
    values,
    setValue
  } = props;

  return (
    <TextInput 
      variant='outlined'
      editable={!isLoading}
      value={values.value}
      onChangeText={(text) => setValue(values.inputName, text)}
      label={values.label}
      style={{ marginBottom:10 }}
    />
  )
}
