
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Branches from '../components/Branches';
import Footer from '../components/Footer';

const Index = () => {
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
