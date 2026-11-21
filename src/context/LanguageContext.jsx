import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      why: 'Why Us',
      services: 'Services',
      team: 'Team',
      portfolio: 'Portfolio',
      partners: 'Partners',
      faq: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      slides: [
        {
          title: 'CREATIVE',
          highlight: 'DIGITAL',
          suffix: 'MARKETING',
          sub: 'Crafting high-impact content, viral social campaigns, and driving exponential brand growth.',
        },
        {
          title: 'CINEMATIC',
          highlight: 'MEDIA &',
          suffix: 'PRODUCTION',
          sub: 'From professional video editing and cinematography to unforgettable event production and visual storytelling.',
        },
        {
          title: 'INNOVATIVE',
          highlight: 'WEB &',
          suffix: 'GRAPHICS',
          sub: 'Engineering custom websites, striking graphics, and modern brand identities tailored for your success.',
        },
      ],
      workTogether: "Let's Work Together",
      ourServices: 'Our Services',
    },
    about: {
      tag: 'WHO WE ARE • ABOUT US',
      heading1: 'WE HAVE OVER',
      headingHighlight: '3+ YEARS',
      heading2: 'IN MEDIA & DIGITAL CREATION',
      points: [
        'Wise Digital is a dynamic creative media and digital marketing powerhouse founded with a mission to elevate brands through compelling visual storytelling, viral social strategies, and innovative tech.',
        'Our multidisciplinary team unites visionary directors, cinematographers, video editors, graphic designers, social media managers, and software engineers under one roof.',
        'With over 3+ years of industry experience, we deliver end-to-end creative solutions: from viral content creation and commercial video production to custom website engineering and event organizing.',
      ],
      exploreBtn: 'Explore Our Services',
      workWithUsBtn: 'Work With Us',
      badgeTitle: 'Wise Digital',
      badgeSub: 'Your Trusted Digital & Media Partner',
    },
    why: {
      tag: 'THE ADVANTAGE • WHY CHOOSE US',
      heading1: 'WHY',
      headingHighlight: 'WISE',
      heading2: 'YOUR COMPETITIVE EDGE',
      reasons: [
        {
          id: 1,
          title: 'Creative Excellence',
          desc: 'Top-tier cinematographers, visual directors, and graphic designers crafting visuals that turn heads.',
        },
        {
          id: 2,
          title: 'Viral Social Reach',
          desc: 'Data-driven marketing and video strategies that explode engagement across TikTok, Instagram, and Telegram.',
        },
        {
          id: 3,
          title: 'End-to-End Service',
          desc: 'From initial concept and video shoots to custom web development and major event coordination.',
        },
        {
          id: 4,
          title: 'Proven Track Record',
          desc: 'Trusted by leading clinics, automotive firms, beauty brands, and enterprises for 3+ years.',
        },
      ],
      standard: 'Wise Standard',
    },
    services: {
      tag: 'WHAT WE DO • OUR SERVICES',
      heading1: 'OUR CORE',
      headingHighlight: 'SERVICES',
      heading2: 'CREATIVE & DIGITAL POWER',
      startService: 'Start this service',
      items: [
        {
          id: 1,
          title: 'Content Creation',
          desc: 'Engaging, viral-ready digital content crafted for social platforms, influencer campaigns, and modern brand storytelling that drives real reach.',
          badge: 'Social & Brand',
        },
        {
          id: 2,
          title: 'Video Editing',
          desc: 'Cinematic video editing, color grading, commercial ads, TikTok/Reels optimization, and dynamic visual storytelling with high production value.',
          badge: 'Cinematography',
        },
        {
          id: 3,
          title: 'Graphics Design',
          desc: 'Striking brand identities, logos, promotional flyers, corporate branding packages, and modern digital assets that make your brand unforgettable.',
          badge: 'Visual Identity',
        },
        {
          id: 4,
          title: 'Website Development',
          desc: 'Custom, responsive, lightning-fast websites and web applications built with modern frameworks to showcase your services and scale your business.',
          badge: 'Web & Systems',
        },
        {
          id: 5,
          title: 'Event Organizing',
          desc: 'Comprehensive event planning, stage production, audiovisual coordination, media coverage, and live broadcast services for unforgettable events.',
          badge: 'Event Production',
        },
      ],
    },
    teams: {
      tag: 'OUR TALENT • THE EXPERTS',
      heading1: 'MEET THE',
      headingHighlight: 'EXPERTS',
      heading2: 'THE CORE TEAM',
    },
    projects: {
      tag: 'OUR PORTFOLIO • SHOWCASE',
      heading1: 'FEATURED',
      headingHighlight: 'PROJECTS',
      heading2: 'WISE DIGITAL SHOWCASE',
      filterAll: 'All Projects',
      filterWeb: 'Websites & Apps',
      filterVideo: 'Video Production',
      visitWebsite: 'Visit Website',
      watchVideo: 'Watch Commercial',
      viewDetails: 'View Details',
      closeModal: 'Close',
    },
    tech: {
      tag: 'OUR TOOLKIT • CAPABILITIES',
      heading1: 'TOOLS &',
      headingHighlight: 'TECH',
      heading2: 'CREATIVE & TECH STACK',
    },
    partners: {
      tag: 'PROVEN PARTNERSHIPS',
      heading1: 'Our Emblematic',
      headingHighlight: 'Clients',
      sub: 'Trusted by leading brands, enterprises, and emerging creative businesses across Ethiopia.',
      hint: 'Hover or tap any logo to reveal color',
    },
    faq: {
      tag: 'GOT QUESTIONS? • FAQ',
      heading1: 'FREQUENTLY',
      headingHighlight: 'ASKED',
      heading2: 'QUESTIONS & ANSWERS',
      items: [
        {
          q: 'What services does Wise Digital provide?',
          a: 'Wise Digital is a full-service creative media, marketing, and tech agency. We specialize in Content Creation, Cinematic Video Editing, Professional Graphics Design & Visual Identity, Custom Website Development, and Complete Event Organizing & Production.',
        },
        {
          q: 'How do I initiate a project or partnership?',
          a: 'You can directly contact our CEO Mikiyas Abebe via phone at 0929136693, message us on Telegram at @wisedigitals21, email us at wisedigitals2@gmail.com, or submit the contact form on this website. We reply promptly to schedule a strategy session.',
        },
        {
          q: 'Where can I see your latest content and creative work?',
          a: 'You can follow our work on Instagram (@wise_creatives), TikTok (@wise_creatives), Telegram (@wisedigitals21), and Facebook (Wise Digital groups). We regularly post behind-the-scenes, finished client videos, and graphics.',
        },
        {
          q: 'What equipment and standards do your video and media teams use?',
          a: 'Our cinematography and photography lead Aaron Yonas and the media crew utilize high-end cinema cameras, stabilized gimbals, professional lighting systems, and industry-grade color grading and audio mastering tools.',
        },
        {
          q: 'Do you offer custom web development and mobile solutions?',
          a: 'Yes! Our software engineering team builds blazing-fast, responsive modern websites and mobile applications tailored to your business operations and brand identity.',
        },
      ],
    },
    contact: {
      tag: 'GET IN TOUCH • CONTACT US',
      heading1: "LET'S CREATE",
      headingHighlight: 'TOGETHER',
      heading2: 'WISE DIGITAL',
      leadership: 'Leadership',
      directPhone: 'Direct Phone / Telegram',
      officialEmail: 'Official Email',
      officialChannels: 'Official Channels',
      formTitle: 'Send a Message',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Abebe Kebede',
      phoneLabel: 'Phone Number',
      emailLabel: 'Email Address',
      emailPlaceholder: 'yourname@gmail.com',
      serviceLabel: 'Service Interested In',
      serviceSelect: 'Select a Service',
      serviceOptions: {
        content: 'Content Creation',
        video: 'Video Editing',
        graphics: 'Graphics Design',
        web: 'Website Development',
        event: 'Event Organizing',
        other: 'Other Project',
      },
      messageLabel: 'Project Brief & Details',
      messagePlaceholder: 'Tell us about your brand, goals, and timeline...',
      submitBtn: 'SEND MESSAGE TO WISE DIGITAL',
      submittingBtn: 'SENDING MESSAGE...',
      successMsg: 'Message sent! We will contact you shortly.',
    },
    footer: {
      slogan: 'Empowering brands through high-impact content creation, video editing, graphics design, modern websites, and premier events.',
      copyright: 'WISE DIGITAL. ALL RIGHTS RESERVED.',
    },
  },
  am: {
    nav: {
      home: 'መነሻ',
      about: 'ስለ እኛ',
      why: 'ለምን እኛ',
      services: 'አገልግሎቶች',
      team: 'ቡድናችን',
      portfolio: 'ስራዎቻችን',
      partners: 'አጋሮች',
      faq: 'ጥያቄዎች',
      contact: 'ያግኙን',
    },
    hero: {
      slides: [
        {
          title: 'የፈጠራ',
          highlight: 'ዲጂታል',
          suffix: 'ማርኬቲንግ',
          sub: 'ተጽዕኖ ፈጣሪ ዲጂታል ይዘት፣ የማህበራዊ ሚዲያ ተደራሽነት እና ፈጣን የብራንድ እድገትን እንፈጥራለን።',
        },
        {
          title: 'ሲኒማቲክ',
          highlight: 'ሚዲያ እና',
          suffix: 'ፕሮዳክሽን',
          sub: 'ከሙያዊ ቪዲዮ ኤዲቲንግ እና ካሜራ ስራ እስከ ልዩ ዝግጅቶች ዝግጅት እና ማራኪ ታሪኮች ድረስ።',
        },
        {
          title: 'ዘመናዊ',
          highlight: 'ዌብሳይትና',
          suffix: 'ግራፊክስ',
          sub: 'ፈጣንና ዘመናዊ ዌብሳይቶችን፣ ተወዳጅ ግራፊክስ ዲዛይኖችን እና ጠንካራ የድርጅት መለያዎችን እንገነባለን።',
        },
      ],
      workTogether: 'አብረን እንስራ',
      ourServices: 'አገልግሎቶቻችን',
    },
    about: {
      tag: 'ስለ እኛ • ማን ነን?',
      heading1: 'ከ 3+ ዓመታት በላይ',
      headingHighlight: 'ልምድ',
      heading2: 'በሚዲያ እና ዲጂታል ፈጠራ',
      points: [
        'ዋይዝ ዲጂታል በስነ-ጥበብ የታገዘ ዲጂታል ሚዲያ፣ የማህበራዊ ሚዲያ ስልት እና የቴክኖሎጂ አቅምን በማጣመር ድርጅቶችን ወደ ላቀ ደረጃ የሚያሸጋግር ተቋም ነው።',
        'የስራ ቡድናችን የፈጠራ ዳይሬክተሮችን፣ ሲኒማቶግራፈሮችን፣ የቪዲዮ ኤዲተሮችን፣ ግራፊክ ዲዛይነሮችን፣ የማህበራዊ ሚዲያ ባለሙያዎችን እና የሶፍትዌር ኢንጂነሮችን በአንድነት ያካተተ ነው።',
        'ከ3 ዓመታት በላይ ባካበትነው ልምድ፡ ተወዳጅ የቪዲዮ ይዘቶች ዝግጅት፣ የቴሌቪዥንና ዲጂታል ማስታወቂያዎች፣ ዘመናዊ ዌብሳይቶች እና የተሟላ የዝግጅት ማስተባበር አገልግሎቶችን እናቀርባለን።',
      ],
      exploreBtn: 'አገልግሎቶቻችንን ይመልከቱ',
      workWithUsBtn: 'አብረውን ይስሩ',
      badgeTitle: 'ዋይዝ ዲጂታል',
      badgeSub: 'የታመነ የዲጂታል እና ሚዲያ አጋርዎ',
    },
    why: {
      tag: 'የኛ ብልጫ • ለምን እኛን ይመርጣሉ?',
      heading1: 'ለምን',
      headingHighlight: 'ዋይዝ',
      heading2: 'የእርስዎ የውድድር ብልጫ',
      reasons: [
        {
          id: 1,
          title: 'የፈጠራ ልቀት',
          desc: 'ከፍተኛ ደረጃ ያላቸው ሲኒማቶግራፈሮች፣ ዳይሬክተሮች እና ዲዛይነሮች የደንበኛን ቀልብ የሚስቡ ስራዎችን ይፈጥራሉ።',
        },
        {
          id: 2,
          title: 'ፈጣን የማህበራዊ ሚዲያ እድገት',
          desc: 'በቲክቶክ፣ ኢንስታግራም እና ቴሌግራም ላይ በውጤት የተረጋገጠ የማርኬቲንግ እና የቪዲዮ ስልት።',
        },
        {
          id: 3,
          title: 'የተሟላ አገልግሎት',
          desc: 'ከመጀመሪያው የሃሳብ አመነጫጨት እና ቪዲዮ ቀረጻ ጀምሮ እስከ ዌብሳይት ማበልጸግ እና ኢቨንት ማዘጋጀት ድረስ።',
        },
        {
          id: 4,
          title: 'የተረጋገጠ የስራ ውጤት',
          desc: 'በታዋቂ ክሊኒኮች፣ አውቶሞቲቭ ተቋማት፣ የውበት ሳሎኖችና የንግድ ድርጅቶች ዘንድ ለ3+ ዓመታት የታመነ።',
        },
      ],
      standard: 'የዋይዝ ደረጃ',
    },
    services: {
      tag: 'የምንሰራቸው ስራዎች • አገልግሎቶች',
      heading1: 'ዋና ዋና',
      headingHighlight: 'አገልግሎቶቻችን',
      heading2: 'የፈጠራ እና ዲጂታል ጥንካሬ',
      startService: 'አገልግሎቱን ጀምር',
      items: [
        {
          id: 1,
          title: 'ኮንተንት ክሪኤሽን',
          desc: 'ለማህበራዊ ሚዲያ፣ ለኢንፍሉወንሰር ዘመቻዎች እና ለብራንድ ግንባታ ተስማሚ የሆኑ ተወዳጅና ሳቢ የዲጂታል ይዘቶች ዝግጅት።',
          badge: 'ማህበራዊ ሚዲያ',
        },
        {
          id: 2,
          title: 'ቪዲዮ ኤዲቲንግ',
          desc: 'ሲኒማቲክ የቪዲዮ ኤዲቲንግ፣ የቀለም ማስተካከያ (Color Grading)፣ የቴሌቪዥንና የቲክቶክ/ሪልስ ማስታወቂያዎች በከፍተኛ ጥራት።',
          badge: 'ሲኒማቶግራፊ',
        },
        {
          id: 3,
          title: 'ግራፊክስ ዲዛይን',
          desc: 'ማራኪ የሎጎ፣ የፖስተር፣ የፍላየር እና የተሟላ የድርጅት መለያ (Branding) ዲዛይኖች በልዩ ውበት።',
          badge: 'ቪዥዋል አይደንቲቲ',
        },
        {
          id: 4,
          title: 'ዌብሳይት መስራት',
          desc: 'ለተጠቃሚ ምቹ፣ ፈጣን እና ዘመናዊ የሆኑ ዌብሳይቶችን እና ሲስተሞችን ለድርጅትዎ ስራ በሚመጥን መልኩ እንሰራለን።',
          badge: 'ዌብና ሲስተም',
        },
        {
          id: 5,
          title: 'ኢቨንት ማዘጋጀት',
          desc: 'የተሟላ የዝግጅት ማስተባበር፣ የመድረክ እና ድምጽ ዝግጅት፣ የሚዲያ ሽፋን እና የቀጥታ ስርጭት ስራዎች።',
          badge: 'የዝግጅት ፕሮዳክሽን',
        },
      ],
    },
    teams: {
      tag: 'የኛ ባለሙያዎች • የፈጠራ ቡድናችን',
      heading1: 'ባለሙያዎቻችንን',
      headingHighlight: 'ይወቁ',
      heading2: 'ዋናው የስራ ቡድን',
    },
    projects: {
      tag: 'ስራዎቻችን • ፖርትፎሊዮ',
      heading1: 'የተመረጡ',
      headingHighlight: 'ስራዎቻችን',
      heading2: 'የዋይዝ ዲጂታል የስራ ማሳያ',
      filterAll: 'ሁሉም ስራዎች',
      filterWeb: 'ዌብሳይቶችና አፖች',
      filterVideo: 'የቪዲዮ ፕሮዳክሽን',
      visitWebsite: 'ዌብሳይቱን ይጎብኙ',
      watchVideo: 'ቪዲዮውን ይመልከቱ',
      viewDetails: 'ዝርዝሩን ይመልከቱ',
      closeModal: 'ዝጋ',
    },
    tech: {
      tag: 'የምንጠቀምባቸው መሳሪያዎች • ቴክኖሎጂ',
      heading1: 'መሳሪያዎችና',
      headingHighlight: 'ቴክኖሎጂ',
      heading2: 'የፈጠራና የቴክ ስብስባችን',
    },
    partners: {
      tag: 'የተረጋገጠ አጋርነት',
      heading1: 'የተከበሩ',
      headingHighlight: 'ደንበኞቻችን',
      sub: 'በኢትዮጵያ ውስጥ ባሉ መሪ ብራንዶች እና ፈጣን እድገት ባላቸው ድርጅቶች የታመነ።',
      hint: 'ቀለሙን ለማየት ሎጎውን ይጫኑ ወይም ያሳልፉ',
    },
    faq: {
      tag: 'ተደጋጋሚ ጥያቄዎች • FAQ',
      heading1: 'ተደጋግመው',
      headingHighlight: 'የሚነሱ',
      heading2: 'ጥያቄዎች እና መልሶች',
      items: [
        {
          q: 'ዋይዝ ዲጂታል ምን አይነት አገልግሎቶችን ይሰጣል?',
          a: 'ዋይዝ ዲጂታል የተሟላ የሚዲያ፣ የማርኬቲንግ እና የቴክኖሎጂ ተቋም ነው። በኮንተንት ክሪኤሽን፣ በሲኒማቲክ ቪዲዮ ኤዲቲንግ፣ በግራፊክስ ዲዛይን፣ በዌብሳይትና አፕሊኬሽን ስራ እንዲሁም በኢቨንት ዝግጅት ላይ በልህቀት እንሰራለን።',
        },
        {
          q: 'ስራ ለማስጀመር ወይም አብሮ ለመስራት እንዴት ማግኘት ይቻላል?',
          a: 'ዋና ስራ አስፈፃሚያችን ሚኪያስ አበበን በስልክ ቁጥር 0929136693፣ በቴሌግራም @wisedigitals21፣ በኢሜይል wisedigitals2@gmail.com ወይም በዚህ ዌብሳይት ላይ ባለው ቅጽ መልእክት በመላክ በቀላሉ ማግኘት ይችላሉ።',
        },
        {
          q: 'የተሰሩ ስራዎችን የት ማየት እችላለሁ?',
          a: 'በኢንስታግራም (@wise_creatives)፣ በቲክቶክ (@wise_creatives)፣ በቴሌግራም (@wisedigitals21) እንዲሁም በፌስቡክ (Wise Digital groups) ላይ የቅርብ ስራዎቻችንን መከታተል ይችላሉ።',
        },
        {
          q: 'የቪዲዮ እና የሚዲያ ቡድናችሁ ምን አይነት እቃዎችን ይጠቀማል?',
          a: 'የሲኒማቶግራፊ እና ፎቶግራፊ ባለሙያችን አሮን ዮናስ እና የሚዲያ ቡድናችን ዘመናዊ ሲኒማ ካሜራዎችን፣ ጊምባሎችን፣ ፕሮፌሽናል መብራቶችን እና አለም አቀፍ ደረጃ ያላቸውን የኤዲቲንግ ሶፍትዌሮችን ይጠቀማሉ።',
        },
        {
          q: 'የዌብሳይት እና የሞባይል አፕሊኬሽን አገልግሎት አላችሁ?',
          a: 'አዎ! የሶፍትዌር ባለሙያዎቻችን ለድርጅትዎ ስራ የሚመጥኑ፣ ፈጣንና ዘመናዊ ዌብሳይቶችን እና የሞባይል አፕሊኬሽኖችን ያዘጋጃሉ።',
        },
      ],
    },
    contact: {
      tag: 'ያግኙን • መልእክት ይላኩ',
      heading1: 'አብረን',
      headingHighlight: 'እንስራ',
      heading2: 'ዋይዝ ዲጂታል',
      leadership: 'አመራር',
      directPhone: 'ቀጥታ ስልክ / ቴሌግራም',
      officialEmail: 'ይፋዊ ኢሜይል',
      officialChannels: 'ይፋዊ ማህበራዊ ሚዲያዎች',
      formTitle: 'መልእክት ይላኩ',
      nameLabel: 'ሙሉ ስም',
      namePlaceholder: 'ምሳሌ፦ አበበ ከበደ',
      phoneLabel: 'ስልክ ቁጥር',
      emailLabel: 'ኢሜይል አድራሻ',
      emailPlaceholder: 'yourname@gmail.com',
      serviceLabel: 'የሚፈልጉት አገልግሎት',
      serviceSelect: 'አገልግሎት ይምረጡ',
      serviceOptions: {
        content: 'ኮንተንት ክሪኤሽን',
        video: 'ቪዲዮ ኤዲቲንግ',
        graphics: 'ግራፊክስ ዲዛይን',
        web: 'ዌብሳይት መስራት',
        event: 'ኢቨንት ማዘጋጀት',
        other: 'ሌላ ፕሮጀክት',
      },
      messageLabel: 'የስራው ዝርዝርና መረጃ',
      messagePlaceholder: 'ስለ ድርጅትዎ፣ ስለሚፈልጉት ስራ እና የጊዜ ሰሌዳ ይንገሩን...',
      submitBtn: 'መልእክቱን ወደ ዋይዝ ዲጂታል ይላኩ',
      submittingBtn: 'መልእክቱ እየተላከ ነው...',
      successMsg: 'መልእክትዎ ደርሶናል! በአጭር ጊዜ ውስጥ እናገኝዎታለን።',
    },
    footer: {
      slogan: 'በተጽዕኖ ፈጣሪ ኮንተንት ክሪኤሽን፣ በቪዲዮ ኤዲቲንግ፣ በግራፊክስ ዲዛይን፣ በዘመናዊ ዌብሳይቶች እና ልዩ ዝግጅቶች ድርጅቶችን እናሳድጋለን።',
      copyright: 'ዋይዝ ዲጂታል. መብቱ በህግ የተጠበቀ ነው።',
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('wise_lang') || 'en';
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === 'en' ? 'am' : 'en';
      localStorage.setItem('wise_lang', next);
      return next;
    });
  };

  const setSpecificLanguage = (lang) => {
    if (lang === 'en' || lang === 'am') {
      setLanguage(lang);
      localStorage.setItem('wise_lang', lang);
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage: setSpecificLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
