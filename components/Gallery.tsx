export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: 'Obsidian Book-Match Wall',
      category: 'Architectural Cladding',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=600',
      description: 'Italian continuous-veined slabs aligned with microscopic layout precision.'
    },
    {
      id: 2,
      title: 'Satin Gold Basin Mixer',
      category: 'Metallic Fixtures',
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=600',
      description: 'Hand-brushed warm champagne PVD gold frameworks.'
    },
    {
      id: 3,
      title: 'Linear LED Integration',
      category: 'Architectural Luminescence',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?auto=format&fit=crop&q=80&w=600',
      description: 'Atmospheric indirect dimmable LED channels.'
    }
  ]

  return (
    <section id="gallery" className="relative py-28 border-t border-obsidian-border bg-obsidian-deep px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-obsidian-border pb-10">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-brass font-medium block">Spatial Composition Highlights</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-alabaster">Showroom Portfolios</h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-platinum/70 leading-relaxed font-light tracking-wide">
            Architectural installations from our Roorkee showcase. Experience the tactile weight and directional shadow dispersion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              className={`group relative rounded-sm border border-obsidian-border overflow-hidden bg-obsidian flex flex-col justify-end p-6 hover:border-brass/40 transition-all duration-700 ${
                idx === 0 ? 'md:col-span-7' : 'md:col-span-5'
              } ${idx !== 0 ? 'h-[320px]' : 'h-[480px]'}`}
            >
              <div
                className="absolute inset-0 overflow-hidden bg-obsidian-deep group-hover:brightness-95"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.75,
                  transition: 'all 1000ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                  filter: 'brightness(0.75)',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/45 via-transparent to-transparent z-10"></div>

              <div className="relative z-20 space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 bg-black/35 p-4 rounded-sm backdrop-blur-xs">
                <span className="text-[8px] tracking-widest uppercase text-brass font-medium font-mono">0{item.id} / {item.category}</span>
                <h3 className="font-serif text-xl md:text-2xl font-light tracking-wide text-alabaster">{item.title}</h3>
                <p className="text-xs text-platinum/80 font-light leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
