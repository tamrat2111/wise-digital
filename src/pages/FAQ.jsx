import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-slate-50 dark:bg-[#070b19] transition-colors duration-300 overflow-hidden">
      <div className="container-custom">
        {/* Title */}
        <div className="mb-20 text-center lg:text-left">
          <p className="text-blue-600 dark:text-blue-400 text-sm md:text-lg font-oswald font-bold tracking-[0.4em] mb-10 uppercase opacity-90 border-l-4 border-blue-600 pl-6">
            {t.faq.tag}
          </p>
          
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-oswald font-extrabold uppercase leading-none tracking-tight mb-4">
            {t.faq.heading1} <span className="text-blue-600 dark:text-blue-500">{t.faq.headingHighlight}</span>
          </h2>

          <div className="flex items-center gap-4 sm:gap-8 md:gap-12">
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
            <h3 className="text-slate-900 dark:text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-oswald font-extrabold uppercase leading-none tracking-normal sm:tracking-[0.2em] text-center">
              {t.faq.heading2}
            </h3>
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {t.faq.items.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border-2 border-slate-200 dark:border-blue-900/40 bg-white dark:bg-[#0d1633] overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-xl md:text-2xl font-oswald font-extrabold uppercase tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-4">
                  {faq.q}
                </span>
                <span className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border-2 transition-transform duration-300 ${openIndex === index ? 'bg-blue-600 text-white border-blue-600 rotate-180' : 'border-slate-300 dark:border-slate-700 text-slate-500'}`}>
                  <FiChevronDown className="w-5 h-5" />
                </span>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6 animate-fade-in">
                  <div className="h-0.5 bg-blue-100 dark:bg-blue-900/40 mb-4" />
                  <p className="text-slate-600 dark:text-slate-300 text-lg font-sans leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
