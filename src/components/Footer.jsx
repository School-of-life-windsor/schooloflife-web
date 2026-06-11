
export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-stone-900">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Info Card */}
          <div className="flex flex-col justify-between bg-stone-800 text-canvas p-6 trail-border trail-shadow rounded-sm">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-1">
                Windsor Ontario Canada Headquarters
              </span>
              <h3 className="text-xl font-display font-black text-campfire uppercase tracking-wide mb-3">
                School of Life
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed font-semibold">
                3940 ON-3, Oldcastle, ON N0R 1L0 <br />
                Windsor Area, Ontario, Canada
              </p>
            </div>

            <div className="mt-6 border-t border-stone-700 pt-4 text-stone-400 text-xs">
              <span className="block font-bold">📆 Session: July 10 - August 22</span>
              <span className="block font-bold mt-1 text-campfire">🤝 18+ Brothers Only &bull; Limited Seats</span>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="trail-border rounded-sm overflow-hidden h-[220px] relative trail-shadow">
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

        <div className="flex flex-col sm:flex-row items-center justify-between text-stone-500 text-xs py-6 mt-4 border-t-2 border-stone-200 gap-2">
          <span>&copy; {new Date().getFullYear()} School of Life. Connect with Allah&apos;s Creation.</span>
          <span className="font-bold text-forest">Built for Brotherhood &amp; Sunnah-Centered Skills</span>
        </div>
      </div>
    </footer>
  );
}
