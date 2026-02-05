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
    <section id="why-us" className="bg-gray-900 text-white py-24 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl mb-4"
            style={{ 
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 600
            }}
          >
            {t('why.title')}
          </h2>
          <p 
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t('why.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white/10 rounded-full">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 
                  className="text-xl mb-3"
                  style={{ 
                    fontFamily: 'Oswald, sans-serif',
                    fontWeight: 600
                  }}
                >
                  {t(feature.titleKey)}
                </h3>
                <p 
                  className="text-gray-300 leading-relaxed text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
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