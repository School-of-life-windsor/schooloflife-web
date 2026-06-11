import { useState } from 'react';
import { Map, Calendar, Clock, MapPin, Award, CheckCircle } from 'lucide-react';

const outdoorEvents = [
  {
    id: 1,
    title: "Monthly Brothers' Halaqa & Bonfire",
    date: "2026-06-26",
    time: "05:00 PM - 11:00 PM",
    location: "Oldcastle Campgrounds (3940 ON-3)",
    skills: ["Islamic Halaqa", "Outdoor Bonfire Safety", "Brotherhood Reflection"],
    whatToBring: ["Foldable camp chair", "Warm jacket", "Notebook & pen"],
    flyerUrl: "/flyers/WhatsApp Image 2026-06-10 at 19.39.31.jpeg",
  },
  {
    id: 2,
    title: "School of Life Outdoor Camp",
    date: "2026-07-10", // July 10 - August 22
    time: "09:00 AM - 04:00 PM",
    location: "Windsor Waterfront & Oldcastle Range",
    skills: ["Swimming & Water Safety", "Kayaking & Paddle Control", "Fishing Techniques", "Traditional Archery", "Outdoor Cooking"],
    whatToBring: ["Towel & modest swimwear", "Sunscreen & bug spray", "Water bottle (1.5L+)", "Hiking boots"],
    flyerUrl: "/flyers/WhatsApp Image 2026-06-05 at 21.15.05 (1).jpeg",
  },
];

const lifeEvents = [
  {
    id: 101,
    title: "What It Takes to Get Married",
    date: "2026-01-17",
    time: "10:30 AM - 05:30 PM",
    location: "WIA Centre (2555 McKay Ave)",
    skills: ["Marriage Readiness Primer", "Spouse Selection Criteria", "Sunnah Engagement Rules"],
    whatToBring: ["Notebook & pen", "Course materials (provided)", "Curiosity & questions"],
    flyerUrl: "/flyers/dc3d7ef3-3401-4834-aad1-68f033758526.JPG",
  },
  {
    id: 102,
    title: "Keeping It Together",
    date: "2026-02-07",
    time: "10:30 AM - 04:30 PM",
    location: "WIA Centre (2555 McKay Ave)",
    skills: ["Islamic Intimacy Guidelines", "Marital Privacy Rights", "Family Harmony Rules"],
    whatToBring: ["Notebook & pen", "Course handbook (provided)", "18+ Age Verification"],
    flyerUrl: "/flyers/Screenshot 2026-06-11 at 7.07.27 PM.png",
  },
  {
    id: 103,
    title: "Marital Arts: Conflict Resolution",
    date: "2026-04-11",
    time: "10:30 AM - 04:30 PM",
    location: "WIA Centre (2555 McKay Ave)",
    skills: ["Sunnah-style Dispute Resolution", "Healthy Marital Communication", "Active Listening Drills"],
    whatToBring: ["Notebook & pen", "Openness to exercises", "Course lunch (included)"],
    flyerUrl: "/flyers/f674e254-efbb-43a9-8202-5ba132adfa98.JPG",
  },
  {
    id: 104,
    title: "Parenting Essentials",
    date: "2026-05-09",
    time: "10:30 AM - 01:30 PM",
    location: "WIA Centre (2555 McKay Ave)",
    skills: ["Pregnancy & Childbirth Support", "Early Years Sunnah Care", "Parental Communication Skills"],
    whatToBring: ["Notebook & pen", "Course syllabus (provided)", "Refreshments included"],
    flyerUrl: "/flyers/951130e6-798f-4aeb-9326-b250b98a9980.JPG",
  },
  {
    id: 105,
    title: "Kids Nature Storytime Special Edition",
    date: "2026-06-14",
    time: "11:30 AM - 01:00 PM",
    location: "WIA Centre (2555 McKay Ave)",
    skills: ["Islamic Character Stories", "Childhood Fatherhood Bond", "Kite Flying Activity"],
    whatToBring: ["Ages 5 to 9 kids", "FEE: $5 per child", "Appetite for pizza"],
    flyerUrl: "/flyers/WhatsApp Image 2026-06-08 at 18.01.07.jpeg",
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
              <Calendar className="w-3 h-3" /> Event Calendar
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight leading-none text-white">
              Expedition Directory
            </h1>
            <p className="text-sm text-stone-300 font-semibold max-w-lg">
              Reviving physical readiness, spiritual clarity, and family values in our community.
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
                Events &amp; Workshops
              </h2>
              <p className="text-stone-600 text-xs font-semibold">
                Click a flyer to view the high-resolution image.
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

        {/* Event Cards — Timeline Layout */}
        <div className="relative border-l-4 border-stone-900 ml-4 md:ml-6 pl-6 md:pl-8 py-2 flex flex-col gap-8">
          {currentEvents.map((event, index) => (
            <div key={event.id} className="relative">
              {/* Timeline Node */}
              <div className="absolute -left-[45px] md:-left-[53px] top-1.5 bg-forest text-canvas trail-border w-8 h-8 rounded-full flex items-center justify-center font-display font-black text-sm z-10">
                {index + 1}
              </div>

              {/* Card - Flex layout to fit Details + Flyer */}
              <div className="bg-canvas p-5 md:p-6 trail-border trail-shadow rounded-sm flex flex-col md:flex-row gap-6 hover:shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] transition-all">
                {/* Details Column */}
                <div className="flex-1 flex flex-col gap-4">
                  {/* Header */}
                  <div className="border-b-2 border-stone-100 pb-3">
                    <h3 className="text-lg md:text-xl font-display font-black text-stone-900 leading-tight">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2.5 text-stone-600 text-xs font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-campfire shrink-0" />
                        {formatDate(event.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-campfire shrink-0" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-campfire shrink-0" />
                        {event.location}
                      </span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-xs font-black uppercase text-stone-500 tracking-wider mb-2 flex items-center gap-1">
                      <Award className="w-4 h-4 text-forest" /> Focus / Skills
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

                {/* Flyer Image Column */}
                {event.flyerUrl && (
                  <div className="shrink-0 flex items-center justify-center md:self-start">
                    <a href={event.flyerUrl} target="_blank" rel="noreferrer" className="block cursor-zoom-in">
                      <img
                        src={event.flyerUrl}
                        alt={`${event.title} Flyer`}
                        className="w-full sm:w-48 h-auto object-cover border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#1C1917] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all rounded-sm"
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
