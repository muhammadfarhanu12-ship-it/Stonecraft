import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface FAQ {
  q: string;
  a: string;
}

export default function FAQAccordion({ faqs, light = false }: { faqs: FAQ[]; light?: boolean }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((f, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className={light ? "border-b border-gold/15" : "border-b border-primary/10"}
        >
          <AccordionTrigger
            className={`text-left font-heading text-lg ${
              light ? "text-primary-foreground hover:text-gold" : "text-primary hover:text-gold-dark"
            }`}
          >
            {f.q}
          </AccordionTrigger>
          <AccordionContent className={light ? "text-primary-foreground/70 text-base leading-relaxed" : "text-primary/70 text-base leading-relaxed"}>
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}