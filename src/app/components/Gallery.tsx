import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1464895216333-21a8f1c8d2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200',
    alt: 'Completed roof construction',
    span: 'col-span-2 row-span-2'
  },
  {
    url: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200',
    alt: 'Modern facade renovation',
    span: 'col-span-1 row-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200',
    alt: 'Elegant bathroom renovation',
    span: 'col-span-1 row-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200',
    alt: 'Scandinavian bedroom interior',
    span: 'col-span-1 row-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1736390800504-d3963b553aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcmVub3ZhdGlvbiUyMG1vZGVybiUyMHdoaXRlfGVufDF8fHx8MTc3MDIwMzUwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Modern kitchen renovation',
    span: 'col-span-1 row-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1655373617557-7138d45582d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mJTIwY29uc3RydWN0aW9uJTIwdGlsZXMlMjBub3JkaWN8ZW58MXx8fHwxNzcwMjgxNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Roof construction detail',
    span: 'col-span-2 row-span-1'
  }
];

export function Gallery() {
  const { t } = useLanguage();
  
  return (
    <section id="gallery" className="bg-white py-24 px-8 lg:px-16">
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
            {t('gallery.title')}
          </h2>
          <p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`${image.span} overflow-hidden group cursor-pointer`}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
