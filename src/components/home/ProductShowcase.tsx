import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import marbleCalacatta from "@/assets/marble-calacatta.jpg";
import graniteBlack from "@/assets/granite-black.jpg";
import onyxGold from "@/assets/onyx-gold.jpg";
import marbleVerde from "@/assets/marble-verde.jpg";
import marbleEmperador from "@/assets/marble-emperador.jpg";
import marbleDark from "@/assets/marble-dark.jpg";
import marbleWhite from "@/assets/marble-white.jpg";

const showcaseItems = [
  { image: marbleCalacatta, title: "Calacatta Gold" },
  { image: graniteBlack, title: "Nero Assoluto" },
  { image: onyxGold, title: "Honey Onyx" },
  { image: marbleVerde, title: "Verde Guatemala" },
  { image: marbleEmperador, title: "Emperador Dark" },
  { image: marbleDark, title: "Nero Marquina" },
  { image: marbleWhite, title: "Bianco Statuario" },
];

const ProductShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-28 section-light">
      <div className="container mx-auto px-6 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-3 block">Showcase</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              Premium Textures
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button onClick={() => scroll("left")} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-gold hover:text-primary hover:border-gold transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll("right")} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-gold hover:text-primary hover:border-gold transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-6 pb-6 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {showcaseItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[320px] md:w-[400px] h-[500px] snap-start collection-card group rounded-xl"
          >
            <img src={item.image} alt={item.title} loading="lazy" width={800} height={1000} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent md:from-primary/70 md:via-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:translate-y-4 md:group-hover:translate-y-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
              <h3 className="font-heading text-xl font-bold text-primary-foreground">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
