import { FiCheck } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-slate-50 dark:bg-[#070b19] transition-colors duration-300 overflow-hidden">
      <div className="container-custom">
        {/* Title */}
        <div className="mb-20 text-center lg:text-left">
          <p className="text-blue-600 dark:text-blue-400 text-sm md:text-lg font-oswald font-bold tracking-[0.4em] mb-10 uppercase opacity-90 border-l-4 border-blue-600 pl-6">
            {t.about.tag}
          </p>
          
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-oswald font-extrabold uppercase leading-none tracking-tight mb-4">
            {t.about.heading1} <span className="text-blue-600 dark:text-blue-500">{t.about.headingHighlight}</span>
          </h2>

          <div className="flex items-center gap-4 sm:gap-8 md:gap-12">
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
            <h3 className="text-slate-900 dark:text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-oswald font-extrabold uppercase leading-none tracking-normal sm:tracking-[0.2em] text-center">
              {t.about.heading2}
            </h3>
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="space-y-8 mb-12">
              {t.about.points.map((point, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <span className="shrink-0 w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mt-1 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <FiCheck className="w-6 h-6 stroke-[3]" />
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 text-xl md:text-2xl leading-relaxed font-sans max-w-4xl">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#services" className="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-oswald font-extrabold text-xl uppercase tracking-wider rounded-xl shadow-lg transition-all hover:scale-105">
                {t.about.exploreBtn}
              </a>
              <a href="#contact" className="inline-block px-10 py-5 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-oswald font-extrabold text-xl uppercase tracking-wider rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                {t.about.workWithUsBtn}
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl scale-125 -z-10" />
            <div className="p-8 bg-white dark:bg-[#0d1633] rounded-3xl border-2 border-blue-600/20 shadow-2xl flex flex-col items-center text-center">
              <img
                src="/wise_logo.png"
                alt="Wise Digital Logo"
                className="w-48 h-48 object-contain mb-6 drop-shadow-md"
              />
              <h4 className="text-2xl font-oswald font-extrabold uppercase tracking-tight text-slate-900 dark:text-white">
                {t.about.badgeTitle}
              </h4>
              <p className="text-sm font-sans text-blue-600 dark:text-blue-400 font-semibold mt-1">
                {t.about.badgeSub}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
