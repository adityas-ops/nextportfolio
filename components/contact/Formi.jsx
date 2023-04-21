import { Box, Button, FormControl, FormLabel, Input, Text, Textarea,useToast,Spinner } from "@chakra-ui/react";
import React, { useState } from "react";

function Formi() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,setLoading] = useState(false)
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

    const toast = useToast();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

    const sendMessage = async() => {
       if(data.name === ""
         || data.email === ""
            || data.message === ""
       ){
              toast({
                title: "Error",
                description: "Please fill all the fields",
                status: "error",
                duration: 2000,
                isClosable: true,
              })
       }
         else{
            setLoading(true)
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            setLoading(false)
            setSubmitted(true)
    }
    }


    const resend = () => {
      
        data.email = "",
        data.name = "",
        data.message = ""
        setSubmitted(false)
    }



  return (
    <>
      <Box
        width={{
          base: "100%",
          md: "90%", 
          lg: "90%",
          xl: "90%",
        }}
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        {
            submitted ? (
                <>
                    <Box
                        width="100%"
                        height="60%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                        >
                        <Text
                            width="100%"
                            fontSize="24px"
                            color="white"
                            textAlign="center"
                            >
                            Thank you! 🤟🏻
                            </Text>
                            <Text
                            width="70%"
                            fontSize="16px"
                            textAlign="center"
                            mt="10px"
                            >
                                Your message has been accepted. You will recieve answer really soon!
                            </Text>
                            <Button
                                width="content-fit"
                                height="40px"
                                mt="20px"
                                bg="#1C2B3A"
                                border="1px solid #607B96"
                                borderRadius="10px"
                                _hover={{
                                    bg:"#607B96",
                                }}
                                onClick={resend}
                                >
                                    <Text 
                                    color="white"
                                    fontSize="14px"
                                    fontWeight="100"
                                    >send-new-message</Text>
                                </Button>

                        </Box>
                </>
            ):
            (
                <>
                <FormControl
          width={{
            base: "90%",
            md: "90%",
            lg: "7%",
            xl: "70%",
          }}
          height="80%"
          display="flex"
          alignItems="start"
          justifyContent="left"
          flexDirection="column"
          // bg="red"
        >
          <Box
            width="100%"
            height="100px"
            display="flex"
            alignItems="start"
            justifyContent="left"
            flexDirection="column"
          >
            <FormLabel>_name: </FormLabel>
            <Input
              name="name"
              value={data.name}
              onChange={handleChange}
              width="100%"
              height="40px"
              bg="#011221"
              border="1px solid #607B96"
              borderRadius="10px"
              _focus={{
                outline: "none",
              }}
              _hover={{
                border: "1px solid #607B96",
              }}
            />
          </Box>
          <Box
            width="100%"
            height="100px"
            display="flex"
            alignItems="start"
            justifyContent="left"
            flexDirection="column"
          >
            <FormLabel>_email: </FormLabel>
            <Input
              name="email"
              value={data.email}
              onChange={handleChange}
              width="100%"
              height="40px"
              type="email"
              bg="#011221"
              border="1px solid #607B96"
              borderRadius="10px"
              _focus={{
                border:'1px solid #607B96'
              }}
              _hover={{
                border: "1px solid #607B96",
              }}
            />
          </Box>
          <Box
            width="100%"
            height="200px"
            display="flex"
            alignItems="start"
            justifyContent="left"
            flexDirection="column"
          >
            <FormLabel>_message: </FormLabel>
            <Textarea
                name="message"
                value={data.message}
                onChange={handleChange}
                width="100%"
                height="140px"
                bg="#011221"
                border="1px solid #607B96"
                borderRadius="10px"
                _focus={{
                    border:'1px solid #607B96'
                    }}
                _hover={{
                    border: "1px solid #607B96",
                }}
            />
            </Box>
            <Box
            width="100%"
            height="100px"
            display="flex"
            alignItems="start"
            justifyContent="left"
            >
                <Button
                width="content-fit"
                height="40px"
                color="white"
                bg="#1C2B3A"
                border="1px solid #607B96"
                borderRadius="10px"
                _focus={{
                    border:'1px solid #607B96'
                    }}
                _hover={{
                    border: "1px solid #607B96",
                }}
                onClick={
                    sendMessage
                }
                >
                    <Text fontSize="12px">{
                        loading ? (
                            <Spinner
                            thickness="4px"
                            speed="0.65s"
                            emptyColor="gray.200"
                            color="blue.500"
                            size="sm"
                            />
                        ):(
                            "send-message"
                        )
                    }</Text>
                </Button>
            </Box>
        </FormControl>
                </>
            )
        }
      </Box>
    </>
  );
}

export default Formi;
