import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, TreePine, Compass, Mountain } from 'lucide-react';

const carouselSlides = [
  {
    label: 'Kayaking 2025',
    icon: '🛶',
    description: 'Windsor Waterfront Lakes, featuring paddle control, capsize recovery, and water safety training.',
    videoUrl: '/videos/IMG_5655.MOV',
  },
  {
    label: 'Fire Skills and Campfire',
    icon: '🔥',
    description: 'Oldcastle Campgrounds, focusing on fire building, safety training, and wood fire heat control.',
    videoUrl: '/videos/IMG_5733.MOV',
  },
  {
    label: 'Wilderness Survival',
    icon: '🏕️',
    description: 'Pine Woods Reservation, covering shelter construction, fire building, and compass navigation.',
    videoUrl: '/videos/IMG_5660.MOV',
  },
];

export default function HomePage({ onNavigate, siteConfig }) {
  const [current, setCurrent] = useState(0);
  const [selectedReel, setSelectedReel] = useState(null);
  const total = carouselSlides.length;

  // Auto-advance slide/video every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (i) => setCurrent((i + total) % total);

  return (
    <div className="pb-20">
      {/* ─── Consolidated Video Hero and Carousel ─── */}
      <section className="relative bg-forest text-canvas border-b-4 border-stone-900 min-h-[500px] md:min-h-[580px] flex flex-col justify-between overflow-hidden">
        {/* Background Video cycling through slides */}
        {carouselSlides[current].videoUrl && (
          <video
            key={carouselSlides[current].videoUrl}
            src={carouselSlides[current].videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-25 mix-blend-multiply"
          />
        )}
        
        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        {/* Hero Content (Floating over video background) */}
        <div className="relative z-10 max-w-5xl w-full mx-auto px-4 md:px-8 pt-16 md:pt-20 flex-1 flex flex-col justify-center">
          <span className="inline-flex items-center gap-1.5 bg-campfire text-canvas border-2 border-stone-900 px-3 py-1 font-display font-black text-[10px] uppercase tracking-wider shadow-[2px_2px_0px_0px_#1C1917] mb-6 self-start">
            <TreePine className="w-3 h-3" /> {siteConfig.hero.tagline}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[0.95] text-white max-w-3xl">
            {siteConfig.hero.title}
          </h1>
          <p className="text-sm md:text-base text-stone-250 leading-relaxed font-semibold max-w-xl mt-6">
            {siteConfig.hero.description}
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <button
              onClick={() => onNavigate('Apply')}
              className="bg-campfire text-canvas px-5 py-3 font-display font-black text-xs uppercase tracking-wider border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#1C1917] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 rounded-sm cursor-pointer"
            >
              Apply Online Now
            </button>
            <button
              onClick={() => onNavigate('Events')}
              className="bg-forest text-canvas px-5 py-3 font-display font-black text-xs uppercase tracking-wider border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#1C1917] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 rounded-sm cursor-pointer"
            >
              Upcoming Events
            </button>
            <button
              onClick={() => onNavigate('About')}
              className="bg-transparent text-canvas px-5 py-3 font-display font-black text-xs uppercase tracking-wider border-2 border-canvas/40 hover:border-canvas hover:bg-white/10 transition-all duration-100 rounded-sm cursor-pointer"
            >
              Our Story
            </button>
          </div>
        </div>

        {/* Trail Dispatch Indicator Panel at the bottom of Hero */}
        <div className="relative z-10 w-full bg-stone-950/85 border-t-2 border-stone-900 py-3.5 px-4 md:px-8 mt-12 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="bg-campfire text-canvas border border-stone-900 px-2 py-0.5 text-[8px] font-display font-black uppercase tracking-wider">
                  Field Dispatch
                </span>
                <span className="text-[10px] text-stone-400 font-bold">
                  Clip: {current + 1} / {total}
                </span>
              </div>
              <h3 className="text-sm font-display font-black text-white uppercase tracking-wide flex items-center gap-1.5 pt-0.5">
                <span className="text-base">{carouselSlides[current].icon}</span> {carouselSlides[current].label}
              </h3>
              <p className="text-xs text-stone-300 font-semibold max-w-2xl">
                {carouselSlides[current].description}
              </p>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-3 self-end md:self-center shrink-0">
              <button
                onClick={() => goTo(current - 1)}
                className="w-8 h-8 bg-canvas border-2 border-stone-900 shadow-[1.5px_1.5px_0px_0px_#1C1917] flex items-center justify-center rounded-sm cursor-pointer hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:shadow-[1px_1px_0px_0px_#1C1917] active:shadow-none transition-all duration-100"
                aria-label="Previous clip"
              >
                <ChevronLeft className="w-4 h-4 text-stone-900" />
              </button>

              {/* Dots */}
              <div className="flex gap-1.5">
                {carouselSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2.5 h-2.5 border border-stone-900 rounded-sm cursor-pointer transition-all ${
                      i === current ? 'bg-campfire shadow-[1px_1px_0px_0px_#1C1917]' : 'bg-canvas/50 hover:bg-canvas'
                    }`}
                    aria-label={`Go to clip ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => goTo(current + 1)}
                className="w-8 h-8 bg-canvas border-2 border-stone-900 shadow-[1.5px_1.5px_0px_0px_#1C1917] flex items-center justify-center rounded-sm cursor-pointer hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:shadow-[1px_1px_0px_0px_#1C1917] active:shadow-none transition-all duration-100"
                aria-label="Next clip"
              >
                <ChevronRight className="w-4 h-4 text-stone-900" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Field Reels (Vertical Videos) ─── */}
      <section className="bg-canvas border-b-4 border-stone-900 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <span className="text-[10px] font-display font-black uppercase tracking-widest text-campfire">Expedition Reels</span>
            <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-stone-900 mt-1">
              Field Dispatches
            </h2>
            <p className="text-xs text-stone-600 font-semibold mt-1">
              Watch recent vertical dispatches from our outdoor sessions. Click any video card to play with sound.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reelsData.map((reel, index) => (
              <ReelCard key={reel.id} reel={reel} onPlay={() => setSelectedReel(index)} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Our Vision Section ─── */}
      <section className="bg-white border-b-4 border-stone-900">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Vision Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-display font-black uppercase tracking-widest text-forest">
                {siteConfig.vision.tagline}
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-stone-900 leading-none">
                {siteConfig.vision.title}
              </h2>
              <p className="text-sm md:text-base text-stone-600 leading-relaxed font-semibold">
                {siteConfig.vision.paragraph1}
              </p>
              <p className="text-sm md:text-base text-stone-600 leading-relaxed font-semibold">
                {siteConfig.vision.paragraph2}
              </p>
              <p className="text-sm md:text-base text-stone-600 leading-relaxed font-semibold">
                {siteConfig.vision.paragraph3}
              </p>
            </div>

            {/* Right Column: Timeline + Stats */}
            <div className="lg:col-span-5 space-y-6">
              {/* Timeline Card */}
              <div className="bg-canvas p-6 trail-border trail-shadow rounded-sm">
                <h3 className="text-xs font-display font-black uppercase tracking-wider text-campfire mb-4 flex items-center gap-1.5 border-b pb-2">
                  <Compass className="w-4 h-4" /> {siteConfig.timeline.title}
                </h3>
                <div className="space-y-4">
                  {siteConfig.timeline.items.map((item, index) => (
                    <div key={index} className={`flex gap-3 ${index > 0 ? 'border-t-2 border-stone-200 pt-4' : ''}`}>
                      <div className={`w-12 h-12 text-canvas border-2 border-stone-900 flex items-center justify-center font-display font-black text-xs shadow-[2px_2px_0px_0px_#1C1917] shrink-0 ${
                        index % 2 === 0 ? 'bg-forest' : 'bg-campfire'
                      }`}>
                        {item.year}
                      </div>
                      <div>
                        <h4 className="text-sm font-display font-black text-stone-900">{item.title}</h4>
                        <p className="text-xs text-stone-600 font-semibold leading-relaxed mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: '🏹', label: 'Archery and Marksmanship' },
                  { icon: '🏊', label: 'Swimming and Water Safety' },
                  { icon: '🔥', label: 'Outdoor Cooking' },
                  { icon: '🧭', label: 'Wilderness Navigation' },
                ].map((item) => (
                  <div key={item.label} className="bg-stone-100 p-3 trail-border rounded-sm flex items-center gap-2.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#1C1917] transition-all duration-150">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-xs font-display font-black uppercase tracking-wider text-stone-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="bg-stone-900 text-canvas border-4 border-stone-900 p-8 md:p-12 shadow-[8px_8px_0px_0px_#D95D39] relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          <div className="relative z-10 max-w-xl mx-auto space-y-5">
            <Mountain className="w-8 h-8 text-campfire mx-auto" />
            <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-white leading-none">
              {siteConfig.cta.title}
            </h2>
            <p className="text-xs md:text-sm text-stone-300 leading-relaxed font-semibold">
              {siteConfig.cta.description}
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => onNavigate('Apply')}
                className="bg-campfire text-canvas px-6 py-3 font-display font-black text-xs uppercase tracking-wider border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#1C1917] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 rounded-sm cursor-pointer"
              >
                Apply Online Now
              </button>
              <button
                onClick={() => onNavigate('Events')}
                className="bg-transparent text-canvas px-6 py-3 font-display font-black text-xs uppercase tracking-wider border-2 border-canvas/40 hover:border-canvas hover:bg-white/10 transition-all duration-100 rounded-sm cursor-pointer"
              >
                View Events Schedule
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Reel Modal Overlay ─── */}
      {selectedReel !== null && (
        <ReelModal
          reel={reelsData[selectedReel]}
          onClose={() => setSelectedReel(null)}
        />
      )}
    </div>
  );
}

const reelsData = [
  {
    id: 1,
    title: 'Kayak Launch Drill',
    category: 'Water Skills',
    videoUrl: '/videos/IMG_5655.MOV',
    poster: '🛶',
  },
  {
    id: 2,
    title: 'Paddling Technique',
    category: 'Water Skills',
    videoUrl: '/videos/IMG_5656.MOV',
    poster: '🛶',
  },
  {
    id: 3,
    title: 'Wilderness Shelter Camp',
    category: 'Survival Skills',
    videoUrl: '/videos/IMG_5659.MOV',
    poster: '⛺',
  },
  {
    id: 4,
    title: 'Gathering Firewood',
    category: 'Survival Skills',
    videoUrl: '/videos/IMG_5660.MOV',
    poster: '🔥',
  },
  {
    id: 5,
    title: 'Campfire Reflection',
    category: 'Brotherhood',
    videoUrl: '/videos/IMG_5733.MOV',
    poster: '💬',
  },
  {
    id: 6,
    title: 'Water Safety Training',
    category: 'Water Skills',
    videoUrl: '/videos/IMG_0083.mov',
    poster: '🏊',
  },
];

function ReelCard({ reel, onPlay }) {
  const [hovered, setHovered] = useState(false);
  const isWater = reel.category.toLowerCase().includes('water');
  const isSurvival = reel.category.toLowerCase().includes('survival');
  const overlayColor = isWater ? 'bg-forest/65' : isSurvival ? 'bg-campfire/65' : 'bg-stone-800/65';

  return (
    <div
      onClick={onPlay}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative aspect-[9/16] bg-stone-900 border-4 border-stone-900 shadow-[4px_4px_0px_0px_#1C1917] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#1C1917] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 rounded-sm overflow-hidden cursor-pointer group"
    >
      {/* Video plays continuously in background */}
      <video
        src={reel.videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Semi-transparent colored overlay that fades out on hover */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${overlayColor} ${hovered ? 'opacity-25' : 'opacity-100'}`} />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Emoji and category overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-200 pointer-events-none z-10">
        <span className={`text-6xl transition-transform duration-200 ${hovered ? 'scale-110 opacity-90' : 'scale-100 opacity-80'}`}>
          {reel.poster}
        </span>
        <span className="mt-4 font-display font-black text-[9px] uppercase tracking-wider bg-canvas text-stone-900 border border-stone-900 px-2.5 py-0.5 rounded-full shadow-[1px_1px_0px_0px_#1C1917]">
          {reel.category}
        </span>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none z-10" />

      {/* Play Icon Hover Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-stone-950/20 z-20">
        <div className="w-14 h-14 rounded-full bg-campfire border-2 border-stone-900 flex items-center justify-center shadow-[3px_3px_0px_0px_#1C1917] transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
          <svg className="w-6 h-6 text-canvas fill-current ml-0.5" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Card Details Text */}
      <div className="absolute bottom-0 inset-x-0 p-4 space-y-1 text-canvas pointer-events-none z-20">
        <span className="text-[8px] font-display font-black uppercase tracking-widest text-campfire bg-stone-900/60 px-2 py-0.5 rounded border border-stone-850">
          {reel.category}
        </span>
        <h3 className="text-base font-display font-black uppercase tracking-tight leading-tight pt-1">
          {reel.title}
        </h3>
      </div>
    </div>
  );
}

function ReelModal({ reel, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-stone-950/95 flex items-center justify-center p-4">
      {/* Click outside to close */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      <div className="relative w-full max-w-sm aspect-[9/16] bg-stone-900 border-4 border-stone-900 shadow-[8px_8px_0px_0px_#D95D39] rounded-sm overflow-hidden flex flex-col justify-end">
        {/* HTML5 Video Element */}
        <video
          ref={videoRef}
          src={reel.videoUrl}
          autoPlay
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Video Controls overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent flex flex-col gap-3 z-10">
          <div className="flex items-start justify-between text-canvas">
            <div>
              <span className="text-[10px] font-display font-black uppercase tracking-widest text-campfire">
                {reel.category}
              </span>
              <h3 className="text-xl font-display font-black uppercase tracking-tight">
                {reel.title}
              </h3>
            </div>

            {/* Play/Pause Control Button */}
            <div className="flex gap-2">
              <button
                onClick={togglePlay}
                className="w-10 h-10 bg-canvas border-2 border-stone-900 flex items-center justify-center rounded shadow-[2px_2px_0px_0px_#1C1917] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <svg className="w-5 h-5 text-stone-900 fill-current" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-stone-900 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-canvas border-2 border-stone-900 shadow-[3px_3px_0px_0px_#1C1917] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#1C1917] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all rounded-sm flex items-center justify-center cursor-pointer font-display font-black text-stone-900 text-sm"
          title="Close video"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
