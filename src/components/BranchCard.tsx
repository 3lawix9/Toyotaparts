
import { MapPin, Clock, ExternalLink } from 'lucide-react';

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 right-4 bg-toyota-red text-white px-3 py-1 rounded-full text-sm font-semibold">
          فرع {branch.id}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-toyota-gray-dark mb-4 font-cairo">
          {branch.name}
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 ml-2 text-toyota-red" />
            <span className="font-cairo text-lg">{branch.street}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 ml-2 text-toyota-red" />
            <span className="font-cairo text-lg">{branch.hours}</span>
          </div>
        </div>

        <a
          href={branch.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center w-full bg-toyota-gray-dark hover:bg-toyota-red text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
        >
          <span className="ml-2">عرض على الخريطة</span>
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default BranchCard;
