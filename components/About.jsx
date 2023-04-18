import {Text, useBreakpointValue, VStack } from '@chakra-ui/react';
function Mark() {

const data = ["/**","* About-me","* I'm aditya sharma","* front-end developer in Web","* passion for learning and creating new things","* I'm  currently looking for a position where","* I can utilize my skills and grow as a developer"]
const data1 = ["I'm aditya sharma I have 1 years of experience in web development."," I'm  currently looking for a position where  I can utilize my skills and grow as a developer."]
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

export default Mark;
