import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  RiTerminalFill,
  RiArrowDownSFill,
  RiUser4Fill,
  RiArrowDownSLine,
  RiGamepadFill,
  RiCloseFill,
  RiChatSmile3Fill,
  RiFolder3Fill,
  RiStarSFill,
  RiBugFill,
  RiArrowRightSLine,
  RiMailFill,
  RiPhoneLine,
} from "react-icons/ri";
import { BsMarkdownFill } from "react-icons/bs";
import Link from "next/link";

export default function about() {
  const [disableNd, setDisableNd] = useState(false);
  const [disableNd1, setDisableNd1] = useState(false);
  const [disableNd2, setDisableNd2] = useState(false);

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
        overflow="hidden"
        bg="#011627"
        // 1E2D3D
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
                <Box width="15%" height="100%" borderRight="1px solid #607B96">
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
                    />
                    <Icon
                      as={RiUser4Fill}
                      mt="58px"
                      color="#607B96"
                      boxSize="24px"
                    />
                    <Icon
                      as={RiGamepadFill}
                      mt="24px"
                      color="#607B96"
                      boxSize="24px"
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
                            >
                              <Icon
                                as={BsMarkdownFill}
                                color="white"
                                boxSize="16px"
                                mr="5px"
                              />
                              <Text color="white" fontSize="14px">
                                About
                              </Text>
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
                            >
                              <Icon
                                as={BsMarkdownFill}
                                color="white"
                                boxSize="16px"
                                mr="5px"
                              />
                              <Text color="white" fontSize="14px">
                                About
                              </Text>
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
                            >
                              <Icon
                                as={BsMarkdownFill}
                                color="white"
                                boxSize="16px"
                                mr="5px"
                              />
                              <Text color="white" fontSize="14px">
                                B.Tech
                              </Text>
                            </Box>
                            <Box
                              width="77%"
                              height="px"
                              display="flex"
                              alignItems="center"
                              justifyContent="start"
                              cursor="pointer"
                            >
                              <Icon
                                as={BsMarkdownFill}
                                color="white"
                                boxSize="16px"
                                mr="5px"
                              />
                              <Text color="white" fontSize="14px">
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
                            >
                              <Icon
                                as={BsMarkdownFill}
                                color="white"
                                boxSize="16px"
                                mr="5px"
                              />
                              <Text color="white" fontSize="14px">
                                high-school
                              </Text>
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
                        style={{
                          textDecoration: "none",
                          color: "#607B96",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "start",
                          marginLeft: "15px",
                          marginTop: "10px",
                          wordWrap: "wrap",
                        }}
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
                        style={{
                          textDecoration: "none",
                          color: "#607B96",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "start",
                          marginLeft: "15px",
                          marginTop: "10px",
                        }}
                        href="mailto:adityakushinagar123@gmail.com"
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
                       contact-info
                       {" "}
                      <Icon
                        as={RiCloseFill}
                        boxSize="24px"
                        mr="10px"
                      />
                     
                    </Text>
                    </Box>
            </Box>
            {/* third div */}
            <Box>s</Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
