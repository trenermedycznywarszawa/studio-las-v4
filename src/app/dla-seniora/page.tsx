import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import StickyCTA from '@/components/shared/StickyCTA';
import FAQSection from '@/components/sections/FAQSection';
import PASSection from '@/components/sections/PASSection';
import ProcessSteps from '@/components/sections/ProcessSteps';
import TestimonialsMini from '@/components/sections/TestimonialsMini';
import { generateMetadata } from '@/lib/seo';
import { CheckCircle, Phone } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Trening dla Seniora – bezpiecznie, bez bólu | Studio Las',
  description:
    'Bezpieczny trening medyczny dla seniorów: mobilność, równowaga, plecy i kolana. Kameralne studio, indywidualny plan, realne efekty.',
  keywords: [
    'trening dla seniorów',
    'trening medyczny',
    'trening dla osób 60+',
    'rehabilitacja pleców',
  ],
  canonical: 'https://trenermedzycznywarszawa.pl/dla-seniora',
});

export default function DlaSeniora() {
  const heroFeatures = [
    'Mniej bólu pleców i sztywności po siedzeniu',
    'Stabilniejsze kolana i biodra, lepsza równowaga',
    'Więcej siły do schodów, spacerów i codziennych czynności',
    'Plan dopasowany do stanu zdrowia i możliwości',
  ];

  const faqs = [
    {
      question: 'Czy muszę mieć „kondycję", żeby zacząć?',
      answer:
        'Nie. Start dopasowany jest do aktualnych możliwości i bezpieczeństwa.',
    },
    {
      question: 'Czy trening jest bezpieczny przy bólu pleców/kolan?',
      answer:
        'Tak – właśnie wtedy trening jest najważniejszy, ale musi być właściwie zaprogramowany.',
    },
    {
      question: 'Ile razy w tygodniu trenować?',
      answer: 'Najczęściej 1–2x/tydz. + krótka rutyna domowa (10–15 min).',
    },
    {
      question: 'Czy to jest rehabilitacja?',
      answer:
        'To trening medyczny/funkcjonalny – pracujemy nad przyczyną, a nie „zaklejamy" objawy.',
    },
    {
      question: 'Czy ćwiczenia są ciężkie?',
      answer:
        'Są mądre. Czasem lekkie, czasem wymagające – ale zawsze kontrolowane.',
    },
    {
      question: 'Kiedy zobaczę pierwsze efekty?',
      answer:
        'Często szybciej czujesz różnicę w ruchu niż w wyglądzie – już po kilku tygodniach.',
    },
    {
      question: 'Czy muszę rezygnować ze spacerów?',
      answer:
        'Nie – zwykle rozsądny spacer jest wsparciem, a nie przeszkodą.',
    },
    {
      question: 'Co jeśli mam długą przerwę od treningu?',
      answer: 'To normalne. Od tego jest progresja i prosty plan.',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Konsultacja + wywiad ruchowy',
      description:
        'Sprawdzamy ograniczenia, ból, cele i styl życia.',
    },
    {
      number: 2,
      title: 'Plan minimum',
      description:
        'Proste, skuteczne kroki (wystarczą 2–3 priorytety).',
    },
    {
      number: 3,
      title: 'Treningi 1:1',
      description:
        'Bez tłumu, bez presji, pełna kontrola techniki.',
    },
    {
      number: 4,
      title: 'Utrwalenie efektów',
      description:
        'Ćwiczenia domowe (krótkie), nawyki, regeneracja.',
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* HERO */}
        <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
          <Image
            src="/images/hero/damian-about.jpg"
            alt="Trening dla seniora"
            fill
            className="object-cover -z-10"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/40 -z-10"></div>

          <div className="container-app text-white text-center py-20">
            <h1 className="heading-xl mb-4">
              Sprawność po 50/60/70? Tak – bezpiecznie i krok po kroku.
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
              Trening medyczny i funkcjonalny, który zmniejsza ból, poprawia
              równowagę i daje pewność ruchu w codziennym życiu.
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
                Kameralnie • Indywidualnie • Trening oparty na diagnostyce i
                progresji
              </p>
            </div>
          </div>
        </section>

        {/* PAS SECTION */}
        <PASSection
          problem={{
            title: 'Kiedy ciało mówi „stop", najgorsze jest… przestać się ruszać',
            description:
              'Ból pleców, bioder, karku czy kolan często powoduje, że pojawia się lęk przed ruchem. W efekcie ciało sztywnieje jeszcze bardziej, spada siła i równowaga, a codzienne czynności zaczynają kosztować coraz więcej energii.',
          }}
          agitation={{
            title: '„Odpoczynek" bywa pułapką',
            description:
              'Im mniej ruchu, tym szybciej spada sprawność. A wtedy:\n• trudniej wejść po schodach i utrzymać tempo spaceru,\n• łatwiej o przeciążenia (bo ciało „nie trzyma" stabilizacji),\n• trudniej wrócić do formy, bo start jest coraz niżej.',
          }}
          solution={{
            title: 'Rozwiązanie: trening, który odbudowuje fundamenty',
            description:
              'Tu nie chodzi o „cisnąć" – chodzi o mądre wzmacnianie: mobilność, stabilizacja, siła funkcjonalna i oddech. Bez chaosu, bez ryzyka, z progresją dobraną do Ciebie.',
          }}
        />

        {/* PROCESS */}
        <ProcessSteps
          title="Jak wygląda pierwszy miesiąc pracy?"
          steps={steps}
        />

        {/* FOR WHOM */}
        <section className="section-padding bg-gray-50">
          <div className="container-app">
            <h2 className="heading-lg mb-12">Dla kogo jest ta ścieżka?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">✓ Dla Ciebie, jeśli:</h3>
                <ul className="space-y-3">
                  {[
                    'Chcesz poruszać się bez lęku',
                    'Wzmocnić plecy i nogi',
                    'Poprawić równowagę',
                    'Wrócić do spacerów / aktywności',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <TestimonialsMini persona="senior" />

        {/* FAQ */}
        <FAQSection title="FAQ – najczęstsze pytania" faqs={faqs} />

        {/* FINAL CTA */}
        <section id="konsultacja" className="section-padding bg-primary-500 text-white">
          <div className="container-app text-center">
            <h2 className="heading-lg mb-6">
              Zrób pierwszy krok – bez presji
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Umów bezpłatną konsultację i sprawdź, jak może wyglądać
              bezpieczny plan dla Twoich pleców i stawów.
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