import { useEffect, useState } from 'react';
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiArrowRight, 
  FiExternalLink, 
  FiPlay, 
  FiX, 
  FiFilm, 
  FiGlobe 
} from 'react-icons/fi';
import { projectsData } from '../data/projectsData';
import { useLanguage } from '../context/LanguageContext';

function Projects() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeVideo, setActiveVideo] = useState(null);

  const filteredProjects = projectsData.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'video') return item.category === 'Video Production';
    if (selectedCategory === 'web') return item.category !== 'Video Production';
    return true;
  });

  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset index on category switch
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const maxStart = Math.max(0, filteredProjects.length - visibleCount);

  const goPrev = () => setCurrentIndex((prev) => (prev <= 0 ? maxStart : prev - 1));
  const goNext = () => setCurrentIndex((prev) => (prev >= maxStart ? 0 : prev + 1));

  const handleCardClick = (project, e) => {
    if (project.link) {
      e.preventDefault();
      window.open(project.link, '_blank', 'noopener,noreferrer');
    } else if (project.videoUrl) {
      e.preventDefault();
      setActiveVideo(project);
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-white dark:bg-[#070b19] transition-colors duration-300 overflow-hidden">
      <div className="container-custom">
        {/* Title */}
        <div className="mb-14 text-center lg:text-left">
          <p className="text-blue-600 dark:text-blue-400 text-sm md:text-lg font-oswald font-bold tracking-[0.4em] mb-6 uppercase opacity-90 border-l-4 border-blue-600 pl-6">
            {t.projects.tag}
          </p>
          
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-oswald font-extrabold uppercase leading-none tracking-tight mb-4">
            {t.projects.heading1} <span className="text-blue-600 dark:text-blue-500">{t.projects.headingHighlight}</span>
          </h2>

          <div className="flex items-center gap-4 sm:gap-8 md:gap-12">
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
            <h3 className="text-slate-900 dark:text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-oswald font-extrabold uppercase leading-none tracking-normal sm:tracking-[0.2em] text-center">
              {t.projects.heading2}
            </h3>
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2.5 rounded-full font-oswald uppercase tracking-wider text-sm sm:text-base font-bold transition-all shadow-sm ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-blue-500/25 scale-105'
                : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-white/10'
            }`}
          >
            {t.projects.filterAll} ({projectsData.length})
          </button>
          <button
            onClick={() => setSelectedCategory('web')}
            className={`px-6 py-2.5 rounded-full font-oswald uppercase tracking-wider text-sm sm:text-base font-bold transition-all shadow-sm flex items-center gap-2 ${
              selectedCategory === 'web'
                ? 'bg-blue-600 text-white shadow-blue-500/25 scale-105'
                : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-white/10'
            }`}
          >
            <FiGlobe className="w-4 h-4" />
            <span>{t.projects.filterWeb}</span>
          </button>
          <button
            onClick={() => setSelectedCategory('video')}
            className={`px-6 py-2.5 rounded-full font-oswald uppercase tracking-wider text-sm sm:text-base font-bold transition-all shadow-sm flex items-center gap-2 ${
              selectedCategory === 'video'
                ? 'bg-blue-600 text-white shadow-blue-500/25 scale-105'
                : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-white/10'
            }`}
          >
            <FiFilm className="w-4 h-4" />
            <span>{t.projects.filterVideo}</span>
          </button>
        </div>

        {/* Carousel Slider */}
        <div className="relative group/slider">
          {filteredProjects.length > visibleCount && (
            <button
              onClick={goPrev}
              aria-label="Previous project"
              className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all shadow-xl active:scale-95"
            >
              <FiChevronLeft className="w-8 h-8" />
            </button>
          )}

          <div className="overflow-hidden px-2">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${(100 / visibleCount) * currentIndex}%)` }}
            >
              {filteredProjects.map((project) => {
                const title = language === 'am' && project.amharicTitle ? project.amharicTitle : project.title;
                const description = language === 'am' && project.amharicDescription ? project.amharicDescription : project.description;
                const isVideo = Boolean(project.videoUrl);
                const isExternal = Boolean(project.link);

                return (
                  <article
                    key={project.id}
                    className="px-4 h-full"
                    style={{ minWidth: `${100 / visibleCount}%` }}
                  >
                    <div 
                      onClick={(e) => handleCardClick(project, e)}
                      className="cursor-pointer block h-full group"
                    >
                      <div className="h-full bg-slate-50 dark:bg-[#0d1633] rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-blue-900/40 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1">
                        
                        {/* Media Box: Video or Image */}
                        <div className="h-64 sm:h-72 overflow-hidden relative bg-slate-900 flex items-center justify-center">
                          <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                          {isVideo ? (
                            <div className="relative w-full h-full flex items-center justify-center bg-black">
                              <video
                                src={project.videoUrl}
                                preload="metadata"
                                muted
                                playsInline
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                              />
                              {/* Large Glowing Play Badge */}
                              <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/30 group-hover:bg-black/10 transition-colors">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.8)] group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
                                  <FiPlay className="w-8 h-8 sm:w-9 sm:h-9 translate-x-0.5 fill-white" />
                                </div>
                              </div>
                              <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-oswald uppercase tracking-wider rounded-md border border-white/20 flex items-center gap-1.5">
                                <FiFilm className="w-3.5 h-3.5 text-blue-400" />
                                <span>{language === 'am' ? 'ቪዲዮ' : 'Video Commercial'}</span>
                              </span>
                            </div>
                          ) : project.image ? (
                            <div className="relative w-full h-full">
                              <img
                                src={project.image}
                                alt={title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                              {isExternal && (
                                <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-blue-600 text-white text-xs font-oswald uppercase tracking-wider rounded-md shadow-md flex items-center gap-1.5">
                                  <span>{language === 'am' ? 'ቀጥታ ሊንክ' : 'Live Website'}</span>
                                  <FiExternalLink className="w-3.5 h-3.5" />
                                </span>
                              )}
                            </div>
                          ) : (
                            <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                              <span className="text-white text-4xl font-oswald font-bold opacity-30 uppercase tracking-widest">Wise Digital</span>
                            </div>
                          )}
                        </div>

                        {/* Text Content */}
                        <div className="p-7 sm:p-8 md:p-9 flex-1 flex flex-col justify-between">
                          <div>
                            {/* Tech / Tag Badges */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.slice(0, 3).map((tech) => (
                                <span
                                  key={tech}
                                  className="text-xs font-oswald font-bold px-3 py-1 rounded-md border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-oswald font-extrabold text-slate-900 dark:text-white mb-3 uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                              {title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-sans leading-relaxed mb-6">
                              {description}
                            </p>
                          </div>

                          {/* Action Link Footer */}
                          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-blue-600 dark:text-blue-400 font-oswald uppercase tracking-wider font-bold text-sm">
                            {isExternal ? (
                              <div className="flex items-center gap-2 group-hover:gap-3 transition-all text-blue-600 font-extrabold">
                                <span>{t.projects.visitWebsite} (semayawihotel.com)</span>
                                <FiExternalLink className="w-4 h-4" />
                              </div>
                            ) : isVideo ? (
                              <div className="flex items-center gap-2 group-hover:gap-3 transition-all text-blue-600 font-extrabold">
                                <span>{t.projects.watchVideo}</span>
                                <FiPlay className="w-4 h-4 fill-current" />
                              </div>
                            ) : (
                              <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
                                <span>{t.projects.viewDetails}</span>
                                <FiArrowRight className="w-4 h-4" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {filteredProjects.length > visibleCount && (
            <button
              onClick={goNext}
              aria-label="Next project"
              className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all shadow-xl active:scale-95"
            >
              <FiChevronRight className="w-8 h-8" />
            </button>
          )}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-[#070b19] border-2 border-blue-600/50 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-blue-900/40 bg-[#0d1633]">
              <div>
                <span className="text-xs font-oswald font-bold tracking-widest text-blue-400 uppercase block mb-1">
                  WISE DIGITAL PRODUCTION
                </span>
                <h4 className="text-xl sm:text-2xl font-oswald font-extrabold text-white uppercase tracking-tight">
                  {language === 'am' && activeVideo.amharicTitle ? activeVideo.amharicTitle : activeVideo.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                aria-label="Close video player"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors shadow-md"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Modal Description Footer */}
            <div className="p-4 sm:p-6 bg-[#070b19] border-t border-blue-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-slate-300 text-sm sm:text-base font-sans max-w-2xl">
                {language === 'am' && activeVideo.amharicDescription ? activeVideo.amharicDescription : activeVideo.description}
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="#contact"
                  onClick={() => setActiveVideo(null)}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-oswald font-bold uppercase tracking-wider rounded-full shadow-md transition-all"
                >
                  {language === 'am' ? 'ቪዲዮ ለማሰራት ያግኙን' : 'Order Video Production'}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
