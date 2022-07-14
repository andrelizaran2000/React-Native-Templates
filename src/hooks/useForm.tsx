// Modules
import { useState } from 'react';

export type ProductsFormObject = {
  
}

export default function useForm (initialState:any) {
  const [formValues, setFormValues] = useState(initialState);
  return {
    formValues,
    setFormValues
  }
}
