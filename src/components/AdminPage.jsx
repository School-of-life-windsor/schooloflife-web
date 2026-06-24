import { useState } from 'react';
import { Save, Download, LogOut, Plus, Trash, Edit, Settings, Calendar, Home, FileText, Check, X } from 'lucide-react';
import { saveSiteConfig } from '../data/siteConfig';

export default function AdminPage({ siteConfig, setSiteConfig, onBackToHome }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Editing tabs: 'homeCopy' or 'events'
  const [activeAdminTab, setActiveAdminTab] = useState('homeCopy');

  // Form states for homepage copy
  const [heroTagline, setHeroTagline] = useState(siteConfig.hero.tagline);
  const [heroTitle, setHeroTitle] = useState(siteConfig.hero.title);
  const [heroDescription, setHeroDescription] = useState(siteConfig.hero.description);

  const [visionTagline, setVisionTagline] = useState(siteConfig.vision.tagline);
  const [visionTitle, setVisionTitle] = useState(siteConfig.vision.title);
  const [visionP1, setVisionP1] = useState(siteConfig.vision.paragraph1);
  const [visionP2, setVisionP2] = useState(siteConfig.vision.paragraph2);
  const [visionP3, setVisionP3] = useState(siteConfig.vision.paragraph3);

  const [timelineTitle, setTimelineTitle] = useState(siteConfig.timeline.title);
  const [timelineItems, setTimelineItems] = useState(siteConfig.timeline.items);

  const [ctaTitle, setCtaTitle] = useState(siteConfig.cta.title);
  const [ctaDescription, setCtaDescription] = useState(siteConfig.cta.description);

  // Events list state inside admin
  const [events, setEvents] = useState(siteConfig.events);

  // Add/Edit Event state
  const [editingEventId, setEditingEventId] = useState(null); // null means adding, number means editing
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventSkills, setEventSkills] = useState('');
  const [eventWhatToBring, setEventWhatToBring] = useState('');
  const [eventFlyerUrl, setEventFlyerUrl] = useState('');
  const [eventType, setEventType] = useState('outdoor');

  const [showEventForm, setShowEventForm] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'windsor-scouts') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password.');
    }
  };

  const handleSaveTimelineItem = (index, field, value) => {
    const updated = [...timelineItems];
    updated[index] = { ...updated[index], [field]: value };
    setTimelineItems(updated);
  };

  const handleAddEventClick = () => {
    setEditingEventId(null);
    setEventTitle('');
    setEventDate('');
    setEventTime('');
    setEventLocation('');
    setEventSkills('');
    setEventWhatToBring('');
    setEventFlyerUrl('');
    setEventType('outdoor');
    setShowEventForm(true);
  };

  const handleEditEventClick = (event) => {
    setEditingEventId(event.id);
    setEventTitle(event.title);
    setEventDate(event.date);
    setEventTime(event.time);
    setEventLocation(event.location);
    setEventSkills(event.skills.join(', '));
    setEventWhatToBring(event.whatToBring.join(', '));
    setEventFlyerUrl(event.flyerUrl || '');
    setEventType(event.type);
    setShowEventForm(true);
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      const updated = events.filter((e) => e.id !== id);
      setEvents(updated);
    }
  };

  const handleSaveEvent = (e) => {
    e.preventDefault();

    const skillsArray = eventSkills.split(',').map(s => s.trim()).filter(Boolean);
    const whatToBringArray = eventWhatToBring.split(',').map(w => w.trim()).filter(Boolean);

    if (editingEventId !== null) {
      // Editing
      const updated = events.map((ev) => {
        if (ev.id === editingEventId) {
          return {
            ...ev,
            title: eventTitle,
            date: eventDate,
            time: eventTime,
            location: eventLocation,
            skills: skillsArray,
            whatToBring: whatToBringArray,
            flyerUrl: eventFlyerUrl,
            type: eventType,
          };
        }
        return ev;
      });
      setEvents(updated);
    } else {
      // Adding new event
      const newEvent = {
        id: Date.now(),
        title: eventTitle,
        date: eventDate,
        time: eventTime,
        location: eventLocation,
        skills: skillsArray,
        whatToBring: whatToBringArray,
        flyerUrl: eventFlyerUrl,
        type: eventType,
      };
      setEvents([newEvent, ...events]);
    }

    setShowEventForm(false);
  };

  const handleSaveChanges = () => {
    const updatedConfig = {
      hero: {
        tagline: heroTagline,
        title: heroTitle,
        description: heroDescription,
      },
      vision: {
        tagline: visionTagline,
        title: visionTitle,
        paragraph1: visionP1,
        paragraph2: visionP2,
        paragraph3: visionP3,
      },
      timeline: {
        title: timelineTitle,
        items: timelineItems,
      },
      cta: {
        title: ctaTitle,
        description: ctaDescription,
      },
      events: events,
    };

    setSiteConfig(updatedConfig);
    saveSiteConfig(updatedConfig);
    setSaveStatus('Changes saved successfully to browser localStorage!');
    setTimeout(() => setSaveStatus(''), 4000);
  };

  const handleExportJSON = () => {
    const currentConfig = {
      hero: {
        tagline: heroTagline,
        title: heroTitle,
        description: heroDescription,
      },
      vision: {
        tagline: visionTagline,
        title: visionTitle,
        paragraph1: visionP1,
        paragraph2: visionP2,
        paragraph3: visionP3,
      },
      timeline: {
        title: timelineTitle,
        items: timelineItems,
      },
      cta: {
        title: ctaTitle,
        description: ctaDescription,
      },
      events: events,
    };

    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(currentConfig, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', 'siteConfig.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-canvas">
        <div className="w-full max-w-md bg-white border-4 border-stone-900 shadow-[8px_8px_0px_0px_#1C1917] rounded-sm p-6 md:p-8 flex flex-col gap-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-forest text-canvas border-2 border-stone-900 rounded-full flex items-center justify-center mx-auto shadow-[3px_3px_0px_0px_#1C1917]">
              <Settings className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-display font-black uppercase tracking-tight text-stone-900">
              Admin Access
            </h2>
            <p className="text-xs text-stone-500 font-bold">
              Provide credentials to edit website content.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-stone-700 tracking-wider">
                Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-stone-50 border-2 border-stone-900 rounded px-3 py-2 text-sm font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-forest/20"
                placeholder="e.g. admin"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-stone-700 tracking-wider">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-stone-50 border-2 border-stone-900 rounded px-3 py-2 text-sm font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-forest/20"
                placeholder="Enter admin password"
              />
            </div>

            {loginError && (
              <p className="text-xs text-campfire font-black uppercase tracking-wide">
                ✕ {loginError}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-campfire text-canvas py-3 font-display font-black text-xs uppercase tracking-wider border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#1C1917] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 rounded-sm cursor-pointer"
            >
              Sign In
            </button>
          </form>

          <button
            onClick={onBackToHome}
            className="text-xs text-stone-500 hover:text-stone-800 underline font-bold text-center cursor-pointer"
          >
            &larr; Back to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-canvas min-h-screen">
      <div className="border-b-4 border-stone-900 bg-forest text-canvas">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="bg-campfire text-canvas border-2 border-stone-900 px-2.5 py-0.5 text-[9px] font-display font-black uppercase tracking-wider shadow-[1.5px_1.5px_0px_0px_#1C1917]">
              🛡️ WordPress-style CMS
            </span>
            <h1 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-white leading-none">
              Site Control Panel
            </h1>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleSaveChanges}
              className="bg-campfire hover:bg-campfire/95 text-canvas text-xs font-display font-black uppercase tracking-wider px-4 py-2.5 border-2 border-stone-900 shadow-[2px_2px_0px_0px_#1C1917] hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:shadow-[1.5px_1.5px_0px_0px_#1C1917] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" /> Save Changes
            </button>
            <button
              onClick={handleExportJSON}
              className="bg-stone-850 hover:bg-stone-800 text-canvas text-xs font-display font-black uppercase tracking-wider px-4 py-2.5 border-2 border-stone-900 shadow-[2px_2px_0px_0px_#1C1917] hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:shadow-[1.5px_1.5px_0px_0px_#1C1917] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Export config.json
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-white hover:bg-stone-100 text-stone-700 text-xs font-display font-bold uppercase tracking-wider px-4 py-2.5 border-2 border-stone-300 shadow-[2px_2px_0px_0px_#ccc] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        {saveStatus && (
          <div className="mb-6 p-4 bg-emerald-100 text-emerald-800 border-2 border-emerald-800 rounded font-bold text-xs md:text-sm flex items-center gap-2">
            <Check className="w-4 h-4" /> {saveStatus}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Admin Navigation Sidebar */}
          <div className="lg:col-span-3 bg-white border-2 border-stone-900 rounded-sm p-4 shadow-[4px_4px_0px_0px_#1C1917] flex flex-col gap-2">
            <span className="text-[10px] font-display font-black uppercase tracking-widest text-stone-400 pb-2 border-b border-stone-100">
              CMS Navigation
            </span>
            <button
              onClick={() => setActiveAdminTab('homeCopy')}
              className={`w-full text-left py-2.5 px-3 font-display font-bold text-xs uppercase tracking-wider border-2 rounded-sm cursor-pointer transition-all flex items-center gap-2 ${
                activeAdminTab === 'homeCopy'
                  ? 'bg-forest text-canvas border-stone-900 shadow-[2px_2px_0px_0px_#1C1917]'
                  : 'bg-transparent text-stone-700 border-transparent hover:bg-stone-100'
              }`}
            >
              <Home className="w-4 h-4" /> Homepage Copy
            </button>
            <button
              onClick={() => setActiveAdminTab('events')}
              className={`w-full text-left py-2.5 px-3 font-display font-bold text-xs uppercase tracking-wider border-2 rounded-sm cursor-pointer transition-all flex items-center gap-2 ${
                activeAdminTab === 'events'
                  ? 'bg-forest text-canvas border-stone-900 shadow-[2px_2px_0px_0px_#1C1917]'
                  : 'bg-transparent text-stone-700 border-transparent hover:bg-stone-100'
              }`}
            >
              <Calendar className="w-4 h-4" /> Events Calendar
            </button>
            <div className="border-t border-stone-100 mt-4 pt-4">
              <button
                onClick={onBackToHome}
                className="w-full text-center py-2 px-3 border border-stone-400 hover:border-stone-900 text-[10px] font-black uppercase text-stone-600 hover:text-stone-900 tracking-wider transition-colors cursor-pointer rounded-sm"
              >
                Return to Live Site
              </button>
            </div>
          </div>

          {/* Admin Editor Canvas */}
          <div className="lg:col-span-9 bg-white border-2 border-stone-900 rounded-sm p-6 md:p-8 shadow-[4px_4px_0px_0px_#1C1917]">
            {activeAdminTab === 'homeCopy' ? (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-display font-black uppercase text-stone-900 border-b-2 border-stone-900 pb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-campfire" /> Homepage Content Editor
                  </h2>
                  <p className="text-xs text-stone-500 font-semibold mt-1">
                    Edit the texts displayed on the home page sections. Keep copy clear and concise.
                  </p>
                </div>

                {/* Hero Section Copy */}
                <div className="space-y-4 p-4 bg-stone-50 border border-stone-200 rounded">
                  <h3 className="text-sm font-display font-black uppercase text-stone-850 tracking-tight border-b pb-1">
                    1. Hero Header Section
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                        Tagline (Top Indicator)
                      </label>
                      <input
                        type="text"
                        value={heroTagline}
                        onChange={(e) => setHeroTagline(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-forest"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                        Main Title
                      </label>
                      <input
                        type="text"
                        value={heroTitle}
                        onChange={(e) => setHeroTitle(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-forest"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                      Hero Description Paragraph
                    </label>
                    <textarea
                      rows="3"
                      value={heroDescription}
                      onChange={(e) => setHeroDescription(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-forest leading-relaxed"
                    />
                  </div>
                </div>

                {/* Vision Section Copy */}
                <div className="space-y-4 p-4 bg-stone-50 border border-stone-200 rounded">
                  <h3 className="text-sm font-display font-black uppercase text-stone-850 tracking-tight border-b pb-1">
                    2. Program Vision &amp; Pillars
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                        Tagline
                      </label>
                      <input
                        type="text"
                        value={visionTagline}
                        onChange={(e) => setVisionTagline(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-forest"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                        Heading
                      </label>
                      <input
                        type="text"
                        value={visionTitle}
                        onChange={(e) => setVisionTitle(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-forest"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                        Paragraph 1 (Foundational Mission)
                      </label>
                      <textarea
                        rows="3"
                        value={visionP1}
                        onChange={(e) => setVisionP1(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-forest leading-relaxed"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                        Paragraph 2 (Activity Focus)
                      </label>
                      <textarea
                        rows="3"
                        value={visionP2}
                        onChange={(e) => setVisionP2(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-forest leading-relaxed"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                        Paragraph 3 (Final Call to Action)
                      </label>
                      <textarea
                        rows="2"
                        value={visionP3}
                        onChange={(e) => setVisionP3(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-forest leading-relaxed"
                      />
                    </div>
                  </div>
                </div>

                {/* Timeline Copy */}
                <div className="space-y-4 p-4 bg-stone-50 border border-stone-200 rounded">
                  <h3 className="text-sm font-display font-black uppercase text-stone-850 tracking-tight border-b pb-1">
                    3. History &amp; Growth Timeline
                  </h3>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                      Timeline Widget Title
                    </label>
                    <input
                      type="text"
                      value={timelineTitle}
                      onChange={(e) => setTimelineTitle(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-forest"
                    />
                  </div>
                  <div className="space-y-4 pt-2">
                    {timelineItems.map((item, idx) => (
                      <div key={idx} className="bg-white p-3 border border-stone-200 rounded space-y-2">
                        <div className="flex gap-4">
                          <div className="w-20 space-y-1">
                            <label className="text-[9px] font-black uppercase text-stone-500">Year</label>
                            <input
                              type="text"
                              value={item.year}
                              onChange={(e) => handleSaveTimelineItem(idx, 'year', e.target.value)}
                              className="w-full bg-stone-50 border border-stone-300 rounded px-2 py-1 text-xs font-bold focus:outline-none"
                            />
                          </div>
                          <div className="flex-1 space-y-1">
                            <label className="text-[9px] font-black uppercase text-stone-500">Title</label>
                            <input
                              type="text"
                              value={item.title}
                              onChange={(e) => handleSaveTimelineItem(idx, 'title', e.target.value)}
                              className="w-full bg-stone-50 border border-stone-300 rounded px-2 py-1 text-xs font-bold focus:outline-none"
                            />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-black uppercase text-stone-500">Timeline Description</label>
                          <textarea
                            rows="2"
                            value={item.description}
                            onChange={(e) => handleSaveTimelineItem(idx, 'description', e.target.value)}
                            className="w-full bg-stone-50 border border-stone-300 rounded px-2 py-1 text-xs font-semibold focus:outline-none"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Copy */}
                <div className="space-y-4 p-4 bg-stone-50 border border-stone-200 rounded">
                  <h3 className="text-sm font-display font-black uppercase text-stone-850 tracking-tight border-b pb-1">
                    4. Bottom CTA Section
                  </h3>
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                        CTA Headline
                      </label>
                      <input
                        type="text"
                        value={ctaTitle}
                        onChange={(e) => setCtaTitle(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-forest"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                        CTA Description
                      </label>
                      <textarea
                        rows="2"
                        value={ctaDescription}
                        onChange={(e) => setCtaDescription(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-forest leading-relaxed"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleSaveChanges}
                    className="bg-campfire hover:bg-campfire/95 text-canvas text-xs font-display font-black uppercase tracking-wider px-6 py-3 border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917] hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:shadow-[2px_2px_0px_0px_#1C1917] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Save className="w-4 h-4" /> Save Homepage Copy
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-stone-900 pb-3">
                  <div>
                    <h2 className="text-xl font-display font-black uppercase text-stone-900 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-campfire" /> Events Directory Manager
                    </h2>
                    <p className="text-xs text-stone-500 font-semibold mt-1">
                      Add, edit, or delete items on the Events page list.
                    </p>
                  </div>
                  {!showEventForm && (
                    <button
                      onClick={handleAddEventClick}
                      className="bg-forest hover:bg-forest/95 text-canvas text-xs font-display font-black uppercase tracking-wider px-4 py-2 border-2 border-stone-900 shadow-[2px_2px_0px_0px_#1C1917] hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:shadow-[1.5px_1.5px_0px_0px_#1C1917] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center gap-1"
                    >
                      <Plus className="w-4 h-4" /> Add Event
                    </button>
                  )}
                </div>

                {showEventForm ? (
                  <form onSubmit={handleSaveEvent} className="bg-stone-50 border-2 border-stone-900 rounded p-5 space-y-4">
                    <div className="flex items-center justify-between border-b pb-2">
                      <h3 className="text-xs font-display font-black uppercase tracking-wider text-stone-850">
                        {editingEventId !== null ? '📝 Edit Event Info' : '🚀 Create New Event'}
                      </h3>
                      <button
                        type="button"
                        onClick={() => setShowEventForm(false)}
                        className="text-stone-400 hover:text-stone-800 p-1 cursor-pointer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                          Event Title
                        </label>
                        <input
                          type="text"
                          required
                          value={eventTitle}
                          onChange={(e) => setEventTitle(e.target.value)}
                          className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none"
                          placeholder="e.g. Traditional Archery Clinic"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                          Category / Event Type
                        </label>
                        <select
                          value={eventType}
                          onChange={(e) => setEventType(e.target.value)}
                          className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none"
                        >
                          <option value="outdoor">🛶 Outdoor Event</option>
                          <option value="life">🌱 Life Event</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                          Date (YYYY-MM-DD)
                        </label>
                        <input
                          type="date"
                          required
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                          className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                          Time Range
                        </label>
                        <input
                          type="text"
                          required
                          value={eventTime}
                          onChange={(e) => setEventTime(e.target.value)}
                          className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none"
                          placeholder="e.g. 10:00 AM - 04:00 PM"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                          Location Address
                        </label>
                        <input
                          type="text"
                          required
                          value={eventLocation}
                          onChange={(e) => setEventLocation(e.target.value)}
                          className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none"
                          placeholder="e.g. Oldcastle campgrounds"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                        Focus / Skills (separated by commas)
                      </label>
                      <input
                        type="text"
                        required
                        value={eventSkills}
                        onChange={(e) => setEventSkills(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none"
                        placeholder="e.g. Nocking Arrows, Target Focus, Fire Building"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                        What to Bring / Notes (separated by commas)
                      </label>
                      <input
                        type="text"
                        required
                        value={eventWhatToBring}
                        onChange={(e) => setEventWhatToBring(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none"
                        placeholder="e.g. Foldable camp chair, Hiking boots, Lunch (provided)"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-stone-600">
                        Flyer Image URL
                      </label>
                      <input
                        type="text"
                        value={eventFlyerUrl}
                        onChange={(e) => setEventFlyerUrl(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs font-semibold focus:outline-none"
                        placeholder="e.g. /flyers/custom_flyer.jpg"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-2 border-t">
                      <button
                        type="button"
                        onClick={() => setShowEventForm(false)}
                        className="px-4 py-2 text-xs font-display font-bold uppercase tracking-wider text-stone-700 bg-white border border-stone-300 rounded hover:bg-stone-50 cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 text-xs font-display font-black uppercase tracking-wider text-canvas bg-forest border border-stone-900 rounded shadow-[1.5px_1.5px_0px_0px_#1C1917] hover:translate-x-[0.5px] hover:translate-y-[0.5px] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-none transition-all cursor-pointer"
                      >
                        {editingEventId !== null ? 'Update Event' : 'Create Event'}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-4">
                    {events.length === 0 ? (
                      <div className="text-center py-12 text-stone-400 font-semibold text-xs border-2 border-dashed rounded">
                        No events found. Click "Add Event" to create one.
                      </div>
                    ) : (
                      <div className="divide-y border border-stone-200 rounded overflow-hidden">
                        {events.map((ev) => (
                          <div key={ev.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-canvas hover:bg-stone-50 transition-colors">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className={`text-[8px] font-display font-black uppercase px-2 py-0.5 rounded border border-stone-800 text-canvas ${
                                  ev.type === 'outdoor' ? 'bg-forest' : 'bg-campfire'
                                }`}>
                                  {ev.type === 'outdoor' ? '🛶 Outdoor' : '🌱 Life'}
                                </span>
                                <span className="text-xs text-stone-500 font-bold">{ev.date}</span>
                              </div>
                              <h3 className="text-sm font-display font-black text-stone-900 leading-tight">
                                {ev.title}
                              </h3>
                              <p className="text-[10px] font-bold text-stone-500 leading-none">
                                📍 {ev.location} | ⏰ {ev.time}
                              </p>
                            </div>

                            <div className="flex gap-2 shrink-0">
                              <button
                                onClick={() => handleEditEventClick(ev)}
                                className="p-2 text-stone-700 bg-white border border-stone-350 rounded hover:bg-stone-50 hover:text-stone-900 cursor-pointer shadow-[1px_1px_0px_0px_rgba(0,0,0,0.05)]"
                                title="Edit Event"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteEvent(ev.id)}
                                className="p-2 text-campfire bg-white border border-campfire/30 rounded hover:bg-campfire/10 cursor-pointer shadow-[1px_1px_0px_0px_rgba(0,0,0,0.05)]"
                                title="Delete Event"
                              >
                                <Trash className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
