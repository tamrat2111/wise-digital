import { useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

export const USFlag = ({ className = "w-4 h-2.5 sm:w-4.5 sm:h-3" }) => (
  <svg viewBox="0 0 640 480" className={`${className} rounded-[2px] shadow-sm shrink-0 border border-black/10`} aria-hidden="true">
    <g fillRule="evenodd">
      <path fill="#bd3d44" d="M0 0h640v480H0z"/>
      <path stroke="#fff" strokeWidth="37" d="M0 55.5h640M0 129.5h640M0 203.5h640M0 277.5h640M0 351.5h640M0 425.5h640"/>
      <path fill="#192f5d" d="M0 0h256v258.5H0z"/>
      <g fill="#fff">
        <circle cx="32" cy="28" r="8"/>
        <circle cx="96" cy="28" r="8"/>
        <circle cx="160" cy="28" r="8"/>
        <circle cx="224" cy="28" r="8"/>
        <circle cx="64" cy="62" r="8"/>
        <circle cx="128" cy="62" r="8"/>
        <circle cx="192" cy="62" r="8"/>
        <circle cx="32" cy="96" r="8"/>
        <circle cx="96" cy="96" r="8"/>
        <circle cx="160" cy="96" r="8"/>
        <circle cx="224" cy="96" r="8"/>
        <circle cx="64" cy="130" r="8"/>
        <circle cx="128" cy="130" r="8"/>
        <circle cx="192" cy="130" r="8"/>
        <circle cx="32" cy="164" r="8"/>
        <circle cx="96" cy="164" r="8"/>
        <circle cx="160" cy="164" r="8"/>
        <circle cx="224" cy="164" r="8"/>
        <circle cx="64" cy="198" r="8"/>
        <circle cx="128" cy="198" r="8"/>
        <circle cx="192" cy="198" r="8"/>
        <circle cx="32" cy="232" r="8"/>
        <circle cx="96" cy="232" r="8"/>
        <circle cx="160" cy="232" r="8"/>
        <circle cx="224" cy="232" r="8"/>
      </g>
    </g>
  </svg>
);

export const EthiopiaFlag = ({ className = "w-4 h-2.5 sm:w-4.5 sm:h-3" }) => (
  <svg viewBox="0 0 640 426" className={`${className} rounded-[2px] shadow-sm shrink-0 border border-black/10`} aria-hidden="true">
    <rect width="640" height="142" y="0" fill="#009A44" />
    <rect width="640" height="142" y="142" fill="#FED100" />
    <rect width="640" height="142" y="284" fill="#EF3340" />
    <circle cx="320" cy="213" r="80" fill="#002B7F" />
    <polygon points="320,153 336,200 383,200 345,229 359,273 320,247 281,273 295,229 257,200 304,200" fill="#FED100" />
  </svg>
);

function LanguageToggle({ variant = "navbar" }) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const currentFlag = language === 'am' ? <EthiopiaFlag /> : <USFlag />;
  const currentLabel = language === 'am' ? 'አማርኛ' : 'ENGLISH';

  if (variant === "mobile") {
    return (
      <div className="w-full relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0b1022] text-slate-800 dark:text-white transition-all shadow-sm"
        >
          <div className="flex items-center gap-2.5">
            {currentFlag}
            <span className="text-xs font-sans font-bold tracking-wider uppercase leading-none">
              {currentLabel}
            </span>
          </div>
          <span className="text-slate-500 dark:text-slate-400">
            {isOpen ? <FiChevronUp className="w-3.5 h-3.5" /> : <FiChevronDown className="w-3.5 h-3.5" />}
          </span>
        </button>

        {isOpen && (
          <div className="mt-1.5 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#070e24] shadow-xl overflow-hidden animate-fade-in">
            <button
              type="button"
              onClick={() => handleSelect('en')}
              className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-left text-xs font-sans transition-colors ${
                language === 'en'
                  ? 'bg-[#1E2E5D] text-white font-bold'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 font-medium'
              }`}
            >
              <USFlag className="w-4 h-2.5" />
              <span className="tracking-wide">English</span>
            </button>
            <button
              type="button"
              onClick={() => handleSelect('am')}
              className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-left text-xs font-sans transition-colors ${
                language === 'am'
                  ? 'bg-[#1E2E5D] text-white font-bold'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 font-medium'
              }`}
            >
              <EthiopiaFlag className="w-4 h-2.5" />
              <span className="tracking-wide">አማርኛ</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  // Desktop Clean Box Dropdown with refined, balanced font size
  return (
    <div className="relative inline-block text-left shrink-0" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-2 px-2.5 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0b1022] hover:border-blue-500 dark:hover:border-blue-400 text-slate-800 dark:text-white transition-all shadow-sm"
      >
        <span className="flex items-center shrink-0">
          {currentFlag}
        </span>
        <span className="text-[11px] font-sans font-bold tracking-wider uppercase leading-none">
          {currentLabel}
        </span>
        <span className="text-slate-500 dark:text-slate-400">
          {isOpen ? (
            <FiChevronUp className="w-3 h-3 stroke-[2.5]" />
          ) : (
            <FiChevronDown className="w-3 h-3 stroke-[2.5]" />
          )}
        </span>
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-1 w-36 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#070e24] shadow-xl overflow-hidden z-50 animate-fade-in"
          role="menu"
        >
          {/* Option: English */}
          <button
            type="button"
            onClick={() => handleSelect('en')}
            className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs font-sans transition-colors ${
              language === 'en'
                ? 'bg-[#1E2E5D] text-white font-bold'
                : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 font-medium'
            }`}
            role="menuitem"
          >
            <USFlag className="w-4 h-2.5" />
            <span className="tracking-wide text-xs">English</span>
          </button>

          {/* Option: Amharic */}
          <button
            type="button"
            onClick={() => handleSelect('am')}
            className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs font-sans transition-colors ${
              language === 'am'
                ? 'bg-[#1E2E5D] text-white font-bold'
                : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 font-medium'
            }`}
            role="menuitem"
          >
            <EthiopiaFlag className="w-4 h-2.5" />
            <span className="tracking-wide text-xs">አማርኛ</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageToggle;
