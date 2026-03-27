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
    <span data-button-animate-chars="" className="inline-flex h-[1.55em] items-center leading-[1.05]">
      {Array.from(text).map((char, index) => (
        <span
          key={`${layer}-${char}-${index}`}
          className="inline-flex h-[1.55em] items-center overflow-hidden align-middle"
          style={{
            whiteSpace: char === ' ' ? 'pre' : undefined
          }}
        >
          <span
            className={`inline-block transition-transform duration-500 will-change-transform ${layer === 'base' ? 'group-hover:-translate-y-[140%]' : 'translate-y-[140%] group-hover:translate-y-0'
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

function AnimatedCtaLabel({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span className={`relative inline-flex h-[1.55em] items-center overflow-hidden align-middle leading-[1.05] ${className}`}>
      <span className="flex h-full items-center">
        {renderAnimatedChars(text, 'base')}
      </span>
      <span className="absolute inset-0 flex items-center">
        {renderAnimatedChars(text, 'hover')}
      </span>
    </span>
  );
}

function AppContent() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavCTA, setShowNavCTA] = useState(false);
  const [hoveredNavIndex, setHoveredNavIndex] = useState<number | null>(null);
  const [hoverPillStyle, setHoverPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const heroCtaRef = useRef<HTMLButtonElement>(null);
  const heroCtaLottieRef = useRef<DotLottie | null>(null);
  const navCtaLottieRef = useRef<DotLottie | null>(null);
  const navListRef = useRef<HTMLUListElement>(null);
  const navItemRefs = useRef<Array<HTMLLIElement | null>>([]);

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

  const playCtaLottie = (animation: DotLottie | null) => {
    if (!animation) return;

    animation.stop();
    animation.play();
  };

  const stopCtaLottie = (animation: DotLottie | null) => {
    animation?.stop();
  };

  useEffect(() => {
    if (hoveredNavIndex === null) {
      setHoverPillStyle((current) => ({ ...current, opacity: 0 }));
      return;
    }

    const navItem = navItemRefs.current[hoveredNavIndex];
    const navList = navListRef.current;
    if (!navItem || !navList) return;

    const itemRect = navItem.getBoundingClientRect();
    const listRect = navList.getBoundingClientRect();

    setHoverPillStyle({
      left: itemRect.left - listRect.left,
      width: itemRect.width,
      opacity: 1
    });
  }, [hoveredNavIndex, language]);

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
        <nav className={`fixed top-0 left-0 right-0 z-50 px-8 sm:px-6 min-[1150px]:px-10 xl:px-16 backdrop-blur-md transition-all duration-700 ease-in-out ${isScrolled ? 'bg-black/70' : 'bg-black/30'
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
            <ul
              ref={navListRef}
              className="relative hidden min-[1150px]:flex items-center justify-center gap-2 xl:gap-3 text-white"
              style={{ fontFamily: 'Inter, sans-serif' }}
              onMouseLeave={() => setHoveredNavIndex(null)}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 rounded-full bg-white/10 transition-all duration-300 ease-out"
                style={{
                  left: `${hoverPillStyle.left}px`,
                  width: `${hoverPillStyle.width}px`,
                  opacity: hoverPillStyle.opacity
                }}
              />
              <li
                ref={(element) => {
                  navItemRefs.current[0] = element;
                }}
                className="relative cursor-pointer rounded-full px-4 py-2"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                onMouseEnter={() => setHoveredNavIndex(0)}
                onFocus={() => setHoveredNavIndex(0)}
              >
                <span className={`relative block font-medium tracking-wide text-base transition-all duration-300 ease-out ${hoveredNavIndex === 0 ? 'text-white' : 'text-white/82'}`}>
                  {t('nav.home')}
                </span>
              </li>
              <li
                ref={(element) => {
                  navItemRefs.current[1] = element;
                }}
                className="relative cursor-pointer rounded-full px-4 py-2"
                onClick={() => scrollToSection('why-us')}
                onMouseEnter={() => setHoveredNavIndex(1)}
                onFocus={() => setHoveredNavIndex(1)}
              >
                <span className={`relative block font-medium tracking-wide text-base transition-all duration-300 ease-out ${hoveredNavIndex === 1 ? 'text-white' : 'text-white/82'}`}>
                  {t('nav.why-us')}
                </span>
              </li>
              <li
                ref={(element) => {
                  navItemRefs.current[2] = element;
                }}
                className="relative cursor-pointer rounded-full px-4 py-2"
                onClick={() => scrollToSection('services')}
                onMouseEnter={() => setHoveredNavIndex(2)}
                onFocus={() => setHoveredNavIndex(2)}
              >
                <span className={`relative block font-medium tracking-wide text-base transition-all duration-300 ease-out ${hoveredNavIndex === 2 ? 'text-white' : 'text-white/82'}`}>
                  {t('nav.services')}
                </span>
              </li>
              <li
                ref={(element) => {
                  navItemRefs.current[3] = element;
                }}
                className="relative cursor-pointer rounded-full px-4 py-2"
                onClick={() => scrollToSection('about')}
                onMouseEnter={() => setHoveredNavIndex(3)}
                onFocus={() => setHoveredNavIndex(3)}
              >
                <span className={`relative block font-medium tracking-wide text-base transition-all duration-300 ease-out ${hoveredNavIndex === 3 ? 'text-white' : 'text-white/82'}`}>
                  {t('nav.about')}
                </span>
              </li>
              <li
                ref={(element) => {
                  navItemRefs.current[4] = element;
                }}
                className="relative cursor-pointer rounded-full px-4 py-2"
                onClick={() => scrollToSection('contact')}
                onMouseEnter={() => setHoveredNavIndex(4)}
                onFocus={() => setHoveredNavIndex(4)}
              >
                <span className={`relative block font-medium tracking-wide text-base transition-all duration-300 ease-out ${hoveredNavIndex === 4 ? 'text-white' : 'text-white/82'}`}>
                  {t('nav.contact')}
                </span>
              </li>
            </ul>

            {/* CTA & Language Switcher - Right */}
            <div className="flex items-center justify-end gap-3 sm:gap-4 min-[1150px]:gap-6 ml-auto min-[1150px]:ml-0">{/* Changed from gap-4 to gap-6 */}
              {/* CTA Button - Only show when scrolled */}
              {showNavCTA && (
                <button
                  aria-label={t('nav.cta')}
                  className="group flex cursor-pointer items-center gap-2 overflow-hidden rounded-md bg-[#384A9C] px-3 py-2 text-white transition-all duration-300 hover:bg-[#2f3f8a] min-[1150px]:px-5 min-[1150px]:py-2"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    boxShadow: '0 10px 24px rgba(56, 74, 156, 0.18)'
                  }}
                  onMouseEnter={() => playCtaLottie(navCtaLottieRef.current)}
                  onMouseLeave={() => stopCtaLottie(navCtaLottieRef.current)}
                  onFocus={() => playCtaLottie(navCtaLottieRef.current)}
                  onBlur={() => stopCtaLottie(navCtaLottieRef.current)}
                  onClick={() => window.open('https://tally.so/r/7Rx0B9', '_blank')}
                >
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                    <DotLottieReact
                      src={documentLottie}
                      loop={false}
                      autoplay={false}
                      className="pointer-events-none h-4 w-4"
                      dotLottieRefCallback={(dotLottie) => {
                        navCtaLottieRef.current = dotLottie;
                        dotLottie?.stop();
                      }}
                    />
                  </span>
                  <AnimatedCtaLabel
                    text={t('nav.cta-short')}
                    className="inline-flex items-center text-xs font-medium tracking-wide min-[500px]:hidden"
                  />
                  <AnimatedCtaLabel
                    text={t('nav.cta')}
                    className="hidden items-center text-xs font-medium tracking-wide min-[500px]:inline-flex min-[1150px]:text-sm"
                  />
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
            onMouseEnter={() => playCtaLottie(heroCtaLottieRef.current)}
            onMouseLeave={() => stopCtaLottie(heroCtaLottieRef.current)}
            onFocus={() => playCtaLottie(heroCtaLottieRef.current)}
            onBlur={() => stopCtaLottie(heroCtaLottieRef.current)}
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
            <AnimatedCtaLabel text={t('nav.cta')} className="inline-flex items-center text-base font-medium tracking-wide" />
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
      <footer className="relative isolate overflow-hidden bg-gray-900 px-8 py-12 text-white lg:px-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-[#384A9C]/20 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
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
