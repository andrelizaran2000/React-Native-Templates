// Modules
import React, { ReactNode } from 'react';
import { Box } from '@react-native-material/core';

type Props = {
  children: ReactNode;
}

export default function PaddingContainer ({ children }:Props) {
  return (
    <Box style={{ padding:20 }}>
      {children}
    </Box>
  )
}
