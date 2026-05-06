import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  label: string;
  path: string;
  children?: { label: string; path: string; description?: string }[];
};

const navLinks: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "Marble",
    path: "/marble",
    children: [
      {
        label: "White Marble",
        path: "/marble/category/white-marble",
        description: "Carrara, Calacatta, Ziarat",
      },
      {
        label: "Black Marble",
        path: "/marble/category/black-marble",
        description: "Nero Marquina, Jet Black",
      },
      {
        label: "Granite",
        path: "/marble/category/granite",
        description: "Absolute Black, Black Galaxy",
      },
      {
        label: "Onyx",
        path: "/marble/category/onyx",
        description: "Honey, Green, backlit slabs",
      },
      {
        label: "Travertine",
        path: "/marble/category/travertine",
        description: "Classic & silver travertine",
      },
      {
        label: "Luxury Stone",
        path: "/marble/category/luxury-stone",
        description: "Verde Guatemala, Emperador",
      },
    ],
  },
  { label: "Construction", path: "/construction" },
  {
    label: "Exports",
    path: "/exports",
    children: [
      {
        label: "Export Countries",
        path: "/exports/countries",
        description: "25+ destinations served",
      },
      {
        label: "Shipping Process",
        path: "/exports/shipping-process",
        description: "FOB, CIF & DDP terms",
      },
      {
        label: "Packaging Standards",
        path: "/exports/packaging-standards",
        description: "A-frame export packing",
      },
      {
        label: "Certifications",
        path: "/exports/certifications",
        description: "ISO & quality grades",
      },
      {
        label: "Export Inquiry",
        path: "/exports/inquiry",
        description: "Request a container quote",
      },
    ],
  },
  { label: "Export Products", path: "/export-products" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileSub(null);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="StoneCraft"
            className="h-14 md:h-16 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 whitespace-nowrap">
          {navLinks.map((link) => {
            const active =
              location.pathname === link.path ||
              (link.path !== "/" && location.pathname.startsWith(link.path));
            if (link.children) {
              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 whitespace-nowrap text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                      active
                        ? "text-gold"
                        : "text-primary-foreground/80 hover:text-gold"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className="opacity-70" />
                  </Link>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[320px]"
                      >
                        <div className="glass-dark rounded-sm border border-gold/15 p-3 shadow-2xl">
                          {link.children.map((c) => (
                            <Link
                              key={c.path}
                              to={c.path}
                              className="block px-3 py-2.5 rounded-sm hover:bg-gold/10 transition-colors group"
                            >
                              <div className="text-sm font-semibold text-primary-foreground group-hover:text-gold tracking-wide">
                                {c.label}
                              </div>
                              {c.description && (
                                <div className="text-xs text-primary-foreground/50 mt-0.5">
                                  {c.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`whitespace-nowrap text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                  active
                    ? "text-gold"
                    : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="gold-gradient whitespace-nowrap rounded-sm px-5 py-2.5 text-[14px] font-semibold tracking-wider uppercase text-primary transition-opacity hover:opacity-90"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-dark overflow-hidden"
          >
            <div className="mx-auto flex w-full max-w-[1280px] max-h-[80vh] flex-col gap-1 overflow-y-auto px-4 py-6">
              {navLinks.map((link) => (
                <div key={link.path} className="border-b border-gold/10">
                  <div className="flex items-center justify-between py-3">
                    <Link
                      to={link.path}
                      className={`whitespace-nowrap text-sm font-medium tracking-wider uppercase ${
                        location.pathname === link.path
                          ? "text-gold"
                          : "text-primary-foreground/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <button
                        onClick={() =>
                          setMobileSub(
                            mobileSub === link.label ? null : link.label,
                          )
                        }
                        className="text-primary-foreground/60 p-1"
                        aria-label="Toggle submenu"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${mobileSub === link.label ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {link.children && mobileSub === link.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-3 pl-3 flex flex-col gap-2">
                          {link.children.map((c) => (
                            <Link
                              key={c.path}
                              to={c.path}
                              className="whitespace-nowrap text-xs text-primary-foreground/70 hover:text-gold py-1.5 tracking-wide uppercase"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link
                to="/contact"
                className="gold-gradient mt-4 whitespace-nowrap rounded-sm px-5 py-2.5 text-center text-[14px] font-semibold tracking-wider uppercase text-primary"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
