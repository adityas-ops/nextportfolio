import React from 'react'
import {Text, VStack } from '@chakra-ui/react';
function Btech() {
  const data = ["/**","* B. Teach","* 2020-2024","* I am pursing my B.teach","* in computer science & information technology","* from mahatma jyotiba phule rohilkhand university","* bareilly uttar-pradesh"]
  return (
    <>
    <VStack
       spacing={4}
    align="stretch"
    height="100%"
    >
    {
      data.map((item,index)=>{
        return <Text flexWrap="wrap" m="0px">{index+1}. <Text as="span" ml="10px">{item}</Text></Text>
      }
      )
    }

    </VStack>
    </>
  )
}

export default Btech