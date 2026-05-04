export interface LocationPage {
  slug: string;
  city: string;
  title: string;
  description: string;
  intro: string;
  highlights: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  keywords: string;
}

export const locationPages: LocationPage[] = [
  {
    slug: "marble-in-lahore",
    city: "Lahore",
    title: "Marble in Lahore — Premium Suppliers & Showroom",
    description:
      "Buy premium marble in Lahore — Ziarat White, Botticino, Black Galaxy and imported Italian marble. Citywide delivery & installation.",
    intro:
      "Lahore is Pakistan's largest market for premium marble. StoneCraft supplies Ziarat White, Botticino, Sunny Grey, Jet Black and imported Italian marble across Lahore — DHA, Bahria, Gulberg, Model Town and beyond — with calibrated slabs, professional installation and same-week delivery.",
    highlights: [
      { title: "Lahore showroom", body: "Visit our Industrial Area showroom to view 80+ marble varieties live." },
      { title: "Citywide delivery", body: "Same-week delivery across DHA, Bahria, Gulberg, Model Town and adjoining areas." },
      { title: "Trusted by Lahore architects", body: "Specified by leading Lahore design studios for residential and commercial projects." },
    ],
    faqs: [
      { q: "Where can I buy quality marble in Lahore?", a: "StoneCraft's Lahore showroom in Industrial Area stocks 80+ marble and granite varieties at trade-direct pricing." },
      { q: "How much does marble cost in Lahore?", a: "Pakistani marble in Lahore ranges from PKR 150–550 per sqft polished. Imported Italian marble starts around PKR 850/sqft." },
      { q: "Do you deliver and install in DHA Lahore?", a: "Yes — we provide delivery and installation across all DHA phases, Bahria Town, Gulberg and Model Town." },
    ],
    keywords: "marble in Lahore, marble dealer Lahore, marble price Lahore, marble supplier Lahore",
  },
  {
    slug: "marble-in-islamabad",
    city: "Islamabad",
    title: "Marble in Islamabad — Premium Marble & Granite Supplier",
    description:
      "Premium marble in Islamabad — Ziarat White, imported Italian marble, granite and onyx. Delivery across F-sectors, E-sectors and Bahria Town.",
    intro:
      "StoneCraft supplies premium marble across Islamabad and Rawalpindi — covering F-6, F-7, F-8, F-10, E-7, E-11, Bahria Town and DHA Islamabad. From classic Ziarat White flooring to backlit onyx feature walls, we handle supply and installation end-to-end.",
    highlights: [
      { title: "All Islamabad sectors covered", body: "Delivery across F, E and G sectors plus Bahria Town and DHA." },
      { title: "Premium specification", body: "Calibrated slabs, professional polish, on-site QA." },
      { title: "Architect partnerships", body: "Trusted by Islamabad's leading architecture and interior design studios." },
    ],
    faqs: [
      { q: "Which marble is most popular in Islamabad?", a: "Ziarat White and imported Botticino lead Islamabad's residential market, followed by Black Galaxy granite for kitchens." },
      { q: "Do you supply marble to Bahria Town Islamabad?", a: "Yes — we deliver and install marble across all Bahria phases in Islamabad and Rawalpindi." },
    ],
    keywords: "marble in Islamabad, marble supplier Islamabad, marble price Islamabad, Islamabad marble dealer",
  },
  {
    slug: "marble-in-karachi",
    city: "Karachi",
    title: "Marble in Karachi — Trusted Marble & Granite Supplier",
    description:
      "Premium marble in Karachi — direct from quarry. DHA, Clifton, Bahria Town. Delivery, installation and export from Karachi port.",
    intro:
      "Karachi is both Pakistan's largest marble consumer market and our export gateway. StoneCraft supplies marble across DHA, Clifton, Bahria Town Karachi, PECHS and Gulistan-e-Jauhar — with FOB Karachi container loading available for international buyers.",
    highlights: [
      { title: "Karachi-wide delivery", body: "DHA, Clifton, Bahria Karachi, PECHS and surrounding areas." },
      { title: "Direct port access", body: "FOB Karachi container loading for international clients." },
      { title: "Volume pricing", body: "Trade-direct pricing for builders, contractors and developers." },
    ],
    faqs: [
      { q: "Where to buy marble in Karachi?", a: "StoneCraft delivers across Karachi with trade-direct pricing — request a sample pack and we'll send it within 48 hours." },
      { q: "Can I export marble from Karachi port?", a: "Yes — we handle FOB Karachi loading for buyers in the Gulf, East Africa, Far East and Europe." },
    ],
    keywords: "marble in Karachi, marble supplier Karachi, marble price Karachi, Karachi marble export",
  },
  {
    slug: "marble-supplier-pakistan",
    city: "Pakistan",
    title: "Marble Supplier in Pakistan — Trade-Direct Pricing",
    description:
      "Pakistan's trusted marble supplier — Ziarat White, Botticino, Jet Black, granite and imported marble. Nationwide delivery & export.",
    intro:
      "StoneCraft is one of Pakistan's leading marble suppliers — sourcing direct from Balochistan, KPK and Sindh quarries and supplying both the domestic market and international buyers. Our scale lets us offer trade-direct pricing on every popular Pakistani marble variety.",
    highlights: [
      { title: "80+ marble varieties stocked", body: "From budget Pakistani marble to premium Italian imports." },
      { title: "Quarry-direct sourcing", body: "We own block selection — no middlemen, no quality compromises." },
      { title: "Nationwide & international", body: "Delivery anywhere in Pakistan plus FOB / CIF export to 25+ countries." },
    ],
    faqs: [
      { q: "Who is the best marble supplier in Pakistan?", a: "StoneCraft is trusted by architects, developers and international importers for export-grade Pakistani marble at trade-direct pricing." },
      { q: "Do Pakistani marble suppliers export internationally?", a: "Yes — Pakistan exports marble to 60+ countries. StoneCraft handles FOB Karachi and CIF deliveries to most major ports." },
    ],
    keywords: "marble supplier Pakistan, best marble supplier Pakistan, marble company Pakistan, marble dealer Pakistan",
  },
  {
    slug: "marble-exporter-pakistan",
    city: "Pakistan",
    title: "Marble Exporter in Pakistan — Global Stone Export",
    description:
      "Leading marble exporter from Pakistan to Europe, UAE, China, USA and Africa. FOB Karachi & CIF terms. Container-direct shipping.",
    intro:
      "StoneCraft is a Pakistan-based marble and granite exporter shipping to Europe, the Gulf, China, the USA and Africa. With direct quarry access and a dedicated export operations team in Karachi, we offer reliable container-direct shipping under FOB, CIF and DDP terms.",
    highlights: [
      { title: "25+ export destinations", body: "Including UAE, KSA, China, UK, Germany, Italy, USA, Kenya and Australia." },
      { title: "All major Incoterms", body: "FOB Karachi, CIF buyer's port, DDP available on request." },
      { title: "Export-grade processing", body: "Calibrated slabs, resin treatment, A-frame packaging." },
    ],
    faqs: [
      { q: "How do I import marble from Pakistan?", a: "Send your specification (variety, quantity, finish, port of discharge). We'll quote within 48 hours and confirm timeline, packaging and Incoterm." },
      { q: "Is Pakistani marble export quality?", a: "Yes — when sourced from a reputable exporter with direct quarry access. Our export marble is calibrated, resin-treated and graded to international standards." },
      { q: "What is the minimum export order?", a: "One 20-ft container (≈ 22–25 tonnes / 320–400 m²) for FOB shipments." },
    ],
    keywords: "marble exporter Pakistan, Pakistan marble export, marble export company Pakistan, FOB Karachi marble",
  },
];

export const getLocation = (slug: string) => locationPages.find((p) => p.slug === slug);