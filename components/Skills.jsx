import { Box } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { obsidian } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

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
      "https://api.github.com/repos/adityas-ops/nextportfolio/contents/components/skill.md"
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
    
>
<SyntaxHighlighter language="markdown" style={obsidian} showLineNumbers={true}  customStyle={customStyle}>
  {code}
</SyntaxHighlighter>
</Box>
  )
}

export default Intrest