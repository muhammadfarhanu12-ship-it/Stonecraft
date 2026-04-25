import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import quarry from "@/assets/quarry.jpg";

const AboutPreview = () => (
  <section className="py-28 section-light">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4 block">Our Story</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Crafting Excellence in Stone Since 2005
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
            StoneCraft is a premier exporter of natural marble and granite from Pakistan's richest quarries. With state-of-the-art CNC processing and rigorous quality control, we supply architects, developers, and importers across four continents.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["20+ Countries", "500+ Projects", "ISO 9001", "A-Grade Stone"].map((item) => (
              <span key={item} className="trust-badge">{item}</span>
            ))}
          </div>
          <Link to="/about" className="text-gold font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm tracking-[0.15em] uppercase">
            Learn More <ArrowRight size={16} />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img src={quarry} alt="StoneCraft marble quarry" loading="lazy" width={800} height={600} className="rounded-lg shadow-2xl w-full" />
          <div className="absolute -bottom-6 -left-6 gold-gradient p-6 rounded-lg shadow-xl">
            <p className="text-primary text-3xl font-heading font-bold">18+</p>
            <p className="text-primary/80 text-sm font-medium">Years of Excellence</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutPreview;
