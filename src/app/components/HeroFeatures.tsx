import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function HeroFeatures() {
  const { t } = useLanguage();

  const features = [
    'hero.features.1',
    'hero.features.2',
    'hero.features.3',
    'hero.features.4',
    'hero.features.5',
    'hero.features.6'
  ];

  return (
    <section className="bg-white py-20 px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2
          className="mb-12 text-center"
          style={{
            fontFamily: 'Oswald, sans-serif',
            fontWeight: 600,
            color: '#1a1a1a',
            fontSize: '34px',
            lineHeight: '1.5'
          }}
        >
          {t('hero.features.title')}
        </h2>

        <div className="space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#384A9C' }}>
                <Check className="w-4 h-4" strokeWidth={3} style={{ color: '#D7DEFF' }} />
              </div>
              <p className="text-gray-700" style={{ fontSize: '16px', lineHeight: '1.5' }}>
                {t(feature)}
              </p>
            </div>
          ))}

          <p
            className="mt-10 text-center"
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 600,
              color: '#1a1a1a',
              fontSize: '22px',
              lineHeight: '1.5'
            }}
          >
            {t('hero.features.conclusion')}
          </p>
        </div>
      </div>
    </section>
  );
}