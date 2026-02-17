import arturs_lacitis from '../../assets/arturs-lacitis.webp';
import elmars_trankalis from '../../assets/elmars-trankalis.webp';
import toms_vaseris from '../../assets/toms-vaseris.webp';
import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projectId, publicAnonKey } from "./../../../utils/supabase/info";

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
    image: arturs_lacitis,
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
    image: elmars_trankalis,
  },
  {
    name: "Toms Vaseris",
    phone: "+46 (0) 735558427",
    responsibilities: {
      en: "Responsible for: construction, renovation, project coordination",
      sv: "Ansvar om: byggande, renovering, projektkoordinering",
      lv: "Atbildīgs par: būvniecību, renovāciju, projektu koordināciju",
    },
    languages: {
      en: "Speaks: Swedish, English, Latvian",
      sv: "Talar: svenska, engelska, lettiska",
      lv: "Runā: zviedru, angļu, latviešu",
    },
    bio: {
      en: "Hello! I have more than 10 years of experience in the construction industry. I performed the work entrusted to me with a great sense of responsibility. I spend a lot of free time improving myself. A few qualities that describe me: Persistent, passionate, optimistic, confident about yourself, focused, intrigued to acquire and improve knowledge.",
      sv: "Hej! Jag har mer än 10 års erfarenhet inom byggbranschen. Jag utför det arbete som anförtros mig med stor ansvarskänsla. Jag spenderar mycket fritid på att förbättra mig själv. Några egenskaper som beskriver mig: Uthållig, passionerad, optimistisk, självsäker, fokuserad, intresserad av att förvärva och förbättra kunskap.",
      lv: "Sveiki! Man ir vairāk nekā 10 gadu pieredze būvniecības nozarē. Es veicu man uzticēto darbu ar lielu atbildības sajūtu. Daudz brīvā laika pavadu sevi pilnveidojot. Dažas īpašības, kas mani raksturo: Neatlaidīgs, aizrautīgs, optimistisks, pārliecināts par sevi, fokusēts, ieinteresēts iegūt un pilnveidot zināšanas.",
    },
    image: toms_vaseris,
  },
];

export function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-a04047fa/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();
      console.log("Email sent successfully:", result);

      alert(
        language === "en"
          ? "Thank you for your inquiry! We will contact you shortly."
          : language === "sv"
            ? "Tack för ditt meddelande! Vi kontaktar dig inom kort."
            : "Paldies par jūsu ziņojumu! Mēs ar jums sazināsimies drīzumā."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert(
        language === "en"
          ? "Sorry, there was an error sending your message. Please try again or contact us directly."
          : language === "sv"
            ? "Tyvärr uppstod ett fel när meddelandet skickades. Försök igen eller kontakta oss direkt."
            : "Diemžēl radās kļūda, nosūtot jūsu ziņojumu. Lūdzu, mēģiniet vēlreiz vai sazinieties ar mums tieši."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="bg-white py-24 px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            style={{
              fontFamily: "Oswald, sans-serif",
              fontWeight: 600,
              color: "#384A9C",
              fontSize: "34px",
              lineHeight: "1.5",
            }}
          >
            {t("contact.title")}
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: "1.5",
            }}
          >
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Team Members */}
        <div className="mb-20">
          <h3
            className="mb-12 text-center"
            style={{
              fontFamily: "Oswald, sans-serif",
              fontWeight: 600,
              color: "#1a1a1a",
              fontSize: "22px",
              lineHeight: "1.5",
            }}
          >
            {language === "en"
              ? "Our Team"
              : language === "sv"
                ? "Vårt Team"
                : "Mūsu Komanda"}
          </h3>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
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
                        fontFamily: "Oswald, sans-serif",
                        fontWeight: 600,
                        color: "#1a1a1a",
                      }}
                    >
                      {member.name}
                    </h4>
                    <div className="flex items-center gap-2 text-gray-700 mb-1">
                      <Phone className="w-4 h-4" />
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                        }}
                      >
                        {member.phone}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="space-y-3"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
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
              className="mb-8"
              style={{
                fontFamily: "Oswald, sans-serif",
                fontWeight: 600,
                color: "#1a1a1a",
                fontSize: "22px",
                lineHeight: "1.5",
              }}
            >
              {t("contact.getintouch")}
            </h3>

            <div
              className="space-y-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full flex-shrink-0">
                  <Mail className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h4
                    className="font-semibold text-gray-900 mb-1"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.5",
                    }}
                  >
                    {t("contact.email")}
                  </h4>
                  <p
                    className="text-gray-600"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.5",
                    }}
                  >
                    tinalbygg@outlook.com
                  </p>
                  <p
                    className="text-gray-600"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.5",
                    }}
                  >
                    info@tinalbygg.se
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3
              className="mb-8"
              style={{
                fontFamily: "Oswald, sans-serif",
                fontWeight: 600,
                color: "#1a1a1a",
                fontSize: "22px",
                lineHeight: "1.5",
              }}
            >
              {t("contact.form.title")}
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.form.name")}{" "}
                  {t("contact.form.required")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.form.email")}{" "}
                  {t("contact.form.required")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.form.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.form.message")}{" "}
                  {t("contact.form.required")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 px-8 font-medium tracking-wide hover:bg-gray-800 transition-colors rounded-md"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? t("contact.form.submitting")
                  : t("contact.form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
