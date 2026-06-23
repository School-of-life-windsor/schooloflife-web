import { useEffect } from 'react';
import { Shield } from 'lucide-react';

export default function ApplyPage() {
  useEffect(() => {
    // Dynamic script loading for Fillout embed script
    const script = document.createElement('script');
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-forest text-canvas border-b-4 border-stone-900">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-14 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-campfire text-canvas border-2 border-stone-900 px-3 py-1 font-display font-black text-[10px] uppercase tracking-wider shadow-[2px_2px_0px_0px_#1C1917]">
              <Shield className="w-3 h-3" /> Registration
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight leading-none text-white">
              Application Form
            </h1>
            <p className="text-sm text-stone-300 font-semibold max-w-lg">
              Fill out the details below to apply for the School of Life Summer 2026 programs.
            </p>
          </div>
        </div>
      </section>

      {/* Form Container */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="bg-white trail-border trail-shadow rounded-sm p-4 md:p-6">
          <div 
            style={{ width: '100%', height: '500px' }} 
            data-fillout-id="hCAgh4pFgFus" 
            data-fillout-embed-type="standard" 
            data-fillout-inherit-parameters 
            data-fillout-dynamic-resize
          />
        </div>
      </section>
    </div>
  );
}
