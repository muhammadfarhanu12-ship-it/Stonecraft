import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Award, FileCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const regions = [
  { flag: "🇪🇺", name: "Europe", markets: "Italy, Spain, Germany, France, UK" },
  { flag: "🇦🇪", name: "UAE & Middle East", markets: "Dubai, Abu Dhabi, Riyadh, Doha" },
  { flag: "🇨🇳", name: "China & East Asia", markets: "Shanghai, Beijing, Guangzhou, Seoul" },
  { flag: "🇵🇰", name: "Pakistan", markets: "Lahore, Karachi, Islamabad, Peshawar" },
];

const certifications = [
  { icon: ShieldCheck, label: "ISO 9001 Certified" },
  { icon: Award, label: "CE Marked Products" },
  { icon: FileCheck, label: "SGS Tested" },
];

const GlobalExport = () => (
  <section className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <SectionHeading
        label="Global Presence"
        title="We Export Worldwide"
        description="Our premium marble and granite reaches clients across four continents"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {regions.map((region, i) => (
          <motion.div
            key={region.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8 text-center hover-lift"
          >
            <span className="text-5xl mb-4 block">{region.flag}</span>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-1">{region.name}</h3>
            <p className="text-sm text-muted-foreground">{region.markets}</p>
          </motion.div>
        ))}
      </div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-8"
      >
        {certifications.map((cert) => (
          <div key={cert.label} className="flex items-center gap-3 trust-badge">
            <cert.icon size={18} className="text-gold-dark" />
            <span className="text-sm font-medium">{cert.label}</span>
          </div>
        ))}
      </motion.div>

      <div className="text-center mt-12">
        <Link to="/exports" className="text-gold font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm tracking-[0.15em] uppercase">
          Learn About Our Export Process <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);

export default GlobalExport;
