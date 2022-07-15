// Modules
import { useState } from 'react';

export type IconOptions = 'currency-usd'

// Common props
export type FormValuesProps = {
  value:string,
  error:string,
  inputName:string;
  icon?: IconOptions;
  required?: boolean;
  label:string;
}

// Forms
export type SignInProps = {
  email: FormValuesProps;
  password: FormValuesProps;
}

export type AddProductProps = {
  productName:FormValuesProps,
  productModel:FormValuesProps,
  productPrice:FormValuesProps,
  productBrand:FormValuesProps,
}

export type FieldOptions = AddProductProps | SignInProps;

export default function useForm (initialState:FieldOptions) {

  const [formValues, setFormValues] = useState(initialState);

  function handleChange (inputName:string, text:string) {
    setFormValues({ 
      ...formValues, 
      [inputName]:{ 
        error:'', 
        value:text, 
        // @ts-ignore
        inputName:formValues[inputName].inputName,
        // @ts-ignore
        label:formValues[inputName].label,
      }
    })
  }

  return {
    formValues,
    setFormValues,
    handleChange
  }
}
