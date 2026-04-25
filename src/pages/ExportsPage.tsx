import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Package, Truck, FileCheck, Globe } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import marbleWhite from "@/assets/marble-white.jpg";

const countries = [
  { name: "Europe", flag: "🇪🇺", details: "Italy, Spain, Germany, France, UK", desc: "Regular shipments to major European markets via sea freight." },
  { name: "United Arab Emirates", flag: "🇦🇪", details: "Dubai, Abu Dhabi, Sharjah", desc: "Premium marble for luxury hospitality and real estate projects." },
  { name: "China", flag: "🇨🇳", details: "Shanghai, Beijing, Guangzhou", desc: "Large-volume exports for commercial and residential developments." },
  { name: "Pakistan", flag: "🇵🇰", details: "Nationwide distribution", desc: "Local marble and full construction material supply chain." },
];

const process = [
  { icon: FileCheck, title: "Quality Inspection", desc: "Every slab is inspected for grade, finish, and consistency before packaging." },
  { icon: Package, title: "Expert Packaging", desc: "Wooden crates with foam lining ensure safe transit across continents." },
  { icon: Truck, title: "Global Shipping", desc: "Partnerships with major shipping lines for timely delivery worldwide." },
  { icon: Shield, title: "Insurance & Compliance", desc: "Full cargo insurance and compliance with international trade regulations." },
];

const certifications = ["ISO 9001:2015", "CE Marking", "SGS Certified", "Export License", "Quality Assured", "Trade Compliant"];

const ExportsPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center section-dark">
        <div className="absolute inset-0 opacity-10">
          <img src={marbleWhite} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-6 pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Worldwide</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              Export <span className="gold-text">Services</span>
            </h1>
            <p className="text-primary-foreground/60 max-w-xl text-lg">
              Seamless global delivery of premium natural stone to your doorstep.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading label="Markets" title="Countries We Serve" description="Our marble reaches some of the most demanding markets in the world" />
          <div className="grid md:grid-cols-2 gap-8">
            {countries.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-8 hover-lift"
              >
                <span className="text-4xl mb-4 block">{c.flag}</span>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-1">{c.name}</h3>
                <p className="text-sm text-gold font-medium mb-3">{c.details}</p>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-6">
          <SectionHeading label="How It Works" title="Our Export Process" description="From quarry to your project site — a seamless experience" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-5">
                  <step.icon size={28} className="text-primary" />
                </div>
                <div className="text-xs text-gold font-bold mb-2">Step {i + 1}</div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <SectionHeading label="Trust" title="Certifications & Compliance" />
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <span key={cert} className="trust-badge text-sm">{cert}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-dark text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Ready to Import Premium Marble?</h2>
          <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto">Get a detailed export quotation with shipping estimates for your region.</p>
          <Link to="/contact" className="gold-gradient px-8 py-4 rounded-sm text-sm font-bold tracking-wider uppercase text-primary inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
            Request Export Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ExportsPage;
