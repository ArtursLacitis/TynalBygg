import paintingImage from '../../assets/10.webp';
import electricalWork from '../../assets/16.webp';
import tileSetting from '../../assets/5.webp';
import roofTiling from '../../assets/13.webp';
import windows from '../../assets/8.webp';
import masonry from '../../assets/14.webp';
import pool from '../../assets/9.webp';
import houseRenovation from '../../assets/19.webp';
import sheetMetalWork from '../../assets/12.webp';
import concreteWork from '../../assets/18.webp';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import { useMemo, useState, useEffect, useRef } from 'react';

const services = [
  {
    titleKey: 'services.painter',
    descKey: 'services.painter.desc',
    image: paintingImage
  },
  {
    titleKey: 'services.electrician',
    descKey: 'services.electrician.desc',
    image: electricalWork
  },
  {
    titleKey: 'services.tile',
    descKey: 'services.tile.desc',
    image: tileSetting
  },
  {
    titleKey: 'services.roof',
    descKey: 'services.roof.desc',
    image: roofTiling,
  },
  {
    titleKey: 'services.windows',
    descKey: 'services.windows.desc',
    image: windows
  },
  {
    titleKey: 'services.masonry',
    descKey: 'services.masonry.desc',
    image: masonry
  },
  {
    titleKey: 'services.pool',
    descKey: 'services.pool.desc',
    image: pool
  },
  {
    titleKey: 'services.renovation',
    descKey: 'services.renovation.desc',
    image: houseRenovation
  },
  {
    titleKey: 'services.concrete',
    descKey: 'services.concrete.desc',
    image: concreteWork
  },
  {
    titleKey: 'services.metal',
    descKey: 'services.metal.desc',
    image: sheetMetalWork
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
      <label htmlFor={id} className="block text-sm font-semibold text-white mb-2">
        {label}
      </label>
      <button
        id={id}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`w-full border px-4 py-3 text-sm text-left transition-all rounded-md flex items-center justify-between active:scale-[0.99] cursor-pointer hover:bg-gray-50 ${open
          ? 'border-gray-900 shadow-sm'
          : 'border-gray-300 hover:border-gray-400'
          } focus:outline-none focus:ring-2 focus:ring-gray-900/20 bg-white`}
      >
        <span>{selectedLabel}</span>
        <ChevronDown
          className={`h-4 w-4 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div
          role="listbox"
          className="absolute z-20 mt-2 w-full bg-white border border-gray-200 shadow-lg rounded-md max-h-64 overflow-auto"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={option.value === value}
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

  const specItems = selectedOption
    ? [
      { label: t('services.scaffolding.length'), value: `${selectedOption.length} ${t('services.scaffolding.meter')}` },
      { label: t('services.scaffolding.maxwork'), value: `${selectedOption.maxWork} ${t('services.scaffolding.meter')}` },
      { label: t('services.scaffolding.maxstand'), value: `${selectedOption.maxStand} ${t('services.scaffolding.meter')}` },
      { label: t('services.scaffolding.depth'), value: `${selectedOption.depth} ${t('services.scaffolding.meter')}` },
      { label: t('services.scaffolding.floors'), value: `${selectedOption.floors} ${t('services.scaffolding.plan')}` },
      { label: t('services.scaffolding.weight'), value: `ca ${selectedOption.weight}kg` }
    ]
    : [];

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
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <div className="overflow-hidden mb-4 h-64 rounded-lg">
                <ImageWithFallback
                  src={service.image}
                  alt={t(service.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
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
      </div>
    </section>
  );
}

export function ScaffoldingRental() {
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

  const specItems = selectedOption
    ? [
      { label: t('services.scaffolding.length'), value: `${selectedOption.length} ${t('services.scaffolding.meter')}` },
      { label: t('services.scaffolding.maxwork'), value: `${selectedOption.maxWork} ${t('services.scaffolding.meter')}` },
      { label: t('services.scaffolding.maxstand'), value: `${selectedOption.maxStand} ${t('services.scaffolding.meter')}` },
      { label: t('services.scaffolding.depth'), value: `${selectedOption.depth} ${t('services.scaffolding.meter')}` },
      { label: t('services.scaffolding.floors'), value: `${selectedOption.floors} ${t('services.scaffolding.plan')}` },
      { label: t('services.scaffolding.weight'), value: `ca ${selectedOption.weight}kg` }
    ]
    : [];

  return (
    <section className="bg-gray-900 py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl mb-4 text-white"
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 600
            }}
          >
            {t('services.scaffolding')}
          </h2>
          <p
            className="text-gray-300 text-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t('services.scaffolding.subtitle')}
          </p>
        </div>

        {/* Scaffolding Selector */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="space-y-6">
              <CustomSelect
                id="scaffolding-height"
                label={t('services.scaffolding.height')}
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

            <div className="bg-gray-800 p-6 border border-gray-700 rounded-lg">
              {selectedOption ? (
                <>
                  <h3
                    className="text-3xl mb-2 text-center text-white"
                    style={{
                      fontFamily: 'Oswald, sans-serif',
                      fontWeight: 600
                    }}
                  >
                    {selectedOption.size}
                  </h3>
                  <p className="text-center text-white font-semibold mb-4">
                    {t('services.scaffolding.week')} {selectedOption.weekPrice} kr
                  </p>
                  <div className="grid gap-3 text-sm text-gray-300">
                    {specItems.map((item) => (
                      <div key={item.label} className="flex items-center justify-between border-b border-gray-700 pb-2">
                        <span className="font-medium text-gray-200">{item.label}</span>
                        <span>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center text-sm text-gray-400">No matching size.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
