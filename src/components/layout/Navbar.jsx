import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import ThemeToggle from '../ThemeToggle';
import { useLanguage } from '../../context/LanguageContext';

function Navbar() {
  const { language, toggleLanguage, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.why, href: '#why' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.team, href: '#teams' },
    { name: t.nav.portfolio, href: '#projects' },
    { name: t.nav.partners, href: '#partners' },
    { name: t.nav.faq, href: '#faq' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => item.href.substring(1));
      let current = '#home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = `#${section}`;
        }
      }
      setActiveItem(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-3 sm:px-6">
      <div
        className={`bg-white/95 dark:bg-[#070e24]/95 backdrop-blur-xl border ${
          scrolled ? 'border-blue-600/40 shadow-[0_12px_40px_rgba(29,78,216,0.15)]' : 'border-slate-200 dark:border-blue-900/40 shadow-md'
        } rounded-full px-4 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between w-full max-w-[1400px] transition-all duration-300`}
      >
        {/* Brand Logo & Name */}
        <a href="/" className="flex items-center gap-3 group shrink-0" onClick={closeMenu}>
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-sm border border-blue-600/20">
            <img src="/wise_logo.png" alt="Wise Digital Logo" className="w-full h-full object-contain p-1" />
          </div>
          <span className="text-xl sm:text-2xl font-oswald font-extrabold uppercase tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors whitespace-nowrap">
            Wise <span className="text-blue-600 dark:text-blue-400">Digital</span>
          </span>
        </a>

        {/* Desktop Navigation - Clean Single Row */}
        <div className="hidden xl:flex items-center gap-1 flex-row justify-center px-1">
          {navItems.slice(0, -1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveItem(item.href)}
              className={`px-3 py-1.5 rounded-full text-sm font-oswald uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                activeItem === item.href
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-white/5'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher Button (EN | አማ) */}
          <div className="flex items-center bg-slate-100 dark:bg-white/10 rounded-full p-1 border border-slate-200/60 dark:border-white/10 shadow-inner">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-full text-xs font-oswald font-bold uppercase tracking-wider transition-all ${
                language === 'en'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-blue-600'
              }`}
              title="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('am')}
              className={`px-2.5 py-1 rounded-full text-xs font-oswald font-bold tracking-wider transition-all ${
                language === 'am'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-blue-600'
              }`}
              title="ወደ አማርኛ ቀይር"
            >
              አማ
            </button>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-slate-100 dark:bg-white/10 rounded-full hover:bg-blue-50 dark:hover:bg-white/20 transition-colors">
            <ThemeToggle />
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex px-5 py-2 bg-blue-600 text-white font-oswald font-bold uppercase tracking-wider text-sm hover:bg-blue-700 transition-all rounded-full shadow-md whitespace-nowrap"
          >
            {t.nav.contact}
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="xl:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-slate-700 dark:text-white bg-slate-100 dark:bg-white/10 hover:bg-blue-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className="w-5 h-5" />
            ) : (
              <FiMenu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white/98 dark:bg-[#070e24]/98 backdrop-blur-2xl rounded-3xl border border-blue-600/30 p-6 flex flex-col gap-2 xl:hidden animate-fade-in shadow-2xl max-h-[80vh] overflow-y-auto">
          {/* Mobile Language Switcher row */}
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-200 dark:border-white/10">
            <span className="text-xs font-oswald uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
              <FiGlobe className="w-4 h-4 text-blue-500" />
              <span>Language • ቋንቋ</span>
            </span>
            <div className="flex items-center bg-slate-100 dark:bg-white/10 rounded-full p-1 border border-slate-200/60 dark:border-white/10">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-oswald font-bold uppercase tracking-wider transition-all ${
                  language === 'en' ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('am')}
                className={`px-3 py-1 rounded-full text-xs font-oswald font-bold tracking-wider transition-all ${
                  language === 'am' ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                አማርኛ
              </button>
            </div>
          </div>

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => {
                setActiveItem(item.href);
                closeMenu();
              }}
              className={`text-lg font-oswald uppercase tracking-widest text-center py-2.5 rounded-xl transition-all ${
                activeItem === item.href
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-white/5'
              } ${item.href === '#contact' ? 'bg-blue-600 !text-white mt-2' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;