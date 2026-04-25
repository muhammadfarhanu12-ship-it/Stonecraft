import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923001234567?text=Hi%2C%20I%27m%20interested%20in%20your%20products"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-3.5 shadow-2xl transition-transform hover:scale-105"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} className="text-primary-foreground" />
      <span className="hidden sm:inline text-sm font-semibold text-primary-foreground">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
