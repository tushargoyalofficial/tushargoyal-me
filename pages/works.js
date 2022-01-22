import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/Section'
import { WorkGridItem } from '../components/GridItem'
import Layout from '../components/layouts/Article'

// Images
import aptstudy from '../public/images/works/aptstudy.png'
import gofundher from '../public/images/works/gofundher.png'
import masterwizr from '../public/images/works/masterwizr.png'
import radlearn from '../public/images/works/radlearn.png'
import zimzim from '../public/images/works/zimzim.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id="aptstudy" title="APT Study" thumbnail={aptstudy}>
              A mobile application where CA aspirants can attend coaching
              classes, purchase lectures and tests, give exams,
              self-assessments.
            </WorkGridItem>
          </Section>{' '}
          <Section delay={0.3}>
            <WorkGridItem
              id="gofundher"
              title="GoFundHer"
              thumbnail={gofundher}
            >
              A website who encourage and empower women by accepting donations
              worldwide.
            </WorkGridItem>
          </Section>{' '}
          <Section delay={0.3}>
            <WorkGridItem
              id="masterwizr"
              title="MasterWizr"
              thumbnail={masterwizr}
            >
              A web application where user can create and show presentations
              using images, videos, & PDFs. User can even share it by sending a
              unique link generated after creating a presentation.
            </WorkGridItem>
          </Section>{' '}
          <Section delay={0.3}>
            <WorkGridItem
              id="radlearn"
              title="RadLearn AI"
              thumbnail={radlearn}
            >
              A platform where you can upload MRI/XRAYS/CITI Scans and can mark
              annotations, as per the studies done by doctors/radiologist. This
              is specifically made for Medical use only.
            </WorkGridItem>
          </Section>{' '}
          <Section delay={0.3}>
            <WorkGridItem id="zimzim" title="ZimZim" thumbnail={zimzim}>
              A Mobile application similar to zoom.us where you can video
              conference/audio conference/share screen/stream on youtube etc can
              be done.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
