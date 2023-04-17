import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { agate, darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useEffect, useState } from "react";
import { Box, Flex, Icon, Image, Text, Link } from "@chakra-ui/react";
import { RiChatSmile3Fill, RiStarSFill } from "react-icons/ri";
// import Link from 'next/link';
function Code() {
  const [code, setCode] = useState("");
  const [data, setData] = useState("");
  const fetchdata = () => {
    fetch(
      "https://api.github.com/repos/adityas-ops/nextportfolio/contents/components/Code.jsx"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        const code = atob(data.content);
        setCode(code);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const customStyle = {
    backgroundColor: "#011221",
    padding: "10px",
    fontSize: "12px",
    borderRadius: "10px",
    border: "1px solid #607B96",
    color: "#607B96",
    width: "450px",
    height: "150px",
  };
  return (
    <>
      <Box p={4} color="white" display="flex" flexDirection="column">
        <Text color="#607B96" mb="50px">
          // Code Snippet showcase:
        </Text>
        <Box 
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Flex width="90%"  
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box width="50px" height="50px">
              <Image
                src="/wolf.jpeg"
                width="40px"
                height="40px"
                borderRadius="50%"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
              />
            </Box>
            <Box width="100%" mb="20px">
              <Box
                display="flex"
                // bg="red"
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
              >
                <Text color="#5271ff">@adityas-ops</Text>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  // width="100%"
                >
                  <Text
                    color="#607B96"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mr="10px"
                  >
                    <Icon as={RiChatSmile3Fill} mr="5px" />
                    <Link
                      href={data.html_url}
                      target="_blank"
                      _hover={{
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Details
                    </Link>
                  </Text>
                  <Text
                    color="#607B96"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Icon as={RiStarSFill} mr="5px" />
                    <Link
                      href=""
                      target="_blank"
                      _hover={{
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Star
                    </Link>
                  </Text>
                </Box>
              </Box>
              <Box></Box>
              <Box>
                <Text color="#607B96" fontSize="12px">
                  Created 5 months ago
                </Text>
              </Box>
            </Box>
          </Flex>
          <SyntaxHighlighter
            language="javascript"
            style={agate}
            customStyle={customStyle}
          >
            {code.substring(0, 600)}
          </SyntaxHighlighter>
        </Box>
        <Text  fontSize="14px"  p={4} color="#607B96" mb="20px" mt="20px" border="none" borderTop="1px solid #607B96"  borderWidth="0.5px">
          //My work here is just in. It was project call portfolio :
        </Text>
        <Box 
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Flex width="90%"  
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box width="50px" height="50px">
              <Image
                src="/wolf.jpeg"
                width="40px"
                height="40px"
                borderRadius="50%"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
              />
            </Box>
            <Box width="100%" mb="20px">
              <Box
                display="flex"
                // bg="red"
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
              >
                <Text color="#5271ff">@adityas-ops</Text>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  // width="100%"
                >
                  <Text
                    color="#607B96"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mr="10px"
                  >
                    <Icon as={RiChatSmile3Fill} mr="5px" />
                    <Link
                      href={data.html_url}
                      target="_blank"
                      _hover={{
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Details
                    </Link>
                  </Text>
                  <Text
                    color="#607B96"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Icon as={RiStarSFill} mr="5px" />
                    <Link
                      href=""
                      target="_blank"
                      _hover={{
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Star
                    </Link>
                  </Text>
                </Box>
              </Box>
              <Box></Box>
              <Box>
                <Text color="#607B96" fontSize="12px">
                  Created 5 months ago
                </Text>
              </Box>
            </Box>
          </Flex>
          <SyntaxHighlighter
            language="javascript"
            style={agate}
            customStyle={customStyle}
          >
            {code.substring(800, 1200)}
          </SyntaxHighlighter>
        </Box>
      </Box>
    </>
  );
}

export default Code;
