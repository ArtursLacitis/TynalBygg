import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'sv' | 'lv';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.cta': 'Fill in application form',
    
    // Hero
    'hero.title': 'TINAL BYGG AB',
    'hero.subtitle': 'A partner you can trust',
    'hero.scroll': 'Scroll',
    
    // Hero Features
    'hero.features.title': 'If you are looking for:',
    'hero.features.1': 'High value from knowledgeable specialists',
    'hero.features.2': 'Help with material selection during renovation',
    'hero.features.3': 'Complete project planning for home and office renovation with consideration for special wishes',
    'hero.features.4': 'Help selecting the most optimal solution regarding material selection',
    'hero.features.5': 'Guarantee of first-class results within agreed time',
    'hero.features.6': 'Pleasant treatment by staff',
    'hero.features.conclusion': 'Then we are the right choice for you.',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Professional construction and renovation services',
    'services.painter': 'Painting',
    'services.painter.desc': 'Professional painting services for interiors and exteriors with high-quality materials and expert finish.',
    'services.electrician': 'Electrical Work',
    'services.electrician.desc': 'Complete electrical installations and repairs by certified electricians ensuring safety and compliance.',
    'services.tile': 'Tile Setting',
    'services.tile.desc': 'Expert tile installation for bathrooms, kitchens, and floors with precision and attention to detail.',
    'services.roof': 'Tegeltak Konstruktion & Renovering',
    'services.roof.desc': 'Expert tegeltakstjänster inklusive konstruktion och renovering med högkvalitativa material och professionellt hantverkskunnande.',
    'services.windows': 'Windows & Doors Installation',
    'services.windows.desc': 'Professional installation of windows and doors improving energy efficiency and aesthetics.',
    'services.masonry': 'Masonry',
    'services.masonry.desc': 'Expert masonry work including walls, foundations, and structural repairs.',
    'services.pool': 'Pool Construction',
    'services.pool.desc': 'Design and construction of swimming pools with complete installation services.',
    'services.renovation': 'House Renovation',
    'services.renovation.desc': 'Complete house renovation services from planning to completion with turnkey solutions.',
    'services.concrete': 'Concrete Work',
    'services.concrete.desc': 'Professional concrete work for foundations, floors, and structural elements.',
    'services.metal': 'Sheet Metal Work',
    'services.metal.desc': 'Expert sheet metal fabrication and installation for roofing and construction needs.',
    'services.scaffolding': 'Scaffolding Rental in Skåne',
    'services.scaffolding.subtitle': 'Professional scaffolding rental services',
    'services.scaffolding.week': 'week',
    'services.scaffolding.length': 'Length',
    'services.scaffolding.maxwork': 'Max work height',
    'services.scaffolding.maxstand': 'Max standing height',
    'services.scaffolding.depth': 'Depth',
    'services.scaffolding.floors': 'Floors',
    'services.scaffolding.weight': 'Weight',
    'services.scaffolding.meter': 'meter',
    'services.scaffolding.plan': 'plan',
    'services.scaffolding.tower': 'tower',
    
    // About
    'about.title': 'TINAL BYGG - Your Partner in Construction',
    'about.intro': 'We are a committed and well-established construction company from Skåne that started operations in 2016. Our company does everything from smaller ROT projects for private individuals to larger construction projects for companies and property owners.',
    'about.work': 'We carry out work in construction and for public environments, such as shops, offices, and hotels. The craftsmen at Tinal Bygg AB work with turnkey contracts and take care of the entire construction, which means that you as a customer can let us handle the entire process from start to finish.',
    'about.experience.title': 'Experience & Craftsmanship',
    'about.experience.text': 'Since 2016, we have built a reputation for excellence in construction and renovation throughout Skåne. Our team brings expertise and dedication to every project.',
    'about.reliability.title': 'Reliability & Professionalism',
    'about.reliability.text': 'We understand that construction projects are significant investments. That\'s why we prioritize clear communication, punctuality, and professionalism in every aspect of our work.',
    'about.quality.title': 'Quality Standards',
    'about.quality.text': 'We are certified and insured, adhering to all Swedish construction standards and regulations. Our work is backed by comprehensive warranties.',
    
    // Gallery
    'gallery.title': 'Our Work',
    'gallery.subtitle': 'A showcase of our completed projects demonstrating quality craftsmanship',
    
    // Why Choose Us
    'why.title': 'Why Choose Us',
    'why.subtitle': 'What sets TINAL BYGG AB apart in the construction industry',
    'why.reliable.title': 'Reliable and Punctual',
    'why.reliable.text': 'We respect your time and always deliver projects on schedule, keeping you informed every step of the way.',
    'why.quality.title': 'High Quality Materials',
    'why.quality.text': 'We use only premium materials from trusted suppliers, ensuring longevity and durability in every project.',
    'why.skilled.title': 'Skilled Craftsmen',
    'why.skilled.text': 'Our team consists of experienced professionals with years of expertise in construction and renovation.',
    'why.satisfaction.title': 'Customer Satisfaction',
    'why.satisfaction.text': 'Your satisfaction is our priority. We work closely with you to ensure the final result exceeds expectations.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch to discuss your next project',
    'contact.getintouch': 'Get In Touch',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.hours': 'Business Hours',
    'contact.hours.weekday': 'Monday - Friday: 07:00 - 17:00',
    'contact.hours.saturday': 'Saturday: 09:00 - 14:00',
    'contact.hours.sunday': 'Sunday: Closed',
    'contact.form.title': 'Send Us a Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.required': '*',
    
    // Footer
    'footer.rights': '© 2026 TINAL BYGG AB. All rights reserved.',
    'footer.org': 'Org. nr: 556XXX-XXXX | ROT & RUT registered'
  },
  sv: {
    // Navigation
    'nav.home': 'Hem',
    'nav.about': 'Om oss',
    'nav.services': 'Tjänster',
    'nav.gallery': 'Galleri',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Fyll i ansökningsformulär',
    
    // Hero
    'hero.title': 'TINAL BYGG AB',
    'hero.subtitle': 'En partner du kan lita på',
    'hero.scroll': 'Scrolla',
    
    // Hero Features
    'hero.features.title': 'Om du letar efter:',
    'hero.features.1': 'Högt värde på kunniga specialister',
    'hero.features.2': 'Hjälp vid utval av material vid renovering',
    'hero.features.3': 'Fullständig projektering vid hem- och kontorsrenovering med hänsyn till särskilda önskemål',
    'hero.features.4': 'Hjälp vid utval av den mest optimala lösningen med avseende på val av material',
    'hero.features.5': 'Garanti för förstklassigt resultat inom avtalad tid',
    'hero.features.6': 'Trevligt bemötande av personal',
    'hero.features.conclusion': 'Så är vi rätt val för dig.',
    
    // Services
    'services.title': 'Våra Tjänster',
    'services.subtitle': 'Professionella bygg- och renoveringstjänster',
    'services.painter': 'Målare',
    'services.painter.desc': 'Professionella målerarbeten för interiör och exteriör med högkvalitativa material och expertfinish.',
    'services.electrician': 'Elektrikerarbeten',
    'services.electrician.desc': 'Kompletta elektriska installationer och reparationer av certifierade elektriker som säkerställer säkerhet och efterlevnad.',
    'services.tile': 'Plattsättare',
    'services.tile.desc': 'Expert plattläggning för badrum, kök och golv med precision och uppmärksamhet på detaljer.',
    'services.roof': 'Tegeltak Konstruktion & Renovering',
    'services.roof.desc': 'Expert tegeltakstjänster inklusive konstruktion och renovering med högkvalitativa material och professionellt hantverkskunnande.',
    'services.windows': 'Installation av Fönster och Dörrar',
    'services.windows.desc': 'Professionell installation av fönster och dörrar som förbättrar energieffektivitet och estetik.',
    'services.masonry': 'Murverk',
    'services.masonry.desc': 'Expert murverksarbete inklusive väggar, fundament och strukturella reparationer.',
    'services.pool': 'Skappande av Pooler',
    'services.pool.desc': 'Design och konstruktion av pooler med kompletta installationstjänster.',
    'services.renovation': 'Renovering av Hus',
    'services.renovation.desc': 'Kompletta husrenoveringstjänster från planering till färdigställande med totalentreprenad.',
    'services.concrete': 'Betongarbeten',
    'services.concrete.desc': 'Professionella betongarbeten för fundament, golv och strukturella element.',
    'services.metal': 'Arbeta med Plåt',
    'services.metal.desc': 'Expert plåtbearbetning och installation för tak- och byggbehov.',
    'services.scaffolding': 'Hyr Haki i Skåne',
    'services.scaffolding.subtitle': 'Professionella ställningsuthyrningstjänster',
    'services.scaffolding.week': 'vecka',
    'services.scaffolding.length': 'Längd',
    'services.scaffolding.maxwork': 'Max arbetshöjd',
    'services.scaffolding.maxstand': 'Max ståndshöjd',
    'services.scaffolding.depth': 'Djup',
    'services.scaffolding.floors': 'Planer',
    'services.scaffolding.weight': 'Vikt',
    'services.scaffolding.meter': 'meter',
    'services.scaffolding.plan': 'plan',
    'services.scaffolding.tower': 'torn',
    
    // About
    'about.title': 'TINAL BYGG - Din Partner i Byggande',
    'about.intro': 'Vi är ett engagerat och väletablerat byggföretag från Skåne som startade sin verksamhet 2016. Vårt företag gör allt från mindre ROT-projekt hos privatpersoner till större byggprojekt åt företag och fastighetsägare.',
    'about.work': 'Vi utför arbeten inom bygg och för allmänna miljöer, så som butiker, kontor, hotell. Hantverkarna i Tinal Bygg AB arbetar med totalentreprenad och tar hand om hela bygget, vilket innebär att du som kund kan låta oss sköta hela processen från start till mål.',
    'about.experience.title': 'Erfarenhet & Hantverkskunnande',
    'about.experience.text': 'Sedan 2016 har vi byggt ett rykte för excellens inom byggande och renovering i hela Skåne. Vårt team bidrar med expertis och engagemang till varje projekt.',
    'about.reliability.title': 'Pålitlighet & Professionalism',
    'about.reliability.text': 'Vi förstår att byggprojekt är betydande investeringar. Därför prioriterar vi tydlig kommunikation, punktlighet och professionalism i alla aspekter av vårt arbete.',
    'about.quality.title': 'Kvalitetsstandarder',
    'about.quality.text': 'Vi är certifierade och försäkrade, följer alla svenska byggstandarder och regleringar. Vårt arbete backas upp av omfattande garantier.',
    
    // Gallery
    'gallery.title': 'Vårt Arbete',
    'gallery.subtitle': 'En showcase av våra färdiga projekt som demonstrerar kvalitetshantverkskunnande',
    
    // Why Choose Us
    'why.title': 'Varför Välja Oss',
    'why.subtitle': 'Vad som skiljer TINAL BYGG AB åt i byggindustrin',
    'why.reliable.title': 'Pålitlig och Punktlig',
    'why.reliable.text': 'Vi respekterar din tid och levererar alltid projekt i tid, håller dig informerad varje steg på vägen.',
    'why.quality.title': 'Högkvalitativa Material',
    'why.quality.text': 'Vi använder endast premiummaterial från pålitliga leverantörer, vilket säkerställer livslängd och hållbarhet i varje projekt.',
    'why.skilled.title': 'Skickliga Hantverkare',
    'why.skilled.text': 'Vårt team består av erfarna proffs med många års expertis inom bygg och renovering.',
    'why.satisfaction.title': 'Kundnöjdhet',
    'why.satisfaction.text': 'Din tillfredsställelse är vår prioritet. Vi arbetar nära dig för att säkerställa att slutresultatet överträffar förväntningarna.',
    
    // Contact
    'contact.title': 'Kontakta Oss',
    'contact.subtitle': 'Hör av dig för att diskutera ditt nästa projekt',
    'contact.getintouch': 'Kom i Kontakt',
    'contact.phone': 'Telefon',
    'contact.email': 'E-post',
    'contact.address': 'Adress',
    'contact.hours': 'Öppettider',
    'contact.hours.weekday': 'Måndag - Fredag: 07:00 - 17:00',
    'contact.hours.saturday': 'Lördag: 09:00 - 14:00',
    'contact.hours.sunday': 'Söndag: Stängt',
    'contact.form.title': 'Skicka oss ett Meddelande',
    'contact.form.name': 'Namn',
    'contact.form.email': 'E-post',
    'contact.form.phone': 'Telefon',
    'contact.form.message': 'Meddelande',
    'contact.form.submit': 'Skicka Meddelande',
    'contact.form.required': '*',
    
    // Footer
    'footer.rights': '© 2026 TINAL BYGG AB. Alla rättigheter reserverade.',
    'footer.org': 'Org. nr: 556XXX-XXXX | ROT & RUT registrerat'
  },
  lv: {
    // Navigation
    'nav.home': 'Sākums',
    'nav.about': 'Par mums',
    'nav.services': 'Pakalpojumi',
    'nav.gallery': 'Galerija',
    'nav.contact': 'Kontakti',
    'nav.cta': 'Aizpildīt pieteikuma veidlapu',
    
    // Hero
    'hero.title': 'TINAL BYGG AB',
    'hero.subtitle': 'Partneris, uz kuru varat paļauties',
    'hero.scroll': 'Ritināt',
    
    // Hero Features
    'hero.features.title': 'Ja jūs meklējat:',
    'hero.features.1': 'Augstu vērtību no zinošiem speciālistiem',
    'hero.features.2': 'Palīdzību materiālu izvēlē renovācijas laikā',
    'hero.features.3': 'Pilnīgu projektu plānošanu māju un biroju renovācijai, ņemot vērā īpašas vēlmes',
    'hero.features.4': 'Palīdzību optimālākā risinājuma izvēlē attiecībā uz materiālu izvēli',
    'hero.features.5': 'Garantiju par augstākās klases rezultātiem saskaņotajā laikā',
    'hero.features.6': 'Patīkamu personāla attieksmi',
    'hero.features.conclusion': 'Tad mēs esam pareizā izvēle jums.',
    
    // Services
    'services.title': 'Mūsu Pakalpojumi',
    'services.subtitle': 'Profesionāli būvniecības un renovācijas pakalpojumi',
    'services.painter': 'Krāsošana',
    'services.painter.desc': 'Profesionāli krāsošanas pakalpojumi interjeram un eksterjeram ar augstas kvalitātes materiāliem un ekspertu apdari.',
    'services.electrician': 'Elektriķa Darbi',
    'services.electrician.desc': 'Pilnīga elektroinstalācija un remonti no sertificētiem elektriķiem, nodrošinot drošību un atbilstību.',
    'services.tile': 'Flīžu Likšana',
    'services.tile.desc': 'Ekspertu flīžu uzstādīšana vannas istabām, virtuvēm un grīdām ar precizitāti un uzmanību detaļām.',
    'services.roof': 'Tegeltak Konstruktion & Renovering',
    'services.roof.desc': 'Expert tegeltakstjänster inklusive konstruktion och renovering med högkvalitativa material och professionellt hantverkskunnande.',
    'services.windows': 'Logu un Durvju Uzstādīšana',
    'services.windows.desc': 'Profesionāla logu un durvju uzstādīšana, uzlabojot energoefektivitāti un estētiku.',
    'services.masonry': 'Mūrnieka Darbi',
    'services.masonry.desc': 'Ekspertu mūrnieka darbi, ieskaitot sienas, pamatus un strukturālos remontus.',
    'services.pool': 'Baseinu Būvniecība',
    'services.pool.desc': 'Peldbaseinu projektēšana un būvniecība ar pilnīgiem uzstādīšanas pakalpojumiem.',
    'services.renovation': 'Mājas Renovācija',
    'services.renovation.desc': 'Pilnīgi mājas renovācijas pakalpojumi no plānošanas līdz pabeigšanai ar atslēgas rokās risinājumiem.',
    'services.concrete': 'Betona Darbi',
    'services.concrete.desc': 'Profesionāli betona darbi pamatiem, grīdām un strukturāliem elementiem.',
    'services.metal': 'Skārda Darbi',
    'services.metal.desc': 'Ekspertu skārda apstrāde un uzstādīšana jumta un būvniecības vajadzībām.',
    'services.scaffolding': 'Sastatņu Noma Skān',
    'services.scaffolding.subtitle': 'Profesionāli sastatņu nomas pakalpojumi',
    'services.scaffolding.week': 'nedēļa',
    'services.scaffolding.length': 'Garums',
    'services.scaffolding.maxwork': 'Maksimālais darba augstums',
    'services.scaffolding.maxstand': 'Maksimālais stāves augstums',
    'services.scaffolding.depth': 'Garums',
    'services.scaffolding.floors': 'Stāvdienu skaits',
    'services.scaffolding.weight': 'Svars',
    'services.scaffolding.meter': 'metrs',
    'services.scaffolding.plan': 'plāns',
    'services.scaffolding.tower': 'tornis',
    
    // About
    'about.title': 'TINAL BYGG - Jūsu Partneris Būvniecībā',
    'about.intro': 'Mēs esam apņēmīgs un labi izveidots būvniecības uzņēmums no Skānes, kas uzsāka darbību 2016. gadā. Mūsu uzņēmums dara visu, sākot no mazākiem ROT projektiem privātpersonām līdz lielākiem būvniecības projektiem uzņēmumiem un īpašuma īpašniekiem.',
    'about.work': 'Mēs veicam darbus būvniecībā un sabiedriskajās vidēs, piemēram, veikalos, birojos, viesnīcās. Tinal Bygg AB amatnieki strādā ar atslēgas rokās līgumiem un rūpējas par visu būvniecību, kas nozīmē, ka jūs kā klients varat ļaut mums rīkoties ar visu procesu no sākuma līdz beigām.',
    'about.experience.title': 'Pieredze un Amata Prasme',
    'about.experience.text': 'Kopš 2016. gada mēs esam izveidojuši reputāciju par izcilību būvniecībā un renovācijā visā Skānē. Mūsu komanda nes ekspertīzi un apņemšanos katram projektam.',
    'about.reliability.title': 'Uzticamība un Profesionalitāte',
    'about.reliability.text': 'Mēs saprotam, ka būvniecības projekti ir ievērojami ieguldījumi. Tāpēc mēs prioritizējam skaidru komunikāciju, punktualitāti un profesionalitāti visos mūsu darba aspektos.',
    'about.quality.title': 'Kvalitātes Standarti',
    'about.quality.text': 'Mēs esam sertificēti un apdrošināti, ievērojot visus Zviedrijas būvniecības standartus un noteikumus. Mūsu darbu atbalsta visaptverošas garantijas.',
    
    // Gallery
    'gallery.title': 'Mūsu Darbs',
    'gallery.subtitle': 'Mūsu pabeigto projektu demonstrācija, kas demonstrē kvalitātes amata prasmi',
    
    // Why Choose Us
    'why.title': 'Kāpēc Izvēlēties Mūs',
    'why.subtitle': 'Kas atšķir TINAL BYGG AB būvniecības industrijā',
    'why.reliable.title': 'Uzticams un Punktuāls',
    'why.reliable.text': 'Mēs cienām jūsu laiku un vienmēr piegādājam projektus savlaicīgi, informējot jūs katrā solī.',
    'why.quality.title': 'Augstas Kvalitātes Materiāli',
    'why.quality.text': 'Mēs izmantojam tikai premium materiālus no uzticamiem piegādātājiem, nodrošinot ilgmūžību un izturību katrā projektā.',
    'why.skilled.title': 'Prasmīgi Amatnieki',
    'why.skilled.text': 'Mūsu komanda sastāv no pieredzējušiem profesionāļiem ar daudzgadu ekspertīzi būvniecībā un renovācijā.',
    'why.satisfaction.title': 'Klientu Apmierinātība',
    'why.satisfaction.text': 'Jūsu apmierinātība ir mūsu prioritāte. Mēs cieši strādājam ar jums, lai nodrošinātu, ka galīgais rezultāts pārsniedz cerības.',
    
    // Contact
    'contact.title': 'Sazinieties ar Mums',
    'contact.subtitle': 'Sazinieties, lai apspriestu savu nākamo projektu',
    'contact.getintouch': 'Sazinies',
    'contact.phone': 'Tālrunis',
    'contact.email': 'E-pasts',
    'contact.address': 'Adrese',
    'contact.hours': 'Darba Laiks',
    'contact.hours.weekday': 'Pirmdiena - Piektdiena: 07:00 - 17:00',
    'contact.hours.saturday': 'Sestdiena: 09:00 - 14:00',
    'contact.hours.sunday': 'Svētdiena: Slēgts',
    'contact.form.title': 'Sūtiet Mums Ziņu',
    'contact.form.name': 'Vārds',
    'contact.form.email': 'E-pasts',
    'contact.form.phone': 'Tālrunis',
    'contact.form.message': 'Ziņa',
    'contact.form.submit': 'Sūtīt Ziņu',
    'contact.form.required': '*',
    
    // Footer
    'footer.rights': '© 2026 TINAL BYGG AB. Visas tiesības aizsargātas.',
    'footer.org': 'Org. nr: 556XXX-XXXX | ROT & RUT reģistrēts'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}