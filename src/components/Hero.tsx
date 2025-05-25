
import content from '../data/content.js';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" dir="rtl">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          // Fallback to a placeholder background if video fails to load
          e.currentTarget.style.display = 'none';
          const parent = e.currentTarget.parentElement;
          if (parent) {
            parent.style.background = 'linear-gradient(135deg, #EB0A1E 0%, #C20E1E 100%)';
          }
        }}
      >
        <source src={content.hero.videoUrl} type="video/mp4" />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-cairo animate-fade-in">
          {content.hero.title}
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white font-cairo font-medium animate-fade-in" style={{animationDelay: '0.3s'}}>
          {content.hero.subtitle}
        </p>
        
        {/* Decorative element */}
        <div className="mt-8 flex justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="w-24 h-1 bg-toyota-red rounded-full"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
