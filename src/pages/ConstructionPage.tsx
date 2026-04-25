import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import constructionHero from "@/assets/construction-hero.jpg";
import hollowBlocks from "@/assets/hollow-blocks.jpg";
import tuffTiles from "@/assets/tuff-tiles.jpg";
import readymadeRoof from "@/assets/readymade-roof.jpg";

const products = [
  {
    category: "Hollow Blocks",
    items: [
      { name: '8" Hollow Block', spec: "400×200×200mm · 12kg", image: hollowBlocks },
      { name: '6" Hollow Block', spec: "400×200×150mm · 9kg", image: hollowBlocks },
      { name: '4" Solid Block', spec: "400×200×100mm · 8kg", image: hollowBlocks },
    ],
  },
  {
    category: "Tuff Tiles",
    items: [
      { name: "Zig-Zag Paver", spec: "60mm thick · Multiple colors", image: tuffTiles },
      { name: "Diamond Paver", spec: "80mm thick · Heavy duty", image: tuffTiles },
      { name: "Square Tile", spec: "40mm thick · Standard", image: tuffTiles },
    ],
  },
  {
    category: "Readymade Roofs",
    items: [
      { name: "T-Beam Roof", spec: "10ft–20ft span · Precast", image: readymadeRoof },
      { name: "Girder Slab", spec: "Custom spans · RCC", image: readymadeRoof },
    ],
  },
];

const ConstructionPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center section-dark">
        <div className="absolute inset-0 opacity-20">
          <img src={constructionHero} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-6 pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Pakistan Only</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              Construction <span className="gold-text">Materials</span>
            </h1>
            <p className="text-primary-foreground/60 max-w-xl text-lg">
              Durable, affordable building materials for residential and commercial projects across Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products by Category */}
      {products.map((cat, catIdx) => (
        <section key={cat.category} className={`py-16 ${catIdx % 2 === 0 ? "bg-background" : "section-light"}`}>
          <div className="container mx-auto px-6">
            <SectionHeading label={`Category`} title={cat.category} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item) => (
                <ProductCard key={item.name} image={item.image} title={item.name} subtitle={item.spec}>
                  <div className="flex gap-2 mt-4">
                    <Link
                      to="/contact"
                      className="flex-1 gold-gradient px-4 py-2 rounded-sm text-xs font-bold tracking-wider uppercase text-primary text-center hover:opacity-90 transition-opacity"
                    >
                      Order Now
                    </Link>
                    <a
                      href="tel:+923001234567"
                      className="flex items-center justify-center px-4 py-2 rounded-sm border border-border text-xs font-bold tracking-wider uppercase text-foreground hover:bg-muted transition-colors"
                    >
                      <Phone size={12} className="mr-1" /> Call
                    </a>
                  </div>
                </ProductCard>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bulk CTA */}
      <section className="py-16 section-dark text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
            Need Bulk Pricing?
          </h2>
          <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto">
            We offer special rates for contractors and large-scale projects. Get a custom quote today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="gold-gradient px-8 py-4 rounded-sm text-sm font-bold tracking-wider uppercase text-primary inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Get Bulk Quote <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+923001234567"
              className="border border-gold/40 px-8 py-4 rounded-sm text-sm font-bold tracking-wider uppercase text-gold inline-flex items-center gap-2 hover:bg-gold/10 transition-colors"
            >
              <Phone size={16} /> Call for Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionPage;
