'use client'

import { useState } from 'react'

export default function SampleStudio() {
  const [selectedStone, setSelectedStone] = useState('Marquina Nero Marble')
  const [selectedMetal, setSelectedMetal] = useState('18k Champagne Gold')
  const [engraveText, setEngraveText] = useState('DEHRADUN MASTER SUITE')

  return (
    <section id="sample-studio" className="relative py-28 border-t border-obsidian-border bg-obsidian-deep px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-brass font-medium font-mono">Sensory Materials Package</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-alabaster">THE CURATED ARCHITECT KIT</h2>
          <p className="text-xs sm:text-sm text-platinum/70 leading-relaxed font-light max-w-xl mx-auto">
            Compile your selected stone and metallic samples into a timber case, laser-engraved with your project moniker.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: Configuration */}
          <div className="lg:col-span-5 bg-obsidian border border-obsidian-border p-8 rounded-sm flex flex-col justify-between space-y-8 relative">
            <span className="absolute top-0 right-8 transform -translate-y-1/2 border border-brass/35 bg-obsidian text-brass px-3 py-1 text-[8px] uppercase tracking-widest font-mono">Specification Suite</span>
            
            <div className="space-y-4 pt-4">
              <h3 className="font-serif text-2xl font-light text-alabaster">Configure Your Presentation Box</h3>
              <p className="text-xs text-platinum/60 leading-relaxed font-light">
                A curated case shipped directly to your studio. Select tile, coordinate metal, and input your project moniker for brass engraving.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[8px] tracking-widest uppercase text-brass font-mono">Select Tile Piece</label>
                <select 
                  value={selectedStone}
                  onChange={(e) => setSelectedStone(e.target.value)}
                  className="w-full bg-obsidian-deep border border-obsidian-border p-3 text-xs text-platinum/90 focus:outline-none focus:border-brass rounded-sm"
                >
                  <option>Marquina Nero Marble</option>
                  <option>Calacatta Viola Quartz</option>
                  <option>Travertino Classic Earth</option>
                  <option>Volcanic Basalt Block</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[8px] tracking-widest uppercase text-brass font-mono">Select Hardware Trim</label>
                <select 
                  value={selectedMetal}
                  onChange={(e) => setSelectedMetal(e.target.value)}
                  className="w-full bg-obsidian-deep border border-obsidian-border p-3 text-xs text-platinum/90 focus:outline-none focus:border-brass rounded-sm"
                >
                  <option>18k Champagne Gold</option>
                  <option>Anodized Slate Gunmetal</option>
                  <option>Mirror Polished Platinum</option>
                  <option>Oxidized Flamed Bronze</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[8px] tracking-widest uppercase text-brass font-mono">Laser Brass Engraving Text</label>
                <input 
                  type="text" 
                  value={engraveText}
                  onChange={(e) => setEngraveText(e.target.value.toUpperCase())}
                  maxLength={32}
                  className="w-full bg-obsidian-deep border border-obsidian-border p-3 text-xs text-platinum/95 focus:outline-none focus:border-brass tracking-widest uppercase rounded-sm"
                />
              </div>
            </div>

            <button className="w-full bg-brass text-obsidian-deep py-4 text-xs font-semibold uppercase tracking-widest border border-brass hover:bg-transparent hover:text-brass transition-all duration-500 rounded-sm">
              Compile & Order Presentation Case
            </button>
          </div>

          {/* Right: Preview */}
          <div className="lg:col-span-7 bg-[#0A0A0A] border border-obsidian-border p-8 rounded-sm relative flex flex-col justify-between overflow-hidden min-h-110">
            <div className="absolute inset-0 bg-radial-gradient from-brass/[0.05] to-transparent pointer-events-none"></div>
            
            <div className="flex justify-between items-center z-10">
              <span className="text-[8px] text-platinum/50 font-mono tracking-widest">Real-Time Packaging Rendering</span>
              <span className="text-xs text-brass tracking-widest font-mono">Case ID: #SS-BOX-99</span>
            </div>

            {/* Material Case Visual */}
            <div className="relative w-full max-w-md mx-auto aspect-video bg-[#181818] border border-obsidian-border rounded-sm shadow-2xl p-6 flex flex-col justify-between my-4 overflow-hidden z-10 transition-transform duration-700">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-stone-800 to-stone-700"></div>
              
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[7px] text-[#A0A0A0] tracking-widest uppercase font-mono block">Stone Swatch</span>
                  <div className="text-xs text-alabaster tracking-wide font-light">{selectedStone}</div>
                  <div 
                    className="w-20 h-10 border border-obsidian-border mt-2 rounded-sm bg-cover bg-center"
                    style={{
                      backgroundColor: selectedStone.includes('Marquina') ? '#1a1a1a' : '#8b7355'
                    }}
                  ></div>
                </div>

                <div className="space-y-1 text-right">
                  <span className="text-[7px] text-[#A0A0A0] tracking-widest uppercase font-mono block">Metal Hardware</span>
                  <div className="text-xs text-alabaster tracking-wide font-light">{selectedMetal}</div>
                  <div className="flex justify-end mt-2">
                    <div 
                      className="w-8 h-8 rounded-full border border-brass/45 shadow-inner"
                      style={{
                        backgroundColor: selectedMetal.includes('Champagne') ? '#d4af37' : '#404040'
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Engraved Plate */}
              <div className="border border-amber-500/40 bg-linear-to-br from-amber-400/10 via-amber-500/20 to-amber-600/15 p-3 text-center rounded-sm max-w-70 mx-auto w-full shadow-lg relative">
                <span className="text-[6px] text-brass/90 tracking-widest uppercase block font-mono">Specified for Project:</span>
                <div className="text-[10px] text-brass tracking-[0.25em] font-serif uppercase mt-1 truncate">{engraveText}</div>
              </div>
            </div>

            <div className="text-[9px] text-platinum/50 leading-relaxed font-light text-center z-10">
              Includes premium cedarwood case, portfolio catalog, and bespoke blueprints.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
