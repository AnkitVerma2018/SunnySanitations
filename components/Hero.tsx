'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToCollections = () => {
    const element = document.getElementById('collections')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
  <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden architect-grid px-6 md:px-12 py-16">

  {/* Ambient Backlighting Stage */}
  <div className="absolute inset-0 bg-linear-to-t from-obsidian-deep via-transparent to-transparent z-10" />

  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4/5 max-w-\[1400px\] h-\[550px\] bg-linear-to-b from-brass/[0.05] to-transparent rounded-full blur-[120px] pointer-events-none" />

  <div className="relative z-20 max-w-7xl mx-auto text-center space-y-10 flex flex-col items-center">

    {/* Luxury Badge */}
    <div className="inline-flex items-center space-x-3 border border-brass/20 bg-obsidian/80 px-5 py-2.5 rounded-full backdrop-blur-md shadow-inner transition-all hover:border-brass/40">
      <span className="w-1.5 h-1.5 rounded-full bg-brass animate-pulse-slow" />
      <span className="text-[9px] tracking-widest uppercase text-brass font-medium">
        Bespoke Curation • Flagship Gallery
      </span>
    </div>

    {/* Heading */}
    <div className="space-y-5">
      <h1 className="font-serif text-5xl sm:text-6xl md:text-[8rem] font-extralight tracking-[0.08em] leading-[0.95] text-alabaster">
        SCULPTING SPACES.
        <br />
     <span
  className="font-light italic bg-linear-to-r from-[#F5E6CC] via-[#E1C298] to-[#B89B74] bg-clip-text text-transparent"
>
  Defining Luxury.
</span>
      </h1>

      <div className="w-24 h-[hpx] bg-brass/40 mx-auto mt-6" />
    </div>

    {/* Description */}
    <p className="max-w-3xl text-sm sm:text-base text-platinum/80 leading-relaxed font-light tracking-wide mx-auto font-sans">
      Experience a spatial standard curated specifically for Uttarakhand&apos;s
      premier designers, custom homebuilders, and visionary developers. We
      define architectural harmony through massive Italian stone slabs,
      sculptural wellness fixtures, and bespoke linear lighting systems.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row items-center gap-5 mt-4 w-full justify-center">

      <Link
        href="#collections"
        className="w-full sm:w-auto bg-brass text-obsidian-deep text-[11px] font-semibold uppercase tracking-widest px-12 py-4.5 hover:bg-alabaster hover:text-obsidian-deep transition-all duration-700 shadow-xl border border-brass hover:border-alabaster hover-magnetic"
      >
        Explore Portfolios
      </Link>

      <Link
        href="#lighting-studio"
        className="w-full sm:w-auto border border-alabaster/30 bg-transparent text-alabaster text-[11px] font-medium uppercase tracking-widest px-12 py-4.5 hover:border-brass hover:text-brass transition-all duration-700 backdrop-blur-sm hover-magnetic"
      >
        Enter Curation Lab
      </Link>

    </div>

    {/* Scroll Down */}
    <button
      onClick={scrollToCollections}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-brass/50 hover:text-brass transition-colors duration-300 cursor-pointer hover-magnetic"
    >
  

      <ChevronDown
        size={12}
        className="animate-bounce text-[9px] mt-0.5"
      />
    </button>

  </div>
</section>
  )
}
