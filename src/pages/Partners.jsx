import { useLanguage } from '../context/LanguageContext';

function Partners() {
  const { t } = useLanguage();

  const partners = [
    {
      id: 1,
      name: 'Barkot Dental Clinic',
      logo: '/images/partners/barkot.png',
      category: 'Healthcare',
    },
    {
      id: 2,
      name: 'BV Luxury Brand',
      logo: '/images/partners/bv.png',
      category: 'Fashion & Luxury',
    },
    {
      id: 3,
      name: 'ALL IN Skin Care',
      logo: '/images/partners/allin.png',
      category: 'Beauty & Skincare',
    },
    {
      id: 4,
      name: 'DEHAB MOTORS',
      logo: '/images/partners/dehab.png',
      category: 'Automotive',
    },
    {
      id: 5,
      name: 'ሁተን ሻፎን',
      logo: '/images/partners/hutan.png',
      category: 'Cultural Brand',
    },
    {
      id: 6,
      name: 'AM Motors',
      logo: '/images/partners/ammotors.png',
      category: 'Automotive Services',
    },
  ];

  // Repeat for continuous seamless horizontal sliding
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section id="partners" className="py-24 md:py-32 bg-white dark:bg-[#070b19] transition-colors duration-300 border-y border-slate-200/80 dark:border-blue-900/30 overflow-hidden">
      <div className="container-custom">
        {/* Header Styled Cleanly */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-xs font-oswald font-bold tracking-[0.3em] uppercase text-blue-600 dark:text-blue-400 block mb-2">
              {t.partners.tag}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
              {t.partners.heading1} <span className="text-blue-600 dark:text-blue-500">{t.partners.headingHighlight}</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-sans max-w-md">
            {t.partners.sub}
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Sliding Strip with Generous Spacing */}
      <div className="relative w-full overflow-hidden py-6 group">
        <div className="flex w-max items-center gap-20 sm:gap-28 md:gap-36 animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex items-center justify-center shrink-0 min-w-[200px] sm:min-w-[240px] h-28 sm:h-32 px-8 py-4 rounded-2xl bg-slate-50/60 dark:bg-[#0c1224] border border-slate-200/50 dark:border-blue-900/20 hover:border-blue-500/40 hover:bg-white dark:hover:bg-[#0f1730] hover:shadow-lg transition-all duration-300"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 sm:max-h-20 max-w-[180px] sm:max-w-[210px] w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 active:grayscale-0 active:opacity-100 transition-all duration-300 cursor-pointer drop-shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container-custom text-center pt-8">
        <p className="text-xs font-oswald uppercase tracking-widest text-slate-400">
          {t.partners.hint}
        </p>
      </div>
    </section>
  );
}

export default Partners;
