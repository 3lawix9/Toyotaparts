
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import content from '../data/content.js';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getScrollTarget = (index: number) => {
    if (index === 0) return "section-0";
    if (index === 2) return "branches";
    if (index === 3) return "footer";
    return `section-${index}`;
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left side */}
          <div className="flex-shrink-0">
            <Link
              to="section-0"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="cursor-pointer"
            >
              <img 
                className="h-16 w-36" 
                src={content.navbar.logo}
                alt="النجيدي لبيع قطع غيار تويوتا"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-baseline space-x-4 space-x-reverse">
              {content.navbar.links.map((link, index) => (
                <Link
                  key={index}
                  to={getScrollTarget(index)}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="text-toyota-gray-dark hover:text-toyota-red px-3 py-2 rounded-md text-sm font-medium font-cairo transition-colors duration-200 relative group cursor-pointer"
                  role="menuitem"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-toyota-red transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-toyota-gray inline-flex items-center justify-center p-2 rounded-md text-toyota-gray-dark hover:text-toyota-red hover:bg-toyota-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-toyota-red cursor-pointer"
              aria-label="فتح القائمة الرئيسية"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {content.navbar.links.map((link, index) => (
              <Link
                key={index}
                to={getScrollTarget(index)}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-toyota-gray-dark hover:text-toyota-red block px-3 py-2 rounded-md text-base font-medium font-cairo transition-colors duration-200 cursor-pointer"
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
