
import BranchCard from './BranchCard';
import content from '../data/content.js';

const Branches = () => {
  return (
    <section className="py-16 bg-toyota-gray" dir="rtl" id="branches">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-toyota-gray-dark mb-4 font-cairo">
            فروعنا في الرياض
          </h2>
          <div className="w-24 h-1 bg-toyota-red mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 font-cairo max-w-2xl mx-auto">
            زوروا أحد فروعنا الثلاثة في مدينة لشراء قطع غيار تويوتا الأصلية
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.branches.map((branch, index) => (
            <BranchCard 
              key={branch.id} 
              branch={branch} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
