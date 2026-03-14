import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import WhatIsTrustCenter from './pages/resources/WhatIsTrustCenter';
import TrustCenterForSaaS from './pages/resources/TrustCenterForSaaS';
import ShareSOC2 from './pages/resources/ShareSOC2';
import SecurityQuestionnaires from './pages/resources/SecurityQuestionnaires';
import SubprocessorTransparency from './pages/resources/SubprocessorTransparency';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsOfService from './pages/TermsOfService';
import DPA from './pages/DPA';
import AcceptableUsePolicy from './pages/AcceptableUsePolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources/what-is-a-trust-center" element={<WhatIsTrustCenter />} />
            <Route path="/resources/trust-center-for-saas" element={<TrustCenterForSaaS />} />
            <Route path="/resources/share-soc2-with-customers" element={<ShareSOC2 />} />
            <Route path="/resources/security-questionnaires" element={<SecurityQuestionnaires />} />
            <Route path="/resources/subprocessor-transparency" element={<SubprocessorTransparency />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/dpa" element={<DPA />} />
          <Route path="/acceptable-use" element={<AcceptableUsePolicy />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
