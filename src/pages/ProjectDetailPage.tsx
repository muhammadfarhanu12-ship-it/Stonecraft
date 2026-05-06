import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, MapPin, Layers, Calendar } from "lucide-react";
import { SEO, breadcrumbSchema, SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import NotFound from "./NotFound";
import { getProject, projects } from "@/data/projects";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  const [lightbox, setLightbox] = useState<number | null>(null);
  if (!project) return <NotFound />;

  const ld = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: project.gallery.map((g) => `${SITE_URL}${g}`),
    contentLocation: { "@type": "Place", name: project.location },
    dateCreated: project.year,
  };

  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${project.title} — ${project.location}`}
        description={project.description}
        canonical={`/projects/${project.slug}`}
        image={project.cover}
        jsonLd={[
          ld,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
        ]}
      />

      <section className="relative h-[60vh] section-dark">
        <img src={project.cover} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="hero-overlay absolute inset-0" />
        <div className="container mx-auto px-6 relative h-full flex flex-col justify-end pb-12">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }, { name: project.title }]} />
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-6">{project.title}</h1>
          <div className="flex flex-wrap gap-5 mt-4 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2"><MapPin size={14} /> {project.location}</span>
            <span className="flex items-center gap-2"><Layers size={14} /> {project.marbleType}</span>
            <span className="flex items-center gap-2"><Calendar size={14} /> {project.year}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-lg text-primary/80 leading-relaxed mb-8">{project.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-primary/10 py-6">
            <Stat label="Location" value={project.location} />
            <Stat label="Stone" value={project.marbleType} />
            <Stat label="Area" value={project.area} />
            <Stat label="Year" value={project.year} />
          </div>
        </div>
      </section>

      <section className="pb-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl text-primary mb-8">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((g, i) => (
              <button key={i} onClick={() => setLightbox(i)} className="aspect-square overflow-hidden rounded-sm group">
                <img src={g} alt={`${project.title} ${i + 1}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white p-2" onClick={() => setLightbox(null)} aria-label="Close"><X size={28} /></button>
          <button className="absolute left-4 text-white p-2" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + project.gallery.length) % project.gallery.length); }}><ChevronLeft size={32} /></button>
          <img src={project.gallery[lightbox]} alt="" className="max-h-[90vh] max-w-[90vw] object-contain" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-4 text-white p-2" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % project.gallery.length); }}><ChevronRight size={32} /></button>
        </div>
      )}

      {more.length > 0 && (
        <section className="py-20 section-dark">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl text-primary-foreground mb-8">More <span className="gold-text">projects</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {more.map((p) => (
                <Link key={p.slug} to={`/projects/${p.slug}`} className="group block">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm mb-3">
                    <img src={p.cover} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-gold mb-1">{p.location}</p>
                  <h3 className="font-heading text-lg text-primary-foreground group-hover:text-gold transition-colors">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-primary/45 mb-1">{label}</p>
      <p className="text-sm text-primary font-medium">{value}</p>
    </div>
  );
}