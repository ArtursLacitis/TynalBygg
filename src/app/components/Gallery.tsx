import image_2 from '../../assets/2.webp';
import image_3 from '../../assets/3.webp';
import image_4 from '../../assets/4.webp';
import image_6 from '../../assets/6.webp';
import image_7 from '../../assets/7.webp';
import image_34 from '../../assets/34.webp';
import image_46 from '../../assets/46.webp';
import image_20 from '../../assets/20.webp';
import image_13 from '../../assets/13.webp';
import image_29 from '../../assets/29.webp';
import image_49 from '../../assets/49.webp';
import image_50 from '../../assets/50.webp';
import image_31 from '../../assets/31.webp';
import image_41 from '../../assets/41.webp';
import image_26 from '../../assets/26.webp';
import image_48 from '../../assets/48.webp';
import image_21 from '../../assets/21.webp';
import image_12 from '../../assets/12.webp';
import image_37 from '../../assets/37.webp';
import image_39 from '../../assets/39.webp';
import image_51 from '../../assets/51.webp';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

const galleryImages = [
  {
    url: image_3,
    alt: 'Completed roof construction',
    span: 'col-span-2 row-span-2'
  },
  {
    url: image_2,
    alt: 'Modern facade renovation',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_39,
    alt: 'Elegant bathroom renovation',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_4,
    alt: 'Scandinavian bedroom interior',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_6,
    alt: 'Modern kitchen renovation',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_34,
    alt: 'Orange tile roof construction with blue scaffolding',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_7,
    alt: 'Roof construction detail',
    span: 'col-span-2 row-span-1'
  },
  {
    url: image_46,
    alt: 'Interior renovation - Empty room with beautiful arched windows',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_20,
    alt: 'Interior hallway renovation with wooden flooring',
    span: 'col-span-1 row-span-2'
  },
  {
    url: image_13,
    alt: 'Tile roof construction in progress with red tiles',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_29,
    alt: 'Modern bathroom renovation with white vanity and large mirror',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_49,
    alt: 'Wooden deck terrace with tile roof construction',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_50,
    alt: 'Attic room renovation with skylight windows and wooden flooring',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_31,
    alt: 'Modern kitchen renovation with white cabinets and wooden flooring',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_41,
    alt: 'Construction site with wooden frame and scaffolding',
    span: 'col-span-2 row-span-1'
  },
  {
    url: image_26,
    alt: 'Yellow tile roof with dormer window and modern design',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_48,
    alt: 'Construction wooden framework at dusk',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_21,
    alt: 'Roof construction in progress with wooden framework',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_12,
    alt: 'Roof construction framework with wooden beams',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_37,
    alt: 'Red facade renovation with dormer windows and rooftop terrace at dusk',
    span: 'col-span-1 row-span-1'
  },
  {
    url: image_51,
    alt: 'Modern kitchen with white cabinets and black countertops',
    span: 'col-span-1 row-span-1'
  }
];

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="bg-gray-900 py-24 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-white"
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 600,
              fontSize: '34px',
              lineHeight: '1.5'
            }}
          >
            {t('gallery.title')}
          </h2>
          <p
            className="text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '1.5' }}
          >
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.span} overflow-hidden group cursor-pointer rounded-lg`}
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
