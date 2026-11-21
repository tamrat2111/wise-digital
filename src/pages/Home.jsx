import { useState, useEffect } from 'react';
import { FiArrowRight, FiEye } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

function Home() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroHeadlines = t.hero.slides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroHeadlines.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [heroHeadlines.length]);

  const currentSlide = heroHeadlines[currentIndex] || heroHeadlines[0];

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20 bg-[#070b19]">
      {/* User's Uploaded Hero Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000"
        style={{ 
          backgroundImage: `url('/hero_bg.png')`,
        }}
      />
      
      {/* High-Contrast Deep Navy / Royal Blue Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#050B1B]/95 via-[#07132e]/85 to-[#1D4ED8]/35 backdrop-blur-[2px]"></div>

      <div className="container-custom relative z-20 text-center px-4">
        <div className="max-w-[85rem] mx-auto">
          {/* Progress Indicators */}
          <div className="flex justify-center mb-8 gap-3">
            {heroHeadlines.map((_, i) => (
              <button
                key={i} 
                onClick={() => setCurrentIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 transition-all duration-700 rounded-full ${i === currentIndex ? 'w-16 bg-blue-500' : 'w-6 bg-white/20'}`}
              />
            ))}
          </div>

          <div className="overflow-hidden mb-6">
            <h1 className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-oswald font-extrabold uppercase leading-[0.9] tracking-tight drop-shadow-2xl animate-fade-in transition-all duration-700">
              {currentSlide.title} <br/> 
              <span className="text-blue-500">{currentSlide.highlight}</span> {currentSlide.suffix}
            </h1>
          </div>

          <div className="overflow-hidden mb-10 sm:mb-12">
            <p className="text-slate-200 text-sm sm:text-lg md:text-xl font-sans font-medium tracking-wide max-w-3xl mx-auto opacity-95 animate-slide-up border-l-4 border-blue-500 pl-4 sm:pl-6 text-left transition-all duration-1000">
              {currentSlide.sub}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 animate-slide-up">
            <a href="#contact" className="w-full sm:w-auto px-7 py-3.5 sm:px-10 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-oswald font-bold text-base sm:text-lg uppercase tracking-wider transition-all rounded-full shadow-[0_10px_25px_rgba(29,78,216,0.5)] hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
              <span>{t.hero.workTogether}</span>
              <FiArrowRight className="w-5 h-5" />
            </a>
            
            <a href="#services" className="w-full sm:w-auto px-7 py-3.5 sm:px-10 sm:py-4 border-2 border-white/60 text-white font-oswald font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-white hover:text-blue-900 transition-all rounded-full backdrop-blur-sm hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
              <span>{t.hero.ourServices}</span>
              <FiEye className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Progress Line */}
      <div className="absolute bottom-0 left-0 h-1.5 bg-blue-950 w-full z-20">
        <div key={currentIndex} className="h-full bg-blue-500 animate-[progress_6s_linear]" style={{ width: '100%' }}></div>
      </div>
    </section>
  );
}

export default Home;
