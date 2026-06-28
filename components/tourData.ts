export interface TourHotspot {
  id: number;
  top: string;
  left: string;
  label: string;
  title: string;
  description: string;
  image: string;
  specs: {
    spec1: string;
    spec2: string;
    spec3: string;
  };
}

export const hotspots: TourHotspot[] = [
  {
    id: 1,
    top: "18%",
    left: "50%",
    label: "Lighting",
    title: "Concealed Linear Light",
    description:
      "Atmospheric indirect dimmable LEDs seamlessly integrated into vertical channels.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    specs: {
      spec1: "CRI > 96",
      spec2: "14.4 W/m Dual",
      spec3: "Variable Core",
    },
  },
  {
    id: 2,
    top: "45%",
    left: "28%",
    label: "Marble",
    title: "Italian Marble Slabs",
    description:
      "Precision-cut marble with anti-glare nano finish and seamless joints.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    specs: {
      spec1: "Grade A++",
      spec2: "18mm Thickness",
      spec3: "Nano Seal",
    },
  },
  {
    id: 3,
    top: "52%",
    left: "62%",
    label: "Faucet",
    title: "Brass Luxury Faucets",
    description:
      "Pressure-balanced solid brass faucet system with ceramic core control.",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
    specs: {
      spec1: "Solid Brass",
      spec2: "Ceramic Core",
      spec3: "Flow Precision",
    },
  },
  {
    id: 4,
    top: "75%",
    left: "45%",
    label: "Bathtub",
    title: "Freestanding Stone Tub",
    description:
      "Ergonomic thermal-retention bathtub designed for luxury relaxation.",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
    specs: {
      spec1: "Stone Resin",
      spec2: "Heat Lock Tech",
      spec3: "Ergo Curve",
    },
  },
];