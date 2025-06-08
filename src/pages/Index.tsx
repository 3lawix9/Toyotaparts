
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Branches from '../components/Branches';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Add JSON-LD structured data for local business
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AutoPartsStore",
      "name": "النجيدي لبيع قطع غيار تويوتا الأصلية",
      "image": "/logo.png",
      "@id": "https://www.alnujaidi.com",
      "url": "https://www.alnujaidi.com",
      "telephone": "+966 123 50 966",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "طريق الأمير سعد بن عبدالرحمن",
        "addressLocality": "الرياض",
        "addressRegion": "الرياض",
        "postalCode": "12345",
        "addressCountry": "SA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.7136,
        "longitude": 46.6753
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "21:00"
      },
      "sameAs": [
        "https://www.facebook.com/alnujaidi",
        "https://www.instagram.com/alnujaidi",
        "https://twitter.com/alnujaidi"
      ] 
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-cairo" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <Branches />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
