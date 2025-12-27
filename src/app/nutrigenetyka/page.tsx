import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import StickyCTA from '@/components/shared/StickyCTA';
import FAQSection from '@/components/sections/FAQSection';
import PASSection from '@/components/sections/PASSection';
import { generateMetadata } from '@/lib/seo';
import { CheckCircle, Phone } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Nutrigenetyka – dieta dopasowana do genów | Studio Las',
  description:
    'Chcesz wiedzieć, jaka dieta i trening działają najlepiej dla Ciebie? Nutrigenetyka + plan działania: od wyników do konkretnych nawyków.',
  keywords: [
    'nutrigenetyka',
    'test genetyczny',
    'dieta spersonalizowana',
    'plan żywienia',
  ],
  canonical: 'https://trenermedzycznywarszawa.pl/nutrigenetyka',
});

export default function Nutrigenetyka() {
  const heroFeatures = [
    'Jasne wnioski i konkretne priorytety',
    'Plan nawyków: jedzenie, regeneracja, trening',
    'Bez skrajności i bez diet „na chwilę"',
    'Dopasowanie pod cel: zdrowie / masa / redukcja / wyniki',
  ];

  const faqs = [
    {
      question: 'Czy nutrigenetyka zastępuje dietetyka?',
      answer:
        'To narzędzie, które pomaga podejmować decyzje – a największą wartością jest wdrożenie.',
    },
    {
      question: 'Czy to jest tylko dla sportowców?',
      answer:
        'Nie. Dla osób, które chcą mieć jasność i spójny plan.',
    },
    {
      question: 'Czy dostanę gotową dietę 7 dni?',
      answer:
        'Priorytetem jest strategia i nawyki. Jadłospis można oprzeć o preferencje, ale klucz to konsekwencja.',
    },
    {
      question: 'Czy to działa przy redukcji?',
      answer:
        'Tak – ale redukcja to też sen, stres, trening i nawyki.',
    },
    {
      question: 'Jak szybko zobaczę efekty?',
      answer:
        'Zależy od celu, ale często szybciej rośnie kontrola i konsekwencja niż „idealna waga".',
    },
    {
      question: 'Czy muszę robić badania krwi?',
      answer:
        'Czasem warto – zależy od kontekstu. Omówimy na konsultacji.',
    },
    {
      question: 'Czy to jest jednorazowa usługa?',
      answer:
        'Może być jednorazowa, ale najlepsze efekty daje 30–90 dni prowadzenia.',
    },
    {
      question: 'Czy robisz też trening pod wyniki nutrigenetyki?',
      answer:
        'Tak – plan może być spięty: żywienie + trening + regeneracja.',
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* HERO */}
        <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
          <Image
            src="/images/hero/studio-las-forest.jpg"
            alt="Nutrigenetyka"
            fill
            className="object-cover -z-10"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/40 -z-10"></div>

          <div className="container-app text-white text-center py-20">
            <h1 className="heading-xl mb-4">
              Koniec zgadywania. Zbuduj strategię żywienia pod siebie.
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
              Nutrigenetyka to nie „magia w PDF". To decyzje żywieniowe i
              treningowe oparte o predyspozycje – wdrożone w realnym życiu.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto text-left">
              {heroFeatures.map((feature) => (
                <div key={feature} className="flex gap-3 items-start">
                  <CheckCircle size={20} className="text-green-400 mt-1" />
                  <span className="text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#konsultacja" className="btn-primary">
                Umów bezpłatną konsultację
              </a>
              <a href="tel:+48503975998" className="btn-secondary">
                <Phone size={20} className="inline mr-2" />
                503 975 998
              </a>
            </div>

            {/* Trust Bar */}
            <div className="mt-8 text-sm">
              <p className="text-gray-200">
                Personalizacja • Nauką oparte • Praktyczne wdrożenie
              </p>
            </div>
          </div>
        </section>

        {/* PAS SECTION */}
        <PASSection
          problem={{
            title: 'Robisz „wszystko dobrze", a efekt bywa losowy',
            description:
              'Część ludzi świetnie reaguje na określone strategie, a część nie – i to nie zawsze kwestia silnej woli. Różnimy się tolerancją bodźców, stylem regeneracji, reakcją na stres i odżywianie.',
          }}
          agitation={{
            title: 'Największa pułapka: ciągłe zmiany planu',
            description:
              'Skakanie między dietami i treningami kończy się:\n• brakiem konsekwencji,\n• przeciążeniem psychiki,\n• efektem „zaczynam od poniedziałku" w pętli.',
          }}
          solution={{
            title: 'Rozwiązanie: dane → decyzje → wdrożenie',
            description:
              'Największą wartością jest interpretacja + plan wdrożenia: co ma sens, co jest tylko szumem i jak to przenieść na Twoje realne życie.',
          }}
        />

        {/* DELIVERABLES */}
        <section className="section-padding bg-gray-50">
          <div className="container-app">
            <h2 className="heading-lg mb-12">Co dostajesz w usłudze?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Test Nutrigenetyki',
                  description:
                    'Analiza genetyczna tolerancji węglowodanów, tłuszczy, laktozy, kofeiny i więcej.',
                },
                {
                  title: 'Konsultacja + Kontekst',
                  description:
                    'Zebranie wywiadu: cel, sen, stres, aktywność, historia diet.',
                },
                {
                  title: 'Raport Spersonalizowany',
                  description:
                    'Omówienie wyników prostym językiem + plan priorytetów na 30 dni.',
                },
                {
                  title: 'Strategia Długoterminowa',
                  description:
                    'Trening + żywienie + regeneracja – spięte w logiczny plan.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-padding bg-white">
          <div className="container-app">
            <h2 className="heading-lg text-center mb-12">Opinie Klientów</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                {
                  text: 'Wreszcie mam spójny plan. Bez skrajności, za to do utrzymania.',
                  name: 'Monika',
                  age: '34',
                },
                {
                  text: 'Najlepsze było to, że dostałem konkret: co zmienić teraz, a co jest drugorzędne.',
                  name: 'Kamil',
                  age: '29',
                },
              ].map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="p-6 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <p className="text-lg text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="font-semibold">
                    {testimonial.name}, {testimonial.age} lat
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection title="FAQ – najczęstsze pytania" faqs={faqs} />

        {/* FINAL CTA */}
        <section id="konsultacja" className="section-padding bg-primary-500 text-white">
          <div className="container-app text-center">
            <h2 className="heading-lg mb-6">
              Chcesz planu, który jest „Twój", a nie z internetu?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Zadbaj o siebie. Umów konsultację i sprawdź, jak wygląda
              spersonalizowany plan żywienia i treningu.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/konsultacja" className="btn-primary bg-white text-primary-500 hover:bg-gray-100">
                Umów konsultację
              </a>
              <a href="tel:+48503975998" className="btn-secondary">
                Zadzwoń
              </a>
            </div>
          </div>
        </section>
      </main>
      <StickyCTA />
      <Footer />
    </>
  );
}
