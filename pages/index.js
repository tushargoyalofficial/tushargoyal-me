import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a Full Stack Engineer based in India!
      </Box>
      <Box display="md-flex"></Box>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Tushar Goyal
        </Heading>
        <p>Senior Software Engineer (Mobile, Web, Server, Designer)</p>
      </Box>
    </Container>
  )
}

export default Page
