import { teamMembers } from '../data/teamData';
import { 
  FaTelegramPlane, 
  FaInstagram, 
  FaTiktok, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaGithub 
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

function Teams() {
  const { language, t } = useLanguage();
  const row1 = teamMembers.slice(0, 3); // 3 members on first row (Mikiyas, Aaron, Lidiya)
  const row2 = teamMembers.slice(3, 6); // 3 members on second row (Bamlak, Yonas, Yeabsira)

  const renderSocialIcon = (platform, url) => {
    if (!url) return null;

    let IconComponent = null;
    let hoverClass = 'hover:bg-blue-600 hover:border-blue-600 hover:text-white';

    if (platform === 'telegram') {
      IconComponent = FaTelegramPlane;
      hoverClass = 'hover:bg-blue-500 hover:border-blue-500 hover:text-white';
    } else if (platform === 'instagram') {
      IconComponent = FaInstagram;
      hoverClass = 'hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-500 hover:border-pink-500 hover:text-white';
    } else if (platform === 'tiktok') {
      IconComponent = FaTiktok;
      hoverClass = 'hover:bg-black hover:border-slate-500 hover:text-white';
    } else if (platform === 'facebook') {
      IconComponent = FaFacebookF;
      hoverClass = 'hover:bg-blue-600 hover:border-blue-600 hover:text-white';
    } else if (platform === 'linkedin') {
      IconComponent = FaLinkedinIn;
      hoverClass = 'hover:bg-blue-600 hover:border-blue-600 hover:text-white';
    } else if (platform === 'github') {
      IconComponent = FaGithub;
      hoverClass = 'hover:bg-black hover:border-slate-500 hover:text-white';
    }

    if (!IconComponent) return null;

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={platform}
        className={`w-11 h-11 rounded-none border border-slate-300 dark:border-slate-700/80 bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 ${hoverClass} transition-all duration-200 flex items-center justify-center shadow-sm group/icon`}
      >
        <IconComponent className="w-4 h-4 group-hover/icon:scale-110 transition-transform" />
      </a>
    );
  };

  const renderCard = (member) => {
    const memberName = language === 'am' && member.amharicName ? member.amharicName : member.name;
    const memberRole = language === 'am' && member.amharicRole ? member.amharicRole : member.role;

    return (
      <article
        key={member.id}
        className="group relative bg-white dark:bg-[#0B0F19] rounded-none p-6 sm:p-9 text-center border-2 border-slate-200 dark:border-slate-800 shadow-[8px_8px_0px_rgba(29,78,216,0.12)] dark:shadow-[10px_10px_0px_rgba(0,0,0,0.6)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300 flex flex-col items-center justify-between w-full max-w-[340px] sm:max-w-[370px] overflow-hidden"
      >
        {/* Top-Left Corner Geometric Accent Box */}
        <div className="absolute top-0 left-0 w-12 h-12 border-b-2 border-r-2 border-blue-600/40 bg-blue-600/10 dark:border-blue-400/40 dark:bg-blue-400/10 pointer-events-none group-hover:scale-110 transition-transform duration-300" />

        <div className="w-full flex flex-col items-center">
          {/* 1. IMAGE with Framed Double Border */}
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 mx-auto mb-6 sm:mb-7 p-1.5 border-2 border-slate-200 dark:border-slate-700/70 bg-slate-100 dark:bg-[#121726] shadow-inner shrink-0 group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-colors duration-500">
            <img
              src={member.image}
              alt={memberName}
              className="w-full h-full object-cover rounded-none filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* 2. NAME */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-oswald font-black uppercase tracking-tight text-slate-900 dark:text-white mb-2 leading-none">
            {memberName}
          </h3>

          {/* 3. ROLE */}
          <p className="text-xs sm:text-sm md:text-base font-oswald font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6 sm:mb-8 min-h-[2.5rem] flex items-center justify-center text-center">
            {memberRole}
          </p>
        </div>

        {/* 4. SQUARE SOCIAL MEDIA ICONS */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full mt-auto">
          {member.social?.telegram && renderSocialIcon('telegram', member.social.telegram)}
          {member.social?.instagram && renderSocialIcon('instagram', member.social.instagram)}
          {member.social?.tiktok && renderSocialIcon('tiktok', member.social.tiktok)}
          {member.social?.facebook && renderSocialIcon('facebook', member.social.facebook)}
          {member.social?.linkedin && renderSocialIcon('linkedin', member.social.linkedin)}
          {member.social?.github && renderSocialIcon('github', member.social.github)}
        </div>
      </article>
    );
  };

  return (
    <section id="teams" className="py-24 md:py-32 bg-slate-50 dark:bg-[#070B19] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
      <div className="container-custom">
        {/* Title */}
        <div className="mb-16 md:mb-20 text-center lg:text-left">
          <p className="text-blue-600 dark:text-blue-400 text-sm md:text-lg font-oswald font-bold tracking-[0.4em] mb-4 sm:mb-6 uppercase opacity-90 border-l-4 border-blue-600 dark:border-blue-500 pl-6">
            {t.teams.tag}
          </p>
          
          <h2 className="text-slate-900 dark:text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-oswald font-extrabold uppercase leading-none tracking-tighter mb-4">
            {t.teams.heading1} <span className="text-blue-600 dark:text-blue-500">{t.teams.headingHighlight}</span>
          </h2>

          <div className="flex items-center gap-6 sm:gap-8 md:gap-12">
            <div className="flex-1 h-1 bg-slate-200 dark:bg-white/10" />
            <h3 className="text-slate-800 dark:text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-oswald font-extrabold uppercase leading-none tracking-[0.2em] whitespace-nowrap">
              {t.teams.heading2}
            </h3>
            <div className="flex-1 h-1 bg-slate-200 dark:bg-white/10" />
          </div>
        </div>

        {/* Row 1: 3 Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center max-w-6xl mx-auto w-full">
          {row1.map(renderCard)}
        </div>

        {/* Row 2: 3 Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center max-w-6xl mx-auto w-full mt-6 sm:mt-8">
          {row2.map(renderCard)}
        </div>
      </div>
    </section>
  );
}

export default Teams;
