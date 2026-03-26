import { Services } from './components/Services';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { HeroFeatures } from './components/HeroFeatures';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Globe, FileText } from 'lucide-react';
import { DotLottieReact, type DotLottie } from '@lottiefiles/dotlottie-react';
import { useState, useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import logoImage from '../assets/tinal-bygg-white.svg';
import heroImage from '../assets/25.webp';
import documentLottie from '../assets/Document.json?url';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

function renderAnimatedChars(text: string, layer: 'base' | 'hover') {
  return (
    <span data-button-animate-chars="" className="inline-flex">
      {Array.from(text).map((char, index) => (
        <span
          key={`${layer}-${char}-${index}`}
          className="inline-flex h-6 overflow-hidden align-top"
          style={{
            whiteSpace: char === ' ' ? 'pre' : undefined
          }}
        >
          <span
            className={`inline-block transition-transform duration-500 ${layer === 'base' ? 'group-hover:-translate-y-full' : 'translate-y-full group-hover:translate-y-0'
              }`}
            style={{
              transitionDelay: `${index * 0.01}s`,
              transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
              whiteSpace: char === ' ' ? 'pre' : undefined
            }}
          >
            {char}
          </span>
        </span>
      ))}
    </span>
  );
}

function AppContent() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavCTA, setShowNavCTA] = useState(false);
  const heroCtaRef = useRef<HTMLButtonElement>(null);
  const heroCtaLottieRef = useRef<DotLottie | null>(null);

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

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sv' : 'en');
  };

  const playHeroCtaLottie = () => {
    const animation = heroCtaLottieRef.current;
    if (!animation) return;

    animation.stop();
    animation.play();
  };

  const stopHeroCtaLottie = () => {
    heroCtaLottieRef.current?.stop();
  };

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
              <li className="cursor-pointer transition-all duration-300 hover:text-gray-300 font-medium tracking-wide text-base" onClick={() => scrollToSection('why-us')}>
                {t('nav.why-us')}
              </li>
              <li className="cursor-pointer transition-all duration-300 hover:text-gray-300 font-medium tracking-wide text-base" onClick={() => scrollToSection('services')}>
                {t('nav.services')}
              </li>
              <li className="cursor-pointer transition-all duration-300 hover:text-gray-300 font-medium tracking-wide text-base" onClick={() => scrollToSection('about')}>
                {t('nav.about')}
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

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
                aria-label={`Switch language to ${language === 'en' ? 'sv' : 'en'}`}
              >
                <Globe className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wide sm:text-sm">
                  {language}
                </span>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content - Centered */}
        <div className="relative z-10 flex h-[calc(100vh-88px)] flex-col items-center justify-center px-8 text-center pt-20">
          <h1
            className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            TINAL BYGG AB
          </h1>

          <p
            className="text-white/90 text-xl md:text-2xl lg:text-3xl font-light tracking-wide max-w-2xl mb-16"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t('hero.subtitle')}
          </p>

          {/* CTA Button */}
          <button
            ref={heroCtaRef}
            aria-label={t('nav.cta')}
            className="group flex cursor-pointer items-center gap-3 overflow-hidden rounded-md bg-[#384A9C] px-4 py-2 text-white hover:bg-[#2f3f8a] hover:shadow-[0_16px_34px_rgba(18,27,67,0.35)]"
            style={{
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 10px 24px rgba(56, 74, 156, 0.22)'
            }}
            onMouseEnter={playHeroCtaLottie}
            onMouseLeave={stopHeroCtaLottie}
            onFocus={playHeroCtaLottie}
            onBlur={stopHeroCtaLottie}
            onClick={() => window.open('https://tally.so/r/7Rx0B9', '_blank')}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center">
              <DotLottieReact
                src={documentLottie}
                loop={false}
                autoplay={false}
                className="pointer-events-none h-8 w-8"
                dotLottieRefCallback={(dotLottie) => {
                  heroCtaLottieRef.current = dotLottie;
                  dotLottie?.stop();
                }}
              />
            </span>
            <span className="relative block h-6 overflow-hidden text-base font-medium tracking-wide">
              <span className="block">
                {renderAnimatedChars(t('nav.cta'), 'base')}
              </span>
              <span className="absolute inset-x-0 top-0 block">
                {renderAnimatedChars(t('nav.cta'), 'hover')}
              </span>
            </span>
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
      <About />
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
      <Analytics />
    </LanguageProvider>
  );
}
