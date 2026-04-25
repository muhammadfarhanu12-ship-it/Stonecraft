import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ProductCardProps {
  image: string;
  title: string;
  subtitle?: string;
  badge?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const ProductCard = ({ image, title, subtitle, badge, children, onClick }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group hover-lift rounded-lg overflow-hidden bg-card border border-border cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {badge && (
          <span className="absolute top-3 left-3 trust-badge text-xs">
            {badge}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold text-card-foreground mb-1">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        {children}
      </div>
    </motion.div>
  );
};

export default ProductCard;
