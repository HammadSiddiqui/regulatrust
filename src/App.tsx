import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMockup from './components/TrustMockup';
import ComparisonSection from './components/ComparisonSection';
import TrustStrip from './components/TrustStrip';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Audience from './components/Audience';
import Pricing from './components/Pricing';
import WhyNow from './components/WhyNow';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PrivacyEssentials from './components/PrivacyEssentials';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <TrustMockup />
        <ComparisonSection />
        <TrustStrip />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <Audience />
        <WhyNow />
        <PrivacyEssentials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
