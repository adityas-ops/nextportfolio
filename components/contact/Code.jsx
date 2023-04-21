import { Box } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { obsidian } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

function Code() {
  const [code, setCode] = useState("hekk");
  const customStyle = {
    backgroundColor: "transparent",
    padding: "10px",
    fontSize: "14px",
    color: "#607B96",

  };
  const fetchdata = () => {
    fetch(
      "https://api.github.com/repos/adityas-ops/nextportfolio/contents/pages/api/send.js"
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
  return (
    <Box 
        width="90%"
        wor
    >
    <SyntaxHighlighter language="javascript" style={obsidian} showLineNumbers={true} wrapLongLines={true}  customStyle={customStyle}>
      {code.substring(38,700)}
    </SyntaxHighlighter>
    </Box>
  )
}

export default Code