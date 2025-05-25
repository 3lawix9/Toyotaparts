
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import content from '../data/content.js';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left side */}
          <div className="flex-shrink-0">
            <img 
              className="h-10 w-auto" 
              src={content.navbar.logo} 
              alt="النجيدي لبيع قطع غيار تويوتا"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRUIwQTFFIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VG95b3RhPC90ZXh0Pgo8L3N2Zz4K';
              }}
            />
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-baseline space-x-4 space-x-reverse">
              {content.navbar.links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-toyota-gray-dark hover:text-toyota-red px-3 py-2 rounded-md text-sm font-medium font-cairo transition-colors duration-200 hover:bg-toyota-gray"
                  role="menuitem"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-toyota-gray inline-flex items-center justify-center p-2 rounded-md text-toyota-gray-dark hover:text-toyota-red hover:bg-toyota-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-toyota-red"
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
              <a
                key={index}
                href="#"
                className="text-toyota-gray-dark hover:text-toyota-red block px-3 py-2 rounded-md text-base font-medium font-cairo transition-colors duration-200"
                role="menuitem"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
