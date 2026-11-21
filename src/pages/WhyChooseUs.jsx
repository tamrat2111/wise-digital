import { FiAward, FiTrendingUp, FiZap, FiShield } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

function WhyChooseUs() {
  const { t } = useLanguage();

  const iconMap = {
    1: <FiAward className="w-8 h-8" />,
    2: <FiTrendingUp className="w-8 h-8" />,
    3: <FiZap className="w-8 h-8" />,
    4: <FiShield className="w-8 h-8" />,
  };

  return (
    <section id="why" className="py-24 md:py-32 bg-white dark:bg-[#070b19] transition-colors duration-300 overflow-hidden">
      <div className="container-custom">
        {/* Title */}
        <div className="mb-16 text-center lg:text-left">
          <p className="text-blue-600 dark:text-blue-400 text-sm md:text-lg font-oswald font-bold tracking-[0.4em] mb-6 uppercase opacity-90 border-l-4 border-blue-600 pl-6">
            {t.why.tag}
          </p>
          
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-oswald font-extrabold uppercase leading-none tracking-tight mb-4">
            {t.why.heading1} <span className="text-blue-600 dark:text-blue-500">{t.why.headingHighlight}</span> DIGITAL
          </h2>

          <div className="flex items-center gap-4 sm:gap-8 md:gap-12">
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
            <h3 className="text-slate-900 dark:text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl font-oswald font-extrabold uppercase leading-none tracking-normal sm:tracking-[0.2em] text-center">
              {t.why.heading2}
            </h3>
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
          </div>
        </div>

        {/* Clean 4-Column Row Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.why.reasons.map((reason) => (
            <div
              key={reason.id}
              className="group relative bg-slate-50 dark:bg-[#0d1633] rounded-2xl p-8 border-2 border-slate-200 dark:border-blue-900/40 shadow-sm hover:shadow-xl hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-16 h-16 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:bg-blue-700 transition-all">
                  {iconMap[reason.id]}
                </div>

                <h4 className="text-2xl font-oswald font-extrabold uppercase tracking-tight text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {reason.title}
                </h4>

                <p className="text-slate-600 dark:text-slate-300 text-base font-sans leading-relaxed">
                  {reason.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center gap-2 text-xs font-oswald font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                <span>{t.why.standard}</span>
                <span>•</span>
                <span>0{reason.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
