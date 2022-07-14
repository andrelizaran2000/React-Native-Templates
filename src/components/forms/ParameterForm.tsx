// Modules
import React, { ReactNode } from 'react'
import { Button, HStack, Text } from '@react-native-material/core';

// Component
import Paper from '../shared/Paper';

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
}

type ParameterFormProps = {
  primaryButtonSettings: PrimaryButtonSettings;
  secondaryButtonSettings: SecondaryButtonSettings;
  formInformation: FormInformation;
  children: ReactNode;
}

export default function ParameterForm (props:ParameterFormProps) {

  const { 
    formInformation, 
    primaryButtonSettings, 
    secondaryButtonSettings,
    children 
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
    formTitle, 
    isLoading,
    onSubmit,
  } = formInformation;

  return (
    <Paper>
      <Text variant='h6'>{formTitle}</Text>
      {children}
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