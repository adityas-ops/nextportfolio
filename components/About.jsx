import {Text, VStack } from '@chakra-ui/react';
function Mark() {

const data = ["/**","* About-me","* I'm aditya sharma","* front-end developer in Web","* passion for learning and creating new things","* I'm  currently looking for a position where","* I can utilize my skills and grow as a developer"]
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
      })
    }
   
    </VStack>
    </>
  )
}

export default Mark;
