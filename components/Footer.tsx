export default function Footer() {
  return (
    <footer className="relative bg-obsidian-deep border-t border-obsidian-border py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-20">
        {/* Left: Brand Info */}
        <div className="md:col-span-5 space-y-6">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl tracking-widest text-alabaster font-light">SUNNY SANITATIONS</h3>
            <p className="text-[8px] tracking-widest uppercase text-brass font-semibold font-mono">Established 1982 • Roorkee Uttarakhand</p>
          </div>
          <p className="text-xs text-platinum/60 leading-relaxed font-light max-w-sm">
            Luxury architectural materials and styling lab. Crafting high-contrast design environments across Uttarakhand with state-of-the-art visual curation.
          </p>
          <div className="flex items-center space-x-5 text-xs text-[#888]">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors">📷</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors">📌</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors">💼</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors">f</a>
          </div>
        </div>

        {/* Middle: Showroom Info */}
        <div className="md:col-span-3 space-y-4">
          <span className="text-[8px] tracking-widest uppercase text-brass font-medium block font-mono">The Flagship Showroom</span>
          <p className="text-xs text-platinum/80 leading-relaxed font-light">
            Dehradun Road,<br />
            Opposite Civil Lines,<br />
            Roorkee - 247667,<br />
            Uttarakhand, India
          </p>
          <div className="space-y-1.5 pt-3 border-t border-obsidian-border">
            <span className="text-[7px] tracking-widest uppercase text-platinum/50 block font-mono">Concierge Telephony</span>
            <a href="tel:+919876543210" className="text-xs text-brass hover:underline">+91 98765 43210</a>
          </div>
        </div>

        {/* Right: Map */}
        <div className="md:col-span-4 space-y-4">
          <span className="text-[8px] tracking-widest uppercase text-brass font-medium block font-mono">Spatial Coordinates</span>
          
          <div className="relative h-44 bg-obsidian border border-obsidian-border rounded-sm overflow-hidden group flex items-center justify-center">
            <div className="absolute inset-0 bg-obsidian-deep brightness-[0.4]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-transparent to-transparent"></div>
            
            <svg className="absolute inset-0 w-full h-full opacity-40 stroke-brass fill-none stroke-1" viewBox="0 0 100 100">
              <path d="M 10,25 Q 50,55 90,85" strokeDasharray="2" />
              <path d="M 0,60 L 100,40" strokeWidth="0.5" />
              <path d="M 35,0 L 45,100" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="5" fill="none" stroke="#D4B282" strokeWidth="0.5" className="animate-pulse" />
              <circle cx="50" cy="50" r="1.5" fill="#FAFAFA" />
            </svg>

            <div className="relative z-10 text-center space-y-1 p-4">
              <span className="text-[9px] tracking-wider uppercase text-alabaster font-semibold block">Roorkee Experimental Lab</span>
              <p className="text-[8px] text-[#A0A0A0] max-w-[210px] mx-auto font-light leading-normal">Serving luxury developers & designers across Dehradun, Rishikesh, and Haridwar.</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-[8px] text-brass tracking-widest uppercase hover:underline pt-1.5 font-mono">
                <span>Route Geometrics</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-obsidian-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[8px] text-[#888] font-light">
        <p>&copy; 2026 SUNNY SANITATIONS. Architectural specifications subject to site dynamics.</p>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-brass transition-colors">Privacy Registry</a>
          <a href="#" className="hover:text-brass transition-colors">Material Indemnity</a>
          <span className="text-obsidian-border">|</span>
          <span className="tracking-widest uppercase text-brass">Luxury Residential Portfolios 2026</span>
        </div>
      </div>
    </footer>
  )
}
