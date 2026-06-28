"use client";

interface HotspotData {
  id: number;
  label: string;
  title: string;
  description: string;
  specs: Record<string, string>;
}

interface InfoPanelProps {
  hotspot: HotspotData;
}

export default function InfoPanel({ hotspot }: InfoPanelProps) {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-sm border border-white/10 bg-[#0E0E0E] p-8">

      {/* Top Badge */}
      <div className="absolute right-8 top-0 -translate-y-1/2 border border-[#C8A46B]/30 bg-[#090909] px-3 py-1">
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#C8A46B]">
          Coordinate Node
        </span>
      </div>

      {/* Header */}
      <div className="space-y-5 pt-4">

        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C8A46B]">
            {hotspot.label}
          </span>

          <h3 className="mt-3 font-serif text-3xl font-light text-white">
            {hotspot.title}
          </h3>
        </div>

        <div className="h-px w-20 bg-[#C8A46B]/40" />

        <p className="text-sm leading-7 text-white/65">
          {hotspot.description}
        </p>
      </div>

      {/* Specs */}
      <div className="mt-8 space-y-4">

        <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">
          Technical Calibration
        </span>

        <div className="space-y-3">
          {Object.entries(hotspot.specs).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center justify-between border-b border-white/5 pb-2"
            >
              <span className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                {key.replace(/_/g, " ")}
              </span>

              <span className="font-mono text-sm text-white">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 border-t border-white/10 pt-5">

        <div className="flex items-center justify-between">

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
              System
            </p>

            <p className="mt-1 font-mono text-xs text-white/70">
              SS-LAB.99
            </p>
          </div>

          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
              Status
            </p>

            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A46B]">
              <span className="h-2 w-2 rounded-full bg-[#C8A46B] animate-pulse" />
              Active
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}