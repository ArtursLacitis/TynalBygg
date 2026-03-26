import { Clock, Award, Users, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const features = [
  {
    icon: Clock,
    titleKey: 'why.reliable.title',
    descKey: 'why.reliable.text'
  },
  {
    icon: Award,
    titleKey: 'why.quality.title',
    descKey: 'why.quality.text'
  },
  {
    icon: Users,
    titleKey: 'why.skilled.title',
    descKey: 'why.skilled.text'
  },
  {
    icon: ThumbsUp,
    titleKey: 'why.satisfaction.title',
    descKey: 'why.satisfaction.text'
  }
];

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="bg-gray-900 px-6 pt-40 pb-56 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto mb-24 max-w-2xl text-center lg:mb-28">
          <h2
            className="text-4xl md:text-5xl"
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 600,
              lineHeight: '1.15'
            }}
          >
            {t('why.title')}
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-gray-300"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: '1.75'
            }}
          >
            {t('why.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16 lg:gap-y-20 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="mx-auto flex max-w-[280px] flex-col items-center text-center px-4 py-6"
              >
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: '#384A9C' }}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.5} style={{ color: '#D7DEFF' }} />
                </div>

                <h3
                  className="text-xl md:text-2xl"
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontWeight: 600,
                    lineHeight: '1.25'
                  }}
                >
                  {t(feature.titleKey)}
                </h3>

                <p
                  className="mt-3 text-gray-300"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    lineHeight: '1.7'
                  }}
                >
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
