import Head from "next/head";
import { SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import styles from "../styles/Home.module.css";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
// import Image from "next/image";

export default function Home() {
  const intro = "> Front-end Developer";
  return (
    <>
      <Head>
        <title> Aditya Sharma Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <styles>
          @import
          url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;500&display=swap');
        </styles>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container'>
      <div className='circle1'></div>
      <div className='circle2'></div>
      </div>
      <Box
        width="100%"
        position="fixed"
        height={{
          base: "fit-content",
          md: "87vh",
          lg: "87vh",
          xl: "87.5vh",
        }}
        overflow="hidden"
      >
        <Flex
          width="100%"
          // height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width={{
              base: "100%",
              md: "50%",
              lg: "50%",
              xl: "50%",
            }}
            height="100%"
            display="flex"
            flexDirection="column"
            marginTop={{
              base: "150px",
              md: "0",
              lg: "0",
              xl: "0",
            }}
            
          >
            <Box
              display="flex"
              flexDirection="column"
              paddingLeft={{
                base: "20px",
                md: "60px",
                lg: "100px",
                xl: "100px",
              }}
            >
            <Box 
             lineHeight="1.2"
             color="white"
            >
              <Text
                fontSize="2xl"
                fontFamily="Fira Code"
                fontWeight="200"
              >
                Hi all, I am
                </Text>
                <Text fontSize="7xl" fontWeight="300">
                  Aditya Sharma
                </Text>
                <Text
                  fontSize="3xl"
                  fontFamily="Fira Code"
                  color="#5271ff"
                  fontWeight="400"
                  m="0"
                  as="span"
                >
                  {intro}
                </Text>
                </Box>
          

              <Box
                marginTop={{
                  base: "100px",
                  md: "50px",
                  lg: "50px",
                  xl: "50px",
                }}
                fontSize="15px"
              >
                <Text
                  fontSize="1xl"
                  fontFamily="Fira Code"
                  color="#607B96"
                  fontWeight="200"
                >
                  // You can also see it on my Github Page
                </Text>
                <Text color="#ff5757" fontWeight="500">
                  <Text as="span" color="#5271ff">
                    const
                  </Text>
                  <Text as="span" color="#00bf63">
                    {" "}
                    githubLink{" "}
                  </Text>
                  <Text as="span" color="white">
                    ={" "}
                  </Text>
                  <Link
                    href="https://github.com/adityas-ops/nextportfolio"
                    style={{
                      textDecoration: "underline",
                    }}
                    target="_blank"
                  >
                    "https://github.com/adityas-ops/nextportfolio"
                  </Link>
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            display={{
              base: "none",
              md: "block",
              lg: "block",
              xl: "block",
            }}
            width="50%"
            height="100%"
          >
            <Box marginTop="40px" p="0" opacity="0.3">
              <Image src="code.png" alt="hero" height={200} width={600} />
            </Box>
            <Box marginTop="40px" marginBottom="80px">
              <Image
                src="code.png"
                alt="hero"
                height={200}
                width={600}
                opacity="0.9"
              />
            </Box>
            <Box m="0" p="0">
              <Image
                src="code.png"
                alt="hero"
                height={200}
                width={600}
                opacity="0.3"
              />
            </Box>
          </Box>
        </Flex>
        
      </Box>
    </>
  );
}
