import { useState } from 'react';
import { Map, Calendar, Clock, MapPin, Award, CheckCircle } from 'lucide-react';

const outdoorEvents = [
  {
    id: 1,
    title: "Expedition Launch & Campfire",
    date: "2026-07-10",
    time: "06:00 PM - 09:00 PM",
    location: "Oldcastle Campgrounds (3940 ON-3)",
    skills: ["Camp Safety", "Fire Building", "Leave No Trace"],
    whatToBring: ["Closed-toe boots", "Water bottle (1L+)", "Light jacket", "Bug spray"],
  },
  {
    id: 2,
    title: "Water Skills: Kayaking & Swimming",
    date: "2026-07-25",
    time: "09:00 AM - 03:00 PM",
    location: "Windsor Waterfront Lakes",
    skills: ["Paddle Control", "Capsize Recovery", "Treading Water"],
    whatToBring: ["Modest swimwear", "Quick-dry clothing", "Towel", "Sunscreen", "Snacks"],
  },
  {
    id: 3,
    title: "Traditional Archery & Outdoor Cooking",
    date: "2026-08-08",
    time: "10:00 AM - 04:00 PM",
    location: "Oldcastle Campgrounds Range",
    skills: ["Nocking Arrows", "Target Focus", "Wood Fire Heat Control"],
    whatToBring: ["Closed-toe boots", "Long sleeves", "Arm guard (optional)", "Appetite"],
  },
  {
    id: 4,
    title: "Wilderness Navigation Excursion",
    date: "2026-08-15",
    time: "08:00 AM - 02:00 PM",
    location: "Point Pelee National Park",
    skills: ["Compass Reading", "Topo Map Interpretation", "Route Plotting"],
    whatToBring: ["Hiking boots", "Compass (provided if needed)", "Notebook & pen", "Trail snacks", "Rain layer"],
  },
  {
    id: 5,
    title: "Closing Expedition & Awards",
    date: "2026-08-22",
    time: "04:00 PM - 10:00 PM",
    location: "Oldcastle Campgrounds (3940 ON-3)",
    skills: ["Group Leadership", "Reflection", "Badge Ceremony"],
    whatToBring: ["Camp chair (optional)", "Warm layers for evening", "Your best stories"],
  },
];

const lifeEvents = [
  {
    id: 101,
    title: "Prophetic Marriage Blueprint Workshop",
    date: "2026-07-18",
    time: "10:00 AM - 04:00 PM",
    location: "Windsor Islamic Association (WIA)",
    skills: ["Prophetic Communication", "Conflict Resolution", "Family Sunnah Guidelines"],
    whatToBring: ["Notebook & pen", "Questions for Q&A session", "Pre-reading notes"],
  },
  {
    id: 102,
    title: "Kids Nature Storytime & Fatherhood Prep",
    date: "2026-08-01",
    time: "11:00 AM - 01:00 PM",
    location: "Windsor Public Library - Community Room",
    skills: ["Creative Storytelling", "Basic Outdoor Awareness", "Parental Connection"],
    whatToBring: ["Comfortable cushion", "Healthy snacks for kids", "An open mind"],
  },
  {
    id: 103,
    title: "Youth Identity & Leadership Seminar",
    date: "2026-08-12",
    time: "05:00 PM - 08:30 PM",
    location: "Windsor Community Centre Hall",
    skills: ["Sunnah-style Teamwork", "Public Speaking", "Confidence Building"],
    whatToBring: ["Interactive tablet or notebook", "Water bottle", "High energy"],
  },
];

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

