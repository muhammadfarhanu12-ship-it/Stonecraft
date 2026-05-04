import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({
  items,
  light = true,
}: {
  items: { name: string; path?: string }[];
  light?: boolean;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-1.5 text-xs uppercase tracking-wider ${
        light ? "text-primary-foreground/60" : "text-primary/60"
      }`}
    >
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {item.path && !last ? (
              <Link to={item.path} className="hover:text-gold transition-colors">
                {item.name}
              </Link>
            ) : (
              <span className={last ? "text-gold" : ""}>{item.name}</span>
            )}
            {!last && <ChevronRight size={12} className="opacity-50" />}
          </span>
        );
      })}
    </nav>
  );
}