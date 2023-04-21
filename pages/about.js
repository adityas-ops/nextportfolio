import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Icon,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  RiTerminalFill,
  RiArrowDownSFill,
  RiUser4Fill,
  RiArrowDownSLine,
  RiGamepadFill,
  RiCloseFill,
  RiFolder3Fill,
  RiArrowRightSLine,
  RiMailFill,
  RiPhoneLine,
  RiArrowRightSFill,
} from "react-icons/ri";
import { BsMarkdownFill } from "react-icons/bs";
import { useEffect } from "react";
import High from "@/components/High";
import Inter from "@/components/Inter";
import Intrest from "@/components/Intrest";
import Btech from "@/components/Btech";
import About from "@/components/About";
import Code from "@/components/Code";

export default function about() {
  const [disableNd, setDisableNd] = useState(false);
  const [disableNd1, setDisableNd1] = useState(false);
  const [disableNd2, setDisableNd2] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(index);
  }, [index]);

  const headlines = [
    "about-me",
    "intrests",
    "B.Tech",
    "Intermediate",
    "High-school",
  ];
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      {isDesktop ? (
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
          overflow="hidden"
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
              <Box width="22.3%" height="100%" borderRight="1px solid #607B96">
                <Flex width="100%" height="100%">
                  {/* for icons  */}
                  <Box
                    width="15%"
                    height="100%"
                    borderRight="1px solid #607B96"
                  >
                    <VStack
                      width="100%"
                      height="150px"
                      justifyContent="space-between"
                      mt="15px"
                      // bg="red"
                    >
                      <Icon
                        as={RiTerminalFill}
                        mt="18px"
                        color="#607B96"
                        boxSize="24px"
                        _hover={{
                          color: "white",
                        }}
                      />
                      <Icon
                        as={RiUser4Fill}
                        mt="58px"
                        color="#607B96"
                        boxSize="24px"
                        _hover={{
                          color: "white",
                        }}
                      />
                      <Icon
                        as={RiGamepadFill}
                        mt="24px"
                        color="#607B96"
                        boxSize="24px"
                        _hover={{
                          color: "white",
                        }}
                      />
                    </VStack>
                  </Box>
                  <Box width="100%">
                    <Box
                      height="40px"
                      width="100%"
                      borderBottom="1px solid #607B96"
                    >
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
                        <Icon
                          as={RiArrowDownSFill}
                          color="white"
                          boxSize="24px"
                        />
                        personal-info
                      </Text>
                    </Box>
                    <Box>
                      <Accordion allowToggle="true">
                        <AccordionItem border="none">
                          <h2>
                            <AccordionButton>
                              {disableNd ? (
                                <Icon
                                  as={RiArrowDownSLine}
                                  color="white"
                                  boxSize="18px"
                                  mr="5px"
                                  onClick={() => setDisableNd(!disableNd)}
                                />
                              ) : (
                                <Icon
                                  as={RiArrowRightSLine}
                                  color="white"
                                  boxSize="18px"
                                  mr="5px"
                                  onClick={() => setDisableNd(!disableNd)}
                                />
                              )}
                              <Box
                                width="40%"
                                height="100%"
                                display="flex"
                                alignItems="center"
                                justifyContent="space-envely"
                                _hover={{
                                  color: "white",
                                }}
                              >
                                <Icon
                                  as={RiFolder3Fill}
                                  color="rgb(216, 81, 36)"
                                  boxSize="18px"
                                  mr="5px"
                                />
                                Bio
                              </Box>
                            </AccordionButton>
                          </h2>
                          <AccordionPanel>
                            <VStack>
                              <Box
                                width="77%"
                                height="px"
                                display="flex"
                                alignItems="center"
                                justifyContent="start"
                                cursor="pointer"
                                onClick={() => setIndex(0)}
                                _hover={{
                                  color: "white",
                                }}
                              >
                                <Icon
                                  as={BsMarkdownFill}
                                  // color="white"
                                  boxSize="16px"
                                  mr="5px"
                                />
                                <Text fontSize="14px">About</Text>
                              </Box>
                            </VStack>
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem border="none" m="0" p="0">
                          <h2>
                            <AccordionButton>
                              {disableNd1 ? (
                                <Icon
                                  as={RiArrowDownSLine}
                                  color="white"
                                  boxSize="18px"
                                  mr="5px"
                                  onClick={() => setDisableNd1(!disableNd1)}
                                />
                              ) : (
                                <Icon
                                  as={RiArrowRightSLine}
                                  color="white"
                                  boxSize="18px"
                                  mr="5px"
                                  onClick={() => setDisableNd1(!disableNd1)}
                                />
                              )}
                              <Box
                                width="40%"
                                height="100%"
                                display="flex"
                                alignItems="center"
                                justifyContent="space-envely"
                                _hover={{
                                  color: "white",
                                }}
                              >
                                <Icon
                                  as={RiFolder3Fill}
                                  color="rgb(36, 216, 126)"
                                  boxSize="18px"
                                  mr="5px"
                                />
                                interests
                              </Box>
                            </AccordionButton>
                          </h2>
                          <AccordionPanel>
                            <VStack>
                              <Box
                                width="77%"
                                height="px"
                                display="flex"
                                alignItems="center"
                                justifyContent="start"
                                cursor="pointer"
                                onClick={() => setIndex(1)}
                                _hover={{
                                  color: "white",
                                }}
                              >
                                <Icon
                                  as={BsMarkdownFill}
                                  // color="white"
                                  boxSize="16px"
                                  mr="5px"
                                />
                                <Text fontSize="14px">interests</Text>
                              </Box>
                            </VStack>
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem border="none">
                          <h2>
                            <AccordionButton>
                              {disableNd2 ? (
                                <Icon
                                  as={RiArrowDownSLine}
                                  color="white"
                                  boxSize="18px"
                                  mr="5px"
                                  onClick={() => setDisableNd2(!disableNd2)}
                                />
                              ) : (
                                <Icon
                                  as={RiArrowRightSLine}
                                  color="white"
                                  boxSize="18px"
                                  mr="5px"
                                  onClick={() => setDisableNd2(!disableNd2)}
                                />
                              )}
                              <Box
                                width="40%"
                                height="100%"
                                display="flex"
                                alignItems="center"
                                justifyContent="space-envely"
                                _hover={{
                                  color: "white",
                                }}
                              >
                                <Icon
                                  as={RiFolder3Fill}
                                  color="rgb(36, 105, 216)"
                                  boxSize="18px"
                                  mr="5px"
                                />
                                education
                              </Box>
                            </AccordionButton>
                          </h2>
                          <AccordionPanel>
                            <VStack
                              width="100%"
                              height="60px"
                              // bg="red"
                              justifyContent="space-around"
                            >
                              <Box
                                width="77%"
                                height="px"
                                display="flex"
                                alignItems="center"
                                justifyContent="start"
                                cursor="pointer"
                                onClick={() => setIndex(2)}
                                _hover={{
                                  color: "white",
                                }}
                              >
                                <Icon
                                  as={BsMarkdownFill}
                                  // color="white"
                                  boxSize="16px"
                                  mr="5px"
                                />
                                <Text fontSize="14px">B.Tech</Text>
                              </Box>
                              <Box
                                width="77%"
                                height="px"
                                display="flex"
                                alignItems="center"
                                justifyContent="start"
                                cursor="pointer"
                                _hover={{
                                  color:'white'
                                }}
                                _active={{
                                  color:'red' 
                                }}
                                _focus={{
                                  color:'red'
                                }}
                                onClick={() => setIndex(3)}
                              >
                                <Icon
                                  as={BsMarkdownFill}
                               
                                  boxSize="16px"
                                  mr="5px"
                                />
                                <Text  fontSize="14px">
                                  intermediate
                                </Text>
                              </Box>
                              <Box
                                width="77%"
                                height="px"
                                display="flex"
                                alignItems="center"
                                justifyContent="start"
                                cursor="pointer"
                                onClick={() => {
                                  setIndex(4);
                                }}
                                _hover={{
                                  color: "white",
                                }}
                              >
                                <Icon
                                  as={BsMarkdownFill}
                                  // color="white"
                                  boxSize="16px"
                                  mr="5px"
                                />
                                <Text fontSize="14px">high-school</Text>
                              </Box>
                            </VStack>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </Box>

                    <Box
                      height="40px"
                      width="100%"
                      mt="30px"
                      borderBottom="1px solid #607B96"
                      borderTop="1px solid #607B96"
                    >
                      <Text
                        width="100%"
                        height="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="start"
                        color="white"
                        fontSize="16px"
                        ml="15px"
                      >
                        {" "}
                        <Icon
                          as={RiArrowDownSFill}
                          color="white"
                          boxSize="24px"
                        />
                        contact-info
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
                    </Box>
                  </Box>
                </Flex>
              </Box>
              {/* second div */}
              <Box width="40%" borderRight="1px solid #607B96">
                <Box
                  height="40px"
                  width="100%"
                  borderBottom="1px solid #607B96"
                >
                  <Text
                    width="30%"
                    height="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    fontSize="16px"
                    ml="15px"
                    borderRight="1px solid #607B96"
                  >
                    {headlines[index]}{" "}
                    {index !== 5 ? (
                      <Icon
                        _hover={{ color: "white" }}
                        as={RiCloseFill}
                        boxSize="24px"
                        mr="10px"
                        onClick={() => setIndex(5)}
                      />
                    ) : (
                      <></>
                    )}
                  </Text>
                  <Flex>
                    <Box
                      width="100%"
                      height="500px"
                      marginLeft="30px"
                      marginTop="30px"
                    >
                      {index === 0 ? (
                        <About />
                      ) : index === 1 ? (
                        <Intrest />
                      ) : index === 2 ? (
                        <Btech />
                      ) : index === 3 ? (
                        <Inter />
                      ) : index === 4 ? (
                        <High />
                      ) : (
                        <> </>
                      )}
                    </Box>
                    <Box
                      width="5%"
                      height="83.3vh"
                      borderLeft="1px solid #607B96"
                      display="flex"
                      justifyContent="center"
                      // alignItems="center"
                    >
                      <Box
                        width="70%"
                        height="8px"
                        bg="blue.100"
                        mt="7px"
                      ></Box>
                    </Box>
                  </Flex>
                </Box>
              </Box>
              {/* third div */}
              <Box width="37.7%">
                <Box
                  height="40px"
                  width="100%"
                  borderBottom="1px solid #607B96"
                >
                  <Text
                    width="30%"
                    height="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    fontSize="16px"
                    ml="15px"
                  ></Text>
                </Box>
                <Flex>
                  <Box width="95%" display="flex" justifyContent="center">
                    <Code />
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
              </Box>
            </Flex>
          </Box>
        </Box>
      ) : (
        <>
          <Box width="100%" height="100%" bg="#011627">
            <Box>
              <Accordion allowMultiple>
                <AccordionItem border="none">
                  <h2 
                    style={{
                      background:'#1E2D3D',
                      marginBottom:'2px'
                    }}
                  >
                    <AccordionButton>
                      {disableNd ? (
                        <Icon
                          as={RiArrowDownSFill}
                          color="white"
                          boxSize="18px"
                          mr="5px"
                          onClick={() => setDisableNd(!disableNd)}
                        />
                      ) : (
                        <Icon
                          as={RiArrowRightSFill}
                          color="white"
                          boxSize="18px"
                          mr="5px"
                          onClick={() => setDisableNd(!disableNd)}
                        />
                      )}
                      <Box
                        width="40%"
                        height="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-envely"
                        _hover={{
                          color: "white",
                        }}
                      >
                        personal-info
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <VStack
                      width="100%"
                      height="100%"
                      display="flex"
                      alignItems="start"
                      justifyContent="start"
                      ml="15px"
                    >
                      <AccordionItem border="none">
                        <h2>
                          <AccordionButton>
                            {disableNd ? (
                              <Icon
                                as={RiArrowDownSLine}
                                color="white"
                                boxSize="18px"
                                mr="5px"
                                onClick={() => setDisableNd(!disableNd)}
                              />
                            ) : (
                              <Icon
                                as={RiArrowRightSLine}
                                color="white"
                                boxSize="18px"
                                mr="5px"
                                onClick={() => setDisableNd(!disableNd)}
                              />
                            )}
                            <Box
                              width="40%"
                              height="100%"
                              display="flex"
                              alignItems="center"
                              justifyContent="space-envely"
                              _hover={{
                                color: "white",
                              }}
                            >
                              <Icon
                                as={RiFolder3Fill}
                                color="rgb(216, 81, 36)"
                                boxSize="18px"
                                mr="5px"
                              />
                              Bio
                            </Box>
                          </AccordionButton>
                        </h2>
                        <AccordionPanel>
                          <VStack>
                            <Box
                              width="100%"
                              // height="px"
                              display="flex"
                              alignItems="center"
                              justifyContent="start"
                              cursor="pointer"
                              onClick={() => setIndex(0)}
                              _hover={{
                                color: "white",
                              }}
                            >
                              <Icon
                                as={BsMarkdownFill}
                                // color="white"
                                boxSize="16px"
                                mr="5px"
                              />
                              <Text fontSize="14px">About</Text>
                            </Box>
                          </VStack>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem border="none" m="0" p="0">
                        <h2>
                          <AccordionButton>
                            {disableNd1 ? (
                              <Icon
                                as={RiArrowDownSLine}
                                color="white"
                                boxSize="18px"
                                mr="5px"
                                onClick={() => setDisableNd1(!disableNd1)}
                              />
                            ) : (
                              <Icon
                                as={RiArrowRightSLine}
                                color="white"
                                boxSize="18px"
                                mr="5px"
                                onClick={() => setDisableNd1(!disableNd1)}
                              />
                            )}
                            <Box
                              width="40%"
                              height="100%"
                              display="flex"
                              alignItems="center"
                              justifyContent="space-envely"
                              _hover={{
                                color: "white",
                              }}
                            >
                              <Icon
                                as={RiFolder3Fill}
                                color="rgb(36, 216, 126)"
                                boxSize="18px"
                                mr="5px"
                              />
                              interests
                            </Box>
                          </AccordionButton>
                        </h2>
                        <AccordionPanel>
                          <VStack>
                            <Box
                              width="77%"
                              height="px"
                              display="flex"
                              alignItems="center"
                              justifyContent="start"
                              cursor="pointer"
                              onClick={() => setIndex(1)}
                              _hover={{
                                color: "white",
                              }}
                            >
                              <Icon
                                as={BsMarkdownFill}
                                // color="white"
                                boxSize="16px"
                                mr="5px"
                              />
                              <Text fontSize="14px">interests</Text>
                            </Box>
                          </VStack>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem border="none">
                        <h2>
                          <AccordionButton>
                            {disableNd2 ? (
                              <Icon
                                as={RiArrowDownSLine}
                                color="white"
                                boxSize="18px"
                                mr="5px"
                                onClick={() => setDisableNd2(!disableNd2)}
                              />
                            ) : (
                              <Icon
                                as={RiArrowRightSLine}
                                color="white"
                                boxSize="18px"
                                mr="5px"
                                onClick={() => setDisableNd2(!disableNd2)}
                              />
                            )}
                            <Box
                              width="40%"
                              height="100%"
                              display="flex"
                              alignItems="center"
                              justifyContent="space-envely"
                              _hover={{
                                color: "white",
                              }}
                            >
                              <Icon
                                as={RiFolder3Fill}
                                color="rgb(36, 105, 216)"
                                boxSize="18px"
                                mr="5px"
                              />
                              education
                            </Box>
                          </AccordionButton>
                        </h2>
                        <AccordionPanel>
                          <VStack
                            width="100%"
                            height="60px"
                            // bg="red"
                            justifyContent="space-around"
                            ml="15px"
                          >
                            <Box
                              width="100%"
                              display="flex"
                              alignItems="center"
                              justifyContent="start"
                              cursor="pointer"
                              onClick={() => setIndex(2)}
                              _hover={{
                                color: "white",
                              }}
                            >
                              <Icon
                                as={BsMarkdownFill}
                                // color="white"
                                boxSize="16px"
                                mr="5px"
                              />
                              <Text fontSize="14px">B.Tech</Text>
                            </Box>
                            <Box
                              width="100%"
                              // height="px"
                              mt="5px"
                              display="flex"
                              alignItems="center"
                              justifyContent="start"
                              cursor="pointer"
                              _hover={{
                                color: "white",
                              }}
                              onClick={() => setIndex(3)}
                            >
                              <Icon
                                as={BsMarkdownFill}
                                // color="white"
                                boxSize="16px"
                                mr="5px"
                              />
                              <Text fontSize="14px">intermediate</Text>
                            </Box>
                            <Box
                              width="100%"
                              display="flex"
                              alignItems="center"
                              justifyContent="start"
                              cursor="pointer"
                              mt="5px"
                              onClick={() => {
                                setIndex(4);
                              }}
                              _hover={{
                                color: "white",
                              }}
                            >
                              <Icon
                                as={BsMarkdownFill}
                                // color="white"
                                boxSize="16px"
                                mr="5px"
                              />
                              <Text fontSize="14px">high-school</Text>
                            </Box>
                          </VStack>
                        </AccordionPanel>
                      </AccordionItem>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem border="none">
                  <h2 
                   style={{
                      background:'#1E2D3D',
                      marginBottom:'2px',
                    }}
                  >
                    <AccordionButton>
                      {disableNd ? (
                        <Icon
                          as={RiArrowDownSFill}
                          color="white"
                          boxSize="18px"
                          mr="5px"
                          onClick={() => setDisableNd(!disableNd)}
                        />
                      ) : (
                        <Icon
                          as={RiArrowRightSFill}
                          color="white"
                          boxSize="18px"
                          mr="5px"
                          onClick={() => setDisableNd(!disableNd)}
                        />
                      )}
                      <Box
                        width="40%"
                        // width="100%"
                        height="100%"
                       
                        justifyContent="space-envely"
                        _hover={{
                          color: "white",
                        }}
                      >
                        contact-info
                      </Box>
                    </AccordionButton>
                    
                  </h2>
                  <AccordionPanel>
                    <VStack>
                      <Box
                        width="77%"
                        // height="px"
                        display="flex"
                        flexDirection="column"
                        alignItems="start"
                        justifyContent="start"
                      >
                        <a
                          style={{
                            textDecoration: "none",
                            color: "#607B96",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            marginTop: "10px",
                            wordWrap: "wrap",
                          }}
                          href="mailto:adityakushinagar123@gmail.com"
                          _hover={{
                            color: "white",
                          }}
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
                          style={{
                            textDecoration: "none",
                            color: "#607B96",
                            display: "flex",
                            alignItems: "start",
                            justifyContent: "start",
                            marginTop: "10px",
                          }}
                          href="tel:+919792855377"
                          _hover={{
                            color: "white",
                          }}
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
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box width="100%" mt="50px"  bg="#011627">
              <Box height="40px" width="100%">
                <Text
                  width="100%"
                  height="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="17px"
                  // ml="15px"
                >
                  // {headlines[index]}
                </Text>
                  <Box
                    width="100%"
                    height="600px"
                    bg="#011627"
                    p={6}
                  >
                    {index === 0 ? (
                      <About />
                    ) : index === 1 ? (
                      <Intrest />
                    ) : index === 2 ? (
                      <Btech />
                    ) : index === 3 ? (
                      <Inter />
                    ) : index === 4 ? (
                      <High />
                    ) : (
                      <> </>
                    )}
                  </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}
