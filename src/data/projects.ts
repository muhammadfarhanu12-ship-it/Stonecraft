import marbleCalacatta from "@/assets/marble-calacatta.jpg";
import marbleEmperador from "@/assets/marble-emperador.jpg";
import marbleVerde from "@/assets/marble-verde.jpg";
import marbleWhite from "@/assets/marble-white.jpg";
import graniteBlack from "@/assets/granite-black.jpg";
import onyxGold from "@/assets/onyx-gold.jpg";
import travertine from "@/assets/travertine.jpg";

export type ProjectCategory =
  | "residential"
  | "commercial"
  | "flooring"
  | "staircases"
  | "wall-cladding"
  | "luxury-interiors";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  marbleType: string;
  year: string;
  description: string;
  cover: string;
  gallery: string[];
  area: string;
  client: string;
}

export const projectCategories: { slug: ProjectCategory; name: string }[] = [
  { slug: "residential", name: "Residential" },
  { slug: "commercial", name: "Commercial" },
  { slug: "flooring", name: "Flooring" },
  { slug: "staircases", name: "Staircases" },
  { slug: "wall-cladding", name: "Wall Cladding" },
  { slug: "luxury-interiors", name: "Luxury Interiors" },
];

export const projects: Project[] = [
  {
    slug: "dubai-marina-penthouse",
    title: "Dubai Marina Penthouse",
    category: "luxury-interiors",
    location: "Dubai, UAE",
    marbleType: "Calacatta + Honey Onyx",
    year: "2025",
    description:
      "A 950 m² penthouse refit specifying Italian Calacatta book-matched walls and a backlit Honey Onyx bar centrepiece. Delivered FOB Karachi to Dubai in 18 days.",
    cover: marbleCalacatta,
    gallery: [marbleCalacatta, onyxGold, marbleWhite],
    area: "950 m²",
    client: "Private",
  },
  {
    slug: "london-flagship-store",
    title: "Mayfair Flagship Store",
    category: "commercial",
    location: "London, UK",
    marbleType: "Nero Marquina + Carrara",
    year: "2024",
    description:
      "Two-floor luxury retail flagship with Nero Marquina chevron flooring and Carrara cladding. Container-direct delivery to London Gateway.",
    cover: graniteBlack,
    gallery: [graniteBlack, marbleCalacatta],
    area: "620 m²",
    client: "Confidential luxury brand",
  },
  {
    slug: "lahore-villa-flooring",
    title: "DHA Lahore Private Villa",
    category: "residential",
    location: "Lahore, Pakistan",
    marbleType: "Ziarat White",
    year: "2025",
    description: "Full villa flooring and staircase in book-matched Ziarat White marble — over 1,400 m² installed.",
    cover: marbleWhite,
    gallery: [marbleWhite, marbleCalacatta],
    area: "1,400 m²",
    client: "Private",
  },
  {
    slug: "shanghai-hotel-lobby",
    title: "Shanghai Hotel Lobby",
    category: "commercial",
    location: "Shanghai, China",
    marbleType: "Verde Guatemala + Emperador",
    year: "2024",
    description: "Statement lobby featuring Verde Guatemala feature walls and Emperador Dark reception desk.",
    cover: marbleVerde,
    gallery: [marbleVerde, marbleEmperador],
    area: "480 m²",
    client: "5-star hotel group",
  },
  {
    slug: "milan-staircase",
    title: "Milan Townhouse Staircase",
    category: "staircases",
    location: "Milan, Italy",
    marbleType: "Statuario",
    year: "2025",
    description: "Curved Statuario marble staircase across three floors — 64 hand-finished steps.",
    cover: marbleWhite,
    gallery: [marbleWhite],
    area: "64 steps",
    client: "Private",
  },
  {
    slug: "doha-facade",
    title: "Doha Office Façade",
    category: "wall-cladding",
    location: "Doha, Qatar",
    marbleType: "Silver Travertine",
    year: "2024",
    description: "Ventilated façade in calibrated Silver Travertine panels for a 14-storey office tower.",
    cover: travertine,
    gallery: [travertine],
    area: "3,200 m²",
    client: "Real estate developer",
  },
  {
    slug: "islamabad-office-floor",
    title: "Islamabad Corporate HQ",
    category: "flooring",
    location: "Islamabad, Pakistan",
    marbleType: "Absolute Black + Ziarat White",
    year: "2025",
    description: "Two-tone marble flooring across an 8,000 m² corporate headquarters.",
    cover: graniteBlack,
    gallery: [graniteBlack, marbleWhite],
    area: "8,000 m²",
    client: "Public company",
  },
  {
    slug: "karachi-luxury-bath",
    title: "Karachi Luxury Bathroom Suite",
    category: "luxury-interiors",
    location: "Karachi, Pakistan",
    marbleType: "Calacatta + Nero Marquina",
    year: "2025",
    description: "Master bathroom suite combining book-matched Calacatta walls and Nero Marquina herringbone floor.",
    cover: marbleCalacatta,
    gallery: [marbleCalacatta, graniteBlack],
    area: "85 m²",
    client: "Private",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);