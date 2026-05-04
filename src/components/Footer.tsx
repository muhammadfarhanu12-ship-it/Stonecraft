import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold gold-text mb-4">STONECRAFT</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Premium marble exporters and trusted construction material suppliers. 
              Serving global markets with excellence since 2005.
            </p>
            <a href="https://wa.me/923425337963" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gold mt-4 hover:opacity-80">
              <MessageCircle size={14} /> WhatsApp inquiry
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Marble Collection", path: "/marble" },
                { label: "Projects", path: "/projects" },
                { label: "Blog", path: "/blog" },
                { label: "Construction Materials", path: "/construction" },
                { label: "Export Services", path: "/exports" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Marble categories */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Marble</h4>
            <div className="flex flex-col gap-2 text-sm">
              {[
                { l: "White Marble", p: "/marble/category/white-marble" },
                { l: "Black Marble", p: "/marble/category/black-marble" },
                { l: "Granite", p: "/marble/category/granite" },
                { l: "Onyx", p: "/marble/category/onyx" },
                { l: "Travertine", p: "/marble/category/travertine" },
                { l: "Luxury Stone", p: "/marble/category/luxury-stone" },
              ].map((x) => (
                <Link key={x.p} to={x.p} className="text-primary-foreground/60 hover:text-gold transition-colors">{x.l}</Link>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Locations</h4>
            <div className="flex flex-col gap-2 text-sm">
              {[
                { l: "Marble in Lahore", p: "/marble-in-lahore" },
                { l: "Marble in Islamabad", p: "/marble-in-islamabad" },
                { l: "Marble in Karachi", p: "/marble-in-karachi" },
                { l: "Supplier in Pakistan", p: "/marble-supplier-pakistan" },
                { l: "Exporter in Pakistan", p: "/marble-exporter-pakistan" },
              ].map((x) => (
                <Link key={x.p} to={x.p} className="text-primary-foreground/60 hover:text-gold transition-colors">{x.l}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+923425337963" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                <Phone size={14} />
                +92 342 533 7963
              </a>
              <a href="mailto:info@stonecraft.com" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                <Mail size={14} />
                info@stonecraft.com
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                Industrial Area, Islamabad, Pakistan
              </div>
            </div>
          </div>
        </div>

        {/* SEO footer copy */}
        <div className="mt-14 pt-10 border-t border-primary-foreground/10 text-xs text-primary-foreground/40 leading-relaxed max-w-5xl">
          StoneCraft is a Pakistan-based marble & granite exporter serving Europe, the UAE, China, Africa and the United States with premium Ziarat White, Calacatta, Carrara, Statuario, Nero Marquina, Absolute Black granite, Honey Onyx and Verde Guatemala marble. Trade-direct pricing, export-grade processing, container-direct shipping FOB Karachi.
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/40">
            © 2026 StoneCraft. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/40">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
