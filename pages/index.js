import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Paragraph from '../components/Paragraph'
import Section from '../components/Section'
import { ChevronRightIcon } from '@chakra-ui/icons'

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
      <Paragraph>
        Tushar is a Software Engineering professional with more than seven years
        of experience in the field. Experienced with the latest cutting-edge
        development tools and procedures. He has worked with several companies
        specializing in IT services as a Software Developer, Project Manager
        &amp; Collaborator. My Practical experience includes Web/Mobile App
        Development, Project Management/Collaborator, Tech Advisor, Team
        Management &amp; Consultancy.
      </Paragraph>
      <Box align="center" my={4}>
        <NextLink href="/works">
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            My portfolio
          </Button>
        </NextLink>
      </Box>
    </Section>
  </Container>
)

export default Home
