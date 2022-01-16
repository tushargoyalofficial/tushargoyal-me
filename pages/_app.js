import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../components/Fonts'
import Layout from '../components/layouts/Main'
import theme from '../libs/theme'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
