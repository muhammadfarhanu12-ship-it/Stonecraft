import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import constructionHero from "@/assets/construction-hero.jpg";
import marbleDark from "@/assets/marble-dark.jpg";

const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center section-dark">
        <div className="absolute inset-0 opacity-15">
          <img src={constructionHero} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-6 pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Our Story</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              About <span className="gold-text">StoneCraft</span>
            </h1>
            <p className="text-primary-foreground/60 max-w-xl text-lg">
              A legacy of quality, built stone by stone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Our Journey</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2005, StoneCraft began as a small marble processing unit in the heart of Pakistan's stone belt. What started with a single quarry and a vision for excellence has grown into a globally recognized brand, exporting premium natural marble to over 20 countries.
                </p>
                <p>
                  Over the years, we expanded into construction materials — offering hollow blocks, tuff tiles, readymade roofs, and more — to serve the rapidly growing construction sector across Pakistan.
                </p>
                <p>
                  Today, StoneCraft operates state-of-the-art processing facilities equipped with Italian machinery, employs over 200 skilled workers, and maintains the highest international quality standards in every product we deliver.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <img src={marbleDark} alt="StoneCraft facility" loading="lazy" width={800} height={600} className="rounded-lg shadow-2xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To deliver world-class natural stone and construction materials with uncompromising quality, reliability, and customer satisfaction." },
              { icon: Eye, title: "Our Vision", desc: "To be the most trusted name in global marble export and Pakistan's construction material industry by 2030." },
              { icon: Award, title: "Our Values", desc: "Quality first. Integrity always. Innovation in every process. Partnership with every client." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-8 border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-5">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "18+", label: "Years Experience" },
              { number: "20+", label: "Countries Served" },
              { number: "500+", label: "Projects Delivered" },
              { number: "200+", label: "Team Members" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="font-heading text-4xl md:text-5xl font-bold gold-text mb-2">{stat.number}</p>
                <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Want to Work With Us?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">We'd love to discuss your next project. Reach out for a consultation.</p>
          <Link to="/contact" className="gold-gradient px-8 py-4 rounded-sm text-sm font-bold tracking-wider uppercase text-primary inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
            Get In Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
