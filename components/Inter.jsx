import React from 'react'
import {Text, VStack } from '@chakra-ui/react';
function Inter() {
  const data = ["/**","* Intermediate","* 2017-2019","* I have passed Intermediate in 2019.","* from maharshi arvind vidya mandir kasia","* kushinagar","* board of uttar pradesh board.","* with aggregate 85%."]
  return (
   <>
    <VStack
    // spacing={4}
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

export default Inter