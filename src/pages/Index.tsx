import HeroSection from "@/components/home/HeroSection";
import BrandStrip from "@/components/home/BrandStrip";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GlobalExport from "@/components/home/GlobalExport";
import ProductShowcase from "@/components/home/ProductShowcase";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <BrandStrip />
      <FeaturedCollections />
      <AboutPreview />
      <WhyChooseUs />
      <GlobalExport />
      <ProductShowcase />
      <Testimonials />
      <CtaSection />
    </div>
  );
};

export default Index;
