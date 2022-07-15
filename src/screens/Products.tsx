// Modules
import React from 'react';
import { ScrollView, Dimensions } from 'react-native';

import { Box, ListItem, Text, VStack } from '@react-native-material/core';

// Components
import Paper from '../components/shared/Paper'

const productList:ProductItemProps[] = [
  { title:'S22', secondary:'Samsung' },
  { title:'S22', secondary:'Samsung' },
  { title:'S22', secondary:'Samsung' },
  { title:'S22', secondary:'Samsung' },
  { title:'S22', secondary:'Samsung' },
  { title:'S22', secondary:'Samsung' },
  { title:'S22', secondary:'Samsung' },
  { title:'S22', secondary:'Samsung' },
  { title:'S22', secondary:'Samsung' },
]

export default function Products () {
  const windowHeight = Dimensions.get('window').height;
  return (
    <Box style={{ padding:20 }}>
      <Paper>
        <Text variant='h6'>Productos disponibles</Text>
          <ScrollView style={{ maxHeight:(windowHeight-210) }}>
            <VStack >
              {productList.map((props, index) => <ProductItem {...props} key={index}/>)}
            </VStack> 
        </ScrollView>
      </Paper>
    </Box>
  )
}

type ProductItemProps = {
  title:string
  secondary:string;
};


function ProductItem ({ title, secondary }:ProductItemProps) {
  return (
    <ListItem
      title={title}
      secondaryText={secondary}
      
    />
  )
}
