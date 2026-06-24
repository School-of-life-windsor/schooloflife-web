export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-white border-t-4 border-stone-900">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Info Card */}
          <div className="flex flex-col justify-between bg-stone-850 text-canvas p-5 border-2 border-stone-900 shadow-[4px_4px_0px_0px_#1C1917] rounded-sm">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-1">
                Windsor Ontario Canada
              </span>
              <h3 className="text-xl font-display font-black text-campfire uppercase tracking-wide mb-3">
                School of Life
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed font-semibold">
                3940 ON-3, Oldcastle, ON N0R 1L0 <br />
                Windsor Area, Ontario, Canada
              </p>
            </div>

            <div className="mt-6 border-t border-stone-700 pt-3 text-stone-400 text-xs">
              <span className="block font-bold">📆 Summer Camp: July 10 - August 22</span>
              <span className="block font-bold mt-1 text-campfire">🤝 Age 18+ &bull; Limited Seats</span>
            </div>
          </div>

          {/* Website Navigation Links */}
          <div className="bg-stone-50 p-5 border-2 border-stone-900 shadow-[4px_4px_0px_0px_#1C1917] rounded-sm flex flex-col gap-4">
            <h3 className="text-xs font-display font-black text-forest uppercase tracking-wider border-b border-stone-200 pb-2">
              Website Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Home Page', tab: 'Home' },
                { label: 'Upcoming Events', tab: 'Events' },
                { label: 'About Our Mission', tab: 'About' },
                { label: 'Apply Online', tab: 'Apply' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      setActiveTab(link.tab);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-stone-600 hover:text-campfire cursor-pointer hover:underline bg-transparent border-none p-0 text-left flex items-center gap-1"
                  >
                    &raquo; {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-stone-200">
                <a
                  href="https://app.school-of-life.ca"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-stone-700 hover:text-campfire no-underline hover:underline flex items-center gap-1"
                >
                  &raquo; Scouts Portal Login
                </a>
              </li>
              <li>
                <a
                  href="#admin"
                  onClick={() => {
                    setActiveTab('Admin');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[9px] font-bold text-stone-400 hover:text-stone-600 no-underline hover:underline"
                >
                  &raquo; Administrator Access
                </a>
              </li>
            </ul>
          </div>

          {/* Google Maps Embed */}
          <div className="border-2 border-stone-900 rounded-sm overflow-hidden h-[220px] md:h-auto relative shadow-[4px_4px_0px_0px_#1C1917]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.1046579966205!2d-82.95237762357789!3d42.22448634365562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b29a82ed3ebc5%3A0x19fcc9bdfa98015b!2s3940%20ON-3%2C%20Oldcastle%2C%20ON%20N0R%201L0!5e1!3m2!1sen!2sca!4v1780976123207!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School of Life Camp Location Map"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-stone-500 text-xs py-6 mt-4 border-t-2 border-stone-200 gap-3">
          <div className="flex flex-col sm:items-start gap-1">
            <span>&copy; {new Date().getFullYear()} School of Life. A project of Windsor Islamic Association.</span>
            <span className="text-[9px] text-stone-400">All rights reserved.</span>
          </div>
          <span className="font-bold text-forest">Built for Brotherhood &amp; Sunnah-Centered Skills</span>
        </div>
      </div>
    </footer>
  );
}
