import placeholder from '../../assets/11.webp';
import bkrBadge from '../../assets/bkr-behorig-vatrum.svg';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-gray-900 py-48 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="h-[600px] overflow-hidden rounded-2xl shadow-2xl shadow-black/25">
              <ImageWithFallback
                src={placeholder}
                alt="Professional craftsman at work"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <h2
              className="text-5xl md:text-6xl mb-20"
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontWeight: 600,
                color: '#FFFFFF'
              }}
            >
              {t('about.title')}
            </h2>

            <div className="space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p className="text-white/85 text-lg leading-relaxed mb-8">
                {t('about.intro')}
              </p>

              <p className="text-white/85 text-lg leading-relaxed">
                {t('about.work')}
              </p>

              <div className="pt-8">
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontWeight: 600,
                    color: '#FFFFFF'
                  }}
                >
                  {t('about.experience.title')}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {t('about.experience.text')}
                </p>
              </div>

              <div className="pt-8">
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontWeight: 600,
                    color: '#FFFFFF'
                  }}
                >
                  {t('about.reliability.title')}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {t('about.reliability.text')}
                </p>
              </div>

              <div className="pt-8">
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontWeight: 600,
                    color: '#FFFFFF'
                  }}
                >
                  {t('about.quality.title')}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {t('about.quality.text')}
                </p>

                <a
                  href="https://www.bkr.se/hitta-foretag/skane/svalovs-kommun/tinal-bygg-ab/1303401"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('about.badge.link')}
                  className="mt-12 flex w-full max-w-md items-center gap-5 rounded-2xl border border-white/15 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <img
                    src={bkrBadge}
                    alt={t('about.badge.alt')}
                    className="h-24 w-24 shrink-0 rounded-2xl"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="min-w-0">
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.24em] text-[#384A9C]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {t('about.badge.eyebrow')}
                    </p>
                    <p
                      className="mt-2 text-base font-medium leading-snug text-gray-900"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {t('about.badge.text')}
                    </p>
                    <span
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#384A9C]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {t('about.badge.link')}
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
