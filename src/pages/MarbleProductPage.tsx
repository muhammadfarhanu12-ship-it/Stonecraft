import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, MessageCircle, ArrowRight } from "lucide-react";
import { SEO, breadcrumbSchema, faqSchema, SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";
import NotFound from "./NotFound";
import { getProductBySlug, marbleProducts } from "@/data/marble";

export default function MarbleProductPage() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [active, setActive] = useState(0);
  if (!product) return <NotFound />;

  const related = product.related
    .map((s) => marbleProducts.find((p) => p.slug === s))
    .filter(Boolean) as typeof marbleProducts;

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.gallery.map((g) => `${SITE_URL}${g}`),
    sku: product.slug,
    brand: { "@type": "Brand", name: "StoneCraft" },
    category: product.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "0",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "StoneCraft" },
      url: `${SITE_URL}/marble/${product.slug}`,
    },
  };

  return (
    <>
      <SEO
        title={`${product.name} — ${product.origin}`}
        description={`${product.shortDescription} Available for export with global shipping. Request a quote from StoneCraft.`}
        canonical={`/marble/${product.slug}`}
        type="product"
        keywords={product.keywords}
        image={product.image}
        jsonLd={[
          productLd,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Marble", path: "/marble" },
            { name: product.name, path: `/marble/${product.slug}` },
          ]),
          faqSchema(product.faqs),
        ]}
      />

      <section className="pt-28 pb-12 section-dark">
        <div className="container mx-auto px-6">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Marble", path: "/marble" }, { name: product.name }]} />
        </div>
      </section>

      <section className="bg-background pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div>
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="aspect-[4/5] overflow-hidden rounded-sm bg-muted shadow-2xl"
              >
                <img src={product.gallery[active]} alt={product.name} className="w-full h-full object-cover" />
              </motion.div>
              {product.gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-3 mt-4">
                  {product.gallery.map((g, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`aspect-square overflow-hidden rounded-sm border-2 ${active === i ? "border-gold" : "border-transparent"}`}
                    >
                      <img src={g} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold-dark mb-3">{product.origin}</p>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary mb-4">{product.name}</h1>
              <p className="text-lg text-primary/70 leading-relaxed mb-8">{product.description}</p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 border-y border-primary/10 py-6 mb-8">
                <Spec label="Color palette" value={product.colorPalette} />
                <Spec label="Density" value={product.density} />
                <Spec label="Water absorption" value={product.waterAbsorption} />
                <Spec label="Slab sizes" value={product.slabSizes.join(" · ")} />
                <Spec label="Thickness" value={product.thicknessOptions.join(" · ")} />
                <Spec label="Finishes" value={product.finishes.join(" · ")} />
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h2 className="text-xs uppercase tracking-widest text-gold-dark mb-3">Best for</h2>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((a) => (
                    <span key={a} className="px-3 py-1.5 text-sm border border-primary/15 text-primary/80 rounded-sm">{a}</span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#quote"
                  className="gold-gradient px-7 py-3 rounded-sm text-xs font-bold tracking-[0.18em] uppercase text-primary inline-flex items-center gap-2 hover:opacity-90"
                >
                  Request quote <ArrowRight size={14} />
                </a>
                <a
                  href={`https://wa.me/923425337963?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-primary/30 px-7 py-3 rounded-sm text-xs font-bold tracking-[0.18em] uppercase text-primary inline-flex items-center gap-2 hover:bg-primary/5"
                >
                  <MessageCircle size={14} /> WhatsApp inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">Maintenance & care</h2>
          <ul className="space-y-3">
            {product.maintenance.map((m, i) => (
              <li key={i} className="flex gap-3 text-primary/75">
                <Check size={18} className="text-gold-dark mt-1 shrink-0" /> {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-8">{product.name} FAQs</h2>
          <FAQAccordion faqs={product.faqs} />
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="py-20 section-dark">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-3 text-center">
            Request a <span className="gold-text">{product.name}</span> quote
          </h2>
          <p className="text-primary-foreground/60 text-center mb-10">Tell us your project — we'll reply within 24 hours.</p>
          <QuoteForm subject={`Quote: ${product.name}`} />
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-8 text-center">You may also like</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} to={`/marble/${r.slug}`} className="group">
                  <div className="aspect-[4/5] overflow-hidden rounded-sm mb-3 bg-muted">
                    <img src={r.image} alt={r.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="font-heading text-lg text-primary group-hover:text-gold-dark transition-colors">{r.name}</h3>
                  <p className="text-sm text-primary/60">{r.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-primary/45 mb-1">{label}</p>
      <p className="text-sm text-primary font-medium">{value}</p>
    </div>
  );
}