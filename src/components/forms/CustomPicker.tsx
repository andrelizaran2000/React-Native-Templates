// Modules
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogHeader, HStack, ListItem, Text, VStack } from '@react-native-material/core'

// Hooks
import useCustomPalette from '../../hooks/useCustomPalette';

// Types
import { FormValuesProps } from '../../hooks/useForm';

type CustomPickerProps = {
  dialogTitle:string;
  options:OptionProps[];
  values:FormValuesProps;
  setValue:(inputName: string, text: string) => void;
}

type OptionProps = {
  id:number;
  label:string;
}

export default function CustomPicker ({ dialogTitle, options, setValue, values }:CustomPickerProps) {

  const { border } = useCustomPalette();
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Text style={{ marginBottom:10 }}>{values.label}</Text>
      <TouchableOpacity onPress={() => setVisible(true)} style={{ marginBottom:0 }}>
        <Box style={{ borderRadius:5, borderWidth:1, borderColor:border, padding:15, marginBottom:10 }}>
          <HStack style={{ width:'100%', alignItems:'center', justifyContent:'space-between' }}>
            <Text>{values.value}</Text>
            <Icon name='chevron-down'/>
          </HStack>
        </Box>
      </TouchableOpacity>
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogHeader title={dialogTitle} />
        <DialogContent>
          <VStack>
            {options.map(({ id, label }, index) => (
              <ListItem
                title={label}
                onPress={() => { setValue(values.inputName, label); setVisible(false) }}
                key={index}
              />
            ))}
          </VStack>
        </DialogContent>
        <DialogActions>
          <Button title="Cancelar" compact variant="text" onPress={() => setVisible(false)}/>
        </DialogActions>
      </Dialog>
    </>
  )
}
