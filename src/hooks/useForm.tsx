// Modules
import { useState } from 'react';

export type FieldOptions = AddProductProps;

export type IconOptions = 'currency-usd'

export type FormValuesProps = {
  value:string,
  error:string,
  inputName:string;
  icon?: IconOptions;
  required?: boolean;
}

export type AddProductProps = {
  productName:FormValuesProps,
  productModel:FormValuesProps,
  productPrice:FormValuesProps,
}

export default function useForm (initialState:FieldOptions) {

  const [formValues, setFormValues] = useState(initialState);

  function handleChange (inputName:string, text:string) {
    setFormValues({ 
      ...formValues, 
      [inputName]:{ 
        error:'', 
        value:text, 
        // @ts-ignore
        inputName:formValues[inputName].inputName 
      }
    })
  }

  return {
    formValues,
    setFormValues,
    handleChange
  }
}
