import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Shield, Package, Ship, X, ChevronLeft, ChevronRight, Search } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

// Image imports
import imgCarrara from "@/assets/export/marble-carrara.jpg";
import imgBlackGalaxy from "@/assets/export/granite-black-galaxy.jpg";
import imgOnyx from "@/assets/export/onyx-honey.jpg";
import imgEmperador from "@/assets/export/marble-emperador.jpg";
import imgTravertine from "@/assets/export/travertine-cream.jpg";
import imgGreen from "@/assets/export/marble-green.jpg";
import imgGreyGranite from "@/assets/export/granite-grey.jpg";
import imgCalacatta from "@/assets/export/marble-calacatta2.jpg";
import imgNero from "@/assets/export/marble-nero.jpg";
import imgBluePearl from "@/assets/export/granite-blue-pearl.jpg";
import imgRosa from "@/assets/export/marble-rosa.jpg";
import imgTanBrown from "@/assets/export/granite-tan-brown.jpg";

const textureImages = [
  imgCarrara, imgBlackGalaxy, imgOnyx, imgEmperador, imgTravertine,
  imgGreen, imgGreyGranite, imgCalacatta, imgNero, imgBluePearl,
  imgRosa, imgTanBrown,
];

// Map each stone name to the most visually appropriate texture
const nameToImage: Record<string, string> = {
  // Marble — whites & light
  "Carrara White": imgCarrara,
  "Calacatta Gold": imgCalacatta,
  "Statuario Marble": imgCarrara,
  "Bianco Dolomite": imgCarrara,
  "Crema Marfil": imgTravertine,
  "Thassos White": imgCarrara,
  "Volakas White": imgCarrara,
  "Arabescato Marble": imgCalacatta,
  "Botticino Classico": imgTravertine,
  "Crystal White": imgCarrara,
  "Ziarat White": imgCarrara,
  "Michelangelo": imgCalacatta,
  "Perlato Sicilia": imgTravertine,
  // Marble — dark / brown
  "Emperador Dark": imgEmperador,
  "Emperador Light": imgEmperador,
  "Nero Marquina": imgNero,
  "Black & Gold": imgNero,
  "Fossil Brown": imgEmperador,
  // Marble — green
  "Irish Green": imgGreen,
  "Rain Forest Green": imgGreen,
  "Green Onyx": imgGreen,
  // Marble — pink/rose
  "Rosa Portugal": imgRosa,
  "Rosa Bellissimo": imgRosa,
  "Pink Onyx": imgRosa,
  // Onyx — golden
  "Honey Onyx": imgOnyx,
  "White Onyx": imgCarrara,
  // Travertine
  "Travertine Classic": imgTravertine,
  "Travertine Noce": imgTravertine,
  "Travertine Silver": imgTravertine,
  "Travertine Gold": imgTravertine,
  "Sahara Beige": imgTravertine,
  // Marble — grey
  "Pietra Grey": imgGreyGranite,
  "Persian Silver": imgGreyGranite,
  "Badal Grey": imgGreyGranite,
  "Sunny Grey": imgGreyGranite,

  // Granite — black
  "Black Galaxy": imgBlackGalaxy,
  "Absolute Black": imgBlackGalaxy,
  "Impala Black": imgBlackGalaxy,
  // Granite — white / light
  "Kashmir White": imgGreyGranite,
  "Colonial White": imgGreyGranite,
  "Moon White": imgGreyGranite,
  "River White": imgGreyGranite,
  "Viscount White": imgGreyGranite,
  "Steel Grey": imgGreyGranite,
  // Granite — brown / tan
  "Tan Brown": imgTanBrown,
  "Baltic Brown": imgTanBrown,
  "Sapphire Brown": imgTanBrown,
  "Tropical Brown": imgTanBrown,
  "Ivory Brown": imgTanBrown,
  "Desert Brown": imgTanBrown,
  // Granite — blue
  "Blue Pearl": imgBluePearl,
  "Emerald Pearl": imgBluePearl,
  "Lavender Blue": imgBluePearl,
  // Granite — gold / yellow / red
  "Giallo Ornamental": imgOnyx,
  "Santa Cecilia": imgTanBrown,
  "New Venetian Gold": imgOnyx,
  "Madura Gold": imgOnyx,
  "Crystal Yellow": imgOnyx,
  "African Red": imgRosa,
  "Multicolor Red": imgRosa,
  "Rosa Porrino": imgRosa,
  "Tiger Skin": imgTanBrown,
  "Juparana Colombo": imgTanBrown,
  "Paradiso Bash": imgEmperador,
  "Verde Butterfly": imgGreen,
};

