import {
  Box,
  Icon,
  Text,
  VStack,
  Checkbox,
  Image,
  Button,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiReactjsFill,
} from "react-icons/ri";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import Link from "next/link";

function Mobile() {
  const [checkboxes, setCheckboxes] = useState({
    react: true,
    html: true,
    nextjs: false,
    javascript: false,
    css: false,
    nodejs: false,
    chakraui: false,
  });

  const [projects, setProjects] = useState([
    {
      name: "_macc-essential",
      img: "essential.png",
      des: "e-commerce website with fake api.",
      link: "https://github.com/adityas-ops/e-commerce",
      icon: "RiReactjsFill",
      tags: ["react", "html", "javascript", "css", "redux"],
      id: "2",
    },
    {
      name: "_chat-Gpt-2.0",
      img: "chatgpt.png",
      des: "chatbot with gpt-2.0 & img to text converter.",
      link: "https://github.com/adityas-ops/chat-gpt",
      icon: "RiReactjsFill",
      tags: ["nodejs"],
      id: "3",
    },
    {
      name: "_portfolio",
      img: "portfolio1.png",
      des: "my first portfolio website.",
      link: "https://github.com/adityas-ops/portfolio",
      icon: "RiReactjsFill",
      tags: ["react", "html", "javascript", "css"],
      id: "1",
    },
    {
      name: "_portfolio-2.0",
      img: "portfolio2.png",
      des: "my second portfolio website using Next JS",
      link: "https://github.com/adityas-ops/nextportfolio",
      icon: "TbBrandNextjs",
      tags: ["nextjs", "chakraui"],
      id: "6",
    },
    {
      name: "_the-headliner",
      img: "headliner.png",
      des: "news website with live news Api.",
      link: "https://github.com/adityas-ops/the-headliner",
      icon: "TbBrandNextjs",
      tags: ["nextjs", "chakraui"],
      id: "5",
    },
    {
      name: "_resume-builder",
      img: "resumebuilder.png",
      des: "resume builder with pdf download.",
      link: "https://github.com/adityas-ops/resumeadi",
      icon: "RiReactjsFill",
      tags: ["react", "html", "javascript", "css"],
      id: "4",
    },
  ]);

  const handleCheckboxChange = (event) => {
    setCheckboxes({
      ...checkboxes,
      [event.target.name]: event.target.checked,
    });
  };

  const getFilteredProjects = () => {
    return projects.filter((project) => {
      return (
        (checkboxes.react && project.tags.includes("react")) ||
        (checkboxes.html && project.tags.includes("html")) ||
        (checkboxes.nextjs && project.tags.includes("nextjs")) ||
        (checkboxes.javascript && project.tags.includes("javascript")) ||
        (checkboxes.css && project.tags.includes("css")) ||
        (checkboxes.nodejs && project.tags.includes("nodejs")) ||
        (checkboxes.chakraui && project.tags.includes("chakraui"))
      );
    });
  };
  const [disableNd, setDisableNd] = useState(false);
  return (
    <>
      <Box width="100%" height="100%" bg="#011627" zIndex="100">
        <Box>
          <Accordion defaultIndex={[0]} allowMultiple>
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
                      as={RiArrowRightSFill}
                      color="white"
                      boxSize="18px"
                      mr="5px"
                      onClick={() => setDisableNd(!disableNd)}
                    />
                  ) : (
                    <Icon
                      as={RiArrowDownSFill}
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
                    projects
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
                    <Box
                  width="100px"
                  display="flex"
                  alignItems="center"
                  justifyContent="left"
                  mt="20px"
                >
                  <Checkbox
                    colorScheme="#607B96"
                    color="green"
                    borderColor="#607B96"
                    _hover={{
                      borderColor: "white",
                    }}
                    mr="20px"
                    name="html"
                    onChange={handleCheckboxChange}
                    checked={checkboxes.html}
                    defaultChecked
                  />
                  <Text
                    fontSize="16px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon
                      as={RiHtml5Fill}
                      boxSize="18px"
                      mr="5px"
                    />
                    HTML
                  </Text>
                </Box>
                 {/* start */}
                 <Box
                  width="100px"
                  display="flex"
                  alignItems="center"
                  justifyContent="left"
                  mt="20px"
                >
                  <Checkbox
                    colorScheme="#607B96"
                    borderColor="#607B96"
                    _hover={{
                      borderColor: "white",
                    }}
                    mr="20px"
                    name="css"
                    onChange={handleCheckboxChange}
                    checked={checkboxes.css}
                    defaultChecked
                  />
                  <Text
                    fontSize="16px"
                    display="flex"
                    alignItems="center"
                  >
                    <Icon
                      as={RiCss3Fill}
                      boxSize="18px"
                      mr="5px"
                    />
                    CSS
                  </Text>
                </Box>
                {/* end */}
                 {/* start */}
                 <Box
                  width="100px"
                  display="flex"
                  alignItems="center"
                  justifyContent="left"
                  mt="20px"
                >
                  <Checkbox
                    colorScheme="#607B96"
                    borderColor="#607B96"
                    _hover={{
                      borderColor: "white",
                    }}
                    mr="20px"
                    name="javascript"
                    onChange={handleCheckboxChange}
                    checked={checkboxes.javascript}
                    defaultChecked
                  />
                  <Text
                    fontSize="16px"
                    display="flex"
                    alignItems="center"
                  >
                    <Icon
                      as={TbBrandJavascript}
                      boxSize="18px"
                      mr="5px"
                    />
                    JavaScript {"   "}
                  </Text>
                </Box>
                {/* end */}
                {/* start */}
                <Box
                  width="100px"
                  display="flex"
                  alignItems="center"
                  justifyContent="left"
                  mt="20px"
                >
                  <Checkbox
                    colorScheme="#607B96"
                    borderColor="#607B96"
                    _hover={{
                      borderColor: "white",
                    }}
                    mr="20px"
                    name="react"
                    onChange={handleCheckboxChange}
                    checked={checkboxes.react}
                    defaultChecked
                  />
                  <Text
                    fontSize="16px"
                    display="flex"
                    alignItems="center"
                  >
                    <Icon
                      as={RiReactjsFill}
                      boxSize="18px"
                      mr="5px"
                    />
                    React
                  </Text>
                </Box>
                {/* end */}
                {/* start */}
                <Box
                  width="100px"
                  display="flex"
                  alignItems="center"
                  justifyContent="left"
                  mt="20px"
                >
                  <Checkbox
                    colorScheme="#607B96"
                    borderColor="#607B96"
                    _hover={{
                      borderColor: "white",
                    }}
                    mr="20px"
                    name="nextjs"
                    onChange={handleCheckboxChange}
                    checked={checkboxes.nextjs}
                  />
                  <Text
                    fontSize="16px"
                    display="flex"
                    alignItems="center"
                  >
                    <Icon
                      as={TbBrandNextjs}
                      boxSize="18px"
                      mr="5px"
                    />
                    Next.js
                  </Text>
                </Box>
                {/* end */}
                {/* start */}
                <Box
                  width="100px"
                  display="flex"
                  alignItems="center"
                  justifyContent="left"
                  mt="20px"
                >
                  <Checkbox
                    colorScheme="#607B96"
                    borderColor="#607B96"
                    _hover={{
                      borderColor: "white",
                    }}
                    mr="20px"
                    name="nodejs"
                    onChange={handleCheckboxChange}
                    checked={checkboxes.nodejs}
                  />
                  <Text
                    fontSize="16px"
                    display="flex"
                    alignItems="center"
                  >
                    <Icon
                      as={FaNodeJs}
                      boxSize="18px"
                      mr="5px"
                    />
                    Node.js
                  </Text>
                </Box>
                {/* end */}
                 {/* start */}
                 <Box
                  width="150px"
                  display="flex"
                  alignItems="center"
                  justifyContent="left"
                  mt="20px"
                >
                  <Checkbox
                    colorScheme="#607B96"
                    borderColor="#607B96"
                    _hover={{
                      borderColor: "white",
                    }}
                    mr="20px"
                    name="chakraui"
                    onChange={handleCheckboxChange}
                    checked={checkboxes.chakraui}
                  />
                  <Text
                    fontSize="16px"
                    display="flex"
                    alignItems="center"
                  >
                    <Icon
                      as={SiChakraui}
                      boxSize="18px"
                      mr="5px"
                    />
                    Chakra UI
                  </Text>
                </Box>
                {/* end */}
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box
                    width="100%"
                    height="100%"
                    mt="40px"
                >
                <Grid
                width="100%"
                height="100%"
                templateColumns="repeat(1, 2fr)"
                gap={2}
                overflow="scroll"
                pb="60px"
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"

                >
                    {
                        getFilteredProjects().map((project) => (
                  <GridItem 
                    width="100%"
                    height="310px"
                    // m="20px"
                    display="flex"
                    alignItems="center"
                    flexDir="column"
                    pos="relative"
                    mb="10px"

                   key={project.name}>
                    <Text width="100%" justifyContent="space-evenly"> 
                        <Text ml="10px" color="#5271ff" as="span">Project {project.id}{" "}</Text>
                    // {project.name}</Text>
                    <Box 
                        width="90%"
                        height="90%"
                        bg="#011221"
                        borderRadius="10px"
                        mt="5px"
                        display="flex"
                        flexDir="column"
                        border="1px solid #1E2D3D"
                    >
                    <Image
                        src={project.img}
                        alt={project.name}
                        width="100%"
                        height="50%"
                        borderRadius="10px 10px 0px 0px"
                            borderBottom="1px solid #1E2D3D"
                        objectFit="cover"
                    />
                    {
                        project.icon === 'RiReactjsFill'?(
                            <Icon
                            as={RiReactjsFill}
                            boxSize="30px"
                            bg="#61DAFB"
                            color="black"
                          
                            position="absolute"
                            left="85%"
                            top="15%"
                            
                            />
                        ):
                       (
                            <Icon
                            as={TbBrandNextjs}
                            boxSize="30px"
                            bg="#61DAFB"
                            color="black"
                            position="absolute"
                            left="85%"
                            top="15%"
                            />
                          )
                    }
                    <Text 
                    // borderTop="1px solid #1E2D3D"
                    mt="5px"
                    width="100%"
                    p={4}
                    >
                        {project.des}

                    </Text>
                    <Box
                    width="100%"
                    height="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="left"
                    pb="20px"
                >
                    <Link
                        href={project.link}
                       
                        target="_blank"
                        >
                        <Button
                        width="120px"
                        height="30px"
                        bg="#1E2D3D"
                        color="white"
                        borderRadius="10px"
                        _hover={{
                            bg: "#607B96",
                        }}
                        fontSize="14px"
                        ml="20px"
                        >
                            View-project
                        </Button>
                        </Link>
                </Box>

                    </Box>
                   </GridItem>
      ))
                    }
                </Grid>
                </Box>
      </Box>
    </>
  );
}

export default Mobile;
