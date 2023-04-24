import { Box, useBreakpointValue } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { obsidian} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

function Intrest() {
  const [code, setCode] = useState("");
  const customStyle = {
    backgroundColor: "transparent",
    padding: "10px",
    fontSize: "14px",
    color: "#607B96",

  };
  const fetchdata = () => {
    fetch(
      "https://api.github.com/repos/adityas-ops/nextportfolio/contents/components/about/skill.md"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const code = atob(data.content);
        setCode(code);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box 
    width="90%"
    height="100%"
    display="flex"
    alignItems="center"
    justifyContent="center"
    
>
  {
    isDesktop ? (
      <Box 
        width='70%'
        height="100%"
        
    >
      <SyntaxHighlighter  style={obsidian} showLineNumbers={true}  customStyle={customStyle}>
  {code}
</SyntaxHighlighter>
</Box>
    ):
    (
    <Box 
        width='70%'
        height="100%"
        
    >
    <SyntaxHighlighter  style={obsidian}   customStyle={customStyle}>
  {code}
</SyntaxHighlighter>
    </Box>
    )
  }
</Box>

  )
}

export default Intrest