function imageFor(name: string, fallbackIndex: number): string {
  return nameToImage[name] ?? textureImages[fallbackIndex % textureImages.length];
}

// ---------- product data (108 items) ----------
const categories = [
  "All Products", "Marble", "Granite", "Marble Slabs", "Granite Slabs",
  "Marble Blocks", "Granite Blocks", "Polished Stone", "Export Quality Stone",
];

interface Product {
  id: number;
  name: string;
  category: string[];
  tag: string;
  image: string;
  alt: string;
}

const tags = ["Premium Export Quality", "Polished Surface", "International Export Grade", "Export Ready", "Architect Grade"];
const marbleNames = [
  "Carrara White", "Calacatta Gold", "Statuario Marble", "Bianco Dolomite", "Crema Marfil",
  "Emperador Dark", "Emperador Light", "Nero Marquina", "Arabescato Marble", "Botticino Classico",
  "Thassos White", "Volakas White", "Rosa Portugal", "Irish Green", "Rain Forest Green",
  "Honey Onyx", "Green Onyx", "White Onyx", "Pink Onyx", "Fossil Brown",
  "Travertine Classic", "Travertine Noce", "Travertine Silver", "Travertine Gold", "Sahara Beige",
  "Pietra Grey", "Persian Silver", "Perlato Sicilia", "Rosa Bellissimo", "Crystal White",
  "Ziarat White", "Badal Grey", "Sunny Grey", "Black & Gold", "Michelangelo",
];
const graniteNames = [
  "Black Galaxy", "Absolute Black", "Kashmir White", "Colonial White", "Steel Grey",
  "Tan Brown", "Baltic Brown", "Blue Pearl", "Emerald Pearl", "Giallo Ornamental",
  "Santa Cecilia", "New Venetian Gold", "Sapphire Brown", "Tropical Brown", "Moon White",
  "River White", "Ivory Brown", "Paradiso Bash", "Lavender Blue", "Viscount White",
  "Impala Black", "African Red", "Multicolor Red", "Tiger Skin", "Juparana Colombo",
  "Madura Gold", "Crystal Yellow", "Rosa Porrino", "Desert Brown", "Verde Butterfly",
];

function buildProducts(): Product[] {
  const items: Product[] = [];
  let id = 1;
  const pick = (arr: string[]) => arr[id % arr.length];

  marbleNames.forEach((name) => {
    const cats = ["Marble"];
    if (id % 3 === 0) cats.push("Marble Slabs");
    if (id % 5 === 0) cats.push("Marble Blocks");
    if (id % 4 === 0) cats.push("Polished Stone");
    cats.push("Export Quality Stone");
    items.push({ id: id++, name, category: cats, tag: pick(tags), image: imageFor(name, id), alt: `Premium ${name.toLowerCase()} slab for export` });
  });

  graniteNames.forEach((name) => {
    const cats = ["Granite"];
    if (id % 3 === 0) cats.push("Granite Slabs");
    if (id % 5 === 0) cats.push("Granite Blocks");
    if (id % 4 === 0) cats.push("Polished Stone");
    cats.push("Export Quality Stone");
    items.push({ id: id++, name, category: cats, tag: pick(tags), image: imageFor(name, id), alt: `Premium ${name.toLowerCase()} slab for export` });
  });

  // Duplicate with variant suffixes to reach 100+
  const suffixes = ["Premium", "Select", "Classic"];
  const base = [...items];
  suffixes.forEach((s) => {
    base.slice(0, 15).forEach((p) => {
      const newId = id++;
      items.push({ ...p, id: newId, name: `${p.name} ${s}`, image: imageFor(p.name, newId), alt: `${p.name} ${s.toLowerCase()} quality export stone` });
    });
  });

  return items;
}

