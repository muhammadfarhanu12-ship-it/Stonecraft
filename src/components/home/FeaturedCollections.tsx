import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import marbleCalacatta from "@/assets/marble-calacatta.jpg";
import graniteBlack from "@/assets/granite-black.jpg";
import onyxGold from "@/assets/onyx-gold.jpg";
import travertine from "@/assets/travertine.jpg";
import marbleVerde from "@/assets/marble-verde.jpg";
import marbleEmperador from "@/assets/marble-emperador.jpg";

const collections = [
  { image: marbleCalacatta, title: "White Marble", subtitle: "Calacatta · Carrara · Statuario" },
  { image: graniteBlack, title: "Black Granite", subtitle: "Nero Marquina · Absolute Black" },
  { image: onyxGold, title: "Onyx", subtitle: "Honey · Green · White Onyx" },
  { image: travertine, title: "Travertine", subtitle: "Classic · Silver · Noce" },
  { image: marbleVerde, title: "Green Marble", subtitle: "Verde Guatemala · Rainforest" },
  { image: marbleEmperador, title: "Emperador", subtitle: "Dark · Light · Golden" },
];

const FeaturedCollections = () => (
  <section className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <SectionHeading
        label="Collections"
        title="Featured Stone Collections"
        description="Handpicked selections of the world's most sought-after natural stone"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {collections.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <Link to="/marble" className="collection-card block h-[380px] group">
              <img src={item.image} alt={item.title} loading="lazy" width={800} height={1000} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-primary-foreground/60">{item.subtitle}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedCollections;
