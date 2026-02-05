import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="bg-gray-50 py-24 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="h-[600px] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765519313320-22b0865e9c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjcmFmdHNtYW4lMjBwcm9mZXNzaW9uYWwlMjB3b3JrfGVufDF8fHx8MTc3MDI4MTYyNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional craftsman at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <h2 
              className="text-5xl md:text-6xl mb-8"
              style={{ 
                fontFamily: 'Oswald, sans-serif',
                fontWeight: 600,
                color: '#1a1a1a'
              }}
            >
              {t('about.title')}
            </h2>
            
            <div className="space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('about.intro')}
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('about.work')}
              </p>
              
              <div className="pt-4">
                <h3 
                  className="text-2xl mb-4"
                  style={{ 
                    fontFamily: 'Oswald, sans-serif',
                    fontWeight: 600,
                    color: '#1a1a1a'
                  }}
                >
                  {t('about.experience.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.experience.text')}
                </p>
              </div>

              <div className="pt-4">
                <h3 
                  className="text-2xl mb-4"
                  style={{ 
                    fontFamily: 'Oswald, sans-serif',
                    fontWeight: 600,
                    color: '#1a1a1a'
                  }}
                >
                  {t('about.reliability.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.reliability.text')}
                </p>
              </div>

              <div className="pt-4">
                <h3 
                  className="text-2xl mb-4"
                  style={{ 
                    fontFamily: 'Oswald, sans-serif',
                    fontWeight: 600,
                    color: '#1a1a1a'
                  }}
                >
                  {t('about.quality.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.quality.text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}