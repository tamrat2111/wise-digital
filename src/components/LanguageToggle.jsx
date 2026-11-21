import { useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

export const USFlag = ({ className = "w-4.5 h-3 sm:w-5 sm:h-3.5" }) => (
  <svg viewBox="0 0 640 480" className={`${className} rounded-[1.5px] shadow-sm shrink-0 border border-black/10`} aria-hidden="true">
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

export const EthiopiaFlag = ({ className = "w-4.5 h-3 sm:w-5 sm:h-3.5" }) => (
  <svg viewBox="0 0 640 426" className={`${className} rounded-[1.5px] shadow-sm shrink-0 border border-black/10`} aria-hidden="true">
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

  // Close on outside click
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
          className="group relative w-full flex items-center justify-between px-4 py-2.5 bg-transparent text-slate-800 dark:text-white transition-all"
        >
          {/* Left Bracket: [ */}
          <span 
            aria-hidden="true" 
            className="absolute left-0 top-0 bottom-0 w-2.5 pointer-events-none border-l-2 border-t-2 border-b-2 border-slate-400/80 dark:border-slate-500 group-hover:border-blue-500 transition-colors" 
          />

          <div className="flex items-center gap-3">
            {currentFlag}
            <span className="text-xs sm:text-sm font-sans font-bold tracking-wider uppercase leading-none">
              {currentLabel}
            </span>
          </div>
          <span className="text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition-colors">
            {isOpen ? <FiChevronUp className="w-3.5 h-3.5 stroke-[2.5]" /> : <FiChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />}
          </span>

          {/* Right Bracket: ] */}
          <span 
            aria-hidden="true" 
            className="absolute right-0 top-0 bottom-0 w-2.5 pointer-events-none border-r-2 border-t-2 border-b-2 border-slate-400/80 dark:border-slate-500 group-hover:border-blue-500 transition-colors" 
          />
        </button>

        {isOpen && (
          <div className="mt-2 w-full rounded-md border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-[#070e24] shadow-xl overflow-hidden animate-fade-in">
            <button
              type="button"
              onClick={() => handleSelect('en')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left text-xs sm:text-sm font-sans transition-colors ${
                language === 'en'
                  ? 'bg-[#1E2E5D] text-white font-bold'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 font-medium'
              }`}
            >
              <USFlag />
              <span className="tracking-wide">English</span>
            </button>
            <button
              type="button"
              onClick={() => handleSelect('am')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left text-xs sm:text-sm font-sans transition-colors ${
                language === 'am'
                  ? 'bg-[#1E2E5D] text-white font-bold'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 font-medium'
              }`}
            >
              <EthiopiaFlag />
              <span className="tracking-wide">አማርኛ</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  // Desktop Square Bracket Button: [ 🇺🇸 ENGLISH ⌄ ]
  return (
    <div className="relative inline-block text-left shrink-0" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="group relative flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 bg-transparent hover:text-blue-600 transition-all select-none"
      >
        {/* Left Square Bracket: [ */}
        <span 
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-2 sm:w-2.5 pointer-events-none border-l-2 border-t-2 border-b-2 border-slate-300 dark:border-slate-600 group-hover:border-blue-500 transition-colors" 
        />

        <span className="flex items-center shrink-0">
          {currentFlag}
        </span>
        <span className="text-[11px] sm:text-xs font-sans font-bold tracking-wider uppercase leading-none text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {currentLabel}
        </span>
        <span className="text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {isOpen ? (
            <FiChevronUp className="w-3.5 h-3.5 stroke-[2.5]" />
          ) : (
            <FiChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
          )}
        </span>

        {/* Right Square Bracket: ] */}
        <span 
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 w-2 sm:w-2.5 pointer-events-none border-r-2 border-t-2 border-b-2 border-slate-300 dark:border-slate-600 group-hover:border-blue-500 transition-colors" 
        />
      </button>

      {/* Clean Dropdown Popover matching Screenshot 1 */}
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-44 rounded-md border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-[#070e24] shadow-2xl overflow-hidden z-50 animate-fade-in"
          role="menu"
        >
          {/* Option: English */}
          <button
            type="button"
            onClick={() => handleSelect('en')}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-xs sm:text-sm font-sans transition-colors ${
              language === 'en'
                ? 'bg-[#1E2E5D] text-white font-bold'
                : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 font-medium'
            }`}
            role="menuitem"
          >
            <USFlag />
            <span className="tracking-wide">English</span>
          </button>

          {/* Option: Amharic */}
          <button
            type="button"
            onClick={() => handleSelect('am')}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-xs sm:text-sm font-sans transition-colors ${
              language === 'am'
                ? 'bg-[#1E2E5D] text-white font-bold'
                : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 font-medium'
            }`}
            role="menuitem"
          >
            <EthiopiaFlag />
            <span className="tracking-wide">አማርኛ</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageToggle;
