// Modules
import React from 'react';

// Components
import PaddingContainer from '../components/containers/PaddingContainer';
import ParameterForm, { InputInformation, SelectInformation } from '../components/forms/ParameterForm';

// Hooks
import useCustomPalette from '../utils/useCustomPalette';

const options:SelectInformation[] = [
  { id:1, label:'Samsung' },
  { id:2, label:'Xiaomi' },
  { id:3, label:'Sony' },
  { id:4, label:'Apple' },
]

const inputs:InputInformation[] = [
  { title:'Nombre del producto', type:'text' },
  { title:'Marca', type:'select', options },
  { title:'Fecha de recibido', type:'text' },
  { title:'Garantía extendida', type:'checkbox' }
];

export default function AddNewProduct() {

  const { secondary, cancel } = useCustomPalette();
  return (
    <PaddingContainer>
      <ParameterForm
        formTitle='Agregar nuevo producto'
        primaryButtonColor={secondary}
        primaryButtonTitle='Agregar'
        secondaryButtonColor={cancel}
        secondaryButtonTitle='Cancelar'
        inputs={inputs}
        
      />
    </PaddingContainer>
  )
}
