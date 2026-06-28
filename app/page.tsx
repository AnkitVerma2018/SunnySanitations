import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MaterialMixer from '@/components/MaterialMixer'
import SampleStudio from '@/components/SampleStudio'
import VirtualTour from '@/components/VirtualTour'
import Gallery from '@/components/Gallery'
import Consultation from '@/components/Consultation'
import Footer from '@/components/Footer'
import TheCollections from '@/components/TheCollections'
import TheLightingStudio from '@/components/TheLightingStudio'

export default function Page() {
  return (
    <main className="relative bg-obsidian-deep">
      <Header />
      <Hero />
      <TheCollections/>
      <TheLightingStudio/>
      <MaterialMixer />
      <SampleStudio />
      <VirtualTour />
      <Gallery />
      <Consultation />
      <Footer />
    </main>
  )
}
