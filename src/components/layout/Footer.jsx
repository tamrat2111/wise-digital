import { 
  FaTelegramPlane, 
  FaInstagram, 
  FaTiktok, 
  FaFacebookF 
} from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#teams' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Partners', href: '#partners' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050B1B] text-white relative overflow-hidden pt-16 pb-12 border-t border-blue-900/40">
      {/* Architectural Watermark */}
      <div className="absolute bottom-[-8%] left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 overflow-hidden whitespace-nowrap">
        <h2 className="text-[10rem] md:text-[18rem] lg:text-[22rem] font-oswald font-extrabold text-blue-500/[0.04] uppercase leading-none tracking-tighter">
          WISE DIGITAL
        </h2>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center">
          {/* Main Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base md:text-lg font-oswald font-extrabold uppercase tracking-wider text-slate-400 hover:text-blue-400 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact and Social Hub */}
          <div className="flex flex-col lg:flex-row items-center justify-between w-full border-t border-blue-900/40 pt-10 gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              {/* Logo Link */}
              <a href="/" className="flex items-center justify-center w-16 h-16 bg-white rounded-full overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl shrink-0 border-2 border-blue-500/30">
                <img src="/wise_logo.png" alt="Wise Digital Logo" className="w-full h-full object-contain p-1.5" />
              </a>

              <div>
                <h3 className="text-2xl md:text-3xl font-oswald font-extrabold uppercase tracking-tight mb-1">
                  WISE <span className="text-blue-500">DIGITAL</span>
                </h3>
                <p className="text-sm md:text-base text-slate-400 font-sans max-w-md">
                  Empowering brands through high-impact content creation, video editing, graphics design, modern websites, and premier events.
                </p>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-blue-400 font-sans font-medium">
                  <a href="tel:0929136693" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <FiPhone className="w-4 h-4" />
                    <span>0929136693</span>
                  </a>
                  <a href="mailto:wisedigitals2@gmail.com" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <FiMail className="w-4 h-4" />
                    <span>wisedigitals2@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons with react-icons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a 
                href="https://t.me/wisedigitals21" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Telegram: @wisedigitals21"
                className="w-12 h-12 rounded-xl bg-blue-950/70 hover:bg-blue-600 flex items-center justify-center text-blue-300 hover:text-white transition-all border border-blue-800/60 shadow-lg"
              >
                <FaTelegramPlane className="w-5 h-5" />
              </a>

              <a 
                href="https://instagram.com/wise_creatives" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Instagram: @wise_creatives"
                className="w-12 h-12 rounded-xl bg-blue-950/70 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-500 flex items-center justify-center text-blue-300 hover:text-white transition-all border border-blue-800/60 shadow-lg"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              <a 
                href="https://tiktok.com/@wise_creatives" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="TikTok: @wise_creatives"
                className="w-12 h-12 rounded-xl bg-blue-950/70 hover:bg-black flex items-center justify-center text-blue-300 hover:text-white transition-all border border-blue-800/60 shadow-lg"
              >
                <FaTiktok className="w-5 h-5" />
              </a>

              <a 
                href="https://facebook.com/wisedigitalgroups" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Facebook: Wise Digital groups"
                className="w-12 h-12 rounded-xl bg-blue-950/70 hover:bg-blue-600 flex items-center justify-center text-blue-300 hover:text-white transition-all border border-blue-800/60 shadow-lg"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-12 text-center w-full border-t border-blue-900/40 pt-6">
            <p className="text-sm md:text-base text-slate-400 font-oswald uppercase tracking-[0.2em]">
              &copy; {currentYear} <span className="text-white font-bold">Wise Digital.</span> ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
