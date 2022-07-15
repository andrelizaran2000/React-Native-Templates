// Modules
import React from 'react'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { HStack, IconButton, Text } from '@react-native-material/core'
import useCustomPalette from '../../hooks/useCustomPalette';

type CustomImageFieldProps = {
  label:string;
  navigation:any;
}

export default function CustomImageField (props:CustomImageFieldProps) {

  const { label, navigation } = props;
  const { border } = useCustomPalette()

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
