import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderPage = () => {
    switch (activeTab) {
      case 'Events':
        return <EventsPage />;
      case 'About':
        return <AboutPage />;
      default:
        return <HomePage onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas select-none">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 w-full">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
