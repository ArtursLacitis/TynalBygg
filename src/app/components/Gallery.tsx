import image_1 from '../../assets/1.webp';
import image_2 from '../../assets/2.webp';
import image_3 from '../../assets/3.webp';
import image_4 from '../../assets/4.webp';
import image_6 from '../../assets/6.webp';
import image_7 from '../../assets/7.webp';
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
    url: image_1,
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
    url: image_7,
    alt: 'Roof construction detail',
    span: 'col-span-2 row-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1763665814605-a6489a3bf2a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mJTIwY29uc3RydWN0aW9uJTIwd29ya2VyfGVufDF8fHx8MTc3MTIxMjY0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Roof construction worker',
    span: 'col-span-1 row-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1590880265945-6b43effeb599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMHRpbGVzfGVufDF8fHx8MTc3MTIxODY5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Modern bathroom tiles',
    span: 'col-span-2 row-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1699625809637-31c6f327ac96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGZhY2FkZSUyMHJlbm92YXRpb258ZW58MXx8fHwxNzcxMjM2MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Building facade renovation',
    span: 'col-span-1 row-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1635961365604-c001fd0ea2b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzY2FmZm9sZGluZyUyMHNpdGU8ZW58MXx8fHwxNzcxMjM2MTM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Construction scaffolding site',
    span: 'col-span-1 row-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MTE4MjI5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Modern house exterior',
    span: 'col-span-1 row-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1646592474094-342fbc28736c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHJlbm92YXRpb24lMjByb29tfGVufDF8fHx8MTc3MTIzNjEzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Interior renovation room',
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
