// Modules
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Button, Dialog, DialogActions, DialogContent, DialogHeader, HStack, IconButton, Text } from '@react-native-material/core';

// Hooks
import useCustomPalette from '../../hooks/useCustomPalette';

// Types
import { DrawerNavigation } from '../../router/DrawerRouter';
import { Image } from 'react-native';

type CustomImageFieldProps = {
  label:string;
}

export default function CustomImageField (props:CustomImageFieldProps) {

  const { label } = props;
  const { border } = useCustomPalette();
  const [ visible, setVisible ] = useState(false);
  const navigation = useNavigation<DrawerNavigation>();

  return (
    <>
      <HStack style={{ justifyContent:'space-between', alignItems:'center', marginBottom:10 }}>
        <Text>{label}</Text>
        <HStack>
          <IconButton 
            color={border} 
            onPress={() => setVisible(true)}
            icon={props => <Icon name="image" {...props} />} 
          />
          <IconButton 
            color={border} 
            icon={props => <Icon name="camera" {...props} />}
            onPress={() => navigation.navigate('camera')}
          />
        </HStack>
      </HStack>
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogContent >
          <Image style={{ height:200, marginTop:30, borderRadius:5 }} source={{ uri:'https://play-lh.googleusercontent.com/6f6MrwfRIEnR-OIKIt_O3VdplItbaMqtqgCNSOxcfVMCKGKsOdBK5XcI6HZpjssnB2Y' }} /> 
        </DialogContent>
        <DialogActions>
          <Button title="Ok" compact variant="text" onPress={() => setVisible(false)}/>
        </DialogActions>
      </Dialog>
    </>
  )
}
