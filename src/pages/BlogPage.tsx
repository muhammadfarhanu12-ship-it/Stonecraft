import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Search } from "lucide-react";
import { SEO, breadcrumbSchema, SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts, blogCategories, type BlogCategory } from "@/data/blog";

export default function BlogPage() {
  const [active, setActive] = useState<BlogCategory | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = blogPosts.filter((p) => {
    const catMatch = active === "All" || p.category === active;
    const q = query.trim().toLowerCase();
    const qMatch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
    return catMatch && qMatch;
  });

  const ld = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "StoneCraft Marble Journal",
    url: `${SITE_URL}/blog`,
    blogPost: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.date,
      author: { "@type": "Person", name: p.author.name },
    })),
  };

  return (
    <>
      <SEO
        title="Marble Journal — Guides, Prices & Export Insights"
        description="StoneCraft's marble journal — buying guides, 2026 marble prices, export insights, and luxury interior trends from our marble specialists."
        canonical="/blog"
        keywords="marble blog, marble guides, marble prices Pakistan, stone export blog"
        jsonLd={[ld, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])]}
      />
      <section className="pt-32 pb-12 section-dark">
        <div className="container mx-auto px-6">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog" }]} />
          <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground mt-6 mb-4">
            The <span className="gold-text">Marble Journal</span>
          </h1>
          <p className="text-primary-foreground/60 max-w-2xl text-lg">
            Buyer guides, 2026 prices, export insights and design inspiration from our marble specialists.
          </p>
        </div>
      </section>

      <section className="py-14 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50" />
              <input
                type="search"
                placeholder="Search articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-primary/15 rounded-sm text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {(["All", ...blogCategories] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider rounded-sm border transition-colors ${
                    active === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-primary/20 text-primary/70 hover:border-gold hover:text-gold"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-sm mb-5 bg-muted">
                    <img src={post.cover} alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-gold-dark mb-2">
                    <span>{post.category}</span>
                    <span className="text-primary/30">·</span>
                    <span className="flex items-center gap-1 text-primary/50">
                      <Clock size={12} /> {post.readingTime} min
                    </span>
                  </div>
                  <h2 className="font-heading text-xl text-primary group-hover:text-gold-dark transition-colors leading-snug mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-primary/60 leading-relaxed mb-3">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold-dark">
                    Read <ArrowRight size={12} />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-primary/50 py-16">No articles match your search.</p>
          )}
        </div>
      </section>
    </>
  );
}