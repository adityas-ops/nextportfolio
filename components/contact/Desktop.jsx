import { Box, Flex, Icon, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiArrowDownSFill, RiMailFill, RiPhoneLine,RiShareBoxFill } from 'react-icons/ri'
import Code from './Code'
import Formi from './Formi'

function Desktop() {
  return (
    <>
         <Box
        width="100%"
        position="fixed"
        top="0"
        height={{
          base: "fit-content",
          md: "100vh",
          lg: "100vh",
          xl: "100vh",
        }}
        bg="#011627"
      >
         <Box
          width="100%"
          mt={{
            base: "55px",
            md: "0",
            lg: "55px",
            xl: "55px",
          }}
          height={{
            base: "fit-content",
            md: "88vh",
            lg: "88vh",
            xl: "88vh",
          }}
        >
             <Flex width="100%" height="100%">
             <Box width="22.24%" height="100%" borderRight="1px solid #607B96">
             <Box height="40px" width="100%" borderBottom="1px solid #607B96">
                <Text
                  width="100%"
                  height="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="start"
                  ml="15px"
                  color="white"
                  fontSize="16px"
                >
                  {" "}
                  <Icon as={RiArrowDownSFill} color="white" boxSize="24px" />
                  contacts
                </Text>
                <Box>
                        <a
                            className="linki"
                            href="mailto:adityakushinagar123@gmail.com"
                        >
                          <Icon
                            as={RiMailFill}
                            color="#607B96"
                            boxSize="18px"
                            mr="5px"
                          />
                          contact me
                        </a>
                        <a
                          className="linki"
                          href="tel:+919792855377"
                         
                        >
                          <Icon
                            as={RiPhoneLine}
                            color="#607B96"
                            boxSize="18px"
                            mr="5px"
                          />
                          +919792855377
                        </a>
                      </Box>
                      <Box height="40px" width="100%" mt="20px" borderTop="1px solid #607B96" borderBottom="1px solid #607B96">
                      <Text
                  width="100%"
                  height="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="start"
                  ml="15px"
                  color="white"
                  fontSize="16px"
                >
                  {" "}
                  <Icon as={RiArrowDownSFill} color="white" boxSize="24px" />
                  find-me-also-in
                </Text>
                </Box>
                <VStack 
                width="100%"
                height="100%"
                ml="20px"
                >
                    <Link
                        href='https://www.instagram.com/aditya.0.0.8/'
                        target="_blank"
                        _hover={{
                            color: "white",
                        }}
                        width="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        mt="20px"
                        >
                        <Icon as={RiShareBoxFill} color="#607B96" boxSize="18px" mr="5px" />
                        Instagram
                        </Link>
                        <Link
                        href='https://leetcode.com/aditya-ops/'
                        target="_blank"
                        _hover={{
                            color: "white",
                        }}
                        width="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        mt="20px"
                        >
                        <Icon as={RiShareBoxFill} color="#607B96" boxSize="18px" mr="5px" />
                        Leetcode
                        </Link>
                        <Link
                        href='https://auth.geeksforgeeks.org/user/adityasharma20cs08/'
                        target="_blank"
                        _hover={{
                            color: "white",
                        }}
                        width="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        ml="20px"
                        mt="20px"
                        >
                        <Icon as={RiShareBoxFill} color="#607B96" boxSize="18px" mr="5px" />
                        GeeksforGeeks
                        </Link>
                        <Link
                        href='https://www.hackerrank.com/adityakushinaga1?hr_r=1'
                        target="_blank"
                        _hover={{
                            color: "white",
                        }}
                        width="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        ml="20px"
                        mt="20px"
                        >
                        <Icon as={RiShareBoxFill} color="#607B96" boxSize="18px" mr="5px" />
                        HackerRank
                        </Link>
                </VStack>
              </Box>
             </Box>
                <Box width="77.76%" height="100%">
                <Box height="40px" width="100%" borderBottom="1px solid #607B96">
                </Box>
                    <Flex
                    width="100%"
                    height="100%"
                    >
                        <Box
                        width="50%"
                        height="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRight="1px solid #607B96"
                        >
                           <Formi/>
                        </Box>
                        <Flex
                        width="50%"
                        height="100%"
                        >
                            <Box 
                            width="95%"
                            height="100%"
                            display="flex"
                            >
                                <Code/>
                            </Box>
                            <Box
                    width="5%"
                    height="83.3vh"
                    borderLeft="1px solid #607B96"
                    display="flex"
                    justifyContent="center"
                    // alignItems="center"
                  >
                    <Box width="70%" height="8px" bg="blue.100" mt="7px"></Box>
                  </Box>
                        </Flex>
                    </Flex>
                </Box>
             </Flex>
        </Box>
      </Box>
    </>
  )
}

export default Desktop