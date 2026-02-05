import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

const services = [
  {
    titleKey: 'services.painter',
    descKey: 'services.painter.desc',
    image: 'https://images.unsplash.com/photo-1655373617557-7138d45582d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mJTIwY29uc3RydWN0aW9uJTIwdGlsZXMlMjBub3JkaWN8ZW58MXx8fHwxNzcwMjgxNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.electrician',
    descKey: 'services.electrician.desc',
    image: 'https://images.unsplash.com/photo-1758862502366-92fd33c49ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNhZGUlMjByZW5vdmF0aW9uJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcwMjgxNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.tile',
    descKey: 'services.tile.desc',
    image: 'https://images.unsplash.com/photo-1769154075736-388b14877f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMGludGVyaW9yJTIwc2NhbmRpbmF2aWFufGVufDF8fHx8MTc3MDI4MTYyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.roof',
    descKey: 'services.roof.desc',
    image: 'https://images.unsplash.com/photo-1759978257038-ff90be507a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb20lMjBub3JkaWN8ZW58MXx8fHwxNzcwMjgxNjI0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.windows',
    descKey: 'services.windows.desc',
    image: 'https://images.unsplash.com/photo-1655373617557-7138d45582d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mJTIwY29uc3RydWN0aW9uJTIwdGlsZXMlMjBub3JkaWN8ZW58MXx8fHwxNzcwMjgxNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.masonry',
    descKey: 'services.masonry.desc',
    image: 'https://images.unsplash.com/photo-1758862502366-92fd33c49ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNhZGUlMjByZW5vdmF0aW9uJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcwMjgxNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.pool',
    descKey: 'services.pool.desc',
    image: 'https://images.unsplash.com/photo-1769154075736-388b14877f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMGludGVyaW9yJTIwc2NhbmRpbmF2aWFufGVufDF8fHx8MTc3MDI4MTYyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.renovation',
    descKey: 'services.renovation.desc',
    image: 'https://images.unsplash.com/photo-1759978257038-ff90be507a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb20lMjBub3JkaWN8ZW58MXx8fHwxNzcwMjgxNjI0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.concrete',
    descKey: 'services.concrete.desc',
    image: 'https://images.unsplash.com/photo-1655373617557-7138d45582d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mJTIwY29uc3RydWN0aW9uJTIwdGlsZXMlMjBub3JkaWN8ZW58MXx8fHwxNzcwMjgxNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.metal',
    descKey: 'services.metal.desc',
    image: 'https://images.unsplash.com/photo-1758862502366-92fd33c49ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNhZGUlMjByZW5vdmF0aW9uJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcwMjgxNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

// Scaffolding configurations
const scaffoldingOptions = [
  { size: '3x3', weekPrice: 500, length: 3, maxWork: 4, maxStand: 2, depth: 1.6, floors: 1, weight: 350 },
  { size: '3x6', weekPrice: 700, length: 6, maxWork: 4, maxStand: 2, depth: 1.6, floors: 1, weight: 600 },
  { size: '3x9', weekPrice: 900, length: 9, maxWork: 4, maxStand: 2, depth: 1.6, floors: 1, weight: 850 },
  { size: '3x12', weekPrice: 1100, length: 12, maxWork: 4, maxStand: 2, depth: 1.6, floors: 1, weight: 1100 },
  { size: '3x15', weekPrice: 1300, length: 15, maxWork: 4, maxStand: 2, depth: 1.6, floors: 1, weight: 1300 },
  { size: '3x18', weekPrice: 1500, length: 18, maxWork: 4, maxStand: 2, depth: 1.6, floors: 1, weight: 1550 },
  { size: '3x21', weekPrice: 1700, length: 21, maxWork: 4, maxStand: 2, depth: 1.6, floors: 1, weight: 1800 },
  { size: '3x24', weekPrice: 1900, length: 24, maxWork: 4, maxStand: 2, depth: 1.6, floors: 1, weight: 1950 },
  { size: '6x6', weekPrice: 1000, length: 6, maxWork: 7, maxStand: 5, depth: 1.6, floors: 2, weight: 1200 },
  { size: '6x9', weekPrice: 1400, length: 9, maxWork: 7, maxStand: 5, depth: 1.6, floors: 2, weight: 1500 },
  { size: '6x12', weekPrice: 1800, length: 12, maxWork: 7, maxStand: 5, depth: 1.6, floors: 2, weight: 2050 },
  { size: '6x15', weekPrice: 2200, length: 15, maxWork: 7, maxStand: 5, depth: 1.6, floors: 2, weight: 2500 },
  { size: '6x18', weekPrice: 2600, length: 18, maxWork: 7, maxStand: 5, depth: 1.6, floors: 2, weight: 2900 },
  { size: '9x3+3x3', weekPrice: 1200, length: 9, maxWork: '4, torn 7', maxStand: '2, torn 5', depth: 1.6, floors: 2, weight: 1100, special: true }
];

export function Services() {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="bg-white py-24 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl mb-4"
            style={{ 
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 600,
              color: '#1a1a1a'
            }}
          >
            {t('services.title')}
          </h2>
          <p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-4 h-64">
                <ImageWithFallback
                  src={service.image}
                  alt={t(service.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 
                className="text-xl md:text-2xl mb-2"
                style={{ 
                  fontFamily: 'Oswald, sans-serif',
                  fontWeight: 600,
                  color: '#1a1a1a'
                }}
              >
                {t(service.titleKey)}
              </h3>
              <p 
                className="text-gray-600 leading-relaxed text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {t(service.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Scaffolding Rental Section */}
        <div className="mt-20 border-t border-gray-200 pt-20">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl mb-4"
              style={{ 
                fontFamily: 'Oswald, sans-serif',
                fontWeight: 600,
                color: '#1a1a1a'
              }}
            >
              {t('services.scaffolding')}
            </h2>
            <p 
              className="text-gray-600 text-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {t('services.scaffolding.subtitle')}
            </p>
          </div>

          {/* Scaffolding Price Table */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              {scaffoldingOptions.map((option, index) => (
                <div key={index} className="bg-gray-50 p-6 border border-gray-200">
                  <h3 
                    className="text-3xl mb-2 text-center"
                    style={{ 
                      fontFamily: 'Oswald, sans-serif',
                      fontWeight: 600,
                      color: '#1a1a1a'
                    }}
                  >
                    {option.size}
                  </h3>
                  <p className="text-center text-gray-900 font-semibold mb-4">
                    {t('services.scaffolding.week')} {option.weekPrice} kr
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• {t('services.scaffolding.length')}: {option.length} {t('services.scaffolding.meter')}</li>
                    <li>• {t('services.scaffolding.maxwork')}: {option.maxWork} {t('services.scaffolding.meter')}</li>
                    <li>• {t('services.scaffolding.maxstand')}: {option.maxStand} {t('services.scaffolding.meter')}</li>
                    <li>• {t('services.scaffolding.depth')}: {option.depth} {t('services.scaffolding.meter')}</li>
                    <li>• {t('services.scaffolding.floors')}: {option.floors} {t('services.scaffolding.plan')}</li>
                    <li>• {t('services.scaffolding.weight')}: ca {option.weight}kg</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
