import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

const teamMembers = [
  {
    name: 'Arturs Lacitis',
    phone: '+46 (0) 736498836',
    responsibilities: {
      en: 'Responsible for: carpentry, bathrooms, roofs, construction',
      sv: 'Ansvar om: snickeri, bad, tak, bygg',
      lv: 'Atbildīgs par: galdniecību, vannasistabām, jumtiem, būvniecību'
    },
    languages: {
      en: 'Speaks: Swedish, English, Russian, Latvian, Lithuanian',
      sv: 'Talar: svenska, engelska, ryska, lettiska, litauiska',
      lv: 'Runā: zviedru, angļu, krievu, latviešu, lietuviešu'
    },
    bio: {
      en: 'Hello! I am a happy father of three children, a loving husband and owner of two adorable dogs. Like anyone who has children and dogs, I know how to find solutions even where they seem impossible. You may have already noticed what opportunities there are nowadays to develop children\'s skills and talents? With the right approach and the ability to motivate others, our children have found ways to prove themselves to the world and enjoy it. And if you can motivate your child, you can also motivate your colleagues.',
      sv: 'Hej! Jag är en lycklig pappa till tre barn, en kärleksfull make och ägare till två bedårande hundar. Som alla som har barn och hundar vet jag hur man hittar lösningar även där de verkar omöjliga. Du har väl redan märkt vilka möjligheter det finns nu för tiden att utveckla barns färdigheter och talanger? Med rätt tillvägagångssätt och förmågan att motivera andra har våra barn hittat sätt att bevisa sig själva för världen och njuta av det. Och kan du motivera ditt barn kan du också motivera dina kollegor.',
      lv: 'Sveiki! Es esmu laimīgs trīs bērnu tēvs, mīlošs vīrs un divu apburošu suņu saimnieks. Kā ikviens, kam ir bērni un suņi, es zinu, kā atrast risinājumus pat tur, kur tie šķiet neiespējami. Jūs jau esat pamanījis, kādas iespējas mūsdienās ir, lai attīstītu bērnu prasmes un talantus? Ar pareizu pieeju un spēju motivēt citus mūsu bērni ir atraduši veidus, kā pierādīt sevi pasaulei un par to priecāties. Un ja jūs varat motivēt savu bērnu, jūs varat arī motivēt savus kolēģus.'
    },
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400'
  },
  {
    name: 'Elmars Trankalis',
    phone: '+46 (0) 728905090',
    responsibilities: {
      en: 'Responsible for: roofs, carpentry, scaffolding',
      sv: 'Ansvar om: tak, snickeri, ställning',
      lv: 'Atbildīgs par: jumtiem, galdniecību, sastatnēm'
    },
    languages: {
      en: 'Speaks: English, Russian, Latvian',
      sv: 'Talar: engelska, ryska, lettiska',
      lv: 'Runā: angļu, krievu, latviešu'
    },
    bio: {
      en: 'Hello! I am incredibly lucky because there are three princesses in my family - my wife and two adorable daughters. These girls are everything to me! But do you know what else I like? Cars. I love finding forgotten old cars and then doing everything I can to bring them back to their original charm. Persistence and stubbornness to finish what was started. I start my workday with these qualities. And I teach the same thing to my colleagues - go all the way and finish what you started to 100%.',
      sv: 'Hej! Jag har otroligt tur för det finns tre prinsessor i min familj - min fru och två bedårande döttrar. Dessa tjejer är allt för mig! Men vet du vad mer jag gillar? Bilar. Jag älskar att hitta bortglömda gamla bilar och sedan göra allt jag kan för att få dem tillbaka till sin ursprungliga charm. Uthållighet och envishet att avsluta det som påbörjats. Jag börjar min arbetsdag med dessa egenskaper. Och jag lär ut samma sak till mina kollegor – gå hela vägen och avsluta det du började med till 100%.',
      lv: 'Sveiki! Man ir neticami paveicies, jo manā ģimenē ir trīs princeses - mana sieva un divas apburošas meitas. Šīs meitenes man ir viss! Bet vai jūs zināt, kas man vēl patīk? Automašīnas. Es mīlu atrast aizmirstas vecas automašīnas un pēc tam darīt visu iespējamo, lai atjaunotu to sākotnējo šarmu. Neatlaidība un spītība pabeigt iesākto. Es sāku savu darba dienu ar šīm īpašībām. Un es mācu to pašu saviem kolēģiem - iet līdz galam un pabeigt iesākto līdz 100%.'
    },
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400'
  }
];

export function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-white py-24 px-8 lg:px-16">
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
            {t('contact.title')}
          </h2>
          <p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Team Members */}
        <div className="mb-20">
          <h3
            className="text-4xl mb-12 text-center"
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 600,
              color: '#1a1a1a'
            }}
          >
            {language === 'en' ? 'Our Team' : language === 'sv' ? 'Vårt Team' : 'Mūsu Komanda'}
          </h3>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-md">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4
                      className="text-2xl mb-2"
                      style={{
                        fontFamily: 'Oswald, sans-serif',
                        fontWeight: 600,
                        color: '#1a1a1a'
                      }}
                    >
                      {member.name}
                    </h4>
                    <div className="flex items-center gap-2 text-gray-700 mb-1">
                      <Phone className="w-4 h-4" />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                        {member.phone}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p className="text-sm text-gray-700 font-medium">
                    {member.responsibilities[language]}
                  </p>
                  <p className="text-sm text-gray-700 font-medium">
                    {member.languages[language]}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed italic mt-4">
                    {member.bio[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3
              className="text-3xl mb-8"
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontWeight: 600,
                color: '#1a1a1a'
              }}
            >
              {t('contact.getintouch')}
            </h3>

            <div className="space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full flex-shrink-0">
                  <Mail className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('contact.email')}</h4>
                  <p className="text-gray-600">tinalbygg@outlook.com</p>
                  <p className="text-gray-600">info@tinalbygg.se</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3
              className="text-3xl mb-8"
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontWeight: 600,
                color: '#1a1a1a'
              }}
            >
              {t('contact.form.title')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.name')} {t('contact.form.required')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors rounded-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.email')} {t('contact.form.required')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors rounded-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors rounded-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.message')} {t('contact.form.required')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors resize-none rounded-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 px-8 font-medium tracking-wide hover:bg-gray-800 transition-colors rounded-md"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
