import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import { useMemo, useState, useEffect, useRef } from 'react';

const services = [
  {
    titleKey: 'services.painter',
    descKey: 'services.painter.desc',
    image: 'https://images.unsplash.com/photo-1655373617557-7138d45582d4-crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mJTIwY29uc3RydWN0aW9uJTIwdGlsZXMlMjBub3JkaWN8ZW58MXx8fHwxNzcwMjgxNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.electrician',
    descKey: 'services.electrician.desc',
    image: 'https://images.unsplash.com/photo-1758862502366-92fd33c49ab7-crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNhZGUlMjByZW5vdmF0aW9uJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcwMjgxNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.tile',
    descKey: 'services.tile.desc',
    image: 'https://images.unsplash.com/photo-1769154075736-388b14877f12-crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMGludGVyaW9yJTIwc2NhbmRpbmF2aWFufGVufDF8fHx8MTc3MDI4MTYyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.roof',
    descKey: 'services.roof.desc',
    image: 'https://images.unsplash.com/photo-1759978257038-ff90be507a3d-crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb20lMjBub3JkaWN8ZW58MXx8fHwxNzcwMjgxNjI0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.windows',
    descKey: 'services.windows.desc',
    image: 'https://images.unsplash.com/photo-1655373617557-7138d45582d4-crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mJTIwY29uc3RydWN0aW9uJTIwdGlsZXMlMjBub3JkaWN8ZW58MXx8fHwxNzcwMjgxNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.masonry',
    descKey: 'services.masonry.desc',
    image: 'https://images.unsplash.com/photo-1758862502366-92fd33c49ab7-crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNhZGUlMjByZW5vdmF0aW9uJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcwMjgxNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.pool',
    descKey: 'services.pool.desc',
    image: 'https://images.unsplash.com/photo-1769154075736-388b14877f12-crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMGludGVyaW9yJTIwc2NhbmRpbmF2aWFufGVufDF8fHx8MTc3MDI4MTYyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.renovation',
    descKey: 'services.renovation.desc',
    image: 'https://images.unsplash.com/photo-1759978257038-ff90be507a3d-crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb20lMjBub3JkaWN8ZW58MXx8fHwxNzcwMjgxNjI0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.concrete',
    descKey: 'services.concrete.desc',
    image: 'https://images.unsplash.com/photo-1655373617557-7138d45582d4-crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mJTIwY29uc3RydWN0aW9uJTIwdGlsZXMlMjBub3JkaWN8ZW58MXx8fHwxNzcwMjgxNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    titleKey: 'services.metal',
    descKey: 'services.metal.desc',
    image: 'https://images.unsplash.com/photo-1758862502366-92fd33c49ab7-crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNhZGUlMjByZW5vdmF0aW9uJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcwMjgxNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080'
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

type SelectOption = {
  label: string;
  value: string;
};

function CustomSelect({
  id,
  label,
  value,
  options,
  onChange
}: {
  id: string;
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (event: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  const selectedLabel =
    options.find((option) => option.value === value)?.label ?? value;

  return (
    <div ref={containerRef} className="relative">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-800 mb-2">
        {label}
      </label>
      <button
        id={id}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-left focus:outline-none focus:border-gray-900 transition-colors rounded-sm flex items-center justify-between"
      >
        <span>{selectedLabel}</span>
        <span className="text-gray-500">▾</span>
      </button>
      {open && (
        <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`w-full px-4 py-2 text-sm text-left transition-colors ${option.value === value
                  ? 'bg-gray-100 text-gray-900 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
                }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Services() {
  const { t } = useLanguage();
  const selectableOptions = useMemo(
    () =>
      scaffoldingOptions.map((option) => {
        if (option.size.includes('+')) {
          return {
            ...option,
            height: 9,
            length: 3,
            label: option.size
          };
        }
        const [height, length] = option.size.split('x').map(Number);
        return {
          ...option,
          height,
          length,
          label: option.size
        };
      }),
    []
  );

  const heightOptions = useMemo(() => {
    const heights = new Set<number>();
    selectableOptions.forEach((option) => heights.add(option.height));
    return Array.from(heights)
      .sort((a, b) => a - b)
      .map((height) => ({
        value: String(height),
        label: `${height} ${t('services.scaffolding.meter')}`
      }));
  }, [selectableOptions, t]);

  const [selectedHeight, setSelectedHeight] = useState<string>(
    heightOptions[0]?.value ?? '3'
  );

  const lengthOptions = useMemo(() => {
    const lengths = new Map<string, string>();
    selectableOptions
      .filter((option) => String(option.height) === selectedHeight)
      .forEach((option) => {
        const lengthLabel =
          option.size.includes('+') ? '3 + 3' : String(option.length);
        lengths.set(String(option.length), `${lengthLabel} ${t('services.scaffolding.meter')}`);
      });
    return Array.from(lengths.entries()).map(([value, label]) => ({
      value,
      label
    }));
  }, [selectableOptions, selectedHeight, t]);

  const [selectedLength, setSelectedLength] = useState<string>(
    lengthOptions[0]?.value ?? '3'
  );

  useEffect(() => {
    if (!lengthOptions.find((option) => option.value === selectedLength)) {
      setSelectedLength(lengthOptions[0]?.value ?? '3');
    }
  }, [lengthOptions, selectedLength]);

  const selectedOption = useMemo(
    () =>
      selectableOptions.find(
        (option) =>
          String(option.height) === selectedHeight &&
          String(option.length) === selectedLength
      ),
    [selectableOptions, selectedHeight, selectedLength]
  );

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
              <div className="overflow-hidden mb-4 h-64 rounded-md">
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

          {/* Scaffolding Selector */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid lg:grid-cols-2 gap-10" style={{ fontFamily: 'Inter, sans-serif' }}>
              <div className="space-y-6">
                <CustomSelect
                  id="scaffolding-height"
                  label={t('services.scaffolding.maxstand')}
                  value={selectedHeight}
                  options={heightOptions}
                  onChange={setSelectedHeight}
                />

                <CustomSelect
                  id="scaffolding-length"
                  label={t('services.scaffolding.length')}
                  value={selectedLength}
                  options={lengthOptions}
                  onChange={setSelectedLength}
                />
              </div>

              <div className="bg-gray-50 p-6 border border-gray-200 rounded-md">
                {selectedOption ? (
                  <>
                    <h3
                      className="text-3xl mb-2 text-center"
                      style={{
                        fontFamily: 'Oswald, sans-serif',
                        fontWeight: 600,
                        color: '#1a1a1a'
                      }}
                    >
                      {selectedOption.size}
                    </h3>
                    <p className="text-center text-gray-900 font-semibold mb-4">
                      {t('services.scaffolding.week')} {selectedOption.weekPrice} kr
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>- {t('services.scaffolding.length')}: {selectedOption.length} {t('services.scaffolding.meter')}</li>
                      <li>- {t('services.scaffolding.maxwork')}: {selectedOption.maxWork} {t('services.scaffolding.meter')}</li>
                      <li>- {t('services.scaffolding.maxstand')}: {selectedOption.maxStand} {t('services.scaffolding.meter')}</li>
                      <li>- {t('services.scaffolding.depth')}: {selectedOption.depth} {t('services.scaffolding.meter')}</li>
                      <li>- {t('services.scaffolding.floors')}: {selectedOption.floors} {t('services.scaffolding.plan')}</li>
                      <li>- {t('services.scaffolding.weight')}: ca {selectedOption.weight}kg</li>
                    </ul>
                  </>
                ) : (
                  <div className="text-center text-sm text-gray-600">
                    No matching size.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
