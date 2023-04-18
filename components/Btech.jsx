import React from 'react'
import {Text, useBreakpointValue, VStack } from '@chakra-ui/react';
function Btech() {
  const data = ["/**","* B. Teach","* 2020-2024","* I am pursing my B.teach","* in computer science & information technology","* from mahatma jyotiba phule rohilkhand university","* bareilly uttar-pradesh","**/"]
  const data1 = ["Year :  2020-2024", "I'm pursing my B.tech from MJP Rohilkhand University Bareilly, Uttar Pradesh India in Computer Science & Information Technology."]
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <>
    <VStack
       spacing={4}
    align="stretch"
    height="100%"
    >
   {
    isDesktop ? (
      <>
      {
      data.map((item,index)=>{
        return <Text flexWrap="wrap" m="0px">{index+1}. <Text as="span" ml="10px">{item}</Text></Text>
      }
      )
    }
      </>
    ):
    (
      <>
      {
      data1.map((item,index)=>{
        return <Text lineHeight="40px" m="0px"><Text as="span" ml="10px">{item}</Text></Text>
      }
      )
    }
      </>
    )
   }

    </VStack>
    </>
  )
}

export default Btech