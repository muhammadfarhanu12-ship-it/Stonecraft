import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold gold-text mb-4">STONECRAFT</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Premium marble exporters and trusted construction material suppliers. 
              Serving global markets with excellence since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Marble Collection", path: "/marble" },
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

          {/* Products */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Products</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <span>Carrara Marble</span>
              <span>Onyx Stone</span>
              <span>Hollow Blocks</span>
              <span>Tuff Tiles</span>
              <span>Readymade Roofs</span>
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
                Industrial Area, Lahore, Pakistan
              </div>
            </div>
          </div>
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
