import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { FeaturesSection } from '@/components/FeaturesSection'
import { FaqSection } from '@/components/FaqSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  )
}
