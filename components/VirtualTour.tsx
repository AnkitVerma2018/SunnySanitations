'use client';
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Hotspot = {
  id: number;
  image: string;
  index: string;
  title: string;
  description: string;
  spec1: string;
  spec2: string;
  spec3: string;
};

const hotspots: Hotspot[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600",
    index: "NODE 01 / SPACE GLOW",
    title: "Concealed Linear Light",
    description:
      "Atmospheric indirect dimmable LEDs nested seamlessly into vertical channels. Configured specifically to eliminate screen glare and articulate textured stone profiles.",
    spec1: "CRI > 96",
    spec2: "14.4 W/m Dual",
    spec3: "Variable Core",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600",
    index: "NODE 02 / SURFACE CORE",
    title: "Marble Slab Composition",
    description:
      "Premium imported marble with nano-coated finish, precision-cut joints and stain-resistant architectural surface.",
    spec1: "Italian Marble",
    spec2: "18mm",
    spec3: "Nano Shield",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=1600",
    index: "NODE 03 / WATER FORM",
    title: "Luxury Faucet",
    description:
      "Solid brass mixer engineered for silent operation with precision thermal control and premium brushed finish.",
    spec1: "Solid Brass",
    spec2: "6L/min",
    spec3: "Thermo Lock",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1600",
    index: "NODE 04 / IMMERSION",
    title: "Freestanding Bathtub",
    description:
      "Luxury soaking tub built with insulated composite shell for maximum heat retention and ergonomic comfort.",
    spec1: "Composite",
    spec2: "Heat Shield",
    spec3: "Soft Overflow",
  },
];

