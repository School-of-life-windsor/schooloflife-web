import { BookOpen, Heart, Users, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-forest text-canvas border-b-4 border-stone-900">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-14 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-campfire text-canvas border-2 border-stone-900 px-3 py-1 font-display font-black text-[10px] uppercase tracking-wider shadow-[2px_2px_0px_0px_#1C1917]">
              <BookOpen className="w-3 h-3" /> Leadership
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight leading-none text-white">
              About Us
            </h1>
            <p className="text-sm text-stone-300 font-semibold max-w-lg">
              Meet the founder and learn about the mission driving School of Life.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Spotlight */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex items-center gap-3 border-b-4 border-stone-900 pb-3 mb-10">
          <Shield className="w-7 h-7 text-forest" />
          <div>
            <h2 className="text-xl md:text-2xl font-display font-black tracking-tight text-forest m-0 uppercase">
              Leadership Spotlight
            </h2>
            <p className="text-stone-600 text-xs font-semibold">
              The vision and guidance behind the program.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Portrait Photo */}
          <div className="lg:col-span-4 flex">
            <div className="w-full bg-white p-6 trail-border trail-shadow rounded-sm flex flex-col items-center justify-center text-center">
              <img
                src="/shaykhaamir.webp"
                alt="Shaykh Aamir Zaidi"
                className="w-36 h-44 border-4 border-stone-900 shadow-[4px_4px_0px_0px_#1C1917] object-cover mb-6 bg-stone-100"
              />

              <h3 className="text-xl font-display font-black uppercase tracking-wide text-stone-900">
                Shaykh Aamir Zaidi
              </h3>
              <p className="text-xs font-display font-black uppercase tracking-widest text-campfire mt-1">
                Founder &amp; Lead Director
              </p>

              <div className="border-t-2 border-stone-200 mt-5 pt-5 text-xs text-stone-500 font-bold italic leading-relaxed w-full">
                &ldquo;Nature is the greatest classroom — it teaches patience, humility, and gratitude for what Allah has created.&rdquo;
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="lg:col-span-8 flex">
            <div className="w-full bg-white p-6 md:p-8 trail-border trail-shadow rounded-sm flex flex-col justify-between">
              <div className="space-y-5">
                <span className="text-[10px] font-display font-black uppercase tracking-widest text-forest">Meet the Founder</span>
                <h2 className="text-2xl font-display font-black uppercase tracking-tight text-stone-900">
                  The Vision Behind School of Life
                </h2>

                <p className="text-sm md:text-base text-stone-600 leading-relaxed font-semibold">
                  Shaykh Aamir Azhar Zaidi is a community builder and educator based in Windsor, Ontario. He completed a diploma in Arabic at the Islamic University of Madinah in 2013, and graduated with a Bachelor of Arts in Arabic and Islamic Studies from the Faculty of Arabic Language. In 2019, he completed a post-graduate chaplaincy certification program through the department of academics in the Prophet’s Mosque. Upon returning to Canada, Shaykh Aamir completed his memorization of the Holy Qur’an.
                </p>

                <p className="text-sm md:text-base text-stone-600 leading-relaxed font-semibold">
                  Shaykh Aamir was inspired to start the School of Life after reflecting on the outdoor experiences he had in his childhood that the youth of today are no longer connected with. He recognized a growing disconnect: Muslim men and youth were increasingly removed from the physical, outdoor traditions that the Prophet ﷺ and the Companions embodied. Archery, swimming, and outdoor endurance were not merely hobbies in Islamic history—they were foundational disciplines.
                </p>

                <p className="text-sm md:text-base text-stone-600 leading-relaxed font-semibold">
                  Under his guidance, School of Life integrates outdoor skill-building—kayaking, archery, fishing, wilderness navigation, and outdoor cooking—with spiritual reflection and character development. Every expedition begins with intention-setting and ends with reflection, ensuring that the physical challenge is always grounded in a deeper purpose. Shaykh Aamir personally leads the curriculum design, oversees instructor training, and participates in every major camp and excursion to keep the program rooted in its spiritual mission.
                </p>
              </div>

              {/* Role Tags */}
              <div className="border-t-2 border-stone-200 pt-5 mt-6 flex flex-wrap gap-2">
                {[
                  'Curriculum Director',
                  'Community Mentor',
                  'Lead Instructor',
                  'Community Builder',
                ].map((role) => (
                  <span key={role} className="bg-stone-100 text-stone-800 text-xs font-bold px-3 py-1 trail-border rounded-sm">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white border-y-4 border-stone-900">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="text-center mb-10">
            <span className="text-[10px] font-display font-black uppercase tracking-widest text-campfire">Guiding Principles</span>
            <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-stone-900 mt-1">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <Heart className="w-6 h-6 text-campfire" />,
                title: 'Sunnah-Centered',
                text: 'Every skill and expedition is rooted in the Prophetic tradition of physical readiness and spiritual awareness.',
              },
              {
                icon: <Users className="w-6 h-6 text-forest" />,
                title: 'Brotherhood',
                text: 'Shared challenges in the wild forge lifelong bonds of trust, mutual support, and accountability.',
              },
              {
                icon: <Shield className="w-6 h-6 text-stone-700" />,
                title: 'Discipline',
                text: 'Structured programs build consistency, self-reliance, and the mental toughness to face any terrain.',
              },
              {
                icon: <BookOpen className="w-6 h-6 text-campfire" />,
                title: 'Holistic Growth',
                text: 'Physical skill meets character mentorship. We develop the whole person, not just the outdoorsman.',
              },
            ].map((value) => (
              <div key={value.title} className="bg-canvas p-5 trail-border trail-shadow-sm rounded-sm hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#1C1917] transition-all duration-150">
                <div className="w-12 h-12 bg-stone-100 border-2 border-stone-900 flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_#1C1917]">
                  {value.icon}
                </div>
                <h3 className="text-sm font-display font-black uppercase tracking-wide text-stone-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-xs text-stone-600 font-semibold leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
