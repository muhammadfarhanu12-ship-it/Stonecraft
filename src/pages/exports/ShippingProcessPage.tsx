import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Ship, Package, Truck, FileCheck, Search, Scissors, ClipboardList, Globe2 } from "lucide-react";
import { SEO, breadcrumbSchema, faqSchema } from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import marbleHero from "@/assets/marble-white.jpg";

const steps = [
  { icon: Search, title: "Product Selection", desc: "Browse and confirm marble varieties, finishes and sizes with our export consultants." },
  { icon: FileCheck, title: "Quality Inspection", desc: "Each block and slab is graded for color, vein consistency and structural integrity." },
  { icon: Scissors, title: "Custom Cutting", desc: "Slabs cut to importer-specified dimensions and finish (polished, honed, leather)." },
  { icon: Package, title: "Packaging", desc: "Wooden A-frames, foam edging and seaworthy crates protect every consignment." },
  { icon: Truck, title: "Container Loading", desc: "Vacuum-secured loading at our facility under engineer supervision." },
  { icon: ClipboardList, title: "Shipping Documentation", desc: "Form-E, COO, BL, Commercial Invoice and Packing List prepared and verified." },
  { icon: Ship, title: "International Dispatch", desc: "Loaded onto vessels at Karachi / Port Qasim with daily tracking updates." },
  { icon: Globe2, title: "Delivery", desc: "Door-to-door coordination via our agents in your destination country." },
];

const terms = [
  { code: "FOB", title: "Free On Board", desc: "We deliver and load goods onto your vessel at the port of origin (Karachi). You handle freight, insurance and import clearance.", who: "Buyer takes responsibility from port of loading." },
  { code: "CIF", title: "Cost, Insurance & Freight", desc: "We cover product cost, ocean freight and marine insurance up to your destination port. Ideal for buyers who want minimal logistics overhead.", who: "We bear risk until destination port arrival." },
  { code: "DDP", title: "Delivered Duty Paid", desc: "Complete door-to-door service. We handle freight, insurance, customs, duties and final delivery to your warehouse.", who: "Full turnkey delivery — buyer just receives goods." },
];

const faqs = [
  { q: "How long does export shipping take?", a: "Transit times vary by destination: 18–25 days to Europe, 7–12 days to UAE/Gulf, 30–40 days to North America, and 15–22 days to East Asia from Port Qasim." },
  { q: "What shipping methods are available?", a: "We use 20ft and 40ft FCL ocean freight as standard. Air freight and LCL consolidation are available for sample shipments and small orders." },
  { q: "Do you provide export documentation?", a: "Yes — Commercial Invoice, Packing List, Certificate of Origin (COO), Form-E, Bill of Lading and inspection certificates are all included with every shipment." },
  { q: "Which countries do you serve?", a: "We currently export to 25+ countries across the Middle East, Europe, North America, Asia and Africa. New destinations can be arranged on request." },
];

export default function ShippingProcessPage() {
  return (
    <div>
      <SEO
        title="International Marble Shipping Process — FOB, CIF & DDP"
        description="Step-by-step export shipping process for Pakistani marble & granite. Container loading, documentation, FOB/CIF/DDP terms and global delivery."
        canonical="/exports/shipping-process"
        keywords="marble shipping process, FOB CIF DDP marble, container export Pakistan, marble export logistics"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Exports", path: "/exports" },
            { name: "Shipping Process", path: "/exports/shipping-process" },
          ]),
          faqSchema(faqs),
        ]}
      />

      <section className="relative min-h-[60vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={marbleHero} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 hero-overlay-stronger" />
        </div>
        <div className="relative container mx-auto px-6 pt-28 pb-16">
          <Breadcrumbs items={[{ name: "Exports", path: "/exports" }, { name: "Shipping Process", path: "/exports/shipping-process" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mt-6">
            <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4 block">Logistics</span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              International Marble <span className="gold-text">Shipping Process</span>
            </h1>
            <p className="text-primary-foreground/70 text-base sm:text-lg md:text-xl leading-relaxed">
              Efficient and secure export logistics from Pakistan to global destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 md:py-24 section-dark">
        <div className="container mx-auto px-6">
          <SectionHeading label="Workflow" title="Our 8-Step Export Timeline" description="From product selection to international delivery — fully managed." light={false} />
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 -translate-x-1/2" aria-hidden />
            <div className="space-y-10">
              {steps.map((s, i) => {
                const right = i % 2 === 1;
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`relative flex sm:items-center gap-4 sm:gap-8 ${right ? "sm:flex-row-reverse" : ""}`}
                  >
                    <div className="flex-shrink-0 sm:w-1/2 sm:flex sm:justify-end sm:px-8" style={right ? { justifyContent: "flex-start" } : {}}>
                      <div className="hidden sm:block w-full max-w-sm">
                        <div className={`text-xs text-gold font-bold tracking-widest uppercase mb-2 ${right ? "text-left" : "text-right"}`}>Step {i + 1}</div>
                        <h3 className={`font-heading text-xl font-semibold text-primary-foreground mb-2 ${right ? "text-left" : "text-right"}`}>{s.title}</h3>
                        <p className={`text-sm text-primary-foreground/60 ${right ? "text-left" : "text-right"}`}>{s.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full gold-gradient flex items-center justify-center ring-4 ring-primary z-10">
                      <s.icon size={20} className="text-primary" />
                    </div>
                    <div className="pl-20 sm:pl-0 sm:w-1/2 sm:px-8 sm:hidden">
                      <div className="text-xs text-gold font-bold tracking-widest uppercase mb-1">Step {i + 1}</div>
                      <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-1">{s.title}</h3>
                      <p className="text-sm text-primary-foreground/60">{s.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Terms */}
      <section className="py-16 sm:py-20 md:py-24 section-light">
        <div className="container mx-auto px-6">
          <SectionHeading label="Incoterms" title="Shipping Terms Explained" description="Choose the level of service that suits your business." />
          <div className="grid md:grid-cols-3 gap-6">
            {terms.map((t, i) => (
              <motion.div
                key={t.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-background border border-border rounded-sm p-6 sm:p-8 hover-lift"
              >
                <div className="text-4xl sm:text-5xl font-heading font-bold gold-text mb-3">{t.code}</div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
                <p className="text-xs text-gold-dark font-semibold tracking-wide uppercase border-t border-border pt-4">{t.who}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 section-dark">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionHeading label="Questions" title="Shipping FAQs" light={false} />
          <FAQAccordion faqs={faqs} light />
          <div className="text-center mt-10">
            <Link to="/exports/inquiry" className="gold-gradient px-8 py-3.5 rounded-sm text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-primary inline-flex items-center gap-2 hover:opacity-90">
              Get a Shipping Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}