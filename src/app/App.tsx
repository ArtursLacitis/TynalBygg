import { Services, ScaffoldingRental } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { HeroFeatures } from './components/HeroFeatures';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Globe, FileText } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import logoImage from '../assets/tinal-bygg-white.svg';
import heroImage from '../assets/2.webp';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

function AppContent() {
  const { language, setLanguage, t } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavCTA, setShowNavCTA] = useState(false);
  const heroCtaRef = useRef<HTMLButtonElement>(null);

  // Preload hero image
  useEffect(() => {
    const existing = document.querySelector(`link[rel="preload"][href="${heroImage}"]`);
    if (existing) return;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroImage;
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);
  }, []);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check if hero CTA button is out of view
      if (heroCtaRef.current) {
        const rect = heroCtaRef.current.getBoundingClientRect();
        // Show nav CTA when hero CTA has scrolled past the top of viewport
        setShowNavCTA(rect.bottom < 0);
      }
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
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={heroImage}
            alt="TINAL BYGG AB Interior"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />

          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Navigation Bar */}
        <nav className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 min-[1150px]:px-10 xl:px-16 backdrop-blur-md transition-all duration-700 ease-in-out ${isScrolled ? 'bg-black/70' : 'bg-black/30'
          } ${showNavCTA ? 'py-3' : 'py-4'}`}>
          <div className="flex items-center justify-between min-[1150px]:grid min-[1150px]:grid-cols-[1fr_auto_1fr] min-[1150px]:items-center">
            {/* Logo - Left */}
            <div className="flex-shrink-0 -ml-2">
              <img
                src={logoImage}
                alt="TINAL BYGG AB"
                className="h-12 cursor-pointer transition-opacity hover:opacity-80"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </div>

            {/* Navigation Menu - Center */}
            <ul className="hidden min-[1150px]:flex items-center gap-4 xl:gap-6 text-white justify-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li className="cursor-pointer transition-all duration-300 hover:text-gray-300 font-medium tracking-wide text-base" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                {t('nav.home')}
              </li>
              <li className="cursor-pointer transition-all duration-300 hover:text-gray-300 font-medium tracking-wide text-base" onClick={() => scrollToSection('about')}>
                {t('nav.about')}
              </li>
              <li className="cursor-pointer transition-all duration-300 hover:text-gray-300 font-medium tracking-wide text-base" onClick={() => scrollToSection('services')}>
                {t('nav.services')}
              </li>
              <li className="cursor-pointer transition-all duration-300 hover:text-gray-300 font-medium tracking-wide text-base" onClick={() => scrollToSection('gallery')}>
                {t('nav.gallery')}
              </li>
              <li className="cursor-pointer transition-all duration-300 hover:text-gray-300 font-medium tracking-wide text-base" onClick={() => scrollToSection('contact')}>
                {t('nav.contact')}
              </li>
            </ul>

            {/* CTA & Language Switcher - Right */}
            <div className="flex items-center justify-end gap-3 sm:gap-4 min-[1150px]:gap-6 ml-auto min-[1150px]:ml-0">{/* Changed from gap-4 to gap-6 */}
              {/* CTA Button - Only show when scrolled */}
              {showNavCTA && (
                <button
                  aria-label={t('nav.cta')}
                  className="text-white px-3 py-2 min-[1150px]:px-5 min-[1150px]:py-2 font-medium text-xs min-[1150px]:text-sm tracking-wide transition-all hover:shadow-md hover:bg-[#2f3f8a] animate-fadeIn border-r-2 cursor-pointer rounded-md bg-[#384A9C] flex items-center gap-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  onClick={() => window.open('https://tally.so/r/7Rx0B9', '_blank')}
                >
                  <FileText className="h-4 w-4" />
                  <span className="min-[500px]:hidden">Fill application</span>
                  <span className="hidden min-[500px]:inline">{t('nav.cta')}</span>
                </button>
              )}

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Globe className="w-5 h-5" />
                  <span className="text-sm font-medium uppercase hidden min-[1150px]:inline">{language}</span>
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
          </div>
        </nav>

        {/* Hero Content - Centered */}
        <div className="relative z-10 flex h-[calc(100vh-88px)] flex-col items-center justify-center px-8 text-center pt-20">
          <h1
            className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-8"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            TINAL BYGG AB
          </h1>

          <p
            className="text-white/90 text-xl md:text-2xl lg:text-3xl font-light tracking-wide max-w-2xl mb-10"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t('hero.subtitle')}
          </p>

          {/* CTA Button */}
          <button
            ref={heroCtaRef}
            className="text-white px-8 py-4 font-medium text-base tracking-wide transition-all hover:shadow-md hover:bg-[#2f3f8a] duration-300 rounded-md cursor-pointer bg-[#384A9C]"
            style={{ fontFamily: 'Inter, sans-serif' }}
            onClick={() => window.open('https://tally.so/r/7Rx0B9', '_blank')}
          >
            {t('nav.cta')}
          </button>

          {/* Optional: Subtle scroll indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 text-white/60 px-[0px] py-[11px]">
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
      <WhyChooseUs />
      <Services />
      <ScaffoldingRental />
      <About />
      <Gallery />
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
