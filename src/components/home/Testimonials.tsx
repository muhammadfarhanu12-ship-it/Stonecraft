import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  { name: "Ahmed Al-Rashid", role: "Interior Designer, Dubai", text: "StoneCraft's marble quality is unmatched. The veining and finish are consistently premium across every shipment we've received.", rating: 5 },
  { name: "Marco Bianchi", role: "Architect, Milan", text: "We've sourced from many suppliers globally, but StoneCraft delivers the best value for luxury-grade natural stone. Exceptional quality.", rating: 5 },
  { name: "Chen Wei", role: "Property Developer, Shanghai", text: "Reliable, professional, and the marble speaks for itself. A truly trusted partner for our high-end residential developments.", rating: 5 },
];

const Testimonials = () => (
  <section className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <SectionHeading
        label="Testimonials"
        title="What Our Clients Say"
        description="Trusted by architects, importers, and developers worldwide"
      />
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
            <div>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
