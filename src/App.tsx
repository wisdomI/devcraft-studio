import { CTABanner } from './components/CTABanner'
import { Contact } from './components/Contact'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LogoBar } from './components/LogoBar'
import { Nav } from './components/Nav'
import { Pricing } from './components/Pricing'
import { Process } from './components/Process'
import { SchemaOrg } from './components/SchemaOrg'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { Work } from './components/Work'

export function App() {
  return (
    <>
      <SchemaOrg />
      <Nav />
      <main>
        <Hero />
        <LogoBar />
        <Services />
        <Process />
        <Stats />
        <Pricing />
        <Work />
        <Testimonials />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
