// Modules
import React from 'react';

// Components
import PaddingContainer from '../components/containers/PaddingContainer';
import ParameterForm, { InputInformation, SelectInformation } from '../components/forms/ParameterForm';

// Hooks
import useCustomPalette from '../hooks/useCustomPalette';

const brandOptions:SelectInformation[] = [
  { id:1, label:'Samsung' },
  { id:2, label:'Xiaomi' },
  { id:3, label:'Sony' },
  { id:4, label:'Apple' },
]

const statusOptions:SelectInformation[] = [
  { id:1, label:'Estatus 1' },
  { id:2, label:'Estatus 2' },
  { id:3, label:'Estatus 3' },
  { id:4, label:'Estatus 4' },
]

// Tienen que concordar los nombres con los inputNames
const inputValues = {
  productName: {
    value:'',
    error:''
  },
  productModel:{
    value:'',
    error:''
  },
  productPrice:{
    value:'',
    error:''
  },
  productSave:{
    value:'',
    error:''
  },
}

const inputs:InputInformation[] = [
  { 
    title:'Nombre del producto', 
    type:'text',
    inputName: 'productName'
  },
  { 
    title:'Modelo', 
    type:'text',
    inputName: 'productModel'
  },
  { 
    title:'Precio', 
    type:'numeric', 
    icon:'currency-usd',
    inputName: 'productPrice'
  },
  { 
    title:'Garantía extendida', 
    type:'checkbox',
    inputName: 'productSave'
  }
];

export default function AddNewProduct () {

  const { secondary, cancel } = useCustomPalette();

  function onSubmit (data:any) { console.log(data) }

  const isLoading = false;

  return (
    <PaddingContainer>
      <ParameterForm
        inputValues={inputValues}
        onSubmit={onSubmit}
        formTitle='Agregar nuevo producto'
        primaryButtonColor={secondary}
        primaryButtonTitle='Agregar'
        secondaryButtonColor={cancel}
        secondaryButtonTitle='Cancelar'
        inputs={inputs}
        isLoading={isLoading}
      />
    </PaddingContainer>
  )
}
