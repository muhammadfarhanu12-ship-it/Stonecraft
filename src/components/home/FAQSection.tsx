import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  { q: "What is the best marble in Pakistan?", a: "Ziarat White is widely considered Pakistan's premier marble — bright crystalline white with grey veining, comparable to Italian Carrara at 40–60% lower cost." },
  { q: "Which marble is best for flooring?", a: "For residential flooring, honed Ziarat White, Botticino and Emperador Dark are top choices. For commercial floors, denser stones like Absolute Black granite and Jet Black marble outperform." },
  { q: "Which marble is best for kitchens?", a: "Granite outperforms marble for kitchen countertops — Absolute Black and Black Galaxy are most specified. If marble is preferred, leather-finish Calacatta or Emperador Dark are most forgiving." },
  { q: "Do you export marble internationally?", a: "Yes — StoneCraft exports to 25+ countries including UAE, KSA, China, the UK, Germany, USA and Kenya. We handle FOB Karachi, CIF and DDP shipments." },
  { q: "What is the marble price range in Pakistan?", a: "Pakistani marble ranges from PKR 150/sqft (Sunny Grey, basic varieties) to PKR 550/sqft (premium Ziarat White, polished). Imported Italian marble starts around PKR 850/sqft." },
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading
          label="FAQ"
          title="Marble & Export Questions, Answered"
          description="Everything architects, importers and homeowners ask before specifying our stone."
        />
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}

export { faqs as homeFaqs };