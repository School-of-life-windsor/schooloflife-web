import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import AboutPage from './components/AboutPage';
import ApplyPage from './components/ApplyPage';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [showBanner, setShowBanner] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal once per session
    const hasSeenModal = sessionStorage.getItem('hasSeenRegistrationModal');
    if (!hasSeenModal) {
      // 1.5 second delay for a smooth user experience
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleApplyNow = () => {
    setActiveTab('Apply');
    setShowModal(false);
    sessionStorage.setItem('hasSeenRegistrationModal', 'true');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    sessionStorage.setItem('hasSeenRegistrationModal', 'true');
  };

  const renderPage = () => {
    switch (activeTab) {
      case 'Events':
        return <EventsPage />;
      case 'About':
        return <AboutPage />;
      case 'Apply':
        return <ApplyPage />;
      default:
        return <HomePage onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas select-none">
      {showBanner && (
        <div className="bg-campfire text-canvas text-center py-2.5 px-4 font-display font-bold text-xs md:text-sm border-b-2 border-stone-900 flex items-center justify-between relative z-[60] shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
          <div className="flex-1 text-center">
            <span>📢 Summer 2026 Registration is Open! <strong className="font-extrabold text-white">Seats are strictly limited!</strong> </span>
            <button
              onClick={() => setActiveTab('Apply')}
              className="underline font-black uppercase tracking-wider ml-1 cursor-pointer hover:text-white"
            >
              Sign up now &rarr;
            </button>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="text-canvas hover:text-white font-bold ml-2 cursor-pointer text-xs"
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>
      )}
      
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 w-full">
        {renderPage()}
      </main>
      
      <Footer />

      {/* ─── Registration Promo Modal ─── */}
      {showModal && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm">
          {/* Backdrop Click to close */}
          <div className="absolute inset-0 cursor-pointer" onClick={handleCloseModal} />

          {/* Modal Card */}
          <div className="relative w-full max-w-md bg-canvas border-4 border-stone-900 shadow-[8px_8px_0px_0px_#1C1917] rounded-sm p-6 md:p-8 flex flex-col gap-5 text-center z-10">
            {/* Header Icon */}
            <div className="w-16 h-16 bg-forest text-canvas border-2 border-stone-900 rounded-full flex items-center justify-center mx-auto shadow-[3px_3px_0px_0px_#1C1917]">
              <span className="text-3xl">🏕️</span>
            </div>

            <div className="space-y-2">
              <span className="inline-block text-[10px] font-display font-black uppercase tracking-widest text-campfire">
                Limited Seats Available
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-stone-900 leading-none">
                Summer 2026 Registration
              </h2>
            </div>

            <p className="text-xs md:text-sm text-stone-600 font-semibold leading-relaxed">
              Revive the Sunnah of physical readiness, outdoor survival, and community brotherhood. Submit your application today to secure your spot—<strong className="font-extrabold text-stone-900">seats are strictly limited!</strong>
            </p>

            <div className="flex flex-col gap-2.5 pt-2">
              <button
                onClick={handleApplyNow}
                className="bg-campfire text-canvas py-3 px-4 font-display font-black text-xs uppercase tracking-wider border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#1C1917] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 rounded-sm cursor-pointer"
              >
                Apply Online Now
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-white text-stone-700 py-3 px-4 font-display font-bold text-xs uppercase tracking-wider border-2 border-stone-300 rounded-sm cursor-pointer hover:bg-stone-50 transition-colors"
              >
                Maybe Later
              </button>
            </div>

            {/* Top Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 cursor-pointer font-bold text-sm"
              aria-label="Close dialog"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
