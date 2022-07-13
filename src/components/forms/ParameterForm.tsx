// Modules
import React from 'react'
import { Button, HStack, Text, TextInput, VStack } from '@react-native-material/core';

// Components
import Paper from '../shared/Paper';

type FormInformation = {
  inputs: InputInformation[];
  formTitle: string;
  primaryButtonColor: string;
  primaryButtonTitle: string;
  primaryButtonTintColor?: string;
  secondaryButtonColor: string;
  secondaryButtonTitle: string;
  secondaryButtonTintColor?: string;
}

export type InputInformation = {
  title: string;
  type: 'text' | 'date' | 'select' | 'password' | 'email';
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
    secondaryButtonTintColor = 'white' 
  } = props;

  return (
    <Paper>
      <Text variant='h6'>{formTitle}</Text>
      <TextInputList inputs={inputs}/>
      <HStack spacing={20}>
        <Button 
          variant='contained' 
          title={primaryButtonTitle}
          color={primaryButtonColor}
          tintColor={primaryButtonTintColor}
        />
        <Button 
          variant='contained' 
          title={secondaryButtonTitle}
          color={secondaryButtonColor}
          tintColor={secondaryButtonTintColor}
        />
      </HStack>
    </Paper>
  )
}

type TextInputListProps = {
  inputs: InputInformation[]
}

function TextInputList ({ inputs }:TextInputListProps) {
  return (
    <VStack spacing={10} mb={20}>
      {inputs.map(({ type, title }, index) => { 
        switch (type) {
          case 'text':
            return <TextInput variant='outlined' label={title} key={index}/>
          case 'email':
            return <TextInput variant='outlined' label={title} keyboardType='email-address' key={index}/>
          case 'password':
            return <TextInput variant='outlined' label={title} secureTextEntry={true} key={index}/>
          default:
            return <></>
        } 
      })}
    </VStack>
  )
}