export default function VirtualTour() {
  const [active, setActive] = useState(hotspots[0]);

  const hotspotStyle = (
    id: number,
    top: string,
    left: string
  ) => ({
    id,
    top,
    left,
  });

  const buttons = [
    hotspotStyle(1, "18%", "50%"),
    hotspotStyle(2, "45%", "28%"),
    hotspotStyle(3, "52%", "62%"),
    hotspotStyle(4, "75%", "45%"),
  ];

  return (
    <section
      id="virtual-tour"
      className="relative border-t border-obsidian-border bg-obsidian py-28 px-6 md:px-12"
    >
      <div className="mx-auto max-w-7xl space-y-16">
        {/* Heading */}

        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="text-brass text-xs font-medium uppercase tracking-[0.3em]">
            Flagship Architecture Lab
          </span>

          <h2 className="font-serif text-3xl font-light tracking-wide text-alabaster sm:text-5xl">
            VIRTUAL DISCOVERY BLUEPRINT
          </h2>

          <p className="mx-auto max-w-xl text-xs leading-relaxed text-platinum/70 sm:text-sm">
            Click on the highlighted layout points of our signature master
            bathroom concept to view detailed technical specification nodes.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

          {/* LEFT */}

          <div className="relative lg:col-span-8">

            <div className="relative overflow-hidden rounded-sm border border-obsidian-border bg-[#111] min-h-137.5">

              <AnimatePresence mode="wait">

                <motion.img
                  key={active.id}
                  src={active.image}
                  alt={active.title}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.65,
                  }}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/1600x900/111111/ffffff?text=Luxury+Bathroom";
                  }}
                  className="absolute inset-0 h-full w-full object-cover brightness-[0.70]"
                />

              </AnimatePresence>

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

              <svg
                className="pointer-events-none absolute inset-0 h-full w-full stroke-white/5"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <line x1="25" y1="0" x2="25" y2="100" />
                <line x1="50" y1="0" x2="50" y2="100" />
                <line x1="75" y1="0" x2="75" y2="100" />
                <line x1="0" y1="33" x2="100" y2="33" />
                <line x1="0" y1="66" x2="100" y2="66" />
              </svg>

              {buttons.map((btn) => {

                const isActive = active.id === btn.id;

                return (
                  <motion.button
                    whileHover={{
                      scale: 1.15,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    key={btn.id}
                    onClick={() =>
                      setActive(
                        hotspots.find((h) => h.id === btn.id)!
                      )
                    }
                    style={{
                      top: btn.top,
                      left: btn.left,
                    }}
                    className={`absolute z-30 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-300

${
  isActive
    ? "border-brass bg-brass text-black shadow-[0_0_35px_rgba(225,194,152,.9)]"
    : "border-brass bg-black/80 text-brass hover:bg-brass hover:text-black"
}
`}
                  >
                    <span
                      className={`absolute inset-0 rounded-full border border-brass ${
                        isActive ? "animate-ping" : ""
                      }`}
                    />

                    <span className="relative text-lg font-light">
                      +
                    </span>
                  </motion.button>
                );
              })}

              <div className="absolute bottom-5 left-5 rounded bg-black/60 px-3 py-2 text-[10px] uppercase tracking-widest text-white/70 backdrop-blur">
                ☝ Select Coordinate Pin To Reveal Specifications
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative flex h-full flex-col justify-between rounded-sm border border-obsidian-border bg-[#0E0E0E] p-8 lg:col-span-4">

            <span className="absolute right-8 top-0 -translate-y-1/2 border border-brass/40 bg-[#111] px-3 py-1 text-[9px] uppercase tracking-[0.3em] text-brass">
              Coordinate Node
            </span>

            <AnimatePresence mode="wait">

              <motion.div
                key={active.id}
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="space-y-5"
              >
                                <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-brass">
                  {active.index}
                </span>

                <h3 className="font-serif text-3xl font-light text-alabaster">
                  {active.title}
                </h3>

                <p className="text-sm leading-7 text-platinum/80">
                  {active.description}
                </p>

                <div className="space-y-4 border-t border-obsidian-border pt-5">
                  <span className="block text-[10px] uppercase tracking-[0.35em] text-platinum/50">
                    Technical Calibration
                  </span>

                  <div className="grid grid-cols-2 gap-y-3 text-[11px] font-mono">

                    <span className="text-platinum/60">
                      CRI Performance
                    </span>

                    <span className="text-alabaster">
                      {active.spec1}
                    </span>

                    <span className="text-platinum/60">
                      Wattage Bias
                    </span>

                    <span className="text-alabaster">
                      {active.spec2}
                    </span>

                    <span className="text-platinum/60">
                      Lux Output
                    </span>

                    <span className="text-brass">
                      {active.spec3}
                    </span>

                  </div>
                </div>

                {/* Extra Info */}

                <div className="rounded border border-brass/20 bg-white/2 p-4 backdrop-blur-sm">

                  <div className="mb-3 flex items-center justify-between">

                    <span className="text-[10px] uppercase tracking-[0.3em] text-brass">
                      Material Status
                    </span>

                    <div className="h-2 w-2 animate-pulse rounded-full bg-brass" />

                  </div>

                  <div className="space-y-2">

                    <div className="flex items-center justify-between text-[11px]">

                      <span className="text-platinum/60">
                        Durability
                      </span>

                      <span className="text-green-400">
                        99%
                      </span>

                    </div>

                    <div className="h-1 overflow-hidden rounded bg-white/10">

                      <motion.div
                        key={active.id + "durability"}
                        initial={{ width: 0 }}
                        animate={{ width: "99%" }}
                        transition={{ duration: 0.8 }}
                        className="h-full rounded bg-brass"
                      />

                    </div>

                    <div className="flex items-center justify-between text-[11px]">

                      <span className="text-platinum/60">
                        Luxury Grade
                      </span>

                      <span className="text-brass">
                        Premium
                      </span>

                    </div>

                    <div className="h-1 overflow-hidden rounded bg-white/10">

                      <motion.div
                        key={active.id + "luxury"}
                        initial={{ width: 0 }}
                        animate={{ width: "96%" }}
                        transition={{ duration: 0.9 }}
                        className="h-full rounded bg-brass"
                      />

                    </div>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

            {/* Footer */}

            <div className="mt-10 flex items-center justify-between border-t border-obsidian-border pt-5 text-[10px] uppercase tracking-[0.25em] text-platinum/50">

              <span>
                SYS ID : SS-LAB.99
              </span>

              <span className="text-brass">
                Active Preview
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}