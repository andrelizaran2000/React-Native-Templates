// Modules
import React from 'react'
import { Box } from '@react-native-material/core'

// Hooks
import useCustomPalette from '../hooks/useCustomPalette'

// Components
import ParameterForm, { FormInformation, PrimaryButtonSettings, SecondaryButtonSettings } from '../components/forms/ParameterForm'
import useForm, { SignInProps } from '../hooks/useForm';
import CustomTextField from '../components/forms/CustomTextField';

export default function Sign () {

  const { primary, secondary, cancel } = useCustomPalette();

  const inputValues:SignInProps = {
    email: {
      value:'',
      error:'',
      inputName: 'email',
      label: 'Email'
    },
    password: {
      value:'',
      error:'',
      inputName: 'password',
      label: 'Contraseña'
    },
  }

  const form = useForm(inputValues);
  const formValues = form.formValues as SignInProps;

  function onSubmit () {}

  const isLoading = false;

  const primaryButtonSettings:PrimaryButtonSettings = {
    primaryButtonColor: secondary,
    primaryButtonTitle: 'Entrar'
  }

  const secondaryButtonSettings:SecondaryButtonSettings = {
    secondaryButtonColor: cancel,
    secondaryButtonTitle: 'Cancelar',
    secondaryButtonShown: false
  }

  const formInformation:FormInformation = {
    onSubmit: onSubmit,
    formTitle: 'Iniciar sesión',
    isLoading: false
  }

  return (
    <Box 
      style={{ 
        justifyContent:'center', 
        height:'100%',
        backgroundColor:primary,
        padding:20 
      }}
    >
      <ParameterForm 
        primaryButtonSettings={primaryButtonSettings}
        secondaryButtonSettings={secondaryButtonSettings}
        formInformation={formInformation}
      >
        <CustomTextField 
          values={formValues.email}
          setValue={form.handleChange}
          isLoading={isLoading}
        />
        <CustomTextField 
          values={formValues.password}
          setValue={form.handleChange}
          isLoading={isLoading}
        />
      </ParameterForm>
    </Box >
  )
}
