import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", country: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="section-dark pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">Get in Touch</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              Contact <span className="gold-text">Us</span>
            </h1>
            <p className="text-primary-foreground/60 max-w-xl text-lg">
              Ready to start your project? We're here to help with quotes, samples, and expert advice.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-card rounded-xl p-12 border border-border text-center">
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-5">
                    <Send size={28} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border space-y-6">
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">Send Us a Message</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                      <input
                        type="text"
                        required
                        maxLength={100}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                      <input
                        type="email"
                        required
                        maxLength={255}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Country *</label>
                    <select
                      required
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    >
                      <option value="">Select your country</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="UAE">UAE</option>
                      <option value="China">China</option>
                      <option value="Italy">Italy</option>
                      <option value="Germany">Germany</option>
                      <option value="Spain">Spain</option>
                      <option value="France">France</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                    <textarea
                      required
                      maxLength={1000}
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full gold-gradient px-8 py-4 rounded-sm text-sm font-bold tracking-wider uppercase text-primary hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href="tel:+923001234567" className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors">
                    <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <p className="text-sm">+92 342 533 7963</p>
                    </div>
                  </a>
                  <a href="mailto:info@stonecraft.com" className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors">
                    <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm">info@stonecraft.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Address</p>
                      <p className="text-sm">Industrial Area, Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="https://wa.me/923425337963?text=Hi%2C%20I%27m%20interested%20in%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
                <a
                  href="tel:+923001234567"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg border border-border text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                >
                  <Phone size={18} /> Call Now
                </a>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-3">Business Hours</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between"><span>Mon – Fri</span><span className="text-foreground font-medium">9:00 AM – 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="text-foreground font-medium">10:00 AM – 4:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-foreground font-medium">Closed</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
