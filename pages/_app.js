import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import Head from 'next/head'
import CustomScrollbarStyles from '@/components/CustomScrollbarStyles'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg:"#011627",
        color: "#607B96",
        fontFamily: "Fira Code",
      },
    },
  },
})
export default function App({ Component, pageProps }) {
  return(
    <>
    <ChakraProvider
    theme={theme} 
    >
      <Header />
      <div
       style={{
        marginTop:"60px"

       }}
      >
      <CustomScrollbarStyles />
      <Component {...pageProps} />
      
      </div>
      <Footer />
      </ChakraProvider>
    </>
  )
}
