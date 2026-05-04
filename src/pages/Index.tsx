import HeroSection from "@/components/home/HeroSection";
import BrandStrip from "@/components/home/BrandStrip";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GlobalExport from "@/components/home/GlobalExport";
import ProductShowcase from "@/components/home/ProductShowcase";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";
import FAQSection, { homeFaqs } from "@/components/home/FAQSection";
import BlogPreview from "@/components/home/BlogPreview";
import { SEO, orgSchema, localBusinessSchema, faqSchema } from "@/components/SEO";

const Index = () => {
  return (
    <div className="overflow-hidden">
      <SEO
        title="Premium Pakistani Marble & Stone Export Solutions"
        description="Luxury marble, granite & onyx from Pakistan to the world. Trade-direct pricing, export-grade processing, FOB Karachi shipping to 25+ countries."
        canonical="/"
        keywords="marble Pakistan, marble export, granite export, Ziarat white marble, luxury marble supplier, Pakistani marble exporter"
        jsonLd={[orgSchema, localBusinessSchema, faqSchema(homeFaqs)]}
      />
      <HeroSection />
      <BrandStrip />
      <FeaturedCollections />
      <AboutPreview />
      <WhyChooseUs />
      <GlobalExport />
      <ProductShowcase />
      <Testimonials />
      <FAQSection />
      <BlogPreview />
      <CtaSection />
    </div>
  );
};

export default Index;
