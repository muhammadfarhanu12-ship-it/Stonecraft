import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, ShieldCheck, FileCheck, Layers, Search, Globe2, Users, Clock } from "lucide-react";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import marbleHero from "@/assets/marble-white.jpg";

const certs = [
  { icon: Award, title: "ISO 9001:2015", desc: "Certified quality management system covering quarrying, processing and export operations." },
  { icon: ShieldCheck, title: "Quality Control", desc: "In-house QC lab tests density, water absorption, flexural strength and finish consistency." },
  { icon: FileCheck, title: "Export Compliance", desc: "Form-E, COO, ISPM-15 and customs documentation for every international shipment." },
  { icon: Layers, title: "Material Grading", desc: "Premium, Commercial and Standard grades clearly classified per international norms." },
  { icon: Search, title: "Inspection Process", desc: "Pre-shipment inspection (PSI) by SGS / Bureau Veritas available on request." },
  { icon: Globe2, title: "CE Marking", desc: "Compliance with European EN-12058 / EN-1469 standards for finished marble products." },
];

const trust = [
  { icon: Clock, value: "25+", label: "Years of Experience" },
  { icon: Globe2, value: "25+", label: "Countries Served" },
  { icon: Users, value: "500+", label: "International Clients" },
  { icon: Award, value: "100%", label: "Quality Guaranteed" },
];

export default function CertificationsPage() {
  return (
    <div>
      <SEO
        title="Marble Quality Certifications & Export Standards"
        description="ISO 9001:2015, CE marking, SGS inspection, ISPM-15 compliance and full export documentation for premium Pakistani marble shipments."
        canonical="/exports/certifications"
        keywords="marble certifications, ISO 9001 marble, CE marking stone, SGS inspection marble"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Exports", path: "/exports" },
          { name: "Certifications", path: "/exports/certifications" },
        ])}
      />

      <section className="relative min-h-[60vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={marbleHero} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 hero-overlay-stronger" />
        </div>
        <div className="relative container mx-auto px-6 pt-28 pb-16">
          <Breadcrumbs items={[{ name: "Exports", path: "/exports" }, { name: "Certifications", path: "/exports/certifications" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mt-6">
            <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4 block">Trust & Compliance</span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Quality <span className="gold-text">Certifications</span> & Export Standards
            </h1>
            <p className="text-primary-foreground/70 text-base sm:text-lg md:text-xl">
              Maintaining international quality standards for global marble exports.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 section-dark">
        <div className="container mx-auto px-6">
          <SectionHeading label="Certifications" title="International Standards" description="Independently verified, internationally recognised." light={false} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass-dark rounded-sm p-6 sm:p-8 hover:border-gold/40 transition group"
              >
                <div className="w-14 h-14 rounded-sm gold-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <c.icon size={26} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-2 group-hover:text-gold transition-colors">{c.title}</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 section-light">
        <div className="container mx-auto px-6">
          <SectionHeading label="Quality Assurance" title="Our Inspection Workflow" description="Multi-stage QC from quarry to container." />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Quarry Selection", desc: "Only premium-grade blocks from approved quarries enter our supply chain." },
              { step: "02", title: "Block Inspection", desc: "Each block visually graded for color, vein, cracks and structural soundness." },
              { step: "03", title: "Slab Grading", desc: "Polished slabs sorted into Premium / Commercial / Standard grades by senior QC." },
              { step: "04", title: "Pre-Shipment Inspection", desc: "Final dimensional and finish check with photo documentation before container loading." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-background border-l-2 border-gold p-6 sm:p-8"
              >
                <div className="text-3xl font-heading font-bold gold-text mb-2">{s.step}</div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 sm:py-20 section-dark">
        <div className="container mx-auto px-6">
          <SectionHeading label="By the Numbers" title="Trusted Worldwide" light={false} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {trust.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center glass-dark rounded-sm p-6"
              >
                <t.icon size={28} className="text-gold mx-auto mb-3" />
                <div className="font-heading text-3xl sm:text-4xl font-bold gold-text mb-1">{t.value}</div>
                <div className="text-xs sm:text-sm text-primary-foreground/60 tracking-wider uppercase">{t.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/exports/inquiry" className="gold-gradient px-8 py-3.5 rounded-sm text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-primary inline-flex items-center gap-2 hover:opacity-90">
              Verify Our Certifications <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}