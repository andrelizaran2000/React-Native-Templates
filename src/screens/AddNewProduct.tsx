// Modules
import React from 'react';

// Components
import PaddingContainer from '../components/containers/PaddingContainer';

// Types
import { 
  AllPosibleTextsField, 
  FieldTypes 
} from '../components/forms/parameter-form/types';

import 
  ParameterForm, 
  { 
    FormInformation, 
    PrimaryButtonSettings, 
    SecondaryButtonSettings 
  } 
from '../components/forms/ParameterForm';

// Hooks
import useCustomPalette from '../hooks/useCustomPalette';

const inputs:AllPosibleTextsField[] = [
  {
    title:'Nombre del producto', 
    type:FieldTypes.TEXT,
    inputName:'productName'
  },
  {
    title:'Nombre del producto', 
    type:FieldTypes.TEXT,
    inputName:'productModel'
  },
  {
    title:'Precio', 
    type:FieldTypes.NUMERIC, 
    icon:'currency-usd',
    inputName:'productPrice'
  },
  {
    title:'Garantía extendida', 
    type:FieldTypes.CHECKBOX,
    inputName:'productSave'
  }
]

export default function AddNewProduct () {

  const { secondary, cancel } = useCustomPalette();

  function onSubmit (data:any) { console.log(data) }

  const isLoading = false;

  const formInformation:FormInformation = {
    onSubmit:onSubmit,
    formTitle:'Agregar nuevo producto',
    inputs:inputs,
    isLoading:isLoading
  }

  const primaryButtonSettings:PrimaryButtonSettings = {
    primaryButtonColor:secondary,
    primaryButtonTitle:'Agregar'
  }

  const secondaryButtonSettings:SecondaryButtonSettings = {
    secondaryButtonColor:cancel,
    secondaryButtonTitle:'Cancelar'
  }

  return (
    <PaddingContainer>
      <ParameterForm
        formInformation={formInformation}
        primaryButtonSettings={primaryButtonSettings}
        secondaryButtonSettings={secondaryButtonSettings}
      />
    </PaddingContainer>
  )
}
