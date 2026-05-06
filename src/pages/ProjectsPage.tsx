import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEO, breadcrumbSchema, SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";

export default function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "StoneCraft Marble Projects",
    url: `${SITE_URL}/projects`,
    hasPart: projects.map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      url: `${SITE_URL}/projects/${p.slug}`,
      image: `${SITE_URL}${p.cover}`,
      contentLocation: p.location,
    })),
  };

  return (
    <>
      <SEO
        title="Marble Projects — Global Portfolio of Luxury Stone Installations"
        description="Explore StoneCraft's portfolio — luxury marble & granite installations across UAE, UK, China, Italy, Qatar and Pakistan. Residential, commercial & hospitality projects."
        canonical="/projects"
        keywords="marble projects, luxury stone portfolio, marble installation gallery"
        jsonLd={[ld, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }])]}
      />

      <section className="pt-32 pb-12 section-dark">
        <div className="container mx-auto px-6">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Projects" }]} />
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-6 mb-4">
            Global <span className="gold-text">Project Portfolio</span>
          </h1>
          <p className="text-primary-foreground/60 max-w-2xl text-lg">
            Luxury marble installations across UAE, UK, Italy, China, Qatar and Pakistan — from penthouses to hotel lobbies.
          </p>
        </div>
      </section>

      <section className="py-14 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 flex-wrap mb-10">
            <FilterBtn active={active === "all"} onClick={() => setActive("all")}>All Projects</FilterBtn>
            {projectCategories.map((c) => (
              <FilterBtn key={c.slug} active={active === c.slug} onClick={() => setActive(c.slug)}>
                {c.name}
              </FilterBtn>
            ))}
          </div>

          {/* Masonry-style responsive grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="break-inside-avoid mb-5"
              >
                <Link to={`/projects/${p.slug}`} className="block group relative overflow-hidden rounded-sm">
                  <img src={p.cover} alt={p.title} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[3/4]"}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[10px] uppercase tracking-widest text-gold mb-1">{p.location}</p>
                    <h3 className="font-heading text-lg text-primary-foreground">{p.title}</h3>
                    <p className="text-xs text-primary-foreground/60 mt-1">{p.marbleType}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FilterBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-xs uppercase tracking-wider border rounded-sm transition-colors ${
        active ? "bg-primary text-primary-foreground border-primary" : "border-primary/20 text-primary/70 hover:border-gold hover:text-gold-dark"
      }`}
    >
      {children}
    </button>
  );
}