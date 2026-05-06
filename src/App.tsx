import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import MarblePage from "./pages/MarblePage";
import ConstructionPage from "./pages/ConstructionPage";
import ExportsPage from "./pages/ExportsPage";
import ExportProductsPage from "./pages/ExportProductsPage";
import ExportCountriesPage from "./pages/exports/ExportCountriesPage";
import ShippingProcessPage from "./pages/exports/ShippingProcessPage";
import PackagingStandardsPage from "./pages/exports/PackagingStandardsPage";
import CertificationsPage from "./pages/exports/CertificationsPage";
import ExportInquiryPage from "./pages/exports/ExportInquiryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import MarbleCategoryPage from "./pages/MarbleCategoryPage";
import MarbleProductPage from "./pages/MarbleProductPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import LocationPage from "./pages/LocationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/marble" element={<MarblePage />} />
            <Route path="/marble/category/:slug" element={<MarbleCategoryPage />} />
            <Route path="/marble/:slug" element={<MarbleProductPage />} />
            <Route path="/construction" element={<ConstructionPage />} />
            <Route path="/exports" element={<ExportsPage />} />
            <Route path="/exports/countries" element={<ExportCountriesPage />} />
            <Route path="/exports/shipping-process" element={<ShippingProcessPage />} />
            <Route path="/exports/packaging-standards" element={<PackagingStandardsPage />} />
            <Route path="/exports/certifications" element={<CertificationsPage />} />
            <Route path="/exports/inquiry" element={<ExportInquiryPage />} />
            <Route path="/export-products" element={<ExportProductsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/marble-in-lahore" element={<LocationPage />} />
            <Route path="/marble-in-islamabad" element={<LocationPage />} />
            <Route path="/marble-in-karachi" element={<LocationPage />} />
            <Route path="/marble-supplier-pakistan" element={<LocationPage />} />
            <Route path="/marble-exporter-pakistan" element={<LocationPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
