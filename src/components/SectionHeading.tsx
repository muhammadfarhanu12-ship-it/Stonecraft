import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
  children?: ReactNode;
}

const SectionHeading = ({ label, title, description, light = true }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      {label && (
        <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
          {label}
        </span>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-foreground" : "text-primary-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl mx-auto text-base leading-relaxed ${
            light ? "text-muted-foreground" : "text-primary-foreground/60"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
