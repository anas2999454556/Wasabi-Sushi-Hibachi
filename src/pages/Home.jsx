import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Testimonial from '../components/Testimonial'
import CTA from '../components/CTA'
import ScrollReveal from '../components/ScrollReveal'
import MarqueeBand from '../components/MarqueeBand'
import Menu from '../components/Menu'
import About from '../components/About'
import ParallaxSection from '../components/ParallaxSection'

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <ScrollReveal>
        <Stats />
      </ScrollReveal>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ParallaxSection speed={0.15}>
        <ScrollReveal>
          <Menu />
        </ScrollReveal>
      </ParallaxSection>
      <ScrollReveal delay={100}>
        <Testimonial />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <CTA />
      </ScrollReveal>
    </>
  )
}
