import { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { 
  FiUser, 
  FiPhoneCall, 
  FiMail, 
  FiSend, 
  FiCheckCircle 
} from 'react-icons/fi';
import { 
  FaTelegramPlane, 
  FaInstagram, 
  FaTiktok, 
  FaFacebookF,
  FaYoutube
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Direct submission to wisedigitals2@gmail.com via FormSubmit AJAX service
      const response = await fetch("https://formsubmit.co/ajax/wisedigitals2@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone || 'N/A',
          email: formData.email,
          subject: formData.subject || 'New Contact Inquiry - Wise Digital',
          message: formData.message,
          _subject: `New Inquiry from ${formData.name} - Wise Digital`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json();
      if (response.ok || data.success === "true" || data.success === true) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission error');
      }
    } catch (error) {
      // Fallback: Opens user's email client directly targeted to wisedigitals2@gmail.com
      const mailtoUrl = `mailto:wisedigitals2@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'New Client Inquiry - Wise Digital'
      )}&body=${encodeURIComponent(
        `Full Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, '_blank');
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  // Addis Ababa coordinates
  const mapCenter = [9.02497, 38.74689];

  return (
    <section id="contact" className="py-24 md:py-36 bg-slate-50 dark:bg-[#070b19] transition-colors duration-300 overflow-hidden">
      <div className="container-custom">
        {/* Title */}
        <div className="mb-20 text-center lg:text-left">
          <p className="text-blue-600 dark:text-blue-400 text-sm md:text-lg font-oswald font-bold tracking-[0.4em] mb-8 uppercase opacity-90 border-l-4 border-blue-600 pl-6">
            {t.contact.tag}
          </p>
          
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-oswald font-extrabold uppercase leading-none tracking-tight mb-4">
            {t.contact.heading1} <span className="text-blue-600 dark:text-blue-500">{t.contact.headingHighlight}</span>
          </h2>

          <div className="flex items-center gap-4 sm:gap-8 md:gap-12">
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
            <h3 className="text-slate-900 dark:text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald font-extrabold uppercase leading-none tracking-normal sm:tracking-[0.2em] text-center">
              {t.contact.heading2}
            </h3>
            <div className="flex-1 h-1 bg-blue-600/30 dark:bg-blue-400/20" />
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          {/* Contact Details & Map */}
          <div className="space-y-12">
            <div className="space-y-8 bg-white dark:bg-[#0d1633] p-8 md:p-10 rounded-2xl border-2 border-slate-200 dark:border-blue-900/40 shadow-xl">
              
              {/* CEO Contact */}
              <div className="group flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-950/80 flex items-center justify-center shrink-0 border-2 border-blue-200 dark:border-blue-800 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-blue-600 dark:text-blue-400">
                  <FiUser className="w-7 h-7" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-oswald font-bold tracking-[0.2em] text-slate-400 uppercase">
                    {t.contact.leadership}
                  </span>
                  <span className="text-2xl font-oswald font-extrabold text-slate-900 dark:text-white">
                    {language === 'am' ? 'ሚኪያስ አበበ' : 'Mikiyas Abebe'}
                  </span>
                  <span className="text-sm font-sans text-blue-600 dark:text-blue-400 font-semibold">
                    {language === 'am' ? 'ዋና ስራ አስፈፃሚ እና የማህበራዊ ሚዲያ ስራ አስኪያጅ' : 'CEO & Social Media Manager'}
                  </span>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="group flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-950/80 flex items-center justify-center shrink-0 border-2 border-blue-200 dark:border-blue-800 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-blue-600 dark:text-blue-400">
                  <FiPhoneCall className="w-7 h-7" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-oswald font-bold tracking-[0.2em] text-slate-400 uppercase">
                    {t.contact.directPhone}
                  </span>
                  <a href="tel:0929136693" className="text-2xl md:text-3xl font-oswald font-extrabold text-slate-900 dark:text-white hover:text-blue-600 transition-colors">
                    0929136693
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-950/80 flex items-center justify-center shrink-0 border-2 border-blue-200 dark:border-blue-800 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-blue-600 dark:text-blue-400">
                  <FiMail className="w-7 h-7" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-oswald font-bold tracking-[0.2em] text-slate-400 uppercase">
                    {t.contact.officialEmail}
                  </span>
                  <a href="mailto:wisedigitals2@gmail.com" className="text-xl md:text-2xl font-oswald font-extrabold text-slate-900 dark:text-white hover:text-blue-600 transition-colors break-all">
                    wisedigitals2@gmail.com
                  </a>
                </div>
              </div>

              {/* Official Social Channels */}
              <div className="pt-4 border-t border-slate-100 dark:border-blue-900/40">
                <span className="text-xs font-oswald font-bold tracking-[0.2em] text-slate-400 uppercase block mb-3">
                  {t.contact.officialChannels}
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <a 
                    href="https://t.me/wisedigitals21" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="Telegram: @wisedigitals21"
                    aria-label="Telegram"
                    className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 border border-blue-200/60 dark:border-blue-800/60 shadow-sm flex items-center justify-center hover:scale-105 active:scale-95"
                  >
                    <FaTelegramPlane className="w-5 h-5" />
                  </a>

                  <a 
                    href="https://www.instagram.com/wise_digital_solutions/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="Instagram: @wise_digital_solutions"
                    aria-label="Instagram"
                    className="w-12 h-12 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all duration-300 border border-pink-200/60 dark:border-pink-900/60 shadow-sm flex items-center justify-center hover:scale-105 active:scale-95"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>

                  <a 
                    href="https://www.tiktok.com/@wisedigitalgroup" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="TikTok: @wisedigitalgroup"
                    aria-label="TikTok"
                    className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:bg-black hover:text-white transition-all duration-300 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center hover:scale-105 active:scale-95"
                  >
                    <FaTiktok className="w-5 h-5" />
                  </a>

                  <a 
                    href="https://www.facebook.com/wisedigitalgroups" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="Facebook: Wise Digitals"
                    aria-label="Facebook"
                    className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-blue-200/60 dark:border-blue-800/60 shadow-sm flex items-center justify-center hover:scale-105 active:scale-95"
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </a>

                  <a 
                    href="https://www.youtube.com/@Mickyabtube" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="YouTube: Mickyab_official"
                    aria-label="YouTube"
                    className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white transition-all duration-300 border border-red-200/60 dark:border-red-900/60 shadow-sm flex items-center justify-center hover:scale-105 active:scale-95"
                  >
                    <FaYoutube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[360px] rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-blue-900/40 shadow-xl">
              <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={false} className="h-full w-full">
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <CircleMarker center={mapCenter} radius={12} pathOptions={{ color: '#1D4ED8', fillColor: '#2563EB', fillOpacity: 0.9 }}>
                  <Popup>
                    <div className="font-sans font-bold">
                      Wise Digital<br />
                      <span className="text-xs font-normal">Addis Ababa, Ethiopia</span>
                    </div>
                  </Popup>
                </CircleMarker>
              </MapContainer>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-[#0d1633] rounded-2xl p-10 md:p-14 shadow-2xl border-2 border-slate-200 dark:border-blue-900/40 relative">
            <h2 className="text-3xl md:text-5xl font-oswald font-extrabold text-slate-900 dark:text-white mb-8 uppercase tracking-tight leading-none border-b-4 border-blue-600 pb-4 inline-block">
              {t.contact.formTitle}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-oswald font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-blue-950 bg-slate-50 dark:bg-[#070b19] text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-600 focus:outline-none transition-all font-sans text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs font-oswald font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {t.contact.phoneLabel}
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="09..."
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-blue-950 bg-slate-50 dark:bg-[#070b19] text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-600 focus:outline-none transition-all font-sans text-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-oswald font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-blue-950 bg-slate-50 dark:bg-[#070b19] text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-600 focus:outline-none transition-all font-sans text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-xs font-oswald font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {t.contact.serviceLabel}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-blue-950 bg-slate-50 dark:bg-[#070b19] text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-600 focus:outline-none transition-all font-sans text-lg"
                  >
                    <option value="">{t.contact.serviceSelect}</option>
                    <option value="Content Creation">{t.contact.serviceOptions.content}</option>
                    <option value="Video Editing">{t.contact.serviceOptions.video}</option>
                    <option value="Graphics Design">{t.contact.serviceOptions.graphics}</option>
                    <option value="Website Development">{t.contact.serviceOptions.web}</option>
                    <option value="Event Organizing">{t.contact.serviceOptions.event}</option>
                    <option value="Other">{t.contact.serviceOptions.other}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-oswald font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-blue-950 bg-slate-50 dark:bg-[#070b19] text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-600 focus:outline-none resize-none transition-all font-sans text-lg"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-oswald font-extrabold uppercase tracking-[0.2em] text-xl transition-all shadow-lg active:translate-y-0.5 disabled:opacity-50 flex items-center justify-center gap-3"
              >
                <span>{isSubmitting ? t.contact.submittingBtn : t.contact.submitBtn}</span>
                <FiSend className="w-5 h-5" />
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-blue-600 text-white rounded-xl font-oswald font-bold uppercase tracking-wider text-center shadow-md flex items-center justify-center gap-2">
                  <FiCheckCircle className="w-5 h-5" />
                  <span>{t.contact.successMsg}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
