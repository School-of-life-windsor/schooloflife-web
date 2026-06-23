import { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';

const tabs = [
  { id: 'Home', label: 'Home' },
  { id: 'Events', label: 'Events' },
  { id: 'About', label: 'About' },
];

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (tabId) => {
    setActiveTab(tabId);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-forest trail-border border-t-0 border-x-0">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Brand */}
        <button
          onClick={() => handleNav('Home')}
          className="flex items-center gap-2.5 cursor-pointer bg-transparent border-none p-0"
        >
          <img
            src="/favicon.svg"
            alt="School of Life Logo"
            className="w-8 h-8 rounded-full bg-canvas border-2 border-stone-900 shadow-[1px_1px_0px_0px_#1C1917] object-contain p-0.5"
          />
          <span className="font-display font-black text-sm tracking-wider uppercase text-canvas hidden sm:inline">
            School of Life
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleNav(tab.id)}
                className={`px-4 py-2 font-display font-bold text-xs uppercase tracking-wider border-2 rounded-sm cursor-pointer transition-all duration-100 ${
                  isActive
                    ? 'bg-canvas text-stone-900 border-stone-900 shadow-[2px_2px_0px_0px_rgba(28,25,23,0.3)]'
                    : 'bg-transparent text-canvas/80 border-transparent hover:text-canvas hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Login CTA */}
        <a
          href="https://app.school-of-life.ca"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-1.5 bg-campfire text-canvas px-4 py-2 font-display font-black text-xs uppercase tracking-wider border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#1C1917] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 rounded-sm cursor-pointer no-underline"
        >
          <LogIn className="w-3.5 h-3.5" />
          Login
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 border-2 border-stone-900 bg-canvas text-stone-900 shadow-[2px_2px_0px_0px_#1C1917] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all duration-100 cursor-pointer rounded-sm"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-canvas border-t-4 border-stone-900 p-4 flex flex-col gap-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleNav(tab.id)}
                className={`px-4 py-3 font-display font-black text-sm uppercase tracking-wider border-2 border-stone-900 rounded-sm cursor-pointer transition-all ${
                  isActive
                    ? 'bg-campfire text-canvas shadow-[3px_3px_0px_0px_#1C1917]'
                    : 'bg-white text-stone-800 hover:bg-stone-50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
          <a
            href="https://app.school-of-life.ca"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-3 font-display font-black text-sm uppercase tracking-wider text-center bg-campfire text-canvas border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 rounded-sm cursor-pointer no-underline flex items-center justify-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            Login to Portal
          </a>
        </div>
      )}
    </header>
  );
}
