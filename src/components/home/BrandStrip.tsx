import { motion } from "framer-motion";
import { Shield, Globe, Sparkles, Package } from "lucide-react";

const items = [
  { icon: Shield, label: "Export Quality" },
  { icon: Globe, label: "Global Shipping" },
  { icon: Sparkles, label: "Premium Finishes" },
  { icon: Package, label: "Bulk Supply Available" },
];

const BrandStrip = () => (
  <section className="brand-strip py-6">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <item.icon size={18} className="text-gold" />
            <span className="text-sm font-medium tracking-[0.15em] uppercase text-primary-foreground/80">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandStrip;
