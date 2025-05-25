
import { MapPin } from 'lucide-react';

interface BranchCardProps {
  branch: {
    id: number;
    name: string;
    street: string;
    hours: string;
    image: string;
    mapsLink: string;
  };
  index: number;
}

const BranchCard = ({ branch, index }: BranchCardProps) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
      style={{animationDelay: `${index * 0.2}s`}}
      dir="rtl"
    >
      {/* Branch Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={branch.image}
          alt={`صورة ${branch.name}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-toyota-gray-dark mb-2 font-cairo">
          {branch.name}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 ml-2 text-toyota-red" />
          <span className="font-cairo">{branch.street}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <div className="w-4 h-4 ml-2 flex items-center justify-center">
            <svg className="w-3 h-3 text-toyota-red" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-cairo text-sm">{branch.hours}</span>
        </div>

        {/* CTA Button */}
        <a
          href={branch.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full bg-toyota-red hover:bg-toyota-red-dark text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 font-cairo focus:outline-none focus:ring-2 focus:ring-toyota-red focus:ring-offset-2"
          aria-label={`افتح موقع ${branch.name} في خرائط قوقل`}
        >
          <MapPin className="w-4 h-4 ml-2" />
          افتح في خرائط قوقل
        </a>
      </div>
    </div>
  );
};

export default BranchCard;
