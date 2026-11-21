import { 
  FiVideo, 
  FiFilm, 
  FiLayers, 
  FiGlobe, 
  FiCalendar, 
  FiArrowRight 
} from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

function Services() {
  const { t } = useLanguage();

  const iconMap = {
    1: <FiVideo className="w-10 h-10" />,
    2: <FiFilm className="w-10 h-10" />,
    3: <FiLayers className="w-10 h-10" />,
    4: <FiGlobe className="w-10 h-10" />,
    5: <FiCalendar className="w-10 h-10" />,
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50 dark:bg-[#070b19] transition-colors duration-300">
      <div className="container-custom">
        {/* Title */}
        <div className="mb-20 text-center lg:text-left">
          <p className="text-blue-600 dark:text-blue-400 text-sm md:text-lg font-oswald font-bold tracking-[0.4em] mb-6 uppercase opacity-90 border-l-4 border-blue-600 pl-6">
            {t.services.tag}
          </p>
          
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-oswald font-extrabold uppercase leading-none tracking-tight mb-4">
            {t.services.heading1} <span className="text-blue-600 dark:text-blue-500">{t.services.headingHighlight}</span>
          </h2>

          <div className="flex items-center gap-4 sm:gap-8 md:gap-12">
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
            <h3 className="text-slate-900 dark:text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl font-oswald font-extrabold uppercase leading-none tracking-normal sm:tracking-[0.2em] text-center">
              {t.services.heading2}
            </h3>
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {t.services.items.map((service) => (
            <article
              key={service.id}
              className="group relative rounded-2xl border-2 border-slate-200 dark:border-blue-900/40 bg-white dark:bg-[#0d1633] p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-18 h-18 p-4 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300">
                    {iconMap[service.id]}
                  </div>
                  <span className="text-xs font-oswald font-bold uppercase tracking-widest px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-oswald font-extrabold text-slate-900 dark:text-white mb-4 uppercase tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-sans leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <a
                href="#contact"
                className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-oswald uppercase tracking-wider text-sm font-bold group-hover:gap-3 transition-all"
              >
                <span>{t.services.startService}</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
