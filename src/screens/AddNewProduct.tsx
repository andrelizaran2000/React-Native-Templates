// Modules
import React, { useState } from 'react';

// Components
import CustomTextField from '../components/forms/CustomTextField';
import CustomNumericField from '../components/forms/CustomNumericField';
import PaddingContainer from '../components/containers/PaddingContainer';

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
import useForm, { AddProductProps } from '../hooks/useForm';

export default function AddNewProduct () {

  const { secondary, cancel } = useCustomPalette();

  function onSubmit () { 
    console.log(formValues);
  }

  const isLoading = false;

  // Configuración del formulario
  const formInformation:FormInformation = {
    onSubmit: onSubmit,
    formTitle: 'Agregar nuevo producto',
    isLoading: isLoading
  }

  const primaryButtonSettings:PrimaryButtonSettings = {
    primaryButtonColor: secondary,
    primaryButtonTitle: 'Agregar'
  }

  const secondaryButtonSettings:SecondaryButtonSettings = {
    secondaryButtonColor: cancel,
    secondaryButtonTitle: 'Cancelar'
  }

  const inputValues:AddProductProps = {
    productName: {
      value:'',
      error:'',
      inputName: 'productName',

    },
    productModel: {
      value:'',
      error:'',
      inputName: 'productModel'
    },
    productPrice: {
      value:'',
      error:'',
      inputName: 'productPrice',
      icon: 'currency-usd'
    }
  }

  const { formValues, handleChange } = useForm(inputValues);

  return (
    <PaddingContainer>
      <ParameterForm 
        formInformation={formInformation} 
        primaryButtonSettings={primaryButtonSettings} 
        secondaryButtonSettings={secondaryButtonSettings}
      >
        <CustomTextField 
          label='Nombre del producto' 
          values={formValues.productName}
          setValue={handleChange}
          isLoading={isLoading}
        />
        <CustomTextField 
          label='Modelo del producto' 
          values={formValues.productModel}
          setValue={handleChange}
          isLoading={isLoading}
        />
        <CustomNumericField 
          label='Precio del producto' 
          values={formValues.productPrice}
          setValue={handleChange}
          isLoading={isLoading}
        />
      </ParameterForm>
    </PaddingContainer>
  )
}
