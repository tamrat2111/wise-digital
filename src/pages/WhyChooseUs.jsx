import { FiAward, FiTrendingUp, FiZap, FiShield } from 'react-icons/fi';

function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      title: 'Creative Excellence',
      amharic: 'የፈጠራ ልቀት',
      desc: 'Top-tier cinematographers, visual directors, and graphic designers crafting visuals that turn heads.',
      icon: <FiAward className="w-8 h-8" />,
    },
    {
      id: 2,
      title: 'Viral Social Reach',
      amharic: 'ፈጣን የማህበራዊ ሚዲያ እድገት',
      desc: 'Data-driven marketing and video strategies that explode engagement across TikTok, Instagram, and Telegram.',
      icon: <FiTrendingUp className="w-8 h-8" />,
    },
    {
      id: 3,
      title: 'End-to-End Service',
      amharic: 'የተሟላ አገልግሎት',
      desc: 'From initial concept and video shoots to custom web development and major event coordination.',
      icon: <FiZap className="w-8 h-8" />,
    },
    {
      id: 4,
      title: 'Proven Track Record',
      amharic: 'የተረጋገጠ የስራ ውጤት',
      desc: 'Trusted by leading clinics, automotive firms, beauty brands, and enterprises for 3+ years.',
      icon: <FiShield className="w-8 h-8" />,
    },
  ];

  return (
    <section id="why" className="py-24 md:py-32 bg-white dark:bg-[#070b19] transition-colors duration-300 overflow-hidden">
      <div className="container-custom">
        {/* Title */}
        <div className="mb-16 text-center lg:text-left">
          <p className="text-blue-600 dark:text-blue-400 text-sm md:text-lg font-oswald font-bold tracking-[0.4em] mb-6 uppercase opacity-90 border-l-4 border-blue-600 pl-6">
            THE ADVANTAGE • ለምን እኛን ይመርጣሉ
          </p>
          
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-oswald font-extrabold uppercase leading-none tracking-tight mb-4">
            WHY <span className="text-blue-600 dark:text-blue-500">WISE</span> DIGITAL
          </h2>

          <div className="flex items-center gap-4 sm:gap-8 md:gap-12">
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
            <h3 className="text-slate-900 dark:text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl font-oswald font-extrabold uppercase leading-none tracking-normal sm:tracking-[0.2em] text-center">
              YOUR COMPETITIVE EDGE
            </h3>
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
          </div>
        </div>

        {/* Clean 4-Column Row Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="group relative bg-slate-50 dark:bg-[#0d1633] rounded-2xl p-8 border-2 border-slate-200 dark:border-blue-900/40 shadow-sm hover:shadow-xl hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-16 h-16 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:bg-blue-700 transition-all">
                  {reason.icon}
                </div>

                <h4 className="text-2xl font-oswald font-extrabold uppercase tracking-tight text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {reason.title}
                </h4>

                <p className="text-xs font-oswald font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
                  {reason.amharic}
                </p>

                <p className="text-slate-600 dark:text-slate-300 text-base font-sans leading-relaxed">
                  {reason.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center gap-2 text-xs font-oswald font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                <span>Wise Standard</span>
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
