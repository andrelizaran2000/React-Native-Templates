// Modules
import React, { ReactNode } from 'react';
import { VStack } from '@react-native-material/core';

type Props = {
  children:ReactNode
}

export default function Paper ({ children }:Props) {
  return (
    <VStack 
      style={{ 
        backgroundColor:'white', 
        borderRadius:5, 
        padding:20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
      }} 
      spacing={20}
    >
      {children}
    </VStack>
  )
}
