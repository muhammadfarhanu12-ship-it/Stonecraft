import marbleCalacatta from "@/assets/marble-calacatta.jpg";
import marbleWhite from "@/assets/marble-white.jpg";
import graniteBlack from "@/assets/granite-black.jpg";
import onyxGold from "@/assets/onyx-gold.jpg";
import travertine from "@/assets/travertine.jpg";
import marbleEmperador from "@/assets/marble-emperador.jpg";

export type BlogCategory =
  | "Marble Prices"
  | "Marble Designs"
  | "Marble Guides"
  | "Construction"
  | "Export Industry"
  | "Flooring Ideas"
  | "Luxury Interiors";

export interface BlogSection {
  heading: string;
  body: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  cover: string;
  date: string;
  readingTime: number; // minutes
  author: { name: string; role: string };
  tags: string[];
  intro: string;
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
  related: string[];
  keywords: string;
}

export const blogCategories: BlogCategory[] = [
  "Marble Prices",
  "Marble Designs",
  "Marble Guides",
  "Construction",
  "Export Industry",
  "Flooring Ideas",
  "Luxury Interiors",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "best-marble-in-pakistan",
    title: "The Best Marble in Pakistan: A 2026 Buyer's Guide",
    category: "Marble Guides",
    excerpt:
      "From Ziarat White to Sunny Grey, here are the top Pakistani marbles ranked by export quality, price and best use case.",
    cover: marbleWhite,
    date: "2026-04-12",
    readingTime: 9,
    author: { name: "Hassan Ali", role: "Head of Exports, StoneCraft" },
    tags: ["Pakistani marble", "Ziarat", "marble guide", "export"],
    intro:
      "Pakistan is the world's 4th largest marble producer, but quality varies dramatically by quarry and supplier. This guide ranks the top eight Pakistani marbles by export grade, average price and ideal application.",
    sections: [
      {
        heading: "1. Ziarat White Marble",
        body: "Quarried in Balochistan, Ziarat White is Pakistan's flagship export marble — bright crystalline white with elegant grey veining. Comparable to Italian Carrara at 40–60% lower cost.",
      },
      {
        heading: "2. Sunny Grey Marble",
        body: "A warm beige-grey marble used widely in Middle East projects. Excellent for flooring and cladding.",
      },
      {
        heading: "3. Botticino Pakistani",
        body: "Cream-toned marble similar to Italian Botticino — popular for hospitality flooring.",
      },
      {
        heading: "4. Jet Black Pakistani",
        body: "Deep uniform black marble that polishes to a mirror finish — exported globally.",
      },
      {
        heading: "How to choose the right marble for your project",
        body: "Consider three factors: aesthetic fit, traffic load, and budget. For high-traffic commercial floors choose denser marbles like Jet Black or Botticino. For luxury feature walls, Ziarat White and onyx are unmatched.",
      },
    ],
    faqs: [
      { q: "What is the best marble in Pakistan?", a: "Ziarat White is widely considered Pakistan's premier export marble for its brightness, veining and consistency." },
      { q: "Which Pakistani marble is best for flooring?", a: "Botticino, Sunny Grey and Ziarat White are the top three for flooring due to their density and uniformity." },
    ],
    related: ["marble-price-pakistan-2026", "ziarat-vs-carrara"],
    keywords: "best marble in Pakistan, Pakistani marble guide, Ziarat marble, top marble Pakistan",
  },
  {
    slug: "marble-price-pakistan-2026",
    title: "Marble Price in Pakistan 2026: Complete Rate List",
    category: "Marble Prices",
    excerpt:
      "Updated marble prices per square foot in Pakistan for 2026 — covering all popular varieties and grades.",
    cover: marbleCalacatta,
    date: "2026-03-28",
    readingTime: 7,
    author: { name: "Ayesha Khan", role: "Domestic Sales Lead" },
    tags: ["marble price", "Pakistan", "2026", "rates"],
    intro:
      "Marble prices in Pakistan range from PKR 120/sqft for basic varieties to PKR 2,500+/sqft for premium imported stones. Here's the complete 2026 rate list with grade explanations.",
    sections: [
      { heading: "Domestic marble prices (per sqft, polished)", body: "Ziarat White: PKR 220–550 · Sunny Grey: PKR 150–280 · Botticino: PKR 180–340 · Jet Black: PKR 200–420 · Verona: PKR 180–300" },
      { heading: "Imported marble prices (per sqft, polished)", body: "Italian Carrara: PKR 850–1,400 · Calacatta: PKR 1,400–2,500 · Statuario: PKR 1,800–3,200 · Spanish Emperador: PKR 700–1,200" },
      { heading: "Granite prices (per sqft, polished)", body: "Absolute Black: PKR 280–520 · Black Galaxy: PKR 380–680 · Tan Brown: PKR 320–580" },
      { heading: "Factors affecting price", body: "Slab size, thickness, finish, grade, transportation distance and current dollar rate all affect final price. Export FOB pricing is quoted separately on request." },
    ],
    faqs: [
      { q: "What is the cheapest marble in Pakistan?", a: "Sunny Grey and Verona are typically the most affordable Pakistani marbles, starting around PKR 150/sqft." },
      { q: "Why is imported marble so expensive?", a: "Import duties, freight, and the original quarry cost compound to make Italian and Spanish marbles 3–5× the price of comparable Pakistani stones." },
    ],
    related: ["best-marble-in-pakistan", "ziarat-vs-carrara"],
    keywords: "marble price Pakistan, marble rate 2026, marble per sqft Pakistan",
  },
  {
    slug: "ziarat-vs-carrara",
    title: "Ziarat White vs Italian Carrara: Which Should You Specify?",
    category: "Marble Designs",
    excerpt:
      "A detailed comparison of Pakistan's premier white marble and the Italian classic — appearance, performance, sustainability and cost.",
    cover: marbleCalacatta,
    date: "2026-02-18",
    readingTime: 6,
    author: { name: "Hassan Ali", role: "Head of Exports, StoneCraft" },
    tags: ["Ziarat", "Carrara", "white marble", "comparison"],
    intro:
      "Specifiers love Italian Carrara, but Pakistani Ziarat White has become a serious alternative for global projects. Here's how they compare on the metrics that matter.",
    sections: [
      { heading: "Appearance", body: "Ziarat White: bright crystalline background with soft grey veining. Carrara: slightly cooler grey-white background with finer feathery veins. To most observers they are nearly indistinguishable in installed photographs." },
      { heading: "Performance", body: "Both have similar density (~2.7 g/cm³) and water absorption (0.18–0.21%). Both are calcite marbles, requiring sealing and pH-neutral cleaners." },
      { heading: "Sustainability", body: "Pakistani marble has a smaller freight footprint when shipped to Asia, the Gulf and East Africa. Italian marble is closer for Europe." },
      { heading: "Cost", body: "Ziarat White typically lands at 40–60% the cost of Italian Carrara — a major budget advantage on large projects." },
    ],
    faqs: [
      { q: "Is Ziarat White as durable as Carrara?", a: "Yes — both are dense calcite marbles with very similar physical properties." },
      { q: "Will architects accept Ziarat White as a Carrara substitute?", a: "Increasingly yes — major hotel chains and residential developers now specify it directly." },
    ],
    related: ["best-marble-in-pakistan", "marble-price-pakistan-2026"],
    keywords: "Ziarat vs Carrara, white marble comparison, alternative to Carrara",
  },
  {
    slug: "marble-export-process",
    title: "How Marble Is Exported from Pakistan: Step by Step",
    category: "Export Industry",
    excerpt:
      "From quarry block to container — a complete walkthrough of the marble export process from Pakistan.",
    cover: graniteBlack,
    date: "2026-01-22",
    readingTime: 8,
    author: { name: "Hassan Ali", role: "Head of Exports, StoneCraft" },
    tags: ["export", "shipping", "process"],
    intro: "International buyers often ask how marble actually moves from a Pakistani quarry to their port. Here's the full workflow we follow at StoneCraft.",
    sections: [
      { heading: "1. Block selection at quarry", body: "Our team inspects every block before purchase, evaluating color uniformity, fracture lines and crystal structure." },
      { heading: "2. Cutting & processing", body: "Blocks are gang-sawn into slabs, then resin-treated, polished and calibrated to the buyer's spec." },
      { heading: "3. Quality grading", body: "Slabs are graded A/B/C and bundled by color match for book-matching where required." },
      { heading: "4. Export packaging", body: "Slabs are loaded onto wooden A-frames with foam-lined separators, then strapped into 20'/40' containers." },
      { heading: "5. Shipping", body: "FOB Karachi or CIF buyer's port. Typical transit times: Dubai 5–7 days, EU 22–28 days, China 14–18 days." },
    ],
    faqs: [
      { q: "How much marble fits in a 20-ft container?", a: "Typically 22–25 tonnes — roughly 320–400 m² of 20mm slabs depending on size." },
      { q: "Do you handle CIF shipping?", a: "Yes — we offer FOB, CIF and DDP terms to most major ports." },
    ],
    related: ["best-marble-in-pakistan"],
    keywords: "marble export Pakistan, how to export marble, marble shipping process",
  },
  {
    slug: "best-marble-for-flooring",
    title: "The Best Marble for Flooring: Architect's Specification Guide",
    category: "Flooring Ideas",
    excerpt:
      "Not every marble is a good floor. Here's how to specify the right marble for residential, commercial and high-traffic flooring.",
    cover: travertine,
    date: "2025-12-15",
    readingTime: 6,
    author: { name: "Ayesha Khan", role: "Domestic Sales Lead" },
    tags: ["flooring", "marble", "specification"],
    intro:
      "Floor marble must balance beauty, hardness, slip resistance and maintainability. Here's how the top contenders perform.",
    sections: [
      { heading: "Top picks for residential floors", body: "Ziarat White (honed), Botticino, Emperador Dark — all easy to maintain and visually timeless." },
      { heading: "Top picks for commercial floors", body: "Absolute Black granite, Jet Black marble, Sunny Grey — denser stones that withstand heavy footfall." },
      { heading: "Finishes matter", body: "Polished is most reflective but most slippery and shows etching. Honed hides scratches and offers better grip. Leather is the most forgiving for kitchens." },
    ],
    faqs: [
      { q: "Is marble flooring slippery?", a: "Polished marble can be slippery when wet. Specify honed or leather finishes for bathrooms and kitchens." },
      { q: "How long does marble flooring last?", a: "Properly installed and sealed marble can last 100+ years — many historical buildings still feature original marble floors." },
    ],
    related: ["best-marble-in-pakistan", "marble-price-pakistan-2026"],
    keywords: "best marble for flooring, marble flooring guide, marble finishes",
  },
  {
    slug: "luxury-bathroom-stone-trends",
    title: "Luxury Bathroom Stone Trends 2026",
    category: "Luxury Interiors",
    excerpt:
      "Book-matched feature walls, backlit onyx and warm browns — the marble trends defining luxury bathrooms in 2026.",
    cover: onyxGold,
    date: "2026-04-02",
    readingTime: 5,
    author: { name: "Ayesha Khan", role: "Domestic Sales Lead" },
    tags: ["bathroom", "trends", "luxury", "onyx"],
    intro:
      "Bathrooms have become statement spaces. The leading 2026 trends all centre on natural stone — used in bigger formats, bolder veining and dramatic lighting.",
    sections: [
      { heading: "Book-matched feature walls", body: "Two consecutive slabs mirrored to create a single dramatic pattern — Calacatta and Nero Marquina lead the way." },
      { heading: "Backlit onyx", body: "Honey and green onyx panels with concealed LED — the single most photographed feature in luxury bathroom design." },
      { heading: "Warm browns return", body: "Emperador Dark and travertine bring warmth back after a decade of cool greys." },
    ],
    faqs: [
      { q: "Is marble safe in showers?", a: "Yes if properly sealed and sloped. Use honed finishes for floor areas." },
    ],
    related: ["best-marble-for-flooring", "best-marble-in-pakistan"],
    keywords: "luxury bathroom marble, bathroom stone trends 2026, backlit onyx",
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const getRelatedPosts = (slugs: string[]) =>
  slugs.map((s) => blogPosts.find((p) => p.slug === s)).filter(Boolean) as BlogPost[];