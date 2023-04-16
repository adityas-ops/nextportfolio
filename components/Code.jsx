import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github ,darcula} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useEffect,useState } from 'react';
import { Box } from '@chakra-ui/react';
import { githubGist } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
function Code() {
    const [code,setCode] = useState('')
    const fetchdata = ()=>{
        fetch('https://api.github.com/repos/adityas-ops/DSA-Practice/contents/0048-rotate-image/0048-rotate-image.cpp')
        .then(response => response.json())
        .then(data => {
        const code = atob(data.content);
        setCode(code)
        })
    }
    useEffect(()=>{
        fetchdata()
    },[])
    const customStyle = {
  backgroundColor: 'black',
  padding: '10px',
  fontSize: '12px',
  borderRadius: '0.25rem',
  color:"white"
};
  return (
   <>
   <Box 
    w="600px"
    h="200px"
    p={4}
    color="white"
    // bg="green"
    borderRadius="lg"
    boxShadow="lg"
    overflow="auto"
    

   >
   <SyntaxHighlighter language="cpp" style={github}
    customStyle={customStyle}
    >
        {code}
    </SyntaxHighlighter>
   </Box>
    
   </>
  )
}

export default Code