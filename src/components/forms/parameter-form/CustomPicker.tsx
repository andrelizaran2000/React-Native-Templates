// Modules
import React from 'react'
import { Box } from '@react-native-material/core';
import { Picker } from '@react-native-picker/picker';

// Types
import { SelectInformation } from '../ParameterForm';

// Hooks
import useCustomPalette from '../../../hooks/useCustomPalette';

type Props = {
  options:SelectInformation[]
}

export default function CustomPicker ({ options }:Props) {
  const { disabled } = useCustomPalette();
  return (
    <Box style={{ borderColor:disabled, borderRadius:5, borderWidth:1, marginBottom:15, paddingLeft:5 }}>
      <Picker selectedValue={options[0].id} onValueChange={() => {}} >
        {options.map(({ id, label }, index) => <Picker.Item label={label} value={id} key={index}/>)}
      </Picker>
    </Box>
  )
}