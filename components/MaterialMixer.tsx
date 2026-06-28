"use client";

import { useMemo, useState } from "react";

const slabs = {
  marquina: {
    name: "Nero Marquina",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200",
    insight:
      "Deep veins with strong monochrome presence. Ideal for premium minimal interiors.",
  },
  calacatta: {
    name: "Calacatta Viola",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200",
    insight:
      "Rich burgundy veining delivering elegant luxury and visual warmth.",
  },
  travertine: {
    name: "Travertino Classic",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
    insight:
      "Natural pores and soft textures suited for timeless architecture.",
  },
  basalt: {
    name: "Volcanic Basalt",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=1200",
    insight:
      "Industrial character with dramatic anthracite texture.",
  },
};

const metals = {
  gold: "Brushed Champagne",
  gunmetal: "Deep Gunmetal",
  chrome: "Polished Platinum",
  bronze: "Flamed Bronze",
};

export default function TheHarmonyMixer() {
  const [slab, setSlab] =
    useState<keyof typeof slabs>("marquina");
  const [metal, setMetal] =
    useState<keyof typeof metals>("gold");
  const [brightness, setBrightness] = useState(75);

  const score = useMemo(() => {
    if (slab === "marquina" && metal === "gold") return "9.8";
    if (slab === "calacatta" && metal === "bronze") return "9.6";
    if (slab === "travertine") return "9.4";
    return "9.2";
  }, [slab, metal]);

  return (
    <section
      id="harmony-mixer"
      className="bg-[#090909] border-t border-white/10 py-28 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="uppercase tracking-[0.35em] text-xs text-[#C8A46B]">
            Bespoke Curation Workshop
          </span>

          <h2 className="font-serif text-5xl font-light text-white">
            THE HARMONY MIXER
          </h2>

          <p className="text-white/60">
            Contrast luxurious natural stone with metallic finishes and preview
            elegant architectural combinations in real time.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 bg-[#111] border border-white/10 p-8">

          {/* Left */}
          <div className="lg:col-span-5 space-y-10">

            {/* Stones */}
            <div>
              <p className="text-xs tracking-[0.25em] text-[#C8A46B] mb-4">
                STAGE A · BASE STONE
              </p>

              <div className="grid grid-cols-2 gap-3">
                {Object.entries(slabs).map(([key, item]) => (
                  <button
                    key={key}
                    onClick={() => setSlab(key as any)}
                    className={`border p-4 text-left transition ${
                      slab === key
                        ? "border-[#C8A46B] bg-[#1a1a1a]"
                        : "border-white/10 hover:border-[#C8A46B]/50"
                    }`}
                  >
                    <h4 className="text-white font-semibold">
                      {item.name}
                    </h4>

                    <p className="text-xs text-white/50 mt-1">
                      Premium Surface
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Metals */}
            <div>
              <p className="text-xs tracking-[0.25em] text-[#C8A46B] mb-4">
                STAGE B · METAL FINISH
              </p>

              <div className="grid grid-cols-2 gap-3">
                {Object.entries(metals).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setMetal(key as any)}
                    className={`border p-4 text-left transition ${
                      metal === key
                        ? "border-[#C8A46B] bg-[#1a1a1a]"
                        : "border-white/10 hover:border-[#C8A46B]/50"
                    }`}
                  >
                    <h4 className="text-white font-semibold">
                      {value}
                    </h4>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <span className="text-[#C8A46B] text-xs tracking-widest">
                SPECIFICATION NOTE
              </span>

              <p className="text-white/70 mt-3 leading-7">
                {slabs[slab].insight}
              </p>
            </div>
          </div>

          {/* Preview */}
          <div className="lg:col-span-7 relative overflow-hidden min-h-112.5 border border-white/10 bg-black">

            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700"
              style={{
                backgroundImage: `url(${slabs[slab].image})`,
                filter: `brightness(${brightness}%) grayscale(.15)`,
              }}
            />

            <div className="absolute inset-0 bg-linear-to-tr from-black/70 via-transparent to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-between p-8">

              <div className="flex justify-between">
                <div>
                  <span className="border border-[#C8A46B]/40 px-3 py-1 text-[10px] tracking-widest text-[#C8A46B]">
                    STUDIO COLLECTION
                  </span>

                  <p className="mt-2 text-white/50 text-xs">
                    REF. SS-NE2066
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs tracking-widest text-[#C8A46B]">
                    MATCH SCORE
                  </p>

                  <h3 className="text-3xl text-white font-serif">
                    {score}/10
                  </h3>
                </div>
              </div>

              <div className="max-w-xs bg-black/70 backdrop-blur border border-white/10 p-4 ml-auto">
                <p className="text-[10px] tracking-widest text-white/50 mb-3">
                  AMBIENT REFLECTION
                </p>

                <input
                  type="range"
                  min={30}
                  max={100}
                  value={brightness}
                  onChange={(e) =>
                    setBrightness(Number(e.target.value))
                  }
                  className="w-full accent-[#C8A46B]"
                />
              </div>

              <div className="bg-black/60 backdrop-blur p-6 max-w-lg">
                <span className="text-[#C8A46B] text-xs tracking-widest">
                  ACTIVE PROFILE
                </span>

                <h3 className="text-3xl text-white font-serif mt-2">
                  {slabs[slab].name} & {metals[metal]}
                </h3>

                <p className="text-white/70 mt-3 leading-7">
                  Combining premium stone surfaces with luxurious metallic
                  finishes to achieve a balanced, architectural composition.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}