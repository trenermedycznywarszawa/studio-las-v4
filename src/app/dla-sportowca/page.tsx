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
  title: 'Trening dla Sportowca – siła, prewencja, powrót po kontuzji | Studio Las',
  description:
    'Chcesz wrócić po urazie albo poprawić wynik? Trening siły, stabilizacji i wydolności – pod Twoją dyscyplinę i cel.',
  keywords: [
    'trening sportowca',
    'powrót po kontuzji',
    'trening wydolności',
    'przygotowanie fizyczne',
  ],
  canonical: 'https://trenermedzycznywarszawa.pl/dla-sportowca',
});

export default function DlaSportowca() {
  const heroFeatures = [
    'Powrót po kontuzji z planem, nie z przypadkiem',
    'Siła funkcjonalna pod sport (nie pod ego)',
    'Lepsza kontrola ruchu i ekonomia',
    'Monitoring progresu i jasne priorytety',
  ];

  const faqs = [
    {
      question: 'Czy trenujesz tylko „siłowo"?',
      answer:
        'Nie. Siła jest bazą, ale plan jest sport-specyficzny.',
    },
    {
      question: 'Czy pracujesz z kontuzjami?',
      answer:
        'Tak – kluczowa jest diagnostyka i rozsądna progresja.',
    },
    {
      question: 'Czy robimy wydolność/HIIT?',
      answer:
        'Tak, jeśli to ma sens w cyklu i nie rozwala regeneracji.',
    },
    {
      question: 'Czy mogę łączyć to z treningiem klubowym?',
      answer:
        'Tak – dopasowujemy objętość, żebyś nie „zajechał" układu.',
    },
    {
      question: 'Czy są testy i mierzenie progresu?',
      answer:
        'Tak – proste wskaźniki, które pokazują trend.',
    },
    {
      question: 'Czy plan obejmuje mobilność?',
      answer:
        'Tak, ale jako narzędzie do celu, nie „rozciąganie dla rozciągania".',
    },
    {
      question: 'Ile razy w tygodniu najlepiej?',
      answer:
        'Najczęściej 2x/tydz. jakościowo + Twoja baza sportowa.',
    },
    {
      question: 'Czy jest opcja online?',
      answer:
        'Tak – z planem, kontrolą i aktualizacją.',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Analiza Celu',
      description:
        'Wynik / powrót / prewencja – co jest kluczowe dla Ciebie?',
    },
    {
      number: 2,
      title: 'Dobór Priorytetów',
      description:
        '2–3 rzeczy, które „odblokują" progres',
    },
    {
      number: 3,
      title: 'Cyklizacja',
      description:
        'Trening siły + stabilizacji + kondycji (w logicznym cyklu)',
    },
    {
      number: 4,
      title: 'Monitoring',
      description:
        'Kontrola obciążeń, regeneracji i progresji',
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* HERO */}
        <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
          <Image
            src="/images/hero/outdoor.jpg"
            alt="Trening dla sportowca"
            fill
            className="object-cover -z-10"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/40 -z-10"></div>

          <div className="container-app text-white text-center py-20">
            <h1 className="heading-xl mb-4">
              Forma to nie „cisnąć więcej". Forma to trenować mądrzej.
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
              Siła, stabilizacja i przygotowanie motoryczne, które
              przekładają się na wynik i mniejsze ryzyko urazu.
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
                Sport-specyficzny • Kontrolowany powrót • Prewencja Urazów
              </p>
            </div>
          </div>
        </section>

        {/* PAS SECTION */}
        <PASSection
          problem={{
            title: 'Trenujesz dużo, a efekt stoi?',
            description:
              'Najczęściej problemem nie jest brak pracy, tylko brak struktury: zła kolejność bodźców, brak fundamentów siły/stabilizacji albo zbyt duże zmęczenie bez jakości.',
          }}
          agitation={{
            title: 'Kontuzja rzadko jest „pechem"',
            description:
              'Zwykle to suma:\n• słabych ogniw (core/biodro/łopatka),\n• braku siły w kluczowym zakresie,\n• przeciążenia i słabej regeneracji.',
          }}
          solution={{
            title: 'Rozwiązanie: fundament + specyfika + progres',
            description:
              'Najpierw stabilizacja i siła w podstawach, potem przeniesienie na dynamikę, szybkość, interwały i elementy typowe dla Twojego sportu.',
          }}
        />

        {/* PROCESS */}
        <ProcessSteps
          title="System pracy ze sportowcem"
          steps={steps}
        />

        {/* SPORTS */}
        <section className="section-padding bg-gray-50">
          <div className="container-app">
            <h2 className="heading-lg mb-12">Pracuję ze sportowcami z różnych dyscyplin:</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                'Piłka nożna',
                'Tenis',
                'Bieganie',
                'Crossfit',
                'Koszykówka',
                'Siatkówka',
                'MMA / Boks',
                'Triathlon',
              ].map((sport) => (
                <div
                  key={sport}
                  className="p-4 bg-white rounded-lg border border-primary-200 text-center font-semibold"
                >
                  {sport}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <TestimonialsMini persona="athlete" />

        {/* FAQ */}
        <FAQSection title="FAQ – najczęstsze pytania" faqs={faqs} />

        {/* FINAL CTA */}
        <section id="konsultacja" className="section-padding bg-primary-500 text-white">
          <div className="container-app text-center">
            <h2 className="heading-lg mb-6">
              Jeżeli masz cel – zróbmy plan, który go dowiezie
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Umów bezpłatną konsultację i opowiedzmy o Twoim sporcie
              i wymarzonym wyniku.
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