import React from 'react'
import {Text, useBreakpointValue, VStack } from '@chakra-ui/react';
function Part() {
  const data = ["/**","* high-school","* 2015-2017","* I have passed high school in 2017.","* from maharshi arvind vidya mandir kasia","*  kushinagar","* board of uttar pradesh board.","* with aggregate 85%."]
  const data1 = ["Year :  2015-2017","I have passed high school in 2017 from maharshi arvind vidya mandir kasia kushinagar board of uttar pradesh board with aggregate 85%."]
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

export default Part