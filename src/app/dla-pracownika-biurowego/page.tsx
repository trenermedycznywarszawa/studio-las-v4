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
  title: 'Trening dla Biurowca – plecy, postura, energia | Studio Las',
  description:
    'Siedzisz 8h dziennie? Zadbaj o plecy, szyję i postawę. Trening + proste nawyki, które realnie zmniejszają ból i napięcie.',
  keywords: [
    'trening dla biurowca',
    'trening pleców',
    'profilaktyka bólu pleców',
    'postura',
  ],
  canonical: 'https://trenermedzycznywarszawa.pl/dla-pracownika-biurowego',
});

export default function DlaPracownikaBiurowego() {
  const heroFeatures = [
    'Mniej napięcia w karku i barkach',
    'Mocniejszy core i stabilniejsze plecy',
    'Lepsza postura bez „spinania się"',
    'Plan, który da się utrzymać (a nie 3 dni motywacji)',
  ];

  const faqs = [
    {
      question: 'Czy muszę trenować 4x w tygodniu?',
      answer:
        'Nie. Skutecznie jest już 2x/tydz. + krótka rutyna.',
    },
    {
      question: 'Czy od siłowni nie będzie gorzej?',
      answer:
        'Źle dobrany trening może szkodzić. Dobrze dobrany – buduje odporność.',
    },
    {
      question: 'Ile trwa trening?',
      answer: 'Zwykle 50–60 minut.',
    },
    {
      question: 'Czy robimy ćwiczenia na kręgosłup?',
      answer:
        'Robimy ćwiczenia, które poprawiają stabilizację i kontrolę ruchu – to realnie pomaga kręgosłupowi.',
    },
    {
      question: 'Czy mogę trenować przy stresie i słabym śnie?',
      answer:
        'Tak, ale mądrze dobieramy objętość i intensywność.',
    },
    {
      question: 'Czy jest plan na delegacje/wyjazdy?',
      answer:
        'Tak – wersje „hotel/biuro" bez sprzętu.',
    },
    {
      question: 'Czy dieta jest konieczna?',
      answer:
        'Nie zawsze. Najpierw ruch i fundamenty, potem dopiero optymalizacja.',
    },
    {
      question: 'Czy pracujesz też z bólem promieniującym?',
      answer:
        'Wymaga to dokładnego wywiadu i rozsądnej progresji – konsultacja wyjaśnia, co i jak.',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Diagnoza',
      description:
        'Analiza postury, mobilności i ograniczeń ruchowych.',
    },
    {
      number: 2,
      title: 'Plan działania',
      description:
        'Prosty, logiczny system ćwiczeń (2–3 priorytety).',
    },
    {
      number: 3,
      title: 'Treningi',
      description:
        'Wzorce: przysiad, hinge, pchanie, ciągnięcie, core.',
    },
    {
      number: 4,
      title: 'Nawyki',
      description:
        'Krótkie protokoły na „kark/plecy po biurze" do domu.',
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* HERO */}
        <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
          <Image
            src="/images/hero/damian-hero2.jpg"
            alt="Trening dla biurowca"
            fill
            className="object-cover -z-10"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/40 -z-10"></div>

          <div className="container-app text-white text-center py-20">
            <h1 className="heading-xl mb-4">
              Plecy od siedzenia? Zrób z ciała „sprzęt do życia", nie do bólu.
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
              Trening siłowy i funkcjonalny dla ludzi, którzy pracują głową –
              i chcą mieć energię po pracy, a nie tylko „przetrwać dzień".
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
                Kameralnie • Indywidualnie • Trening oparty na diagnostyce
              </p>
            </div>
          </div>
        </section>

        {/* PAS SECTION */}
        <PASSection
          problem={{
            title: 'Ból pleców to nie „taka praca"',
            description:
              'To sygnał: ciało jest przeciążone i niedotrenowane. Siedzenie nie jest jedynym problemem – problemem jest brak bodźca, który buduje odporność na siedzenie.',
          }}
          agitation={{
            title: 'Jeśli nic nie zmienisz, ciało samo „ustawi priorytety"',
            description:
              'Zwykle tak:\n• coraz mniej ruchu po pracy,\n• coraz więcej sztywności rano,\n• coraz większa frustracja, bo „niby nic nie robię, a boli".',
          }}
          solution={{
            title: 'Rozwiązanie: wzmocnić fundamenty + zdjąć napięcie tam, gdzie trzeba',
            description:
              'W praktyce: prosty trening siłowy + mobilność + oddech + higiena ruchu. Bez cudów, za to skutecznie i przewidywalnie.',
          }}
        />

        {/* PROCESS */}
        <ProcessSteps
          title="Co robimy na treningach?"
          steps={steps}
        />

        {/* BENEFITS */}
        <section className="section-padding bg-gray-50">
          <div className="container-app">
            <h2 className="heading-lg mb-12">Efekty działania</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Lepsza Postura',
                  description: 'Mniej bólu karku, bardziej pewna sylwetka',
                },
                {
                  title: 'Więcej Energii',
                  description: 'Po pracy czujesz się wzmocniony, nie zmęczony',
                },
                {
                  title: 'Odporność',
                  description: 'Ciało lepiej wytrzymuje przeciążenia',
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
        <TestimonialsMini persona="office" />

        {/* FAQ */}
        <FAQSection title="FAQ – najczęstsze pytania" faqs={faqs} />

        {/* FINAL CTA */}
        <section id="konsultacja" className="section-padding bg-primary-500 text-white">
          <div className="container-app text-center">
            <h2 className="heading-lg mb-6">
              Zamiast „naprawiać plecy" co 2 tygodnie – zbuduj je na lata
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Umów bezpłatną konsultację i sprawdź, czy trening w Studio Las
              to to czego szukasz.
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