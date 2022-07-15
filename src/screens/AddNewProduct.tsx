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

type Props = {
  navigation:any;
}

export default function AddNewProduct ({ navigation }:Props) {

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
    },
    productBrand: {
      value:'',
      error:'',
      inputName: 'productBrand',
    }
  }

  const brandOptions = [
    { id:1, label:'Xiaomi' },
    { id:2, label:'Samsung' },
    { id:3, label:'Sony' },
    { id:4, label:'Apple' },
  ]

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
        <CustomPicker 
          label='Marca del producto'
          dialogTitle='Selecciona una marca' 
          options={brandOptions}
          setValue={handleChange}
          values={formValues.productBrand}
        />
        <CustomImageField 
          label='Fotografía' 
          navigation={navigation}
        />
      </ParameterForm>
    </PaddingContainer>
  )
}
