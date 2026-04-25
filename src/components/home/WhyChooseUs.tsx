import { motion } from "framer-motion";
import { Gem, Ruler, PackageCheck, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const points = [
  { icon: Gem, title: "Premium Raw Materials", desc: "Hand-selected A-grade stone from Pakistan's finest quarries" },
  { icon: Ruler, title: "Precision Processing", desc: "CNC cutting and polishing to exact architectural specifications" },
  { icon: PackageCheck, title: "Export Packaging", desc: "Wooden crates with foam-lined protection for safe transit" },
  { icon: Clock, title: "On-Time Delivery", desc: "Reliable global shipping with real-time tracking" },
];

const WhyChooseUs = () => (
  <section className="py-28 section-dark">
    <div className="container mx-auto px-6">
      <SectionHeading
        label="Why StoneCraft"
        title="Built on Trust & Quality"
        description="Every slab passes through rigorous quality control before it reaches your project"
        light={false}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {points.map((point, i) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
              <point.icon size={28} className="text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-2">{point.title}</h3>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">{point.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
