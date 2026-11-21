import { useLanguage } from '../context/LanguageContext';

function TechStack() {
  const { language, t } = useLanguage();

  const stack = [
    {
      category: language === 'am' ? 'የቪዲዮ እና ሞሽን መሳሪያዎች' : 'Video & Motion',
      items: ['DaVinci Resolve', 'Adobe Premiere Pro', 'After Effects', 'Final Cut Pro'],
    },
    {
      category: language === 'am' ? 'ዲዛይን እና ቪዥዋልስ' : 'Design & Visuals',
      items: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma / UI/UX', 'Lightroom / Photo Color'],
    },
    {
      category: language === 'am' ? 'ዌብ እና ሲስተም' : 'Web & Development',
      items: ['React.js / Next.js', 'Tailwind CSS', 'Node.js & Express', 'Modern REST APIs'],
    },
    {
      category: language === 'am' ? 'ሞባይል እና ክላውድ' : 'Mobile & Cloud',
      items: ['React Native (iOS/Android)', 'Cloud Hosting', 'Digital Marketing Tools', 'SEO & Analytics'],
    },
  ];

  return (
    <section id="tech-stack" className="py-24 md:py-32 bg-slate-50 dark:bg-[#070b19] transition-colors duration-300 overflow-hidden border-t-2 border-slate-200 dark:border-blue-900/30">
      <div className="container-custom">
        {/* Title */}
        <div className="mb-20 text-center lg:text-left">
          <p className="text-blue-600 dark:text-blue-400 text-sm md:text-lg font-oswald font-bold tracking-[0.4em] mb-10 uppercase opacity-90 border-l-4 border-blue-600 pl-6">
            {t.tech.tag}
          </p>
          
          <h2 className="text-slate-900 dark:text-white text-5xl md:text-7xl lg:text-8xl font-oswald font-extrabold uppercase leading-none tracking-tighter mb-4">
            {t.tech.heading1} <span className="text-blue-600 dark:text-blue-500">{t.tech.headingHighlight}</span>
          </h2>

          <div className="flex items-center gap-8 md:gap-12">
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
            <h3 className="text-slate-900 dark:text-white text-3xl md:text-5xl lg:text-6xl font-oswald font-extrabold uppercase leading-none tracking-[0.2em] whitespace-nowrap">
              {t.tech.heading2}
            </h3>
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stack.map((group, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#0d1633] p-8 md:p-10 border-2 border-slate-200 dark:border-blue-900/40 hover:border-blue-600 transition-all duration-300 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <h4 className="text-2xl font-oswald font-extrabold uppercase tracking-tight text-blue-600 dark:text-blue-400 mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
                {group.category}
              </h4>
              <ul className="space-y-3">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-slate-700 dark:text-slate-300 font-sans tracking-tight">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
