import React from 'react'
import {
  Box,
  Flex,
  useBreakpointValue,
  Table,
  Thead,
  Icon,
  Spacer,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import {HiOutlineMenu} from 'react-icons/hi'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'



function Header() {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const navname = ["_hello","_about-me","_projects","_contact"]
  const links = ["/","about","projects","contact"]

  return (
    <>
    {
      isDesktop ? (
        <Box
        as="section"
        bg="transparent"
        w="100%"
        h="56px"
        position="fixed"
        top="0"
        zIndex="100"

      >
          <Table
            variant="simple"
            width="100%"
            height="100%"
            bg="transparent"
            borderBottom="1px solid #607B96"
            >
            <Thead>
              <tr
              >
                <th
                style={{
                  borderRight:'1px solid #607B96',
                  width:'20%',
                  textAlign:'left',
                  paddingLeft:'20px'
                }}
                >
                  <Link href="/" fontWeight="500" 
                  _hover={{
                    color:'white',
                    textDecoration:'none',
                    fontWeight:"800"
                  }}
                  >
                    Aditya-Sharma
                  </Link>
                </th>
                <th
                style={{
                  borderRight:'1px solid #607B96',
                  width:'10%',
                }}
                >
                  <Link href="/" fontWeight="400"
                   _hover={{
                    color:'white',
                    textDecoration:'none',
                    fontWeight:"800"
                  }}
                   >
                    _hello
                  </Link>
                </th>
                <th
                style={{
                  borderRight:'1px solid #607B96',
                  width:'10%',
                }}
                >
                  <Link href="/about" fontWeight="400"
                   _hover={{
                    color:'white',
                    textDecoration:'none',
                    fontWeight:"800"
                  }}

                  _active={{
                    color:'white',
                    textDecoration:'none',
                    fontWeight:"800"
                  }}
                  
                  >
                    _about-me
                  </Link>
                </th>
                <th
                style={{
                  borderRight:'1px solid #607B96',
                  width:'10%',

                }}
                >
                  <Link href="/projects" fontWeight="400" 
                   _hover={{
                    color:'white',
                    textDecoration:'none',
                    fontWeight:"800"
                  }} >
                    _projects
                  </Link>
                </th>
                <th style={{
                  content:'',
                  width:'30%',

                }}>

                </th>
                <th
                style={{
                  borderLeft:'1px solid #607B96',
                  width:'10%',
                  textAlign:'right',
                  paddingRight:'20px'
                }}

                >
                  <Link href="/contact" fontWeight="400" 
                   _hover={{
                    color:'white',
                    textDecoration:'none',
                    fontWeight:"800"
                  }}>
                    _contact
                  </Link>
                </th>
              </tr>
            </Thead>
            </Table>
      </Box>
      )
      :
      (
        <Box
        as="section"
        bg="transparent"
        w="100%"
        h="56px"
        position="fixed"
        top="0"
        zIndex="100"
      >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        h="100%"
        bg="transparent"
        borderBottom="1px solid #607B96"
        padding="0.5rem"
      >
       
          <Link href="/" fontWeight="300"
          fontSize="18px"
            _hover={{
              color:'white',
              textDecoration:'none',
              fontWeight:"800"
              
            }}
          >
            Aditya-Sharma
          </Link>
          <Spacer/>
          <Icon
            as={HiOutlineMenu}
            w={6}
            h={6}
            // color="white"
            ml={2}
            ref={btnRef}
            onClick={onOpen}

          />
      </Flex>
      <Box>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="#011627"
        >
          <Box 
          w="100%"
          h="56px"
          display="block"
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px solid #607B96"

          >
          <DrawerCloseButton />
          <DrawerHeader 
          borderBottom="1px solid #607B96"
          height="56px"
          >
            <Link href="/" fontWeight="300"
            fontSize='18px'
            _hover={{
              color:'white',
              textDecoration:'none',
              fontWeight:"800"
              
            }}
          >
            Aditya-Sharma
          </Link>
          </DrawerHeader>
          </Box>
         
        
          {/* <DrawerBody 
          w="100%"

          > */}
          <VStack
          spacing="0"
          // mt={10}
          w="100%"


          >
          {
            navname.map((item,index) => {
              return (
                <>
                <Box
                w="100%"
                h="56px"
                display="flex"
                alignItems="center"
                justifyContent="start"
                paddingLeft="20px"
                borderBottom="1px solid #607B96"
                color="white"
                fontWeight="500"
                >

               
                <Link href={links[index]} fontWeight="200" 
                _hover={{
                  color:'white',
                  textDecoration:'none',
                  fontWeight:"800"
                }}
                >
                  {item}
                  
                </Link>
                </Box>
                <hr/>
                </>
              )
            }
            )
          }
          </VStack>
          {/* </DrawerBody> */}
         
           <Table
            variant="simple"
            width="100%"
            height="50px"
            bg="transparent"
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
                  width:'40%',
                  borderRight:'1px solid #607B96',
                }}
                >
                  Find me in : 
                </th>
                <th
                style={{
                  borderRight:'1px solid #607B96',
                  width:'20%',
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
                    <Icon 
                    as={FaGithub}
                    w={6}
                    h={6}
                    />
                  </Link>
                </th>
                <th
                style={{
                  borderRight:'1px solid #607B96',
                  width:'20%',
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
                    w={6}
                    h={6}
                    />
                  </Link>
                </th>
                <th
                style={{
                  // borderRight:'1px solid #607B96',
                  width:'20%',
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
                    w={6}
                    h={6}
                    />
                  </Link>
                </th>
                </tr>
                </Thead>
            </Table>
        </DrawerContent>
        
      </Drawer>
      </Box>

      </Box>
      )
}
    </>
  )
}

export default Header