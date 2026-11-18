import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Services from '../../pages/Services';
import Teams from '../../pages/Teams';
import WhyChooseUs from '../../pages/WhyChooseUs';
import TechStack from '../../pages/TechStack';
import Projects from '../../pages/Projects';
import Partners from '../../pages/Partners';
import FAQ from '../../pages/FAQ';
import Contact from '../../pages/Contact';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#181a29] transition-colors duration-300">
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <div className="pt-20"> {/* Unified spacing for subsequent sections */}
          <section id="about"><About /></section>
          <section id="why"><WhyChooseUs /></section>
          <section id="services"><Services /></section>
          <section id="teams"><Teams /></section>
          <section id="projects"><Projects /></section>
          <section id="tech-stack"><TechStack /></section>
          <section id="partners"><Partners /></section>
          <section id="faq"><FAQ /></section>
          <section id="contact"><Contact /></section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
