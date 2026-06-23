import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import AboutPage from './components/AboutPage';
import ApplyPage from './components/ApplyPage';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [showBanner, setShowBanner] = useState(true);

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
            <span>📢 Summer 2026 Registration is Open! </span>
            <button
              onClick={() => setActiveTab('Apply')}
              className="underline font-black uppercase tracking-wider ml-1 cursor-pointer hover:text-white"
            >
              Fill out the application to apply now &rarr;
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
    </div>
  );
}
