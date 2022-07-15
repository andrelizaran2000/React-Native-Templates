// Modules
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { HStack, IconButton, Text } from '@react-native-material/core';

// Hooks
import useCustomPalette from '../../hooks/useCustomPalette';

// Types
import { DrawerNavigation } from '../../router/DrawerRouter';

type CustomImageFieldProps = {
  label:string;
}

export default function CustomImageField (props:CustomImageFieldProps) {

  const { label } = props;
  const { border } = useCustomPalette();
  const navigation = useNavigation<DrawerNavigation>();

  return (
    <HStack style={{ justifyContent:'space-between', alignItems:'center', marginBottom:10 }}>
      <Text>{label}</Text>
      <HStack>
        <IconButton 
          color={border} 
          icon={props => <Icon name="image" {...props} />} 
        />
        <IconButton 
          color={border} 
          icon={props => <Icon name="camera" {...props} />}
          onPress={() => navigation.navigate('camera')}
        />
      </HStack>
    </HStack>
  )
}