export default function EventsPage() {
  const [activeSubTab, setActiveSubTab] = useState('outdoor');

  const currentEvents = activeSubTab === 'outdoor' ? outdoorEvents : lifeEvents;

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-forest text-canvas border-b-4 border-stone-900">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-14 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-campfire text-canvas border-2 border-stone-900 px-3 py-1 font-display font-black text-[10px] uppercase tracking-wider shadow-[2px_2px_0px_0px_#1C1917]">
              <Calendar className="w-3 h-3" /> Summer 2026 Schedule
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight leading-none text-white">
              Events Directory
            </h1>
            <p className="text-sm text-stone-300 font-semibold max-w-lg">
              Explore our dual streams: outdoor expeditions and community life workshops.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b-4 border-stone-900 pb-5 mb-10">
          <div className="flex items-center gap-3">
            <Map className="w-7 h-7 text-forest" />
            <div>
              <h2 className="text-xl md:text-2xl font-display font-black tracking-tight text-forest m-0 uppercase">
                Event Schedule
              </h2>
              <p className="text-stone-600 text-xs font-semibold">
                Register via your scouts portal account. Open to community members.
              </p>
            </div>
          </div>

          {/* Toggle Switcher */}
          <div className="flex gap-2.5 bg-stone-100 p-1.5 border-2 border-stone-900 rounded-sm shadow-[3px_3px_0px_0px_#1C1917]">
            <button
              onClick={() => setActiveSubTab('outdoor')}
              className={`text-center py-2 px-3 font-display font-black text-[10px] uppercase tracking-wider border-2 rounded-sm cursor-pointer transition-all ${
                activeSubTab === 'outdoor'
                  ? 'bg-forest text-canvas border-stone-900 shadow-[1.5px_1.5px_0px_0px_#1C1917]'
                  : 'bg-transparent text-stone-700 border-transparent hover:bg-stone-200'
              }`}
            >
              🛶 Outdoor Events
            </button>
            <button
              onClick={() => setActiveSubTab('life')}
              className={`text-center py-2 px-3 font-display font-black text-[10px] uppercase tracking-wider border-2 rounded-sm cursor-pointer transition-all ${
                activeSubTab === 'life'
                  ? 'bg-campfire text-canvas border-stone-900 shadow-[1.5px_1.5px_0px_0px_#1C1917]'
                  : 'bg-transparent text-stone-700 border-transparent hover:bg-stone-200'
              }`}
            >
              🌱 Life Events
            </button>
          </div>
        </div>

        {/* Event Cards — Timeline Layout (mirroring ExpeditionMap) */}
        <div className="relative border-l-4 border-stone-900 ml-4 md:ml-6 pl-6 md:pl-8 py-2 flex flex-col gap-8">
          {currentEvents.map((event, index) => (
            <div key={event.id} className="relative">
              {/* Timeline Node */}
              <div className="absolute -left-[45px] md:-left-[53px] top-1.5 bg-forest text-canvas trail-border w-8 h-8 rounded-full flex items-center justify-center font-display font-black text-sm z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-canvas p-5 md:p-6 trail-border trail-shadow rounded-sm flex flex-col gap-5 hover:shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] transition-all">
                {/* Header */}
                <div className="border-b-2 border-stone-100 pb-3">
                  <h3 className="text-lg md:text-xl font-display font-black text-stone-900">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-stone-600 text-xs font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-campfire" />
                      {formatDate(event.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-campfire" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-campfire" />
                      {event.location}
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-xs font-black uppercase text-stone-500 tracking-wider mb-2 flex items-center gap-1">
                    <Award className="w-4 h-4 text-forest" /> Skills / Focus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {event.skills.map((skill, i) => (
                      <span key={i} className="bg-stone-100 text-stone-800 text-xs font-bold px-3 py-1 trail-border rounded-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* What to Bring */}
                <div className="bg-stone-100 p-4 trail-border rounded-sm">
                  <h4 className="text-xs font-black uppercase text-stone-900 tracking-wider mb-2.5 flex items-center gap-1 border-b border-stone-300 pb-1.5">
                    <CheckCircle className="w-4 h-4 text-campfire" /> What to Bring / Notes
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {event.whatToBring.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-stone-700 font-semibold">
                        <span className="w-4 h-4 bg-canvas border-2 border-stone-900 rounded-sm flex items-center justify-center shrink-0">
                          <span className="text-[8px] text-stone-400">—</span>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
