"use client";

interface HotspotProps {
  id: number;
  top: string;
  left: string;
  active: boolean;
  title: string;
  onClick: () => void;
}

export default function Hotspot({
  id,
  top,
  left,
  active,
  title,
  onClick,
}: HotspotProps) {
  return (
    <div
      className="absolute z-30"
      style={{
        top,
        left,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Tooltip */}
      <div
        className={`absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm border border-[#C8A46B]/30 bg-black/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#C8A46B] backdrop-blur transition-all duration-300 ${
          active
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        {title}
      </div>

      <button
        onClick={onClick}
        className="group relative flex h-10 w-10 items-center justify-center"
        aria-label={title}
      >
        {/* Ripple 1 */}
        <span
          className={`absolute h-full w-full rounded-full border border-[#C8A46B]/40 ${
            active ? "animate-ping" : ""
          }`}
        />

        {/* Ripple 2 */}
        <span
          className={`absolute h-14 w-14 rounded-full border border-[#C8A46B]/20 ${
            active ? "animate-pulse" : ""
          }`}
        />

        {/* Glow */}
        <span
          className={`absolute h-10 w-10 rounded-full transition-all duration-300 ${
            active
              ? "bg-[#C8A46B]/20 blur-md scale-150"
              : "bg-transparent"
          }`}
        />

        {/* Main Circle */}
        <span
          className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300
          ${
            active
              ? "border-[#C8A46B] bg-[#C8A46B] text-black shadow-[0_0_30px_rgba(200,164,107,.6)]"
              : "border-[#C8A46B] bg-black/80 text-[#C8A46B] hover:bg-[#C8A46B] hover:text-black"
          }`}
        >
          <span className="text-[11px] font-semibold tracking-widest">
            {String(id).padStart(2, "0")}
          </span>
        </span>
      </button>
    </div>
  );
}