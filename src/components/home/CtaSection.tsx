import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import marbleDark from "@/assets/marble-dark.jpg";

const CtaSection = () => (
  <section className="py-28 section-dark relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <img src={marbleDark} alt="" className="w-full h-full object-cover" loading="lazy" />
    </div>
    <div className="relative container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4 block">
          Start Your Project
        </span>
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          Looking for Premium Marble<br className="hidden md:block" /> for Your Next Project?
        </h2>
        <p className="text-primary-foreground/50 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
          Get in touch for a free consultation and custom quotation. We serve architects, developers, and importers globally.
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <Link
            to="/contact"
            className="gold-gradient px-12 py-4 rounded-sm text-sm font-bold tracking-[0.15em] uppercase text-primary inline-flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
          <a
            href="https://wa.me/923425337963"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold/30 px-12 py-4 rounded-sm text-sm font-bold tracking-[0.15em] uppercase text-gold inline-flex items-center gap-3 hover:bg-gold/10 transition-colors"
          >
            Contact on WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
