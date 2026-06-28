"use client";

import { useRef, useState } from "react";
export default function TheLightingStudio() {
  const [lightX, setLightX] = useState(-150);
  const [lightY, setLightY] = useState(50);
  const [blur, setBlur] = useState(40);
const previewRef = useRef<HTMLDivElement>(null);

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  if (!previewRef.current) return;

  const rect = previewRef.current.getBoundingClientRect();

  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  setLightX(Math.max(-250, Math.min(250, x)));
  setLightY(Math.max(-200, Math.min(200, y)));
};
  return (
    <section
      id="lighting-studio"
      className="relative border-t border-white/10 bg-[#050505] py-28 px-6 md:px-12"
    >
      <div className="mx-auto max-w-7xl space-y-16">
        {/* Heading */}
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C8A46B]">
            Tactile Ray-Tracing Sandbox
          </span>

          <h2 className="font-serif text-3xl font-light tracking-wide text-white sm:text-5xl">
            CURATION LIGHTING STUDIO
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/60">
            Interact directly with material light dispersion. Adjust the virtual
            light source to observe highlights, reflections and shadows across
            premium stone textures.
          </p>
        </div>

        {/* Studio */}
        <div className="relative grid grid-cols-1 gap-12 overflow-hidden border border-white/10 bg-[#0A0A0A] p-6 md:p-10 lg:grid-cols-12">
          <div className="absolute left-4 top-4 font-mono text-[8px] tracking-[0.3em] text-[#C8A46B]/40">
            RAY-TRACE CHIP // CURATOR.A8
          </div>

          {/* Controls */}
          <div className="relative z-20 flex flex-col justify-between space-y-10 lg:col-span-4">
            <div className="space-y-4">
              <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[#C8A46B]">
                LIGHT COORDINATES
              </span>

              <h3 className="font-serif text-2xl font-light text-white">
                Texture & Ambient Calibration
              </h3>

              <p className="text-sm leading-7 text-white/60">
                Fine materials react beautifully under precise lighting. Adjust
                the virtual light to inspect depth, texture and surface quality.
              </p>
            </div>

            {/* Sliders */}
            <div className="space-y-6 rounded border border-white/10 bg-[#101010] p-5">
              <div>
                <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-widest text-white/60">
                  <span>Light Azimuth</span>
                  <span>{lightX}px</span>
                </div>

                <input
                  type="range"
                  min={-250}
                  max={250}
                  value={lightX}
                  onChange={(e) => setLightX(Number(e.target.value))}
                  className="w-full accent-[#C8A46B]"
                />
              </div>

              <div>
                <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-widest text-white/60">
                  <span>Light Elevation</span>
                  <span>{lightY}px</span>
                </div>

                <input
                  type="range"
                  min={-200}
                  max={200}
                  value={lightY}
                  onChange={(e) => setLightY(Number(e.target.value))}
                  className="w-full accent-[#C8A46B]"
                />
              </div>

              <div>
                <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-widest text-white/60">
                  <span>Ambient Diffusion</span>
                  <span>{blur}px</span>
                </div>

                <input
                  type="range"
                  min={15}
                  max={90}
                  value={blur}
                  onChange={(e) => setBlur(Number(e.target.value))}
                  className="w-full accent-[#C8A46B]"
                />
              </div>
            </div>

            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C8A46B]">
              ● Dynamic Preview Active
            </div>
          </div>

          {/* Preview */}
         <div
  ref={previewRef}
  onMouseMove={handleMouseMove}
  onMouseLeave={() => {
    setLightX(-150);
    setLightY(50);
  }}
  className="relative flex min-h-112.5 items-center justify-center overflow-hidden rounded border border-white/10 bg-[#111111] lg:col-span-8"
>
            {/* Glow */}
            <div
              className="pointer-events-none absolute z-20 rounded-full bg-[#C8A46B]/30 transition-all duration-300"
              style={{
               width:48,
height:48,
opacity:.45,
                left: `calc(50% + ${lightX}px)`,
                top: `calc(50% + ${lightY}px)`,
                filter: `blur(${blur}px)`,
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Core */}
            <div
              className="pointer-events-none absolute z-30 h-2.5 w-2.5 rounded-full border border-white/60 bg-[#C8A46B] shadow-[0_0_18px_rgba(200,164,107,.9)]"
              style={{
                left: `calc(50% + ${lightX}px)`,
                top: `calc(50% + ${lightY}px)`,
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Slab */}
            <div
              className="relative z-10 h-64 w-64 overflow-hidden rounded border border-[#C8A46B]/20 bg-cover bg-center transition-all duration-150"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800)",
                boxShadow: `
${-lightX / 10}px
${-lightY / 10}px
${blur}px
rgba(0,0,0,.45),
0 0 60px rgba(0,0,0,.35)
`,
              }}
            >
              <div
                className="absolute inset-0 transition-all duration-300"
                style={{
                  background: `
radial-gradient(
circle at calc(50% + ${lightX}px)
calc(50% + ${lightY}px),
rgba(255,255,255,.55) 0%,
rgba(255,255,255,.18) 22%,
transparent 68%
)
`,
                }}
              />
            </div>

            {/* Badge */}
            <div className="absolute bottom-4 right-4 border border-white/10 bg-black/70 px-4 py-2 font-mono text-[10px] tracking-[0.3em] text-white/70 backdrop-blur">
              MATERIAL ID:
              <span className="ml-2 text-[#C8A46B]">
                SS-MARQUINA.NERO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}