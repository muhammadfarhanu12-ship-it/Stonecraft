import { Helmet } from "react-helmet-async";

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article" | "product";
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  keywords?: string;
}

const SITE_URL = "https://stonecraft-opal.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/og-default.jpg`;

export function SEO({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex,
  jsonLd,
  keywords,
}: SEOProps) {
  const url = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${SITE_URL}${canonical}`
    : undefined;
  const fullTitle = title.length > 60 ? title : `${title} | StoneCraft`;
  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {url && <link rel="canonical" href={url} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="StoneCraft" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
}

export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "StoneCraft",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Premium Pakistani marble & granite exporter serving Europe, UAE, China and global markets.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industrial Area",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-300-123-4567",
    contactType: "sales",
    areaServed: ["PK", "EU", "AE", "CN", "US"],
    availableLanguage: ["English", "Urdu"],
  },
  sameAs: [],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "StoneCraft",
  image: `${SITE_URL}/og-default.jpg`,
  url: SITE_URL,
  telephone: "+92-300-123-4567",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industrial Area",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
};

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE_URL}${it.path}`,
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export { SITE_URL };