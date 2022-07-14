// Modules
import React from 'react'
import { Button, HStack, Text, VStack } from '@react-native-material/core';

// Components
import Paper from '../shared/Paper';
import CustomPicker from './parameter-form/CustomPicker';
import CustomCheckBox from './parameter-form/CustomCheckBox';
import CustomTextField from './parameter-form/CustomTextField';
import CustomEmailField from './parameter-form/CustomEmailField';
import CustomPasswordField from './parameter-form/CustomPasswordField';
import CustomNumericField from './parameter-form/CustomNumericField';
import useForm from '../../hooks/useForm';

type FormInformation = {
  inputs: InputInformation[];
  formTitle: string;
  primaryButtonColor: string;
  primaryButtonTitle: string;
  primaryButtonTintColor?: string;
  secondaryButtonColor: string;
  secondaryButtonTitle: string;
  secondaryButtonTintColor?: string;
  isLoading:boolean
  inputValues:any;
  onSubmit: (data:any) => void;
}

export type IconOptions = 'currency-usd';

export type TextFieldOptions = 'text' | 'date' | 'select' | 'password' | 'email' | 'checkbox' | 'numeric';

export type InputInformation = {
  title: string;
  inputName:string;
  type: TextFieldOptions;
  required?: boolean;
  icon?: IconOptions;
  options?: SelectInformation[];
}

export type SelectInformation = {
  id: number;
  label: string;
}

export default function ParameterForm (props:FormInformation) {

  const { 
    inputs,
    formTitle, 
    primaryButtonTitle, 
    secondaryButtonTitle,
    primaryButtonColor,
    secondaryButtonColor,
    primaryButtonTintColor = 'white',
    secondaryButtonTintColor = 'white',
    isLoading,
    inputValues,
    onSubmit
  } = props;

  const { formValues, setFormValues } = useForm(inputValues);

  function validateFormValues () {
    const formValuesAsObject = formValues as Object;
    Object.keys(formValuesAsObject).forEach((key) => {});
  }

  return (
    <Paper>
      <Text variant='h6'>{formTitle}</Text>
      <TextInputList 
        inputs={inputs} 
        isLoading={isLoading} 
        formValues={formValues}
        setFormValues={setFormValues}
      />
      <HStack spacing={20}>
        <Button 
          variant='contained' 
          title={primaryButtonTitle}
          color={primaryButtonColor}
          tintColor={primaryButtonTintColor}
          disabled={isLoading}
          onPress={validateFormValues}
        />
        <Button 
          variant='contained' 
          title={secondaryButtonTitle}
          color={secondaryButtonColor}
          tintColor={secondaryButtonTintColor}
          disabled={isLoading}
        />
      </HStack>
    </Paper>
  )
}

type TextInputListProps = {
  inputs: InputInformation[];
  isLoading: boolean;
  formValues: any;
  setFormValues: React.Dispatch<any>;
}

function TextInputList ({ inputs, isLoading, formValues, setFormValues }:TextInputListProps) {

  return (
    <VStack mb={20}>
      {inputs.map(({ type, title, options = [], icon, inputName, required = true }, index) => { 
        switch (type) {
          case 'text':
            return (
              <CustomTextField 
                title={title} 
                key={index} 
                isLoading={isLoading} 
                inputName={inputName} 
                required={required}
                formValues={formValues}
                setFormValues={setFormValues}
              />
            )
          case 'email':
            return (
              <CustomEmailField 
                title={title} 
                key={index} 
                isLoading={isLoading} 
                inputName={inputName} 
                required={required}
                formValues={formValues}
                setFormValues={setFormValues}
              />
            )
          case 'password':
            return (
              <CustomPasswordField 
                title={title} 
                key={index} 
                isLoading={isLoading} 
                inputName={inputName} 
                required={required}
                formValues={formValues}
                setFormValues={setFormValues}
              />
            )
          case 'numeric':
            return (
              <CustomNumericField 
                icon={icon} 
                title={title} 
                key={index} 
                isLoading={isLoading} 
                inputName={inputName} 
                required={required}
                formValues={formValues}
                setFormValues={setFormValues}
              />
            ) 
          case 'select':
            return <CustomPicker options={options} key={index}/>
          case 'checkbox':
            return <CustomCheckBox title={title} key={index}/>
          default:
            return <></>
        } 
      })}
    </VStack>
  )
}