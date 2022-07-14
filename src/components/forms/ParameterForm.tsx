// Modules
import React from 'react'
import Checkbox from 'expo-checkbox';
import { Picker } from '@react-native-picker/picker';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box, Button, HStack, Text, TextInput, VStack } from '@react-native-material/core';

// Components
import Paper from '../shared/Paper';
import useCustomPalette from '../../hooks/useCustomPalette';

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
  type: 'text' | 'date' | 'select' | 'password' | 'email' | 'checkbox' | 'numeric';
  options?: SelectInformation[];
  icon?: 'currency-usd'
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
      {inputs.map(({ type, title, options = [], icon }, index) => { 
        switch (type) {
          case 'text':
            return <TextInput variant='outlined' label={title} key={index}/>
          case 'email':
            return <TextInput variant='outlined' label={title} keyboardType='email-address' key={index}/>
          case 'password':
            return <TextInput variant='outlined' label={title} secureTextEntry={true} key={index}/>
          case 'numeric':
            return (
              <TextInput 
                variant='outlined' 
                label={title} 
                keyboardType='number-pad' 
                leading={props => icon && <Icon name={icon} {...props} />} 
                key={index}
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

type CustomPickerProps = {
  options:SelectInformation[]
}

function CustomPicker ({ options }:CustomPickerProps) {
  const { disabled } = useCustomPalette();
  return (
    <Box style={{ borderColor:disabled, borderRadius:5, borderWidth:1, marginBottom:15, paddingLeft:5 }}>
      <Picker selectedValue={options[0].id} onValueChange={() => {}} >
        {options.map(({ id, label }, index) => <Picker.Item label={label} value={id} key={index}/>)}
      </Picker>
    </Box>
  )
}

type CustomCheckBoxProps = {
  title:string;
}

function CustomCheckBox ({ title }:CustomCheckBoxProps) {
  const { primary } = useCustomPalette();
  return (
    <HStack spacing={10}>
      <Text>{title}</Text>
      <Checkbox value={true} onValueChange={() => {}} color={primary}/>
    </HStack>
  )
}