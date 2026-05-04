import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Clock, ArrowLeft, Calendar, User } from "lucide-react";
import { SEO, breadcrumbSchema, faqSchema, SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import NotFound from "./NotFound";
import { getPost, getRelatedPosts } from "@/data/blog";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!post) return <NotFound />;

  const related = getRelatedPosts(post.related);
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author.name, jobTitle: post.author.role },
    publisher: { "@type": "Organization", name: "StoneCraft", logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    keywords: post.keywords,
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        type="article"
        keywords={post.keywords}
        image={post.cover}
        jsonLd={[
          articleLd,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          faqSchema(post.faqs),
        ]}
      />

      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-transparent">
        <div className="h-full gold-gradient transition-[width]" style={{ width: `${progress}%` }} />
      </div>

      <article>
        <header className="pt-32 pb-12 section-dark">
          <div className="container mx-auto px-6 max-w-4xl">
            <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title }]} />
            <p className="text-xs uppercase tracking-[0.25em] text-gold mt-6 mb-4">{post.category}</p>
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-primary-foreground/60">
              <span className="flex items-center gap-2"><User size={14} /> {post.author.name}</span>
              <span className="flex items-center gap-2"><Calendar size={14} /> {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span className="flex items-center gap-2"><Clock size={14} /> {post.readingTime} min read</span>
            </div>
          </div>
        </header>

        <div className="bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <img src={post.cover} alt={post.title} className="w-full aspect-[16/9] object-cover -mt-10 rounded-sm shadow-2xl mb-12" />

            {/* Table of contents */}
            {post.sections.length > 2 && (
              <aside className="border-l-2 border-gold/40 pl-5 mb-10 bg-muted/40 py-5 pr-5 rounded-sm">
                <p className="text-xs uppercase tracking-widest text-gold-dark mb-3">Table of contents</p>
                <ol className="space-y-1.5 text-sm">
                  {post.sections.map((s, i) => (
                    <li key={i}>
                      <a href={`#section-${i}`} className="text-primary/70 hover:text-gold-dark">
                        {i + 1}. {s.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </aside>
            )}

            <div className="prose-luxury">
              <p className="text-lg md:text-xl leading-relaxed text-primary/80 font-light mb-10">{post.intro}</p>
              {post.sections.map((s, i) => (
                <section key={i} id={`section-${i}`} className="mb-10">
                  <h2 className="font-heading text-2xl md:text-3xl text-primary mb-4">{s.heading}</h2>
                  <p className="text-base md:text-lg leading-relaxed text-primary/75">{s.body}</p>
                </section>
              ))}
            </div>

            {post.faqs.length > 0 && (
              <section className="mt-16 pt-10 border-t border-primary/10">
                <h2 className="font-heading text-2xl md:text-3xl text-primary mb-6">Frequently Asked Questions</h2>
                <FAQAccordion faqs={post.faqs} />
              </section>
            )}

            <div className="mt-12 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="px-3 py-1 text-xs uppercase tracking-wider border border-primary/15 text-primary/60 rounded-sm">
                  #{t}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gold-dark hover:text-gold uppercase tracking-wider">
                <ArrowLeft size={14} /> Back to all articles
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="py-20 section-dark mt-20">
            <div className="container mx-auto px-6 max-w-5xl">
              <h2 className="font-heading text-3xl text-primary-foreground mb-8">Related <span className="gold-text">articles</span></h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link key={r.slug} to={`/blog/${r.slug}`} className="group">
                    <div className="aspect-[4/3] overflow-hidden rounded-sm mb-3">
                      <img src={r.cover} alt={r.title} loading="lazy" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                    </div>
                    <p className="text-xs uppercase tracking-wider text-gold mb-1">{r.category}</p>
                    <h3 className="font-heading text-lg text-primary-foreground group-hover:text-gold transition-colors">{r.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}