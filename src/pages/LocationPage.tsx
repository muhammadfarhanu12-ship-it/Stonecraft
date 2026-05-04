import { useLocation, Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { SEO, breadcrumbSchema, faqSchema, localBusinessSchema } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";
import NotFound from "./NotFound";
import { getLocation, locationPages } from "@/data/locations";
import { categories } from "@/data/marble";

export default function LocationPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "");
  const page = getLocation(slug);
  if (!page) return <NotFound />;

  return (
    <>
      <SEO
        title={page.title}
        description={page.description}
        canonical={`/${page.slug}`}
        keywords={page.keywords}
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: page.title, path: `/${page.slug}` }]),
          faqSchema(page.faqs),
        ]}
      />

      <section className="pt-32 pb-12 section-dark">
        <div className="container mx-auto px-6">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: page.city }]} />
          <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground mt-6 mb-5 max-w-4xl">
            {page.title.split("—")[0]}
            <span className="gold-text"> — {page.title.split("—")[1]?.trim()}</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-3xl text-lg leading-relaxed">{page.intro}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {page.highlights.map((h) => (
              <div key={h.title} className="p-6 border border-primary/10 rounded-sm">
                <Check size={20} className="text-gold-dark mb-3" />
                <h3 className="font-heading text-lg text-primary mb-2">{h.title}</h3>
                <p className="text-sm text-primary/65 leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-8">Stone categories we supply</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((c) => (
              <Link key={c.slug} to={`/marble/category/${c.slug}`} className="group flex items-center gap-3 p-4 border border-primary/10 rounded-sm hover:border-gold transition-colors">
                <img src={c.image} alt="" className="w-14 h-14 object-cover rounded-sm" />
                <div>
                  <p className="font-heading text-base text-primary group-hover:text-gold-dark">{c.title}</p>
                  <p className="text-[11px] uppercase tracking-wider text-primary/50">View collection →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-8">{page.city} marble FAQs</h2>
          <FAQAccordion faqs={page.faqs} />
        </div>
      </section>

      <section className="py-20 section-dark">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground text-center mb-3">
            Get a {page.city} <span className="gold-text">marble quote</span>
          </h2>
          <p className="text-primary-foreground/60 text-center mb-10">Tell us your project — reply within 24 hours.</p>
          <QuoteForm subject={`Quote: ${page.city}`} />
        </div>
      </section>

      <section className="py-12 bg-background border-t border-primary/10">
        <div className="container mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-primary/45 mb-4">Other locations</p>
          <div className="flex flex-wrap gap-2">
            {locationPages.filter((l) => l.slug !== page.slug).map((l) => (
              <Link key={l.slug} to={`/${l.slug}`} className="text-xs uppercase tracking-wider px-3 py-1.5 border border-primary/15 text-primary/70 rounded-sm hover:border-gold hover:text-gold-dark inline-flex items-center gap-1">
                {l.city} <ArrowRight size={11} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}