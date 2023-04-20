
import { Tr,Td, Table, Thead, useBreakpointValue, Icon, Text, Box,Link  } from '@chakra-ui/react'
// import from 'next/link'
import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

function Footer() {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
   <>
    {isDesktop && (
        <Table
            variant="simple"
            width="100%"
            height="40px"
            bg="#011627"
            borderTop="1px solid #607B96"
            style={{
              position:'fixed',
            bottom:'0',
            left:'0',
            }}
            >
            <Thead>
              <tr>
                <th 
                style={{
                  width:'10%',
                  borderRight:'1px solid #607B96',
                  fontWeight:'100'
                }}
                >
                  Find me in : 
                </th>
                <th
                style={{
                  borderRight:'1px solid #607B96',
                  width:'5%'
                }}
                >
                  <Link href="https://www.linkedin.com/in/aditya-sharma-6645b41ab/" target="_blank" fontWeight="200"
                    _hover={{
                    color:'white',
                    textDecoration:'none',
                    fontWeight:"800"
                  }}
                    >
                    <Icon
                    as={FaLinkedinIn}
                    w={5}
                    h={5}
                    mt={2}
                    />
                  </Link>
                </th>
                <th
                style={{
                  borderRight:'1px solid #607B96',
                  width:'5%',
                }}
                >
                  <Link href="https://twitter.com/ADITYAOPS" target="_blank" fontWeight="200"
                    _hover={{
                    color:'white',
                    textDecoration:'none',
                    fontWeight:"800"
                  }}
                    >
                    <Icon
                    as={BsTwitter}
                    w={5}
                    h={5}
                    mt={2}
                    />
                  </Link>
                </th>
                <th
                style={{
                    content:'',
                  borderRight:'1px solid #607B96',
                  width:'65%',
                }}
                ></th>
                <th
                style={{
                  width:'15%',
                  textAlign:'left',
                  paddingLeft:'20px'
                }}
                >
                  <Link href="https://github.com/adityas-ops" target="_blank" fontWeight="300"
                  _hover={{
                    color:'white',
                    textDecoration:'none',
                    fontWeight:"800"
                  }}
                  >
                   <Box style={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'end',
                        paddingRight:'15px'
                   }} >
                    <Text mr="10px"> @adityas-ops</Text>
                    <Icon 
                    as={FaGithub}
                    w={5}
                    h={5}
                    />
                   </Box>
                   
                  </Link>
                </th>
                </tr>
                </Thead>
            </Table>
    )}
    
   </>
  )
}

export default Footer