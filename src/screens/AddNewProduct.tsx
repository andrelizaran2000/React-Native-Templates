// Modules
import React from 'react';

// Components
import CustomPicker from '../components/forms/CustomPicker';
import CustomTextField from '../components/forms/CustomTextField';
import CustomNumericField from '../components/forms/CustomNumericField';
import PaddingContainer from '../components/containers/PaddingContainer';
import ParameterForm, { FormInformation, PrimaryButtonSettings, SecondaryButtonSettings } from '../components/forms/ParameterForm';

// Hooks
import useCustomPalette from '../hooks/useCustomPalette';

// Types
import useForm, { AddProductProps } from '../hooks/useForm';
import CustomImageField from '../components/forms/CustomImageField';

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
      label:'Nombre del producto'
    },
    productModel: {
      value:'',
      error:'',
      inputName: 'productModel',
      label:'Modelo del producto'
    },
    productPrice: {
      value:'',
      error:'',
      inputName: 'productPrice',
      icon: 'currency-usd',
      label:'Precio del producto'
    },
    productBrand: {
      value:'',
      error:'',
      inputName: 'productBrand',
      label:'Marca del producto',
    }
  }

  const brandOptions = [
    { id:1, label:'Xiaomi' },
    { id:2, label:'Samsung' },
    { id:3, label:'Sony' },
    { id:4, label:'Apple' },
  ]

  const form = useForm(inputValues);
  const formValues = form.formValues as AddProductProps;

  return (
    <PaddingContainer>
      <ParameterForm 
        formInformation={formInformation} 
        primaryButtonSettings={primaryButtonSettings} 
        secondaryButtonSettings={secondaryButtonSettings}
      >
        <CustomTextField 
          values={formValues.productName}
          setValue={form.handleChange}
          isLoading={isLoading}
        />
        <CustomTextField 
          values={formValues.productModel}
          setValue={form.handleChange}
          isLoading={isLoading}
        />
        <CustomNumericField 
          values={formValues.productPrice}
          setValue={form.handleChange}
          isLoading={isLoading}
        />
        <CustomPicker 
          dialogTitle='Selecciona una marca' 
          options={brandOptions}
          setValue={form.handleChange}
          values={formValues.productBrand}
        />
        <CustomImageField label='Fotografía'/>
      </ParameterForm>
    </PaddingContainer>
  )
}
