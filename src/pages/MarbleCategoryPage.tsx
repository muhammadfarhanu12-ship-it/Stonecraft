import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SEO, breadcrumbSchema, SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import NotFound from "./NotFound";
import { categories, getCategory, getProductsByCategory, type MarbleCategory } from "@/data/marble";

export default function MarbleCategoryPage() {
  const { slug } = useParams();
  const cat = slug ? getCategory(slug) : undefined;
  if (!cat) return <NotFound />;
  const products = getProductsByCategory(cat.slug as MarbleCategory);

  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: cat.title,
    description: cat.description,
    url: `${SITE_URL}/marble/category/${cat.slug}`,
    hasPart: products.map((p) => ({
      "@type": "Product",
      name: p.name,
      url: `${SITE_URL}/marble/${p.slug}`,
      image: `${SITE_URL}${p.image}`,
      description: p.shortDescription,
    })),
  };

  return (
    <>
      <SEO
        title={`${cat.title} — Premium ${cat.title} Slabs & Tiles`}
        description={cat.description}
        canonical={`/marble/category/${cat.slug}`}
        keywords={`${cat.title.toLowerCase()}, ${cat.title.toLowerCase()} export, ${cat.title.toLowerCase()} Pakistan`}
        jsonLd={[
          ld,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Marble", path: "/marble" },
            { name: cat.title, path: `/marble/category/${cat.slug}` },
          ]),
        ]}
      />

      <section className="relative pt-32 pb-16 section-dark overflow-hidden">
        <img src={cat.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="hero-overlay-stronger absolute inset-0" />
        <div className="container mx-auto px-6 relative">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Marble", path: "/marble" }, { name: cat.title }]} />
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-6 mb-4">
            <span className="gold-text">{cat.title}</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl text-lg">{cat.description}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {products.length === 0 ? (
            <p className="text-center text-primary/60 py-16">More products in this category coming soon. <Link to="/contact" className="text-gold-dark underline">Request a quote</Link>.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/marble/${p.slug}`} className="group block">
                    <div className="aspect-[4/5] overflow-hidden rounded-sm mb-4 bg-muted">
                      <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <p className="text-[11px] uppercase tracking-widest text-gold-dark mb-1">{p.origin}</p>
                    <h3 className="font-heading text-xl text-primary group-hover:text-gold-dark transition-colors mb-2">{p.name}</h3>
                    <p className="text-sm text-primary/60 leading-relaxed mb-3">{p.shortDescription}</p>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold-dark">
                      View details <ArrowRight size={12} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 section-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-3">
            Explore other <span className="gold-text">collections</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.filter((c) => c.slug !== cat.slug).map((c) => (
              <Link key={c.slug} to={`/marble/category/${c.slug}`} className="px-5 py-2.5 border border-gold/30 text-gold text-xs uppercase tracking-wider rounded-sm hover:bg-gold/10 transition-colors">
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}