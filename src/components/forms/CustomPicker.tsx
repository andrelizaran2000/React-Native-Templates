// Modules
import React, { useState } from 'react'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogHeader, HStack, ListItem, Text, VStack } from '@react-native-material/core'

// Hooks
import useCustomPalette from '../../hooks/useCustomPalette';
import { TouchableOpacity } from 'react-native';
import { FormValuesProps } from '../../hooks/useForm';

type CustomPickerProps = {
  dialogTitle:string;
  options:OptionProps[];
  values:FormValuesProps;
  setValue:(inputName: string, text: string) => void;
  label:string;
}

type OptionProps = {
  id:number;
  label:string;
}

export default function CustomPicker ({ dialogTitle, options, setValue, values, label }:CustomPickerProps) {

  const { border } = useCustomPalette();
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Text style={{ marginBottom:10 }}>{label}</Text>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Box style={{ borderRadius:5, borderWidth:1, borderColor:border, padding:15, marginBottom:10 }}>
          <HStack style={{ width:'100%', alignItems:'center', justifyContent:'space-between' }}>
            <Text>{values.value}</Text>
            <Icon name='chevron-down'/>
          </HStack>
          <Dialog visible={visible} onDismiss={() => setVisible(false)}>
            <DialogHeader title={dialogTitle} />
            <DialogContent>
              <VStack>
                {options.map(({ id, label }) => (
                  <ListItem
                    title={label}
                    leading={<Icon name="cellphone" size={24} />}
                    onPress={() => { setValue(values.inputName, label); setVisible(false) }}
                  />
                ))}
              </VStack>
            </DialogContent>
            <DialogActions>
              <Button title="Cancelar" compact variant="text" onPress={() => setVisible(false)}/>
            </DialogActions>
          </Dialog>
        </Box>
      </TouchableOpacity>
    </>
  )
}
