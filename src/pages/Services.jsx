import { 
  FiVideo, 
  FiFilm, 
  FiLayers, 
  FiGlobe, 
  FiCalendar, 
  FiArrowRight 
} from 'react-icons/fi';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Content Creation',
      amharicTitle: 'ኮንተንት ክሪኤሽን',
      description:
        'Engaging, viral-ready digital content crafted for social platforms, influencer campaigns, and modern brand storytelling that drives real reach.',
      icon: <FiVideo className="w-10 h-10" />,
      badge: 'Social & Brand',
    },
    {
      id: 2,
      title: 'Video Editing',
      amharicTitle: 'ቪዲዮ ኤዲቲንግ',
      description:
        'Cinematic video editing, color grading, commercial ads, TikTok/Reels optimization, and dynamic visual storytelling with high production value.',
      icon: <FiFilm className="w-10 h-10" />,
      badge: 'Cinematography',
    },
    {
      id: 3,
      title: 'Graphics Design',
      amharicTitle: 'ግራፊክስ ዲዛይን',
      description:
        'Striking brand identities, logos, promotional flyers, corporate branding packages, and modern digital assets that make your brand unforgettable.',
      icon: <FiLayers className="w-10 h-10" />,
      badge: 'Visual Identity',
    },
    {
      id: 4,
      title: 'Website Development',
      amharicTitle: 'ዌብሳይት መስራት',
      description:
        'Custom, responsive, lightning-fast websites and web applications built with modern frameworks to showcase your services and scale your business.',
      icon: <FiGlobe className="w-10 h-10" />,
      badge: 'Web & Systems',
    },
    {
      id: 5,
      title: 'Event Organizing',
      amharicTitle: 'ኢቨንት ማዘጋጀት',
      description:
        'Comprehensive event planning, stage production, audiovisual coordination, media coverage, and live broadcast services for unforgettable events.',
      icon: <FiCalendar className="w-10 h-10" />,
      badge: 'Event Production',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50 dark:bg-[#070b19] transition-colors duration-300">
      <div className="container-custom">
        {/* Architectural Two-Line Title for Services */}
        <div className="mb-20 text-center lg:text-left">
           <p className="text-blue-600 dark:text-blue-400 text-sm md:text-lg font-oswald font-bold tracking-[0.4em] mb-6 uppercase opacity-90 border-l-4 border-blue-600 pl-6">
            WHAT WE DO • የምንሰራቸው ስራዎች
          </p>
          
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-oswald font-extrabold uppercase leading-none tracking-tight mb-4">
            OUR CORE <span className="text-blue-600 dark:text-blue-500">SERVICES</span>
          </h2>

          <div className="flex items-center gap-4 sm:gap-8 md:gap-12">
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
            <h3 className="text-slate-900 dark:text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl font-oswald font-extrabold uppercase leading-none tracking-normal sm:tracking-[0.2em] text-center">
              CREATIVE & DIGITAL POWER
            </h3>
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative rounded-2xl border-2 border-slate-200 dark:border-blue-900/40 bg-white dark:bg-[#0d1633] p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-18 h-18 p-4 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300">
                    {service.icon}
                  </div>
                  <span className="text-xs font-oswald font-bold uppercase tracking-widest px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-oswald font-extrabold text-slate-900 dark:text-white mb-1 uppercase tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs font-oswald text-blue-600 dark:text-blue-400 font-semibold mb-5 tracking-wider">
                  {service.amharicTitle}
                </p>

                <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-oswald uppercase tracking-wider text-sm font-bold group-hover:gap-3 transition-all">
                <span>Start this service</span>
                <FiArrowRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
