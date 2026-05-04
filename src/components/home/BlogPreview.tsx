import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/data/blog";

export default function BlogPreview() {
  const latest = blogPosts.slice(0, 3);
  return (
    <section className="py-24 section-dark">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="Insights"
          title="From the StoneCraft Journal"
          description="Marble guides, export insights and design inspiration from our team."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {latest.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="aspect-[4/3] overflow-hidden rounded-sm mb-5">
                  <img
                    src={post.cover}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-gold mb-3">
                  <span>{post.category}</span>
                  <span className="text-primary-foreground/30">·</span>
                  <span className="flex items-center gap-1 text-primary-foreground/50">
                    <Clock size={12} /> {post.readingTime} min
                  </span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl text-primary-foreground group-hover:text-gold transition-colors leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold">
                  Read article <ArrowRight size={14} />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 border border-gold/40 text-gold px-8 py-3 rounded-sm text-xs uppercase tracking-[0.2em] hover:bg-gold/10 transition-colors"
          >
            View all articles <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}