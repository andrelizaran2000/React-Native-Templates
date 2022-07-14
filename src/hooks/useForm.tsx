// Modules
import { useState } from 'react' 

export default function useForm (initialState:any) {
  const [formValues, setFormValues] = useState(initialState);
  return {
    formValues,
    setFormValues
  }
}
