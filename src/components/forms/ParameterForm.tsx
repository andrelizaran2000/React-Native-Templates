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

// Hooks
import useForm from '../../hooks/useForm';

// Types
import { AllPosibleTextsField, FieldTypes } from './parameter-form/types';

export type PrimaryButtonSettings = {
  primaryButtonColor: string;
  primaryButtonTitle: string;
  primaryButtonTintColor?: string;
}

export type SecondaryButtonSettings = {
  secondaryButtonColor: string;
  secondaryButtonTitle: string;
  secondaryButtonTintColor?: string;
}

export type FormInformation = {
  formTitle: string;
  isLoading:boolean;
  onSubmit: (data:any) => void;
  inputs: AllPosibleTextsField[];
}

type ParameterFormProps = {
  primaryButtonSettings:PrimaryButtonSettings;
  secondaryButtonSettings:SecondaryButtonSettings;
  formInformation:FormInformation;
}

export default function ParameterForm (props:ParameterFormProps) {

  const { 
    formInformation, 
    primaryButtonSettings, 
    secondaryButtonSettings 
  } = props;

  const { 
    primaryButtonTitle,
    primaryButtonColor,
    primaryButtonTintColor = 'white'
  } = primaryButtonSettings;

  const {
    secondaryButtonTitle,
    secondaryButtonColor,
    secondaryButtonTintColor = 'white',
  } = secondaryButtonSettings;

  const {
    inputs,
    formTitle, 
    isLoading,
    onSubmit
  } = formInformation;

  const { formValues, setFormValues } = useForm(() => {
    var inputObject = {};
    inputs.forEach(({ inputName }) => {
      // @ts-ignore
      inputObject[inputName] = {
        value:'',
        error:''
      }
    })
    return inputObject;
  });  

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
          onPress={onSubmit}
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
  inputs: AllPosibleTextsField[];
  isLoading: boolean;
  formValues: any;
  setFormValues: React.Dispatch<any>;
}

function TextInputList ({ inputs, isLoading, formValues, setFormValues }:TextInputListProps) {

  return (
    <VStack mb={20}>
      {inputs.map(({ title, inputName, required = true, type, icon }, index) => { 
        switch (type) {
          case FieldTypes.TEXT:
            return (
              <CustomTextField 
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
          case FieldTypes.EMAIL:
            return (
              <CustomEmailField 
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
          case FieldTypes.PASSWORD:
            return (
              <CustomPasswordField 
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
          case FieldTypes.NUMERIC:
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
          // case 'select':
          //   return <CustomPicker options={options} key={index}/>
          // case 'checkbox':
          //   return <CustomCheckBox title={title} key={index}/>
          default:
            return <></>
        } 
      })}
    </VStack>
  )
}