import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { HeroFeatures } from './components/HeroFeatures';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

function AppContent() {
  const { language, setLanguage, t } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const languages = [
    { code: 'en' as const, label: 'English' },
    { code: 'sv' as const, label: 'Svenska' },
    { code: 'lv' as const, label: 'Latviešu' }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden bg-gray-900">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            poster="https://images.unsplash.com/photo-1629712842196-ac46826d9863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBjb25zdHJ1Y3Rpb24lMjByb29mJTIwY3JhZnRzbWFuJTIwd29ya3xlbnwxfHx8fDE3NzAyODA1OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          >
            {/* Placeholder - Replace with actual video URL */}
            <source src="/path-to-your-video.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Navigation Bar */}
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'py-2 bg-black/30' : 'py-5 bg-black/30'
          }`}>
          {/* Logo */}
          <div
            className={`text-white font-semibold tracking-wide cursor-pointer transition-all duration-300 ${isScrolled ? 'text-base' : 'text-lg'
              }`}
            style={{ fontFamily: 'Inter, sans-serif' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            TINAL BYGG AB
          </div>

          {/* Navigation Menu */}
          <ul className="hidden md:flex items-center gap-6 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            <li className={`cursor-pointer transition-all duration-300 hover:text-gray-300 font-medium tracking-wide ${isScrolled ? 'text-sm' : (language === 'lv' ? 'text-[15px]' : 'text-base')
              }`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              {t('nav.home')}
            </li>
            <li className={`cursor-pointer transition-all duration-300 hover:text-gray-300 font-medium tracking-wide ${isScrolled ? 'text-sm' : (language === 'lv' ? 'text-[15px]' : 'text-base')
              }`} onClick={() => scrollToSection('about')}>
              {t('nav.about')}
            </li>
            <li className={`cursor-pointer transition-all duration-300 hover:text-gray-300 font-medium tracking-wide ${isScrolled ? 'text-sm' : (language === 'lv' ? 'text-[15px]' : 'text-base')
              }`} onClick={() => scrollToSection('services')}>
              {t('nav.services')}
            </li>
            <li className={`cursor-pointer transition-all duration-300 hover:text-gray-300 font-medium tracking-wide ${isScrolled ? 'text-sm' : (language === 'lv' ? 'text-[15px]' : 'text-base')
              }`} onClick={() => scrollToSection('gallery')}>
              {t('nav.gallery')}
            </li>
            <li className={`cursor-pointer transition-all duration-300 hover:text-gray-300 font-medium tracking-wide ${isScrolled ? 'text-sm' : (language === 'lv' ? 'text-[15px]' : 'text-base')
              }`} onClick={() => scrollToSection('contact')}>
              {t('nav.contact')}
            </li>
          </ul>

          {/* CTA & Language Switcher */}
          <div className="flex items-center gap-6">{/* Changed from gap-4 to gap-6 */}
            {/* CTA Button */}
            <button
              className="bg-white text-gray-900 px-6 py-3 font-medium text-sm tracking-wide transition-all hover:bg-gray-300 hover:shadow-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
              onClick={() => window.open('https://tally.so/r/7Rx0B9', '_blank')}
            >
              {t('nav.cta')}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium uppercase">{language}</span>
              </button>

              {showLangMenu && (
                <div className="absolute top-full mt-2 right-0 bg-white rounded shadow-lg py-2 min-w-[140px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLangMenu(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${language === lang.code
                        ? 'bg-gray-100 text-gray-900 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Hero Content - Centered */}
        <div className="relative z-10 flex h-[calc(100vh-88px)] flex-col items-center justify-center px-8 text-center">
          <h1
            className="text-white mb-6 text-6xl md:text-7xl lg:text-8xl tracking-tight"
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.02em'
            }}
          >
            {t('hero.title')}
          </h1>

          <p
            className="text-white/90 text-xl md:text-2xl lg:text-3xl font-light tracking-wide max-w-2xl"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t('hero.subtitle')}
          </p>

          {/* Optional: Subtle scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 text-white/60">
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                {t('hero.scroll')}
              </span>
              <div className="w-px h-12 bg-white/40"></div>
            </div>
          </div>
        </div>
      </div>

      {/* All Sections Below Hero */}
      <HeroFeatures />
      <Services />
      <About />
      <Gallery />
      <WhyChooseUs />
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
          <p className="text-gray-400 text-sm">
            {t('footer.rights')}
          </p>
          <p className="text-gray-500 text-xs mt-2">
            {t('footer.org')}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}