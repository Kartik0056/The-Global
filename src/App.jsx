import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { InquiryProvider, useInquiry } from './context/InquiryContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScheduleModal from './components/ScheduleModal';
import AdminLoginDrawer from './components/AdminLoginDrawer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ValuesPage from './pages/ValuesPage';
import MissionPage from './pages/MissionPage';
import ClientsPage from './pages/ClientsPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import SEO from './components/SEO';

// Scroll to top helper on page change & close modal drawers
function ScrollToTop() {
  const { pathname } = useLocation();
  const { closeAdminLogin } = useInquiry();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    closeAdminLogin();
  }, [pathname, closeAdminLogin]);
  return null;
}

function AppContent() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const { isAdminLoginOpen, closeAdminLogin } = useInquiry();

  return (
    <Router>
      <ScrollToTop />
      <SEO />
      <div className="min-h-screen bg-[#120722] text-[#f1f1f6] relative flex flex-col justify-between selection:bg-amber-500/30 selection:text-white">
        <Navbar onOpenSchedule={() => setIsScheduleOpen(true)} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenSchedule={() => setIsScheduleOpen(true)} />} />
            <Route path="/about" element={<AboutPage onOpenSchedule={() => setIsScheduleOpen(true)} />} />
            <Route path="/services" element={<ServicesPage onOpenSchedule={() => setIsScheduleOpen(true)} />} />
            <Route path="/capabilities" element={<ProductsPage onOpenSchedule={() => setIsScheduleOpen(true)} />} />
            <Route path="/values" element={<ValuesPage />} />
            <Route path="/mission" element={<MissionPage onOpenSchedule={() => setIsScheduleOpen(true)} />} />
            <Route path="/clients" element={<ClientsPage onOpenSchedule={() => setIsScheduleOpen(true)} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>

        <Footer />

        <ScheduleModal
          isOpen={isScheduleOpen}
          onClose={() => setIsScheduleOpen(false)}
        />

        <AdminLoginDrawer
          isOpen={isAdminLoginOpen}
          onClose={closeAdminLogin}
        />
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <InquiryProvider>
      <AppContent />
    </InquiryProvider>
  );
}
