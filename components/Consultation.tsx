'use client'

import { useState } from 'react'

export default function Consultation() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    interests: []
  })

  const interests = [
    { value: 'Tiles', label: 'Curated Tiles & Stones' },
    { value: 'Sanitaryware', label: 'Sculptural Sanitaryware' },
    { value: 'Faucets', label: 'Elite PVD Metallics' },
    { value: 'Lighting', label: 'Architectural Luminescence' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (value) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter(i => i !== value)
        : [...prev.interests, value]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <section id="consultation" className="relative py-28 border-t border-obsidian-border bg-obsidian px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-brass font-medium block">Architectural Studio Bookings</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-alabaster leading-none">Invitation for Spatial Dialogue</h2>
            </div>
            <p className="text-xs sm:text-sm text-platinum/70 leading-relaxed font-light tracking-wide">
              Our Roorkee showcase operates on a private, curated calendar. Register your design firm below to engage in direct consulting with our lead design directors.
            </p>
            
            <div className="space-y-4 border-t border-obsidian-border pt-6">
              <div className="flex items-start space-x-4">
                <span className="text-brass mt-1 text-lg">🕐</span>
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-alabaster">Concierge Calendar Hours</h4>
                  <p className="text-xs text-platinum/60 mt-1 font-mono">10:00 AM – 8:00 PM // Daily by appointment</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mt-4">
                <span className="text-brass mt-1 text-lg">📍</span>
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-alabaster">Roorkee Experimental Lab</h4>
                  <p className="text-xs text-platinum/60 mt-1">Dehradun Road, Opp. Civil Lines, Roorkee, Uttarakhand, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 bg-[#0B0B0B] border border-obsidian-border p-8 rounded-sm relative">
            {formSubmitted && (
              <div className="absolute inset-0 bg-[#0B0B0B] z-30 flex flex-col items-center justify-center p-8 text-center space-y-6 rounded-sm">
                <div className="w-14 h-14 rounded-full border border-brass/40 flex items-center justify-center text-brass bg-obsidian-deep">
                  ✓
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-alabaster uppercase tracking-wider">Registration Received</h3>
                  <p className="text-xs text-platinum/60 leading-relaxed max-w-sm mx-auto">Our lead director will coordinate with your team within 2 standard hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                {/* Name */}
                <div className="relative group">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-obsidian-border py-3 text-xs text-alabaster focus:outline-none focus:border-brass transition-all duration-300 placeholder-transparent"
                  />
                  <label className="absolute left-0 top-3 text-[11px] tracking-widest text-platinum/50 uppercase pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-[11px] peer-focus:top-[-10px] peer-focus:text-[8px] peer-focus:text-brass">
                    Designer / Client Name
                  </label>
                </div>

                {/* Contact */}
                <div className="relative group">
                  <input 
                    type="tel" 
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-obsidian-border py-3 text-xs text-alabaster focus:outline-none focus:border-brass transition-all duration-300 placeholder-transparent"
                  />
                  <label className="absolute left-0 top-3 text-[11px] tracking-widest text-platinum/50 uppercase pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-[11px] peer-focus:top-[-10px] peer-focus:text-[8px] peer-focus:text-brass">
                    Direct Contact Coordinates
                  </label>
                </div>

                {/* Location */}
                <div className="relative group">
                  <input 
                    type="text" 
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-obsidian-border py-3 text-xs text-alabaster focus:outline-none focus:border-brass transition-all duration-300 placeholder-transparent"
                  />
                  <label className="absolute left-0 top-3 text-[11px] tracking-widest text-platinum/50 uppercase pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-[11px] peer-focus:top-[-10px] peer-focus:text-[8px] peer-focus:text-brass">
                    Project Location (Dehradun, Roorkee, Rishikesh)
                  </label>
                </div>

                {/* Interests */}
                <div className="space-y-2 pt-2">
                  <label className="text-[8px] tracking-widest uppercase text-brass font-medium block font-mono">Curator Segments</label>
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map(interest => (
                      <label key={interest.value} className="flex items-center space-x-2.5 bg-obsidian-deep border border-obsidian-border p-2.5 rounded-sm cursor-pointer hover:border-brass/35 transition-all">
                        <input 
                          type="checkbox" 
                          checked={formData.interests.includes(interest.value)}
                          onChange={() => handleCheckboxChange(interest.value)}
                          className="accent-brass"
                        />
                        <span className="text-xs text-platinum/80 tracking-wide">{interest.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-brass text-obsidian-deep py-4 text-xs font-semibold uppercase tracking-widest border border-brass hover:bg-transparent hover:text-brass transition-all duration-500 rounded-sm">
                Secure Private Laboratory Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
