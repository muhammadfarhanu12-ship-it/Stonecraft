import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, X, ShieldCheck, Droplets, PackageOpen, Container } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import marbleHero from "@/assets/marble-white.jpg";
import g1 from "@/assets/export/marble-carrara.jpg";
import g2 from "@/assets/export/marble-calacatta2.jpg";
import g3 from "@/assets/export/granite-black-galaxy.jpg";
import g4 from "@/assets/export/granite-blue-pearl.jpg";
import g5 from "@/assets/export/marble-emperador.jpg";
import g6 from "@/assets/export/onyx-honey.jpg";
import g7 from "@/assets/export/travertine-cream.jpg";
import g8 from "@/assets/export/marble-nero.jpg";

const types = [
  { title: "A-Frame Packaging", desc: "Heavy-duty wooden A-frames with steel banding for vertical slab transport — the international export standard.", img: g1 },
  { title: "Wooden Crates", desc: "Fumigated, ISPM-15 certified wooden crates for blocks, tiles and small slabs.", img: g3 },
  { title: "Slab Protection", desc: "Foam corner guards, EPE sheets and stretch wrap protect every polished surface.", img: g2 },
  { title: "Tile Packaging", desc: "Cardboard cartons on wooden pallets, shrink-wrapped for moisture and impact resistance.", img: g7 },
  { title: "Container Securing", desc: "Slabs vacuum-strapped, dunnage bags and lashing belts secure cargo for ocean transit.", img: g4 },
];

const safety = [
  { icon: Droplets, title: "Moisture Protection", desc: "Silica gel desiccants and waterproof liners prevent humidity damage during ocean transit." },
  { icon: ShieldCheck, title: "Edge Protection", desc: "EVA foam corner guards and rubber edging on every slab to eliminate chipping." },
  { icon: PackageOpen, title: "Loading Inspection", desc: "Engineer-supervised loading with photo documentation before container sealing." },
  { icon: Container, title: "Container Securing", desc: "Cross-lashing, dunnage bags and floor blocking certified to international standards." },
];

const gallery = [g1, g2, g3, g4, g5, g6, g7, g8];

export default function PackagingStandardsPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div>
      <SEO
        title="Marble Export Packaging Standards — Secure Global Delivery"
        description="Premium A-frame packaging, ISPM-15 wooden crates, foam edge protection and certified container loading for safe international marble shipments."
        canonical="/exports/packaging-standards"
        keywords="marble packaging, A-frame export packing, ISPM-15 crates, slab protection"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Exports", path: "/exports" },
          { name: "Packaging Standards", path: "/exports/packaging-standards" },
        ])}
      />

      <section className="relative min-h-[60vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={marbleHero} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 hero-overlay-stronger" />
        </div>
        <div className="relative container mx-auto px-6 pt-28 pb-16">
          <Breadcrumbs items={[{ name: "Exports", path: "/exports" }, { name: "Packaging", path: "/exports/packaging-standards" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mt-6">
            <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4 block">Quality Assurance</span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              International Marble <span className="gold-text">Packaging Standards</span>
            </h1>
            <p className="text-primary-foreground/70 text-base sm:text-lg md:text-xl">
              Secure and export-grade packaging solutions for safe global delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packaging Types */}
      <section className="py-16 sm:py-20 md:py-24 section-dark">
        <div className="container mx-auto px-6">
          <SectionHeading label="Systems" title="Packaging Types" description="Engineered for ocean freight, ISPM-15 compliant." light={false} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group glass-dark rounded-sm overflow-hidden hover:border-gold/40 transition"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={t.img} alt={t.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-2 group-hover:text-gold transition-colors">{t.title}</h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Process */}
      <section className="py-16 sm:py-20 md:py-24 section-light">
        <div className="container mx-auto px-6">
          <SectionHeading label="Process" title="Safety & Securing Standards" description="Every detail engineered to protect your investment." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {safety.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-background border border-border p-6 rounded-sm hover-lift"
              >
                <div className="w-12 h-12 rounded-sm gold-gradient flex items-center justify-center mb-4">
                  <s.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-20 section-dark">
        <div className="container mx-auto px-6">
          <SectionHeading label="Gallery" title="Packaging in Action" light={false} />
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {gallery.map((src, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                onClick={() => setLightbox(src)}
                className="block w-full break-inside-avoid overflow-hidden rounded-sm group cursor-zoom-in"
              >
                <img src={src} alt={`Packaging sample ${i + 1}`} loading="lazy" className="w-full h-auto transition-transform duration-700 group-hover:scale-110" />
              </motion.button>
            ))}
          </div>
        </div>
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 text-primary-foreground hover:text-gold p-2"
                aria-label="Close"
              >
                <X size={28} />
              </button>
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                src={lightbox}
                alt="Preview"
                className="max-w-full max-h-[90vh] object-contain rounded-sm"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="py-16 section-light text-center">
        <div className="container mx-auto px-6">
          <Link to="/exports/inquiry" className="gold-gradient px-8 py-3.5 rounded-sm text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-primary inline-flex items-center gap-2 hover:opacity-90">
            Request Packaging Specs <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}