import React, { useState } from "react";
import NextLink from 'next/link'
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
  Tr,
  Th,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { HiOutlineMenu } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Header() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navname = ["_hello", "_about-me", "_projects", "_contact"];
  const links = ["/", "about", "projects", "contact"];
  return (
    <>
      {isDesktop ? (
        <Box
          as="section"
          bg="transparent"
          w="100%"
          h="56px"
          position="fixed"
          top="0"
          zIndex="100"
        >
        <HStack
          w="100%"
          h="100%"
          bg="transparent"
          borderBottom="1px solid #607B96"
          >
          <Link
            as={NextLink}
            href="/"
            fontWeight="400"
            _hover={{
              color: "white",
              textDecoration: "none",
              fontWeight: "800",
            }}
            width="22.3%"
            height="100%"
            _focus={{
              borderBottom:"1.5px solid #d87a32",
              color:"white",
              fontWeight:"800"
            }}
          >
            <Box

              display="flex"
              alignItems="center"
              justifyContent="left"
             
              height="100%"
              borderRight="1px solid #607B96"
              _hover={{
                borderBottom:"2px solid #FEA55F",
                margin:"0",
                padding:"0"
              }}
            >
              <Text
          
                fontWeight="400"
                paddingLeft="30px"
                fontSize="1.1rem"
               
                >
                  aditya-sharma
                </Text>
            </Box>
          </Link>

          <Link
            as={NextLink}
            href="/"
            fontWeight="400"
            _hover={{
              color: "white",
              textDecoration: "none",
              fontWeight: "800",
            }}
            width="13%"
            height="100%"
            _focus={{
              borderBottom:"1.5px solid #d87a32",
              color:"white",
              fontWeight:"800"
            }}
          >
            <Box

              display="flex"
              alignItems="center"
              justifyContent="center"
              // width="13%"
              height="100%"
              borderRight="1px solid #607B96"
              _hover={{
                borderBottom:"2px solid #FEA55F",
                margin:"0",
                padding:"0"
              }}
            >
              _hello
            </Box>
          </Link>
         <Link
            as={NextLink}
            href="/about"
            fontWeight="400"
            _hover={{
              color: "white",
              textDecoration: "none",
              fontWeight: "800",
            }}
            width="13%"
            height="100%"
            _focus={{
              borderBottom:"1.5px solid #d87a32",
              color:"white",
              fontWeight:"800"
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              // width="13%"
              height="100%"
              borderRight="1px solid #607B96"
              _hover={{
                borderBottom:"2px solid #FEA55F",
                margin:"0",
                padding:"0"
                
              }}
            >
              _about-me
            </Box>
          </Link>
          <Link
            as={NextLink}
            href="/projects"
            fontWeight="400"
            _hover={{
              color: "white",
              textDecoration: "none",
              fontWeight: "800",
            }}
            width="13%"
            height="100%"
            _focus={{
              borderBottom:"1.5px solid #d87a32",
              color:"white",
              fontWeight:"800"
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              // width="13%"
              height="100%"
              borderRight="1px solid #607B96"
              _hover={{
                borderBottom:"2px solid #FEA55F",
                margin:"0",
                padding:"0"

              }}
            >
              _projects
            </Box>
          </Link>
          <Spacer/>
          <Link
            as={NextLink}
            href="/contact"
            fontWeight="400"
            _hover={{
              color: "white",
              textDecoration: "none",
              fontWeight: "800",
            }}
            width="13%"
            height="100%"
            _focus={{
              borderBottom:"1.5px solid #d87a32",
              color:"white",
              fontWeight:"800"
            }}
          >
            <Box

              display="flex"
              alignItems="center"
              justifyContent="center"
              // width="13%"
              height="100%"
              borderLeft="1px solid #607B96"
              _hover={{
                borderBottom:"2px solid #FEA55F",
                margin:"0",
                padding:"0"
              }}
            >
              _contact
            </Box>
          </Link>

          </HStack>
        </Box>
      ) : (
        <Box
          as="section"
          // bg="transparent"
          w="100%"
          h="56px"
          position="fixed"
          top="0"
          zIndex="100"
          bg="#011627"
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
            <Link
            as={NextLink}
              href="/"
              fontWeight="300"
              fontSize="18px"
              _hover={{
                color: "white",
                textDecoration: "none",
                fontWeight: "800",
              }}
            >
              Aditya-Sharma
            </Link>
            <Spacer />
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
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent bg="#011627">
                <Box
                  w="100%"
                  h="56px"
                  display="block"
                  alignItems="center"
                  justifyContent="space-between"
                  borderBottom="1px solid #607B96"
                >
                  <DrawerCloseButton />
                  <DrawerHeader borderBottom="1px solid #607B96" height="56px">
                    <Link
                    as={NextLink}
                      href="/"
                      fontWeight="300"
                      fontSize="18px"
                      _hover={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "800",
                      }}
                    >
                      Aditya-Sharma
                    </Link>
                  </DrawerHeader>
                </Box>
                <VStack
                  spacing="0"
                  // mt={10}
                  w="100%"
                >
                  {navname.map((item, index) => {
                    return (
                      <>
                        <Link 
                        as={NextLink}
                        width="100%"
                        height="56px"
                        href={links [index]}
                        _hover={{
                          color: "white",
                          textDecoration: "none",
                          fontWeight: "800",
                        }}
                        _focus={{
                          color:"white",
                          fontWeight:"800"
                        }}
                        onClick={onClose}
                        >
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="left"
                            padding="0 1rem"
                            width="100%"
                            height="100%"
                            borderBottom="1px solid #607B96"
                            >
                            {item}

                            </Box>

                        </Link>
                        <hr />
                      </>
                    );
                  })}
                </VStack>
                {/* </DrawerBody> */}

                <Table
                  variant="simple"
                  width="100%"
                  height="50px"
                  bg="transparent"
                  borderTop="1px solid #607B96"
                  style={{
                    position: "fixed",
                    bottom: "0",
                    left: "0",
                  }}
                >
                  <Thead>
                    <tr>
                      <th
                        style={{
                          width: "40%",
                          borderRight: "1px solid #607B96",
                        }}
                      >
                        Find me in :
                      </th>
                      <th
                        style={{
                          borderRight: "1px solid #607B96",
                          width: "20%",
                          textAlign: "left",
                          paddingLeft: "20px",
                        }}
                      >
                        <Link
                          href="https://github.com/adityas-ops"
                          target="_blank"
                          fontWeight="300"
                          _hover={{
                            color: "white",
                            textDecoration: "none",
                            fontWeight: "800",
                          }}
                        >
                          <Icon as={FaGithub} w={6} h={6} />
                        </Link>
                      </th>
                      <th
                        style={{
                          borderRight: "1px solid #607B96",
                          width: "20%",
                        }}
                      >
                        <Link
                          href="https://www.linkedin.com/in/aditya-sharma-6645b41ab/"
                          target="_blank"
                          fontWeight="200"
                          _hover={{
                            color: "white",
                            textDecoration: "none",
                            fontWeight: "800",
                          }}
                        >
                          <Icon as={FaLinkedinIn} w={6} h={6} />
                        </Link>
                      </th>
                      <th
                        style={{
                          // borderRight:'1px solid #607B96',
                          width: "20%",
                        }}
                      >
                        <Link
                          href="https://twitter.com/ADITYAOPS"
                          target="_blank"
                          fontWeight="200"
                          _hover={{
                            color: "white",
                            textDecoration: "none",
                            fontWeight: "800",
                          }}
                        >
                          <Icon as={BsTwitter} w={6} h={6} />
                        </Link>
                      </th>
                    </tr>
                  </Thead>
                </Table>
              </DrawerContent>
            </Drawer>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Header;
