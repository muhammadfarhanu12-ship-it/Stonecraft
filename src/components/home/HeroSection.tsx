import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroMarble from "@/assets/marble-calacatta.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center">
    <div className="absolute inset-0">
      <img src={heroMarble} alt="Premium Calacatta marble slab" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="hero-overlay-stronger absolute inset-0" />
    </div>
    <div className="relative container mx-auto px-6 text-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="text-3xl">🇪🇺</span>
          <span className="text-3xl">🇦🇪</span>
          <span className="text-3xl">🇨🇳</span>
        </motion.div>

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground leading-[1.05] mb-8">
          Exporting Premium{" "}
          <span className="gold-text">Marble & Granite</span>{" "}
          Worldwide
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/60 mb-4 max-w-2xl mx-auto leading-relaxed font-light">
          From Pakistan's finest quarries to global architectural masterpieces.
        </p>
        <p className="text-sm text-gold/80 tracking-[0.3em] uppercase mb-12">
          Trusted by global importers & builders
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <Link
            to="/marble"
            className="gold-gradient px-10 py-4 rounded-sm text-sm font-bold tracking-[0.15em] uppercase text-primary inline-flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            Explore Collection <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="border border-primary-foreground/25 px-10 py-4 rounded-sm text-sm font-bold tracking-[0.15em] uppercase text-primary-foreground inline-flex items-center gap-3 hover:bg-primary-foreground/10 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2.5 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/20 flex justify-center pt-2">
        <div className="w-1.5 h-3 rounded-full bg-gold" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
