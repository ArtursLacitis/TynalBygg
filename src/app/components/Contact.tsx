import arturs_lacitis from '../../assets/arturs-lacitis.webp';
import elmars_trankalis from '../../assets/elmars-trankalis.webp';
import toms_vaseris from '../../assets/toms-vaseris.webp';
import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const PHONE_MAX_DIGITS = 15; // E.164 max length (country code + national number)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

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
      en: 'Hello! I am very lucky with my family. My children are my strength. They help me grow and become the best I can be. I always try to do everything so that my family can be proud of me. I also put 100% of myself into my work. I can react quickly, efficiently and without unnecessary stress to unexpected situations. And in the same way, I motivate my colleagues, because I believe that communication is the key to cooperation and professionally performed results.',
      sv: 'Hej! Jag har stor tur med min familj. Mina barn är min styrka. De hjälper mig att växa och bli så bra som möjligt. Jag försöker alltid göra allt för att min familj ska kunna vara stolt över mig. Också på mitt jobb satsar jag 100% mig själv. Jag kan reagera snabbt, effektivt och utan onödig stress på oväntade situationer. Och på samma sätt motiverar jag mina kollegor, eftersom jag tror att kommunikation är nyckeln till samarbete och professionellt utfört resultat.',
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
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

  const getText = (messages: { en: string; sv: string; lv: string }) =>
    messages[language];

  const validateForm = (data: ContactFormData): ContactFormErrors => {
    const errors: ContactFormErrors = {};
    const trimmedName = data.name.trim();
    const trimmedEmail = data.email.trim();
    const trimmedPhone = data.phone.trim();
    const trimmedMessage = data.message.trim();

    if (!trimmedName) {
      errors.name = getText({
        en: "Name is required.",
        sv: "Namn kr\u00e4vs.",
        lv: "V\u0101rds ir oblig\u0101ts.",
      });
    }

    if (!trimmedEmail) {
      errors.email = getText({
        en: "Email is required.",
        sv: "E-post kr\u00e4vs.",
        lv: "E-pasts ir oblig\u0101ts.",
      });
    } else if (!EMAIL_REGEX.test(trimmedEmail)) {
      errors.email = getText({
        en: "Enter a valid email address.",
        sv: "Ange en giltig e-postadress.",
        lv: "Ievadiet der\u012bgu e-pasta adresi.",
      });
    }

    if (trimmedPhone) {
      if (!/^\d+$/.test(trimmedPhone)) {
        errors.phone = getText({
          en: "Phone number can only contain digits.",
          sv: "Telefonnummer f\u00e5r bara inneh\u00e5lla siffror.",
          lv: "T\u0101lru\u0146a numurs dr\u012bkst satur\u0113t tikai ciparus.",
        });
      } else if (trimmedPhone.length > PHONE_MAX_DIGITS) {
        errors.phone = getText({
          en: `Phone number can be at most ${PHONE_MAX_DIGITS} digits.`,
          sv: `Telefonnummer f\u00e5r vara h\u00f6gst ${PHONE_MAX_DIGITS} siffror.`,
          lv: `T\u0101lru\u0146a numurs var b\u016bt ne vair\u0101k k\u0101 ${PHONE_MAX_DIGITS} cipari.`,
        });
      }
    }

    if (!trimmedMessage) {
      errors.message = getText({
        en: "Message is required.",
        sv: "Meddelande kr\u00e4vs.",
        lv: "Zi\u0146ojums ir oblig\u0101ts.",
      });
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    const trimmedFormData: ContactFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };
    const errors = validateForm(trimmedFormData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(trimmedFormData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();
      console.log("Email sent successfully:", result);

      setIsSuccessDialogOpen(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitError(
        language === "en"
          ? "Sorry, there was an error sending your message. Please try again or contact us directly."
          : language === "sv"
            ? "Tyv\u00e4rr uppstod ett fel n\u00e4r meddelandet skickades. F\u00f6rs\u00f6k igen eller kontakta oss direkt."
            : "Diem\u017e\u0113l rad\u0101s k\u013c\u016bda, nos\u016btot j\u016bsu zi\u0146ojumu. L\u016bdzu, m\u0113\u0123iniet v\u0113lreiz vai sazinieties ar mums tie\u0161i."
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
    const { name, value } = e.target;
    const nextValue =
      name === "phone"
        ? value.replace(/\D/g, "").slice(0, PHONE_MAX_DIGITS)
        : value;

    setFormData({
      ...formData,
      [name]: nextValue,
    });

    if (formErrors[name as keyof ContactFormData]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (submitError) {
      setSubmitError("");
    }
  };

  return (
    <section
      id="contact"
      className="bg-white py-40 px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            style={{
              fontFamily: "Oswald, sans-serif",
              fontWeight: 600,
              fontSize: "48px",
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
        <div className="mb-48">
          <h3
            className="mb-6 text-center"
            style={{
              fontFamily: "Oswald, sans-serif",
              fontWeight: 600,
              color: "#384A9C",
              fontSize: "28px",
              lineHeight: "1.5",
            }}
          >
            {language === "en"
              ? "Our Team"
              : language === "sv"
                ? "Vårt Team"
                : "Mūsu Komanda"}
          </h3>

          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative rounded-r-2xl rounded-l-sm border-l-4 border-[#384A9C] bg-[#F8FAFF] p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              //className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                {/* <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-[#384A9C]/70" /> */}
                <div className="mb-5 flex items-start gap-4">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-gray-200">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 pt-1">
                    <h4
                      className="mb-2 text-2xl leading-tight"
                      style={{
                        fontFamily: "Oswald, sans-serif",
                        fontWeight: 600,
                        color: "#1a1a1a",
                      }}
                    >
                      {member.name}
                    </h4>

                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1.5 text-gray-700">
                      <Phone className="h-4 w-4 text-[#384A9C]" />
                      <span
                        className="leading-none"
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
                  className="space-y-3 border-t border-gray-100 pt-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <p className="text-sm font-medium leading-6 text-gray-800">
                    {member.responsibilities[language]}
                  </p>
                  <p className="text-sm font-medium leading-6 text-gray-700">
                    {member.languages[language]}
                  </p>
                  <p className="mt-4 text-sm italic leading-7 text-gray-600">
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
                  aria-invalid={Boolean(formErrors.name)}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-900 transition-colors ${formErrors.name ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {formErrors.name && (
                  <p className="mt-2 text-sm text-red-600">{formErrors.name}</p>
                )}
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
                  autoComplete="email"
                  aria-invalid={Boolean(formErrors.email)}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-900 transition-colors ${formErrors.email ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {formErrors.email && (
                  <p className="mt-2 text-sm text-red-600">{formErrors.email}</p>
                )}
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
                  inputMode="numeric"
                  autoComplete="tel"
                  pattern="[0-9]*"
                  maxLength={PHONE_MAX_DIGITS}
                  aria-invalid={Boolean(formErrors.phone)}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-900 transition-colors ${formErrors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {formErrors.phone && (
                  <p className="mt-2 text-sm text-red-600">{formErrors.phone}</p>
                )}
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
                  aria-invalid={Boolean(formErrors.message)}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-900 transition-colors resize-none ${formErrors.message ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {formErrors.message && (
                  <p className="mt-2 text-sm text-red-600">{formErrors.message}</p>
                )}
              </div>

              {submitError && (
                <p className="text-sm text-red-600" role="alert">
                  {submitError}
                </p>
              )}

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

            <Dialog
              open={isSuccessDialogOpen}
              onOpenChange={setIsSuccessDialogOpen}
            >
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {language === "en"
                      ? "Message sent"
                      : language === "sv"
                        ? "Meddelandet skickat"
                        : "Zi\u0146ojums nos\u016bt\u012bts"}
                  </DialogTitle>
                  <DialogDescription>
                    {language === "en"
                      ? "Thank you for your inquiry! We will contact you shortly."
                      : language === "sv"
                        ? "Tack f\u00f6r ditt meddelande! Vi kontaktar dig inom kort."
                        : "Paldies par j\u016bsu zi\u0146ojumu! M\u0113s ar jums sazin\u0101simies dr\u012bzum\u0101."}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <button
                    type="button"
                    onClick={() => setIsSuccessDialogOpen(false)}
                    className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    {language === "en"
                      ? "Close"
                      : language === "sv"
                        ? "St\u00e4ng"
                        : "Aizv\u0113rt"}
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
