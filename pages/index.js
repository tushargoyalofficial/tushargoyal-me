import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAplha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a Full Stack Engineer based in India!
      </Box>
      <Box display="md-flex">
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tushar Goyal
          </Heading>
          <p>Senior Software Engineer (Mobile, Web, Server, Designer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/tg.jpg"
            alt="Profile img"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Page
