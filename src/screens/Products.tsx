// Modules
import React from 'react'
import { Box, ListItem, Text, VStack } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

// Components
import Paper from '../components/shared/Paper'
import { ScrollView } from 'react-native';

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
  return (
    <Box style={{ padding:20 }}>
      <Paper>
        <Text variant='h6'>Productos disponibles</Text>
          <ScrollView style={{ maxHeight:400 }}>
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