const allProducts = buildProducts();

// ---------- Trust items ----------
const trustItems = [
  { icon: Globe, title: "Worldwide Export", desc: "Serving Europe, UAE, China & beyond" },
  { icon: Shield, title: "Premium Quality Stone", desc: "Hand-selected & inspected before shipping" },
  { icon: Package, title: "Safe Packaging", desc: "Wooden crates with foam-lined protection" },
  { icon: Ship, title: "Fast International Shipping", desc: "Partnerships with major shipping lines" },
];

// ---------- Component ----------
const ExportProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = allProducts.filter((p) => {
    const matchCat = activeCategory === "All Products" || p.category.includes(activeCategory);
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(() => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : filtered.length - 1)), [filtered.length]);
  const goNext = useCallback(() => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : 0)), [filtered.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  const currentProduct = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div>
      {/* Hero Header */}
      <section className="relative min-h-[50vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--surface-dark))] via-[hsl(var(--primary))] to-[hsl(var(--surface-darker))]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A66B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative container mx-auto px-6 pt-24 pb-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4 block">Export Collection</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 leading-tight">
              Premium Marble & Granite<br /><span className="gold-text">Export Collection</span>
            </h1>
            <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
              We specialize in exporting high-quality natural marble and granite to international markets.
              Our stones are carefully selected, professionally cut, and polished to meet global construction and design standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-14 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0">
                  <item.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters + Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading label="Gallery" title="Browse Our Export Products" description={`Showing ${filtered.length} products`} />

          {/* Search */}
          <div className="max-w-md mx-auto mb-8 relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search marble or granite..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "gold-gradient text-primary shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-accent/20 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, idx) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-lg overflow-hidden border border-border bg-card cursor-pointer hover-lift"
                  onClick={() => openLightbox(idx)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.alt}
                      loading="lazy"
                      width={672}
                      height={512}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-primary-foreground font-heading text-lg font-bold mb-2">{product.name}</span>
                      <span className="text-primary-foreground/80 text-xs tracking-wider uppercase">View Details</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-sm font-semibold text-card-foreground truncate">{product.name}</h3>
                    <span className="inline-block mt-1.5 text-[10px] font-semibold tracking-wider uppercase text-gold bg-gold/10 px-2 py-0.5 rounded-full">
                      {product.tag}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-12">No products found. Try a different filter or search term.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-dark text-center">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Request a Quote for Marble & Granite Export
            </h2>
            <p className="text-primary-foreground/60 mb-8 max-w-lg mx-auto">
              Get competitive pricing for bulk orders. We ship worldwide with full insurance and export documentation.
            </p>
            <Link
              to="/contact"
              className="gold-gradient px-10 py-4 rounded-sm text-sm font-bold tracking-wider uppercase text-primary inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Get Export Price Quote <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && currentProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} aria-label="Close" className="absolute top-3 right-3 sm:top-6 sm:right-6 text-primary-foreground/80 hover:text-primary-foreground z-20 bg-foreground/40 sm:bg-transparent rounded-full p-2">
              <X size={24} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Previous" className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground z-20 bg-foreground/40 sm:bg-transparent rounded-full p-2">
              <ChevronLeft size={28} className="sm:w-9 sm:h-9" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Next" className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground z-20 bg-foreground/40 sm:bg-transparent rounded-full p-2">
              <ChevronRight size={28} className="sm:w-9 sm:h-9" />
            </button>

            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl w-full my-auto rounded-xl overflow-hidden bg-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[4/3] sm:aspect-[16/10] relative overflow-hidden">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-card-foreground">{currentProduct.name}</h3>
                <span className="inline-block mt-2 text-xs font-semibold tracking-wider uppercase text-gold bg-gold/10 px-3 py-1 rounded-full">
                  {currentProduct.tag}
                </span>
                <p className="text-muted-foreground text-sm mt-3">{currentProduct.alt}</p>
                <div className="mt-4 flex gap-3">
                  <Link
                    to="/contact"
                    className="gold-gradient px-6 py-2.5 rounded-sm text-xs font-bold tracking-wider uppercase text-primary inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    Request Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExportProductsPage;
