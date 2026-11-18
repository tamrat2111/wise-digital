import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What services does Wise Digital provide?',
      answer: 'Wise Digital is a full-service creative media, marketing, and tech agency. We specialize in Content Creation, Cinematic Video Editing, Professional Graphics Design & Visual Identity, Custom Website Development, and Complete Event Organizing & Production.',
    },
    {
      question: 'How do I initiate a project or partnership?',
      answer: 'You can directly contact our CEO Mikiyas Abebe via phone at 0929136693, message us on Telegram at @wisedigitals21, email us at wisedigitals2@gmail.com, or submit the contact form on this website. We reply promptly to schedule a strategy session.',
    },
    {
      question: 'Where can I see your latest content and creative work?',
      answer: 'You can follow our work on Instagram (@wise_creatives), TikTok (@wise_creatives), Telegram (@wisedigitals21), and Facebook (Wise Digital groups). We regularly post behind-the-scenes, finished client videos, and graphics.',
    },
    {
      question: 'What equipment and standards do your video and media teams use?',
      answer: 'Our cinematography and photography lead Aaron Yonas and the media crew utilize high-end mirrorless/cinema cameras, stabilized gimbals, professional lighting systems, and industry-grade color grading and audio mastering tools.',
    },
    {
      question: 'Do you offer custom web development and mobile solutions?',
      answer: 'Yes! Our software engineering lead Yonas Getaw builds blazing-fast, responsive modern websites and mobile applications tailored to your business operations and brand identity.',
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-slate-50 dark:bg-[#070b19] transition-colors duration-300 overflow-hidden">
      <div className="container-custom">
        {/* Title */}
        <div className="mb-20 text-center lg:text-left">
           <p className="text-blue-600 dark:text-blue-400 text-sm md:text-lg font-oswald font-bold tracking-[0.4em] mb-10 uppercase opacity-90 border-l-4 border-blue-600 pl-6">
            GOT QUESTIONS? • ተደጋጋሚ ጥያቄዎች
          </p>
          
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-oswald font-extrabold uppercase leading-none tracking-tight mb-4">
            FREQUENTLY <span className="text-blue-600 dark:text-blue-500">ASKED</span>
          </h2>

          <div className="flex items-center gap-4 sm:gap-8 md:gap-12">
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
            <h3 className="text-slate-900 dark:text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-oswald font-extrabold uppercase leading-none tracking-normal sm:tracking-[0.2em] text-center">
              QUESTIONS & ANSWERS
            </h3>
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border-2 border-slate-200 dark:border-blue-900/40 bg-white dark:bg-[#0d1633] overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-xl md:text-2xl font-oswald font-extrabold uppercase tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-4">
                  {faq.question}
                </span>
                <span className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border-2 transition-transform duration-300 ${openIndex === index ? 'bg-blue-600 text-white border-blue-600 rotate-180' : 'border-slate-300 dark:border-slate-700 text-slate-500'}`}>
                  <FiChevronDown className="w-5 h-5" />
                </span>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6 animate-fade-in">
                  <div className="h-0.5 bg-blue-100 dark:bg-blue-900/40 mb-4" />
                  <p className="text-slate-600 dark:text-slate-300 text-lg font-sans leading-relaxed">
                    {faq.answer}
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
