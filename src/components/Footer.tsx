import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-cream-100">
      {/* Bottom Section */}
      <div className="border-t border-slate-800 px-4 lg:px-16 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start lg:items-center space-y-4 md:space-y-0">
          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-2 text-cream-100">
            <span>© {currentYear} Sonali Nogja.</span>
            <div className="flex items-center space-x-2">
              <span> Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>and lots of coffee.</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="hidden lg:flex text-cream-300 hover:text-emerald-400 transition-colors duration-200 items-center space-x-2"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-6 h-6 border border-cream-600 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 border-t border-r border-cream-600 transform rotate-[-45deg] translate-y-0.5"></div>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
