import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function QuoteForm({ subject = "Quote Inquiry", compact = false }: { subject?: string; compact?: boolean }) {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Inquiry received",
        description: "Our export team will reply within 24 hours.",
      });
    }, 700);
  };

  return (
    <form onSubmit={onSubmit} className={`grid gap-3 ${compact ? "" : "md:grid-cols-2"}`}>
      <input
        type="hidden"
        name="subject"
        value={subject}
      />
      <input required name="name" placeholder="Full Name" className="w-full bg-transparent border border-gold/30 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold rounded-sm" />
      <input required type="email" name="email" placeholder="Email Address" className="w-full bg-transparent border border-gold/30 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold rounded-sm" />
      <input name="country" placeholder="Country / Port" className="w-full bg-transparent border border-gold/30 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold rounded-sm" />
      <input name="quantity" placeholder="Quantity (m² / containers)" className="w-full bg-transparent border border-gold/30 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold rounded-sm" />
      <textarea required name="message" placeholder="Project details — variety, finish, size, deadline" rows={4} className={`w-full bg-transparent border border-gold/30 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold rounded-sm ${compact ? "" : "md:col-span-2"}`} />
      <button
        type="submit"
        disabled={submitting}
        className={`gold-gradient px-8 py-3 rounded-sm text-sm font-bold tracking-[0.15em] uppercase text-primary hover:opacity-90 disabled:opacity-60 transition-opacity ${compact ? "" : "md:col-span-2"}`}
      >
        {submitting ? "Sending..." : "Request Quote"}
      </button>
    </form>
  );
}