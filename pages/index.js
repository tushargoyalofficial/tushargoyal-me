import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/Section'

const Home = () => (
  <Container>
    <Box
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    >
      Hello, I&apos;m a full-stack developer based in India!
    </Box>

    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Tushar Goyal
        </Heading>
        <p>Digital Craftzman ( Tech Advisor / Developer / Designer )</p>
      </Box>
      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
        <Image
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src="/images/tg.jpg"
          alt="Profile image"
        />
      </Box>
    </Box>

    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        Work
      </Heading>
      <p>Paragraph</p>
    </Section>
  </Container>
)

export default Home
