const collections = [
  {
    id: "01",
    category: "STONES",
    title: "Curated Tiles",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600",
    description:
      "Fine-veined Italian porcelain, massive hand-cut travertine slabs, and custom high-contrast basalt tiles milled with absolute dimensional accuracy.",
  },
  {
    id: "02",
    category: "CERAMICS",
    title: "Sanitaryware",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    description:
      "Ergonomic rimless toilets, premium mineral-filled resin bathtubs, and smart automated purification zones sculpted in Italy.",
  },
  {
    id: "03",
    category: "METALLICS",
    title: "Elite Faucets",
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=600",
    description:
      "Precision core cartridges surfaced with PVD coating techniques. Finished beautifully in brushed bronze, matte obsidian, and satin gold.",
  },
  {
    id: "04",
    category: "LUMINESCENCE",
    title: "Designer Lighting",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=600",
    description:
      "Bespoke spatial lighting, trimless miniature wall spots, and programmable organic fixtures configured to amplify mineral surfaces.",
  },
];

export default function TheCollections() {
  return (
    <section
      id="the-collections"
      className="relative border-t border-white/10 bg-[#0A0A0A] py-28 px-6 md:px-12"
    >
      <div className="mx-auto max-w-7xl space-y-16">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
          <div className="space-y-4">
            <span className="block text-xs font-medium uppercase tracking-[0.35em] text-[#C8A46B]">
              Pillars of Materiality
            </span>

            <h2 className="font-serif text-3xl font-light tracking-wide text-white sm:text-5xl">
              THE ESSENTIAL PORTFOLIO
            </h2>
          </div>

          <p className="max-w-md text-sm font-light leading-relaxed tracking-wide text-white/65">
            Four distinct interior categories consolidated into a single
            premium collection. Unified aesthetic templates configured for
            extreme architectural cohesion.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden border border-white/10 bg-[#0E0E0E] p-6 transition-all duration-700 hover:-translate-y-1 hover:border-[#C8A46B]/50 hover:shadow-2xl"
            >
              {/* Top Glow Line */}
              <div className="absolute left-0 top-0 h-px w-full origin-center scale-x-0 bg-linear-to-r from-transparent via-[#C8A46B] to-transparent transition-transform duration-700 group-hover:scale-x-100" />

              {/* Image */}
              <div className="relative mb-6 h-64 overflow-hidden rounded-sm border border-white/10 bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover brightness-90 transition-all duration-1000 group-hover:scale-105 group-hover:brightness-100"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

                <span className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-[#C8A46B]">
                  {item.id} / {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-light tracking-wide text-white transition-colors duration-300 group-hover:text-[#C8A46B]">
                  {item.title}
                </h3>

                <p className="text-sm font-light leading-7 text-white/65">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}