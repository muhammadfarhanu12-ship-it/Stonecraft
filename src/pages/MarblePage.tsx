import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Filter } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import marbleDark from "@/assets/marble-dark.jpg";
import marbleWhite from "@/assets/marble-white.jpg";
import marbleGreen from "@/assets/marble-green.jpg";

const marbleProducts = [
  { id: 1, name: "Calacatta Gold", origin: "Italy", finish: "Polished", color: "White", type: "Calacatta", image: marbleWhite, badge: "Best Seller" },
  { id: 2, name: "Nero Marquina", origin: "Spain", finish: "Honed", color: "Black", type: "Nero", image: marbleDark, badge: "Premium" },
  { id: 3, name: "Verde Guatemala", origin: "India", finish: "Polished", color: "Green", type: "Onyx", image: marbleGreen, badge: "Exotic" },
  { id: 4, name: "Statuario Venato", origin: "Italy", finish: "Polished", color: "White", type: "Statuario", image: marbleWhite },
  { id: 5, name: "Black Galaxy", origin: "India", finish: "Polished", color: "Black", type: "Granite", image: marbleDark },
  { id: 6, name: "Emerald Onyx", origin: "Pakistan", finish: "Bookmatched", color: "Green", type: "Onyx", image: marbleGreen, badge: "Local" },
  { id: 7, name: "Carrara White", origin: "Italy", finish: "Honed", color: "White", type: "Carrara", image: marbleWhite },
  { id: 8, name: "Sahara Noir", origin: "Tunisia", finish: "Polished", color: "Black", type: "Nero", image: marbleDark },
  { id: 9, name: "Jade Green", origin: "Pakistan", finish: "Polished", color: "Green", type: "Onyx", image: marbleGreen, badge: "Local" },
];

const colors = ["All", "White", "Black", "Green"];
const finishes = ["All", "Polished", "Honed", "Bookmatched"];

const MarblePage = () => {
  const [colorFilter, setColorFilter] = useState("All");
  const [finishFilter, setFinishFilter] = useState("All");

  const filtered = marbleProducts.filter((p) => {
    if (colorFilter !== "All" && p.color !== colorFilter) return false;
    if (finishFilter !== "All" && p.finish !== finishFilter) return false;
    return true;
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center section-dark">
        <div className="absolute inset-0 opacity-20">
          <img src={marbleDark} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-6 pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Global Export</span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Marble <span className="gold-text">Collection</span>
            </h1>
            <p className="text-primary-foreground/60 max-w-xl text-lg">
              Explore our curated selection of premium natural marble, sourced from the world's finest quarries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-6 mb-10 pb-6 border-b border-border">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter size={16} />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-2 self-center">Color</span>
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColorFilter(c)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    colorFilter === c
                      ? "gold-gradient text-primary"
                      : "bg-muted text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-2 self-center">Finish</span>
              {finishes.map((f) => (
                <button
                  key={f}
                  onClick={() => setFinishFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    finishFilter === f
                      ? "gold-gradient text-primary"
                      : "bg-muted text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-8">{filtered.length} products found</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.name}
                subtitle={`${product.origin} · ${product.finish}`}
                badge={product.badge}
              >
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">Export available</span>
                  <Link
                    to="/contact"
                    className="text-gold text-xs font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Inquire <ArrowRight size={12} />
                  </Link>
                </div>
              </ProductCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-dark text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
            Need a Custom Marble Solution?
          </h2>
          <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto">
            Contact us for custom sizes, finishes, and bulk export pricing.
          </p>
          <Link
            to="/contact"
            className="gold-gradient px-8 py-4 rounded-sm text-sm font-bold tracking-wider uppercase text-primary inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Request Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MarblePage;
