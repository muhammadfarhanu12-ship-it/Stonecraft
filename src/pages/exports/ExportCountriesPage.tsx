import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe2, Container, Ruler, Ship, FileCheck, MessageCircle } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import marbleHero from "@/assets/marble-white.jpg";

const regions = [
  {
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Oman", "Bahrain", "Kuwait"],
  },
  {
    name: "Europe",
    countries: ["Italy", "Spain", "Germany", "France", "United Kingdom", "Netherlands"],
  },
  {
    name: "North America",
    countries: ["USA", "Canada", "Mexico"],
  },
  {
    name: "Gulf Countries",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain"],
  },
  {
    name: "Asia",
    countries: ["China", "Japan", "South Korea", "Malaysia", "Singapore", "Vietnam"],
  },
  {
    name: "Africa",
    countries: ["South Africa", "Egypt", "Morocco", "Kenya", "Nigeria"],
  },
];

const capabilities = [
  { icon: Container, title: "Container Capacity", desc: "20ft & 40ft FCL shipments â€” up to 28 tons per container with optimised slab loading." },
  { icon: Ruler, title: "Custom Slab Sizes", desc: "Cut-to-size slabs, tiles and blocks tailored to architectural specifications." },
  { icon: Ship, title: "Bulk Shipments", desc: "Multi-container monthly programs for distributors, fabricators and contractors." },
  { icon: Globe2, title: "International Logistics", desc: "Direct port access via Karachi & Port Qasim with trusted freight partners." },
  { icon: FileCheck, title: "Export Documentation", desc: "Full paperwork: Commercial Invoice, Packing List, COO, Form-E, BL and inspection reports." },
];

export default function ExportCountriesPage() {
  return (
    <div>
      <SEO
        title="Global Marble Export Countries â€” Worldwide Stone Supply"
        description="StoneCraft exports premium Pakistani marble & granite to 25+ countries across the Middle East, Europe, North America, Asia and Africa."
        canonical="/exports/countries"
        keywords="marble export countries, Pakistan marble exporter, granite export, international stone supplier"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Exports", path: "/exports" },
          { name: "Export Countries", path: "/exports/countries" },
        ])}
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={marbleHero} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 hero-overlay-stronger" />
        </div>
        <div className="relative container mx-auto px-6 pt-28 pb-16">
          <Breadcrumbs items={[{ name: "Exports", path: "/exports" }, { name: "Countries", path: "/exports/countries" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mt-6">
            <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4 block">Worldwide Network</span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-[1.05]">
              Global Marble <span className="gold-text">Export Network</span>
            </h1>
            <p className="text-primary-foreground/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Supplying premium Pakistani marble and stone products to international markets worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/exports/inquiry" className="gold-gradient px-6 sm:px-8 py-3.5 rounded-sm text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-primary inline-flex items-center justify-center gap-2 hover:opacity-90 transition">
                Request Export Quote <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="border border-gold/40 text-primary-foreground px-6 sm:px-8 py-3.5 rounded-sm text-xs sm:text-sm font-bold tracking-[0.15em] uppercase hover:bg-gold/10 transition text-center">
                Contact Export Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-16 sm:py-20 md:py-24 section-dark">
        <div className="container mx-auto px-6">
          <SectionHeading label="Regions Served" title="Countries We Export To" description="Trusted by importers, fabricators and developers across six continents." light={false} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass-dark rounded-sm p-6 sm:p-8 hover:border-gold/40 transition-all"
              >
                <Globe2 size={28} className="text-gold mb-4" />
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-primary-foreground mb-4">{r.name}</h3>
                <ul className="space-y-1.5">
                  {r.countries.map((c) => (
                    <li key={c} className="text-sm text-primary-foreground/70 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold" /> {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 text-xs text-gold tracking-wider uppercase font-semibold">Active Shipments</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 sm:py-20 md:py-24 section-light">
        <div className="container mx-auto px-6">
          <SectionHeading label="Capabilities" title="Export Capabilities" description="End-to-end support from quarry to destination port." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-background border border-border p-6 sm:p-8 rounded-sm hover-lift"
              >
                <div className="w-12 h-12 rounded-sm gold-gradient flex items-center justify-center mb-4">
                  <c.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 section-dark">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">Ready to Ship to Your Country?</h2>
          <p className="text-primary-foreground/60 mb-8">Speak with our export consultants for container pricing, port options and lead times.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/exports/inquiry" className="gold-gradient px-8 py-3.5 rounded-sm text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-primary inline-flex items-center justify-center gap-2 hover:opacity-90">
              Request Quote <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/923425337963" target="_blank" rel="noopener noreferrer" className="border border-gold/40 text-primary-foreground px-8 py-3.5 rounded-sm text-xs sm:text-sm font-bold tracking-[0.15em] uppercase hover:bg-gold/10 transition inline-flex items-center justify-center gap-2">
              <MessageCircle size={16} /> WhatsApp Export Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
