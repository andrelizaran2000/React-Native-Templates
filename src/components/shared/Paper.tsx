import { VStack } from '@react-native-material/core'
import React, { ReactNode } from 'react'

type Props = {
  children:ReactNode
}

export default function Paper ({ children }:Props) {
  return (
    <VStack style={{ backgroundColor:'white', borderRadius:5, padding:20 }} spacing={20}>
      {children}
    </VStack>
  )
}
