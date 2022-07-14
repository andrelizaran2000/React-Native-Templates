// Modules
import React from 'react'
import { Box } from '@react-native-material/core'

// Hooks
import useCustomPalette from '../hooks/useCustomPalette'

// Components
import ParameterForm, { InputInformation } from '../components/forms/ParameterForm'

const inputs:InputInformation[] = [
  { title:'Correo', type:'text' },
  { title:'Contraseña', type:'password' }
]

export default function Sign () {

  const { primary, secondary, cancel } = useCustomPalette()

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
        inputs={inputs}
        formTitle='Iniciar sesión' 
        primaryButtonColor={secondary} 
        primaryButtonTitle='Entrar'
        secondaryButtonColor={cancel}
        secondaryButtonTitle='Cancelar'
        secondaryButtonTintColor='black'
      />
    </Box >
  )
}
