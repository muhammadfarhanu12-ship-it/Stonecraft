import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, Clock, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import marbleHero from "@/assets/marble-white.jpg";

const fieldClass = "w-full bg-transparent border border-gold/30 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 rounded-sm transition-all";

export default function ExportInquiryPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Export inquiry received",
        description: "Our export team will reply within 24 hours with container pricing.",
      });
    }, 800);
  };

  return (
    <div>
      <SEO
        title="Request International Marble Export Quote â€” Container Pricing"
        description="Request a container quote for premium Pakistani marble & granite. Connect with our export team for FOB, CIF and DDP pricing worldwide."
        canonical="/exports/inquiry"
        keywords="marble export quote, container pricing marble, Pakistan marble inquiry, granite export inquiry"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Exports", path: "/exports" },
          { name: "Export Inquiry", path: "/exports/inquiry" },
        ])}
      />

      <section className="relative min-h-[55vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={marbleHero} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 hero-overlay-stronger" />
        </div>
        <div className="relative container mx-auto px-6 pt-28 pb-16">
          <Breadcrumbs items={[{ name: "Exports", path: "/exports" }, { name: "Inquiry", path: "/exports/inquiry" }]} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mt-6">
            <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4 block">Get in Touch</span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Request International <span className="gold-text">Marble Export Quote</span>
            </h1>
            <p className="text-primary-foreground/70 text-base sm:text-lg md:text-xl">
              Connect with our export team for container pricing, shipping details, and global marble supply.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 section-dark">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass-dark rounded-sm p-6 sm:p-10"
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-2">Export Inquiry Form</h2>
            <p className="text-sm text-primary-foreground/60 mb-8">Fill in the details â€” our team responds within 24 hours.</p>
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
              <input required name="name" placeholder="Full Name *" maxLength={100} className={fieldClass} />
              <input name="company" placeholder="Company Name" maxLength={100} className={fieldClass} />
              <input required name="country" placeholder="Country *" maxLength={60} className={fieldClass} />
              <input required type="email" name="email" placeholder="Email Address *" maxLength={120} className={fieldClass} />
              <input required type="tel" name="phone" placeholder="Phone Number *" maxLength={30} className={fieldClass} />
              <select required name="product" className={`${fieldClass} appearance-none`}>
                <option value="" className="bg-primary">Product Type *</option>
                <option value="white-marble" className="bg-primary">White Marble</option>
                <option value="black-marble" className="bg-primary">Black Marble</option>
                <option value="granite" className="bg-primary">Granite</option>
                <option value="onyx" className="bg-primary">Onyx</option>
                <option value="travertine" className="bg-primary">Travertine</option>
                <option value="mixed" className="bg-primary">Mixed / Multiple</option>
              </select>
              <input required name="quantity" placeholder="Quantity (mÂ² / tons / containers) *" maxLength={60} className={fieldClass} />
              <select name="container" className={`${fieldClass} appearance-none`}>
                <option value="" className="bg-primary">Container Requirement</option>
                <option value="20ft" className="bg-primary">20ft FCL</option>
                <option value="40ft" className="bg-primary">40ft FCL</option>
                <option value="multiple" className="bg-primary">Multiple Containers</option>
                <option value="lcl" className="bg-primary">LCL / Sample</option>
              </select>
              <input name="port" placeholder="Shipping Port (Destination)" maxLength={80} className={`${fieldClass} sm:col-span-2`} />
              <textarea required name="message" placeholder="Project details â€” finish, sizes, deadline, Incoterm preference *" rows={5} maxLength={1500} className={`${fieldClass} sm:col-span-2 resize-none`} />
              <button
                type="submit"
                disabled={submitting}
                className="gold-gradient px-8 py-3.5 rounded-sm text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-primary hover:opacity-90 disabled:opacity-60 transition-opacity sm:col-span-2 inline-flex items-center justify-center gap-2"
              >
                {submitting ? "Sending..." : <>Send Export Inquiry <Send size={16} /></>}
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <a
              href="https://wa.me/923425337963?text=Hi%2C%20I%27d%20like%20an%20export%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-sm hover:opacity-90 transition"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle size={28} className="text-primary-foreground" />
              <div>
                <div className="font-bold text-primary-foreground text-sm tracking-wider uppercase">WhatsApp Export Team</div>
                <div className="text-xs text-primary-foreground/90">Instant response Â· 24/7</div>
              </div>
            </a>

            {[
              { icon: Phone, label: "Call Export Desk", value: "+92 342 533 7963" },
              { icon: Mail, label: "Email", value: "exports@stonecraft.pk" },
              { icon: Clock, label: "Business Hours", value: "Monâ€“Sat Â· 09:00â€“19:00 PKT" },
              { icon: MapPin, label: "Loading Port", value: "Karachi & Port Qasim, Pakistan" },
            ].map((c) => (
              <div key={c.label} className="glass-dark rounded-sm p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm gold-gradient flex items-center justify-center flex-shrink-0">
                  <c.icon size={18} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-gold tracking-wider uppercase font-semibold mb-0.5">{c.label}</div>
                  <div className="text-sm text-primary-foreground/80 break-words">{c.value}</div>
                </div>
              </div>
            ))}

            <div className="glass-dark rounded-sm p-5">
              <div className="text-xs text-gold tracking-wider uppercase font-semibold mb-2">Average Response</div>
              <div className="text-2xl font-heading font-bold text-primary-foreground">&lt; 24 Hours</div>
              <div className="text-xs text-primary-foreground/60 mt-1">For all international export inquiries.</div>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}
