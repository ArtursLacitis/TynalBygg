import paintingImage from '../../assets/10.webp';
import electricalWork from '../../assets/16.webp';
import tileSetting from '../../assets/5.webp';
import roofTiling from '../../assets/13.webp';
import windows from '../../assets/8.webp';
import masonry from '../../assets/14.webp';
import pool from '../../assets/52.webp';
import houseRenovation from '../../assets/35.webp';
import sheetMetalWork from '../../assets/37.webp';
import concreteWork from '../../assets/18.webp';
import image_2 from '../../assets/2.webp';
import image_3 from '../../assets/3.webp';
import image_4 from '../../assets/4.webp';
import image_6 from '../../assets/6.webp';
import image_7 from '../../assets/7.webp';
import image_20 from '../../assets/20.webp';
import image_21 from '../../assets/21.webp';
import image_29 from '../../assets/29.webp';
import image_31 from '../../assets/31.webp';
import image_34 from '../../assets/34.webp';
import image_37 from '../../assets/37.webp';
import image_39 from '../../assets/39.webp';
import image_41 from '../../assets/41.webp';
import image_46 from '../../assets/46.webp';
import image_48 from '../../assets/48.webp';
import image_49 from '../../assets/49.webp';
import image_50 from '../../assets/50.webp';
import image_51 from '../../assets/51.webp';
import { ChevronDown, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import { useMemo, useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';

type ServiceItem = {
  titleKey: string;
  descKey: string;
  image: string;
  gallery: string[];
};

const services: ServiceItem[] = [
  {
    titleKey: 'services.painter',
    descKey: 'services.painter.desc',
    image: paintingImage,
    gallery: [paintingImage, image_2, image_37, image_4]
  },
  {
    titleKey: 'services.electrician',
    descKey: 'services.electrician.desc',
    image: electricalWork,
    gallery: [electricalWork, image_46, image_20]
  },
  {
    titleKey: 'services.tile',
    descKey: 'services.tile.desc',
    image: tileSetting,
    gallery: [tileSetting, image_39, image_29]
  },
  {
    titleKey: 'services.roof',
    descKey: 'services.roof.desc',
    image: roofTiling,
    gallery: [roofTiling, image_3, image_7, image_21, image_34]
  },
  {
    titleKey: 'services.windows',
    descKey: 'services.windows.desc',
    image: windows,
    gallery: [windows, image_46, image_50]
  },
  {
    titleKey: 'services.masonry',
    descKey: 'services.masonry.desc',
    image: masonry,
    gallery: [masonry, concreteWork, image_41]
  },
  {
    titleKey: 'services.pool',
    descKey: 'services.pool.desc',
    image: pool,
    gallery: [pool, image_49, image_48]
  },
  {
    titleKey: 'services.renovation',
    descKey: 'services.renovation.desc',
    image: houseRenovation,
    gallery: [houseRenovation, image_31, image_51, image_6, image_20]
  },
  {
    titleKey: 'services.metal',
    descKey: 'services.metal.desc',
    image: sheetMetalWork,
    gallery: [sheetMetalWork, image_41, image_48]
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
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const navigationLockRef = useRef(false);

  const activeService =
    activeServiceIndex !== null ? services[activeServiceIndex] : null;

  useEffect(() => {
    if (activeServiceIndex === null || !activeService) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setActiveImageIndex((current) => (current + 1) % activeService.gallery.length);
      }

      if (event.key === 'ArrowLeft') {
        setActiveImageIndex(
          (current) => (current - 1 + activeService.gallery.length) % activeService.gallery.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeServiceIndex, activeService]);

  useEffect(() => {
    if (!activeService) return;

    setActiveImageIndex((current) => {
      if (current < 0) return 0;
      if (current >= activeService.gallery.length) return 0;
      return current;
    });
  }, [activeService]);

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

  const openServiceGallery = (serviceIndex: number) => {
    setActiveServiceIndex(serviceIndex);
    setActiveImageIndex(0);
  };

  const closeServiceGallery = (open: boolean) => {
    if (!open) {
      setActiveServiceIndex(null);
      setActiveImageIndex(0);
    }
  };

  const showNextImage = () => {
    if (!activeService) return;

    runWithNavigationLock(() => {
      setActiveImageIndex((current) => {
        const total = activeService.gallery.length;
        return (current + 1) % total;
      });
    });
  };

  const showPreviousImage = () => {
    if (!activeService) return;

    runWithNavigationLock(() => {
      setActiveImageIndex((current) => {
        const total = activeService.gallery.length;
        return (current - 1 + total) % total;
      });
    });
  };

  const runWithNavigationLock = (callback: () => void) => {
    if (navigationLockRef.current) return;

    navigationLockRef.current = true;
    callback();

    window.setTimeout(() => {
      navigationLockRef.current = false;
    }, 220);
  };

  return (
    <>
      <section id="services" className="bg-white py-48 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
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

          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.titleKey}
                className="group flex h-full flex-col"
              >
                <button
                  type="button"
                  onClick={() => openServiceGallery(index)}
                  aria-label={`${t('services.gallery.open')} ${t(service.titleKey)}`}
                  className="relative overflow-hidden mb-6 h-72 w-full rounded-lg text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#384A9C] focus:ring-offset-4"
                >
                  <ImageWithFallback
                    src={service.image}
                    alt={t(service.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-opacity group-hover:from-black/90" />
                  <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-3">
                    <div>
                      <span
                        className="inline-flex items-center justify-center rounded-full border border-white/25 bg-black/45 p-2 text-white shadow-sm"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        aria-hidden="true"
                      >
                        <Images className="h-3.5 w-3.5" />
                      </span>
                    </div>
                    <span
                      className="hidden sm:inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-sm transition-transform group-hover:-translate-y-1"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {t('services.gallery.cta')}
                    </span>
                  </div>
                </button>
                <h3
                  className="mb-4 min-h-[1.5rem] text-xl md:text-2xl"
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontWeight: 600,
                    color: '#1a1a1a'
                  }}
                >
                  {t(service.titleKey)}
                </h3>
                <p
                  className="min-h-[6.5rem] text-sm leading-relaxed text-gray-600 md:text-[15px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {t(service.descKey)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={activeServiceIndex !== null} onOpenChange={closeServiceGallery}>
        {activeService && (
          <DialogContent className="h-[100dvh] w-screen max-w-none overflow-hidden border-0 bg-[#0d0d0f] p-0 text-white shadow-2xl lg:h-[94dvh] lg:w-[96vw] lg:max-w-[1800px]">
            <div className="grid h-full min-h-0 gap-0 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_400px]">
              {/* Image Area */}
              <div className="relative min-h-0 overflow-hidden bg-black">
                <div className="absolute left-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/85">
                  {activeImageIndex + 1} / {activeService.gallery.length}
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    showPreviousImage();
                  }}
                  aria-label={t('services.gallery.previous')}
                  className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white/60 sm:h-11 sm:w-11"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    showNextImage();
                  }}
                  aria-label={t('services.gallery.next')}
                  className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white/60 sm:h-11 sm:w-11"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <div className="flex h-[64dvh] w-full items-center justify-center overflow-hidden sm:h-[68dvh] lg:h-full lg:min-h-0 lg:p-6 xl:p-8">
                  <ImageWithFallback
                    src={activeService.gallery[activeImageIndex]}
                    alt={`${t(activeService.titleKey)} ${activeImageIndex + 1}`}
                    className="block max-h-full max-w-full object-contain"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Side Panel */}
              <div className="flex min-h-0 flex-col overflow-hidden border-t border-white/10 bg-[#141418] lg:border-l lg:border-t-0">
                <DialogHeader className="px-4 pt-4 text-left sm:px-6 sm:pt-6">
                  <DialogTitle
                    className="text-2xl text-white sm:text-3xl"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    {t(activeService.titleKey)}
                  </DialogTitle>
                  <DialogDescription
                    className="text-sm leading-relaxed text-white/70"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {t(activeService.descKey)}
                  </DialogDescription>
                </DialogHeader>

                <div className="px-4 pt-4 sm:px-6">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {t('services.gallery.related')}
                  </p>
                </div>

                <div className="overflow-y-auto px-0 pb-4 pt-4 sm:px-6 sm:pb-6">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {activeService.gallery.map((image, imageIndex) => (
                      <button
                        key={`${activeService.titleKey}-${imageIndex}`}
                        type="button"
                        onClick={() => setActiveImageIndex(imageIndex)}
                        aria-label={`${t('services.gallery.open')} ${t(activeService.titleKey)} ${imageIndex + 1}`}
                        className={`overflow-hidden border transition ${imageIndex === activeImageIndex
                          ? 'border-white shadow-[0_0_0_1px_rgba(255,255,255,0.35)]'
                          : 'border-white/10 opacity-75 hover:opacity-100'
                          } rounded-none sm:rounded-md`}
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`${t(activeService.titleKey)} thumbnail ${imageIndex + 1}`}
                          className="h-24 w-full object-cover sm:h-20"
                          loading="lazy"
                          decoding="async"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
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
