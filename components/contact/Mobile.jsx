import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
  Link,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiMailFill,
  RiPhoneLine,
  RiShareBoxFill,
} from "react-icons/ri";
import Formi from "./Formi";

function Mobile() {
  const [disableNd, setDisableNd] = useState(false);
  return (
    <>
      <Box width="100%" height="fit-content" bg="#011627" zIndex="100">
        <Box paddingBottom="60px">
          <Accordion allowMultiple>
            <AccordionItem border="none">
              <h2
                style={{
                  background: "#1E2D3D",
                  marginBottom: "2px",
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
                    contact-info
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel>
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
                  <a className="linki" href="tel:+919792855377">
                    <Icon
                      as={RiPhoneLine}
                      color="#607B96"
                      boxSize="18px"
                      mr="5px"
                    />
                    +919792855377
                  </a>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem border="none">
              <h2
                style={{
                  background: "#1E2D3D",
                  marginBottom: "2px",
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
                    width="80%"
                    height="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-envely"
                    _hover={{
                      color: "white",
                    }}
                  >
                    find-me-also-in
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <VStack width="100%" height="100%" ml="20px">
                  <Link
                    href="https://www.instagram.com/aditya.0.0.8/"
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
                    <Icon
                      as={RiShareBoxFill}
                      color="#607B96"
                      boxSize="18px"
                      mr="5px"
                    />
                    Instagram
                  </Link>
                  <Link
                    href="https://leetcode.com/aditya-ops/"
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
                    <Icon
                      as={RiShareBoxFill}
                      color="#607B96"
                      boxSize="18px"
                      mr="5px"
                    />
                    Leetcode
                  </Link>
                  <Link
                    href="https://auth.geeksforgeeks.org/user/adityasharma20cs08/"
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
                    <Icon
                      as={RiShareBoxFill}
                      color="#607B96"
                      boxSize="18px"
                      mr="5px"
                    />
                    GeeksforGeeks
                  </Link>
                  <Link
                    href="https://www.hackerrank.com/adityakushinaga1?hr_r=1"
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
                    <Icon
                      as={RiShareBoxFill}
                      color="#607B96"
                      boxSize="18px"
                      mr="5px"
                    />
                    HackerRank
                  </Link>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box 
          paddingBottom="60px"
        >
          <Formi />
        </Box>
      </Box>
    </>
  );
}

export default Mobile;
