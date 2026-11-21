import { HiLanguage } from 'react-icons/hi2';
import { FiCheck } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

export const EthiopiaFlag = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 32 32" className={`${className} rounded-full shrink-0 shadow-sm overflow-hidden`} aria-hidden="true">
    <rect width="32" height="10.66" y="0" fill="#009A44" />
    <rect width="32" height="10.66" y="10.66" fill="#FED100" />
    <rect width="32" height="10.66" y="21.34" fill="#EF3340" />
    <circle cx="16" cy="16" r="6" fill="#002B7F" />
    <polygon points="16,11.5 17.2,15 20.8,15 17.9,17.2 19,20.5 16,18.5 13,20.5 14.1,17.2 11.2,15 14.8,15" fill="#FED100" />
  </svg>
);

export const GlobalFlag = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 32 32" className={`${className} rounded-full shrink-0 shadow-sm overflow-hidden`} aria-hidden="true">
    <circle cx="16" cy="16" r="16" fill="#1D4ED8" />
    <circle cx="16" cy="16" r="15" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" opacity="0.3" />
    <path d="M4 16h24M16 4a19 19 0 0 1 0 24 19 19 0 0 1 0-24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

function LanguageToggle({ variant = "navbar" }) {
  const { language, setLanguage, toggleLanguage } = useLanguage();

  if (variant === "mobile") {
    return (
      <div className="w-full bg-slate-100/80 dark:bg-white/5 rounded-2xl p-3 border border-slate-200 dark:border-white/10">
        <div className="flex items-center gap-2 mb-3 px-1 text-slate-500 dark:text-slate-400">
          <HiLanguage className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-xs font-oswald uppercase tracking-widest font-bold">
            Choose Language • ቋንቋ ይምረጡ
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {/* English Button */}
          <button
            onClick={() => setLanguage('en')}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border transition-all duration-300 ${
              language === 'en'
                ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                : 'bg-white dark:bg-[#0B0F19] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-400'
            }`}
          >
            <div className="flex items-center gap-2">
              <GlobalFlag className="w-5 h-5" />
              <div className="text-left">
                <span className="block text-sm font-oswald font-bold uppercase tracking-wider leading-none">English</span>
                <span className="text-[10px] opacity-80 leading-none">Global</span>
              </div>
            </div>
            {language === 'en' && <FiCheck className="w-4 h-4 stroke-[3]" />}
          </button>

          {/* Amharic Button */}
          <button
            onClick={() => setLanguage('am')}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border transition-all duration-300 ${
              language === 'am'
                ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                : 'bg-white dark:bg-[#0B0F19] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-400'
            }`}
          >
            <div className="flex items-center gap-2">
              <EthiopiaFlag className="w-5 h-5" />
              <div className="text-left">
                <span className="block text-sm font-oswald font-bold tracking-wider leading-none">አማርኛ</span>
                <span className="text-[10px] opacity-80 leading-none">ኢትዮጵያ</span>
              </div>
            </div>
            {language === 'am' && <FiCheck className="w-4 h-4 stroke-[3]" />}
          </button>
        </div>
      </div>
    );
  }

  // Modern Capsule Switcher for Navbar
  return (
    <div className="relative inline-flex items-center bg-slate-100/90 dark:bg-[#0B0F19]/90 backdrop-blur-md rounded-full p-1 border border-slate-200/90 dark:border-blue-900/60 shadow-sm transition-all">
      {/* Icon Accent Button */}
      <button 
        onClick={toggleLanguage}
        title="Switch Language / ቋንቋ ቀይር"
        className="w-7 h-7 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-white/10 transition-colors mr-0.5"
      >
        <HiLanguage className="w-4 h-4" />
      </button>

      {/* English Segment */}
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-oswald uppercase tracking-wider font-bold transition-all duration-300 ${
          language === 'en'
            ? 'bg-blue-600 text-white shadow-[0_2px_10px_rgba(37,99,235,0.4)] scale-[1.02]'
            : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white'
        }`}
        title="Switch to English"
      >
        <GlobalFlag className="w-3.5 h-3.5" />
        <span>EN</span>
      </button>

      {/* Amharic Segment */}
      <button
        onClick={() => setLanguage('am')}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-oswald tracking-wider font-bold transition-all duration-300 ${
          language === 'am'
            ? 'bg-blue-600 text-white shadow-[0_2px_10px_rgba(37,99,235,0.4)] scale-[1.02]'
            : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white'
        }`}
        title="ወደ አማርኛ ቀይር"
      >
        <EthiopiaFlag className="w-3.5 h-3.5" />
        <span>አማ</span>
      </button>
    </div>
  );
}

export default LanguageToggle;
