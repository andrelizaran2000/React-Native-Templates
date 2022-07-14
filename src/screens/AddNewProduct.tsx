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

const inputs:InputInformation[] = [
  { title:'Nombre del producto', type:'text' },
  { title:'Modelo', type:'text' },
  { title:'Marca', type:'select', options:brandOptions },
  { title:'Precio', type:'numeric', icon:'currency-usd' },
  { title:'Estatus', type:'select', options:statusOptions },
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
